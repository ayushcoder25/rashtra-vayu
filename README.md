# Rashtra Vayu — National Air Intelligence

Personalized weather & AQI health advisory for India.  
**Live demo:** https://rashtravayu.netlify.app/

---

## Repository layout (by technology)

```
rashtra-vayu/
├── index.html                 # HTML — page shell
├── css/
│   └── styles.css             # CSS — custom styles & animations
├── js/
│   └── app.jsx                # JavaScript (React 18 JSX) — full UI & logic
├── logo.png                   # Brand logo
├── netlify.toml               # Netlify config
├── vercel.json                # Vercel config
└── backend/
    ├── node/
    │   ├── server.js          # Node.js / Express (optional API server)
    │   └── package.json       # Node dependencies
    └── python/
        ├── app.py             # Python HTTP server (optional)
        ├── run_demo.py        # Local launcher
        └── requirements.txt   # Python dependencies
```

| Layer | Language / tech | Main file(s) |
|--------|------------------|--------------|
| Markup | **HTML** | `index.html` |
| Styling | **CSS** (+ Tailwind CDN) | `css/styles.css` |
| App logic | **JavaScript (React JSX)** | `js/app.jsx` |
| Optional API | **Node.js** | `backend/node/server.js` |
| Optional API | **Python** | `backend/python/app.py` |

Frontend needs **no build step** — React + Babel load from CDN.

---

## Run locally

**Static (simplest)**  
Open `index.html` via a local server (required for `js/app.jsx` to load):

```bash
# Python
cd rashtra-vayu
python3 -m http.server 8080
# open http://localhost:8080
```

**Node backend (optional)**  
```bash
cd backend/node && npm install && node server.js
```

**Python backend (optional)**  
```bash
cd backend/python && pip install -r requirements.txt && python app.py
```

---

## Deploy free (Netlify)

1. Push this repo to GitHub **or** zip the folder.
2. [app.netlify.com/drop](https://app.netlify.com/drop) → drag the **root** folder (`index.html` at top level).
3. Site is live on `*.netlify.app`.

Custom domain example: `rashtravayu.knights.in` → add CNAME in DNS to your Netlify site.

---

## Data sources

- Weather & AQI: [Open-Meteo](https://open-meteo.com)
- AQI scale: US EPA
- Advisory: on-device clinical rules (+ optional Groq LLM)

---

## License

Hackathon / educational project. Not an official government service.
