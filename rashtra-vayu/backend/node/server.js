// AirWell Production Server (Node.js / Express)
// Ready to deploy on Render, Railway, Heroku, Fly.io, or VPS
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend assets
app.use(express.static(path.join(__dirname)));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', app: 'AirWell', timestamp: new Date().toISOString() });
});

// Optional proxy endpoints to keep API keys secure on server
app.post('/api/groq-advisory', async (req, res) => {
  const { profile, weather, aqiData } = req.body;
  const apiKey = process.env.GROQ_API_KEY || req.headers.authorization?.replace('Bearer ', '');

  if (!apiKey) {
    return res.status(400).json({ error: 'No GROQ_API_KEY provided' });
  }

  const prompt = `You are a public health physician. Given the environmental telemetry, synthesize a 3-4 sentence plain-English health advisory customized to the patient profile. Conclude with one practical action item.
Profile: Age: ${profile.ageGroup}, Condition: ${profile.healthCondition}, Occupation: ${profile.occupation}
Conditions: Temp ${weather.temperature_2m}°C, AQI ${aqiData.us_aqi}, PM2.5 ${aqiData.pm2_5} ug/m3.`;

  try {
    const fetch = (await import('node-fetch')).default;
    const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.3,
        max_tokens: 220
      })
    });
    const data = await resp.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fallback to index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🌬️ AirWell server running on port ${PORT}`);
});
