    const { useState, useEffect, useRef, useCallback } = React;

    // --- SVG ICONS ---
    function Icon({ name, className = "w-5 h-5", ...props }) {
      switch (name) {
        case 'wind':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" /><path d="M9.6 4.6A2 2 0 1 1 11 8H2" /><path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
            </svg>
          );
        case 'droplet':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          );
        case 'sun':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          );
        case 'cloud':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
            </svg>
          );
        case 'cloud-sun':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <path d="M12 2v2M4.93 4.93l1.41 1.41M20 12h2M19.07 4.93l-1.41 1.41" /><path d="M15.5 13a4 4 0 0 0-7.3-1.6 4.5 4.5 0 0 0-4.2 4.6 4.5 4.5 0 0 0 4.5 4h10a4 4 0 0 0 .5-8z" />
            </svg>
          );
        case 'cloud-rain':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <path d="M16 13a4 4 0 0 0-7.3-1.6 4.5 4.5 0 0 0-4.2 4.6 4.5 4.5 0 0 0 4.5 4h9a3.5 3.5 0 0 0 .5-7z" /><path d="M8 19v2M12 19v2M16 19v2" />
            </svg>
          );
        case 'cloud-fog':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <path d="M4 14h16M4 18h16M7 10h10" /><path d="M17.5 10a4.5 4.5 0 0 0-8.5-1.5A5 5 0 0 0 4 13h16a4 4 0 0 0-2.5-3z" />
            </svg>
          );
        case 'zap':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          );
        case 'snowflake':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <line x1="12" y1="2" x2="12" y2="22" /><line x1="20" y1="7" x2="4" y2="17" /><line x1="4" y1="7" x2="20" y2="17" />
            </svg>
          );
        case 'shield':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          );
        case 'heart-pulse':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M3.22 12H9.5l1.5-3 2 6.5 1.5-3.5h6.28" />
            </svg>
          );
        case 'lungs':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <path d="M12 3v13M9 6a3 3 0 0 0-3 3c0 4 2 8 6 9M15 6a3 3 0 0 1 3 3c0 4-2 8-6 9" /><path d="M6 13a4 4 0 0 0 4 4M18 13a4 4 0 0 1-4 4" />
            </svg>
          );
        case 'hard-hat':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <path d="M2 18h20v-2a8 8 0 0 0-16 0M4 16v-3a8 8 0 0 1 16 0v3M12 4v4" />
            </svg>
          );
        case 'user-check':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" />
            </svg>
          );
        case 'map-pin':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
          );
        case 'navigation':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
          );
        case 'search':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          );
        case 'activity':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          );
        case 'info':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          );
        case 'chevron-down':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          );
        case 'chevron-up':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <polyline points="18 15 12 9 6 15" />
            </svg>
          );
        case 'volume-2':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          );
        case 'copy':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          );
        case 'check':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <polyline points="20 6 9 17 4 12" />
            </svg>
          );
        case 'sliders':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
            </svg>
          );
        case 'sparkles':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
            </svg>
          );
        case 'close':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          );
        case 'refresh':
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          );
        default:
          return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <circle cx="12" cy="12" r="10" />
            </svg>
          );
      }
    }

    // --- DATA & PRESETS ---
    const CITY_PRESETS = [
      {
        id: "bhopal",
        name: "Bhopal",
        region: "Madhya Pradesh",
        country: "India",
        lat: 23.2599,
        lon: 77.4126,
        temperature: 21,
        feelsLike: 22,
        humidity: 95,
        windSpeed: 15,
        weatherCode: 61,
        weatherDesc: "Light rain",
        aqi: 101,
        aqiBand: "Unhealthy for Sensitive Groups",
        pm25: 35.0,
        pm10: 30.0,
        ozone: 33.0,
        dominantPollutant: "PM2.5",
        advisoryText: "Current US AQI is around 101 (Poor) with PM2.5 near 35 µg/m³ — aligned with aqi.in station readings. Sensitive groups (asthma, heart, children, elderly) should limit prolonged outdoor activity and keep rescue medication handy.",
        severity: "Moderate",
        whyFactors: [
          { factor: "Health Condition: Asthma", impact: "PM2.5 around 35 µg/m³ can still trigger airway irritation in sensitive individuals." },
          { factor: "AQI: 101 (Poor / Sensitive Groups)", impact: "Matches typical aqi.in live readings for Bhopal under current conditions." },
          { factor: "High Humidity + recent rain", impact: "Moisture keeps residual particles near the surface longer." }
        ]
      },
      {
        id: "delhi",
        name: "New Delhi",
        region: "Delhi",
        country: "India",
        lat: 28.6139,
        lon: 77.2090,
        temperature: 26,
        feelsLike: 28,
        humidity: 75,
        windSpeed: 9,
        weatherCode: 3,
        weatherDesc: "Overcast",
        aqi: 128,
        aqiBand: "Unhealthy for Sensitive Groups",
        pm25: 57.6,
        pm10: 58.0,
        ozone: 29.0,
        dominantPollutant: "PM2.5",
        advisoryText: "Current US AQI is elevated due to fine particulate matter. People with asthma, heart conditions or outdoor occupations should reduce prolonged outdoor activity and consider an N95 mask if they must be outside for long periods.",
        severity: "High",
        whyFactors: [
          { factor: "AQI: 128 (Sensitive Groups)", impact: "Above the level where sensitive individuals begin to experience symptoms." },
          { factor: "PM2.5: 57.6 µg/m³", impact: "Roughly 4× the WHO 24-hour guideline." },
          { factor: "Urban emissions + low wind", impact: "Limited dispersion keeps particles near ground level." }
        ]
      },
      {
        id: "london",
        name: "London",
        region: "England",
        country: "United Kingdom",
        lat: 51.5074,
        lon: -0.1278,
        temperature: 18,
        feelsLike: 17,
        humidity: 72,
        windSpeed: 19,
        weatherCode: 51,
        weatherDesc: "Light drizzle",
        aqi: 42,
        aqiBand: "Good",
        pm25: 8.5,
        pm10: 16.0,
        ozone: 24.0,
        dominantPollutant: "Ozone",
        advisoryText: "Air quality is pristine across the metropolitan area following light marine rain. Outdoor activities, cycling, and ventilation are safe and encouraged for all health profiles. Slight dampness requires mild layer warmth for elderly residents.",
        severity: "Low",
        whyFactors: [
          { factor: "AQI: 42 (Good)", impact: "Air pollution poses little or no risk to public health." },
          { factor: "Clean Rain Wash", impact: "Precipitation has scavenged airborne particulates from the lower troposphere." }
        ]
      },
      {
        id: "newyork",
        name: "New York",
        region: "New York",
        country: "United States",
        lat: 40.7128,
        lon: -74.0060,
        temperature: 24,
        feelsLike: 25,
        humidity: 61,
        windSpeed: 14,
        weatherCode: 1,
        weatherDesc: "Mainly clear",
        aqi: 78,
        aqiBand: "Moderate",
        pm25: 22.0,
        pm10: 38.0,
        ozone: 51.0,
        dominantPollutant: "Ozone",
        advisoryText: "Acceptable air quality for the general public, but ground-level ozone is climbing in sunlit corridors. Sensitive individuals with chronic asthma or COPD might experience mild irritation during prolonged peak-afternoon cardio exercises.",
        severity: "Moderate",
        whyFactors: [
          { factor: "AQI: 78 (Moderate)", impact: "Air quality is acceptable; however, a small number of unusually sensitive individuals may feel mild symptoms." },
          { factor: "Dominant: Ozone", impact: "Photochemical reaction between vehicle exhaust and sunlight peaks between 2 PM and 6 PM." }
        ]
      },
      {
        id: "tokyo",
        name: "Tokyo",
        region: "Tokyo",
        country: "Japan",
        lat: 35.6762,
        lon: 139.6503,
        temperature: 22,
        feelsLike: 22,
        humidity: 64,
        windSpeed: 13,
        weatherCode: 0,
        weatherDesc: "Clear sky",
        aqi: 35,
        aqiBand: "Good",
        pm25: 7.2,
        pm10: 14.5,
        ozone: 28.0,
        dominantPollutant: "Ozone",
        advisoryText: "Optimal conditions for outdoor sports, walking, and open-window home ventilation. Pollutant levels remain well below critical health thresholds. Ideal conditions for sensitive and elderly groups.",
        severity: "Low",
        whyFactors: [
          { factor: "AQI: 35 (Good)", impact: "Minimal particulate burden; lung function will remain uncompromised." }
        ]
      }
    ];

    const COMPARISON_PERSONAS = [
      {
        id: "asthma",
        title: "Asthma Patient",
        tag: "High Sensitivity",
        icon: "lungs",
        color: "rose",
        profile: { ageGroup: "Adult (20-59)", healthCondition: "Asthma", occupation: "Desk job (mostly indoors)" },
        getAdvisory: (aqi, temp) => {
          if (aqi > 150) return "High risk: Keep fast-acting inhaler on person. Avoid outdoor walking; keep indoor windows closed.";
          if (aqi > 100) return "Elevated risk: Restrict outdoor aerobic activity. Carry rescue inhaler if stepping out.";
          if (aqi > 50) return "Moderate risk: Tolerable outdoors, but avoid heavy traffic corridors during peak rush hour.";
          return "Low risk: Excellent air quality; normal outdoor routine safe without bronchial concern.";
        },
        getSeverity: (aqi) => (aqi > 100 ? "High" : aqi > 50 ? "Moderate" : "Low")
      },
      {
        id: "outdoor",
        title: "Outdoor Worker",
        tag: "High Exposure",
        icon: "hard-hat",
        color: "amber",
        profile: { ageGroup: "Adult (20-59)", healthCondition: "None", occupation: "Outdoor worker" },
        getAdvisory: (aqi, temp) => {
          if (aqi > 150) return "Urgent: Wear well-fitted N95 mask on site. Schedule 15-minute indoor recovery breaks every 90 mins.";
          if (aqi > 100) return "Caution: 8+ hour exposure accumulates heavy particulate load. Hydrate frequently and wear dust protection.";
          if (aqi > 50) return "Moderate: Prolonged shift exposure is acceptable, but take water breaks and monitor afternoon ozone.";
          return "Low risk: Great working conditions; no restriction required on physical labor.";
        },
        getSeverity: (aqi) => (aqi > 150 ? "High" : aqi > 80 ? "Moderate" : "Low")
      },
      {
        id: "healthy",
        title: "Healthy Adult",
        tag: "Baseline Profile",
        icon: "user-check",
        color: "teal",
        profile: { ageGroup: "Adult (20-59)", healthCondition: "None", occupation: "Desk job (mostly indoors)" },
        getAdvisory: (aqi, temp) => {
          if (aqi > 200) return "Significant smog: Reduce outdoor jogging; switch to gym or indoor workouts.";
          if (aqi > 100) return "Mild impact: Unlikely to suffer acute symptoms, but long endurance runs may cause throat dryness.";
          if (aqi > 50) return "Good: Normal outdoor lifestyle, commutes, and recreation are completely safe.";
          return "Optimal: Pristine air; ideal for outdoor running, cycling, and natural room ventilation.";
        },
        getSeverity: (aqi) => (aqi > 200 ? "High" : aqi > 100 ? "Moderate" : "Low")
      }
    ];

    const PAST_7_DAYS_TREND = [
      { day: "Mon", date: "Aug 29", temp: 28, aqi: 75, band: "Moderate", advisory: "Slight particulate haze; asthmatics kept workouts indoors." },
      { day: "Tue", date: "Aug 30", temp: 30, aqi: 92, band: "Moderate", advisory: "Afternoon ozone spike; sensitive groups advised to rest early." },
      { day: "Wed", date: "Aug 31", temp: 32, aqi: 138, band: "Unhealthy for Sensitive Groups", advisory: "Stagnant winds pushed PM2.5 up. Outdoor workers wore respirators." },
      { day: "Thu", date: "Sep 01", temp: 31, aqi: 155, band: "Unhealthy", advisory: "Heavy traffic & dust; school outdoor sports were postponed." },
      { day: "Fri", date: "Sep 02", temp: 29, aqi: 124, band: "Unhealthy for Sensitive Groups", advisory: "Light breeze provided partial relief; evening strolls cautioned." },
      { day: "Sat", date: "Sep 03", temp: 27, aqi: 68, band: "Moderate", advisory: "Scattered shower washed out particulates; clean air index." },
      { day: "Sun (Today)", date: "Sep 04", temp: 31, aqi: 142, band: "Unhealthy for Sensitive Groups", advisory: "Current customized advisory active for your selected profile." }
    ];

    const WEATHER_CODE_MAP = {
      0: { label: "Clear sky", icon: "sun" },
      1: { label: "Mainly clear", icon: "sun" },
      2: { label: "Partly cloudy", icon: "cloud-sun" },
      3: { label: "Overcast", icon: "cloud" },
      45: { label: "Foggy / Hazy", icon: "cloud-fog" },
      48: { label: "Depositing rime fog", icon: "cloud-fog" },
      51: { label: "Light drizzle", icon: "cloud-rain" },
      53: { label: "Moderate drizzle", icon: "cloud-rain" },
      61: { label: "Slight rain", icon: "cloud-rain" },
      63: { label: "Moderate rain", icon: "cloud-rain" },
      65: { label: "Heavy rain", icon: "cloud-rain" },
      71: { label: "Slight snow", icon: "snowflake" },
      80: { label: "Rain showers", icon: "cloud-rain" },
      95: { label: "Thunderstorm", icon: "zap" },
    };

    function describeWeatherCode(code) {
      return WEATHER_CODE_MAP[code] || { label: "Variable conditions", icon: "cloud-sun" };
    }

    function getAQIBand(aqi) {
      if (aqi == null) return { name: "Unknown", color: "#64748B", bg: "bg-slate-100", text: "text-slate-700", border: "border-slate-300", badgeBg: "bg-slate-400" };
      if (aqi <= 50) return { name: "Good", color: "#10B981", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", badgeBg: "bg-emerald-500", label: "0-50" };
      if (aqi <= 100) return { name: "Moderate", color: "#F59E0B", bg: "bg-amber-50", text: "text-amber-800", border: "border-amber-200", badgeBg: "bg-amber-500", label: "51-100" };
      if (aqi <= 150) return { name: "Unhealthy for Sensitive Groups", color: "#F97316", bg: "bg-orange-50", text: "text-orange-800", border: "border-orange-200", badgeBg: "bg-orange-500", label: "101-150" };
      if (aqi <= 200) return { name: "Unhealthy", color: "#EF4444", bg: "bg-rose-50", text: "text-rose-800", border: "border-rose-200", badgeBg: "bg-rose-500", label: "151-200" };
      if (aqi <= 300) return { name: "Very Unhealthy", color: "#8B5CF6", bg: "bg-purple-50", text: "text-purple-800", border: "border-purple-200", badgeBg: "bg-purple-600", label: "201-300" };
      return { name: "Hazardous", color: "#881337", bg: "bg-rose-950/10", text: "text-rose-950", border: "border-rose-900", badgeBg: "bg-rose-950", label: "301+" };
    }

    // Official US EPA AQI breakpoints (24-h for PM, 8-h/1-h for O3). Returns the highest (worst) sub-index.
    function calculateUSAQI(pm25, pm10, ozone) {
      const breakpoints = {
        pm25: [ // µg/m³
          [0.0, 12.0, 0, 50], [12.1, 35.4, 51, 100], [35.5, 55.4, 101, 150],
          [55.5, 150.4, 151, 200], [150.5, 250.4, 201, 300], [250.5, 350.4, 301, 400], [350.5, 500.4, 401, 500]
        ],
        pm10: [
          [0, 54, 0, 50], [55, 154, 51, 100], [155, 254, 101, 150],
          [255, 354, 151, 200], [355, 424, 201, 300], [425, 504, 301, 400], [505, 604, 401, 500]
        ],
        ozone: [ // µg/m³ approx (converted from ppb; Open-Meteo gives µg/m³)
          [0, 108, 0, 50], [109, 140, 51, 100], [141, 170, 101, 150],
          [171, 210, 151, 200], [211, 400, 201, 300]
        ]
      };

      function linearAQI(conc, bps) {
        if (conc == null || isNaN(conc)) return 0;
        for (const [cLow, cHigh, iLow, iHigh] of bps) {
          if (conc >= cLow && conc <= cHigh) {
            return Math.round(((iHigh - iLow) / (cHigh - cLow)) * (conc - cLow) + iLow);
          }
        }
        if (conc > bps[bps.length - 1][1]) return 500;
        return 0;
      }

      const aqiPm25 = linearAQI(pm25, breakpoints.pm25);
      const aqiPm10 = linearAQI(pm10, breakpoints.pm10);
      const aqiO3 = linearAQI(ozone, breakpoints.ozone);
      const finalAqi = Math.max(aqiPm25, aqiPm10, aqiO3, 0);
      let dominant = "PM2.5";
      if (aqiPm10 >= aqiPm25 && aqiPm10 >= aqiO3) dominant = "PM10";
      else if (aqiO3 >= aqiPm25 && aqiO3 >= aqiPm10) dominant = "Ozone";
      return { aqi: finalAqi, dominant, sub: { pm25: aqiPm25, pm10: aqiPm10, ozone: aqiO3 } };
    }

    // --- HEALTH ADVISORY SYNTHESIS ENGINE ---
    function synthesizePersonalizedAdvisory(profile, weather, aqiData) {
      const { ageGroup, healthCondition, occupation } = profile;
      const temp = Math.round(weather.temperature_2m ?? weather.temperature ?? 25);
      const feelsLike = Math.round(weather.apparent_temperature ?? weather.feelsLike ?? temp);
      const aqi = aqiData.us_aqi ?? aqiData.aqi ?? 50;
      const pm25 = aqiData.pm2_5 ?? aqiData.pm25 ?? 15;
      const humidity = weather.relative_humidity_2m ?? weather.humidity ?? 50;
      const band = getAQIBand(aqi).name;

      let severity = "Low";
      const isVulnerableCondition = ["Asthma", "Heart condition", "COPD / lung condition", "Pregnant"].includes(healthCondition);
      const isHighExposure = ["Outdoor worker", "Delivery / commutes a lot"].includes(occupation);
      const isVulnerableAge = ["Child (0-12)", "Senior (60+)"].includes(ageGroup);

      if (aqi > 200) {
        severity = "High";
      } else if (aqi > 150) {
        severity = isVulnerableCondition || isHighExposure || isVulnerableAge ? "High" : "Moderate";
      } else if (aqi > 100) {
        severity = isVulnerableCondition || (isHighExposure && isVulnerableAge) ? "High" : (isHighExposure || isVulnerableAge ? "Moderate" : "Low");
      } else if (aqi > 50) {
        severity = (isVulnerableCondition && isHighExposure) ? "Moderate" : "Low";
      }

      let adviceSentences = [];
      let whyFactors = [];

      if (healthCondition === "Asthma") {
        if (aqi > 150) {
          adviceSentences.push(`High particulate levels (${pm25} µg/m³) pose an immediate threat of acute bronchial airway inflammation and airway hyperresponsiveness.`);
          adviceSentences.push(`Keep your rescue bronchodilator (albuterol inhaler) on your person at all times, and avoid any outdoor physical activity.`);
        } else if (aqi > 100) {
          adviceSentences.push(`Air quality is in the sensitive threshold. Elevated PM2.5 can irritate lung airways, triggering coughing, wheezing, and shortness of breath.`);
          adviceSentences.push(`Pre-medicate before mandatory outings, avoid major highways during rush hour, and favor indoor spaces with HEPA filtration.`);
        } else if (aqi > 50) {
          adviceSentences.push(`Air is moderately clean, but micro-particulates combined with ${temp}°C temperatures may cause mild chest tightness during vigorous jogging.`);
          adviceSentences.push(`Stay well-hydrated and keep your quick-relief inhaler handy if you plan outdoor exercise.`);
        } else {
          adviceSentences.push(`Clean, optimal ambient air presents virtually zero respiratory resistance today.`);
          adviceSentences.push(`You can safely enjoy outdoor walks and exercise without bronchial restrictions.`);
        }
        whyFactors.push({
          factor: `Health Condition: Asthma`,
          impact: `Fine particles (PM2.5) bypass upper respiratory tract filtering and penetrate terminal bronchioles, triggering airway spasms.`
        });
      } else if (healthCondition === "Heart condition") {
        if (aqi > 100) {
          adviceSentences.push(`Elevated ambient pollution increases systemic cardiovascular stress, arterial vasoconstriction, and resting heart rate.`);
          adviceSentences.push(`Avoid heavy lifting or strenuous outdoor exertion today. If you experience unexpected palpitations or chest pressure, rest in an air-conditioned room.`);
        } else {
          adviceSentences.push(`Cardiovascular strain from particulate exposure is minimal under current ${band.toLowerCase()} conditions.`);
          adviceSentences.push(`Maintain light to moderate physical activity, monitoring hydration in ${feelsLike}°C feels-like weather.`);
        }
        whyFactors.push({
          factor: `Health Condition: Heart Disease / Vascular`,
          impact: `Ultra-fine airborne pollutants trigger inflammatory cytokine release, accelerating arterial plaque instability and blood pressure spikes.`
        });
      } else if (healthCondition === "COPD / lung condition") {
        if (aqi > 100) {
          adviceSentences.push(`Air quality poses severe distress for compromised lung capacity. Exposure will likely aggravate chronic breathlessness.`);
          adviceSentences.push(`Remain indoors with windows closed, run an air purifier, and have supplemental oxygen or prescribed maintenance inhalers ready.`);
        } else {
          adviceSentences.push(`Current air quality is manageable, but preserve airway moisture against ${humidity}% relative humidity.`);
          adviceSentences.push(`Take prescribed maintenance doses and limit rapid transitions between extreme indoor and outdoor temperatures.`);
        }
        whyFactors.push({
          factor: `Health Condition: COPD / Chronic Bronchitis`,
          impact: `Damaged alveoli have reduced gas-exchange capacity, making even moderate pollution loads trigger respiratory exhaustion.`
        });
      } else if (healthCondition === "Pregnant") {
        if (aqi > 100) {
          adviceSentences.push(`Maternal blood oxygenation requires extra protection today as PM2.5 levels (${pm25} µg/m³) are elevated.`);
          adviceSentences.push(`Limit outdoor walks to morning or post-sunset hours, wear a certified KN95 mask in traffic, and hydrate thoroughly.`);
        } else {
          adviceSentences.push(`Current ambient parameters support healthy outdoor routines for maternal wellness.`);
          adviceSentences.push(`Enjoy gentle outdoor strolls while staying comfortably hydrated in ${temp}°C conditions.`);
        }
        whyFactors.push({
          factor: `Physiology: Pregnancy`,
          impact: `Elevated maternal breathing volume increases total toxicant inhalation, which can impact placental perfusion.`
        });
      } else if (healthCondition === "Allergies") {
        if (aqi > 100 || humidity > 65) {
          adviceSentences.push(`Synergy between ambient particulate matter and moisture is likely to amplify allergic rhinitis and eye irritation.`);
          adviceSentences.push(`Rinse nasal passages with saline after returning indoors and keep car windows rolled up with AC set to recirculate.`);
        } else {
          adviceSentences.push(`Allergen dispersion is relatively low under current atmospheric conditions.`);
          adviceSentences.push(`Outdoor routines are safe; take standard antihistamines if you have seasonal sensitivity.`);
        }
        whyFactors.push({
          factor: `Condition: Allergic Rhinitis`,
          impact: `Particulate matter acts as a carrier adjuvant, carrying allergens deeper into the nasal epithelium.`
        });
      } else {
        if (aqi > 150) {
          adviceSentences.push(`Unhealthy air quality impacts everyone regardless of fitness level. High PM2.5 causes throat tickle, eye fatigue, and reduced VO2 max.`);
          adviceSentences.push(`Replace intense outdoor cardio with indoor gym training, and avoid running near arterial roadways.`);
        } else if (aqi > 100) {
          adviceSentences.push(`Air quality is acceptable for routine daily tasks, but endurance athletes should be cautious during prolonged outdoor cardio.`);
          adviceSentences.push(`Plan vigorous outdoor sessions before noon when photochemical ozone concentrations are lower.`);
        } else {
          adviceSentences.push(`Air quality is in the ${band.toLowerCase()} zone (${aqi} US AQI), posing virtually no risk to the general public.`);
          adviceSentences.push(`Ideal day for outdoor running, cycling, open-window cross-ventilation, and recreation.`);
        }
        whyFactors.push({
          factor: `Condition: Healthy Baseline`,
          impact: `Standard intact mucosal cilia and baseline immune response handle ambient particles without acute distress.`
        });
      }

      if (occupation === "Outdoor worker") {
        adviceSentences.push(`Because your role requires 6-8+ hours of direct ambient exposure, your cumulative particulate intake is up to 4x higher than an office worker.`);
        adviceSentences.push(`Wear an N95 respirator during heavy dust phases and schedule 10-minute rest intervals in shielded indoor areas.`);
        whyFactors.push({
          factor: `Exposure: Outdoor Physical Labor`,
          impact: `Extended duration + elevated physical exertion dramatically multiplies total liters of air inhaled per shift.`
        });
      } else if (occupation === "Delivery / commutes a lot") {
        adviceSentences.push(`Urban commuting exposes you to concentrated vehicle exhaust, diesel soot, and tire dust plumes at street level.`);
        adviceSentences.push(`Wear an anti-pollution face mask during rush-hour traffic and close vehicle vents.`);
        whyFactors.push({
          factor: `Exposure: Transit & Traffic Corridor`,
          impact: `Close proximity to mobile vehicle tailpipes yields localized PM2.5 and NO2 spikes far higher than ambient station averages.`
        });
      } else if (occupation === "Desk job (mostly indoors)") {
        adviceSentences.push(`Your indoor work environment buffers you from peak outdoor smog; verify that your building HVAC filters are well-maintained.`);
        whyFactors.push({
          factor: `Exposure: Indoor Work Buffer`,
          impact: `Standard commercial HVAC filtration filters out 40-70% of coarse outdoor particles.`
        });
      }

      if (ageGroup === "Child (0-12)") {
        adviceSentences.push(`Children breathe more air per kilogram of body weight; recommend switching outdoor sports to indoor gym halls when AQI exceeds 100.`);
        whyFactors.push({
          factor: `Age Group: Child (0-12)`,
          impact: `Developing lung tissue and narrower airway diameter make children twice as vulnerable to particulate obstruction.`
        });
      } else if (ageGroup === "Senior (60+)") {
        adviceSentences.push(`For seniors, combined ${temp}°C temperature and particulate spikes warrant resting during peak afternoon hours.`);
        whyFactors.push({
          factor: `Age Group: Senior (60+)`,
          impact: `Age-related reduction in pulmonary elasticity and slower mucociliary clearance impair particulate expelling.`
        });
      }

      if (temp > 33) {
        whyFactors.push({
          factor: `Meteorology: High Heat (${temp}°C)`,
          impact: `Accelerates photochemical conversion of vehicle NOx into ground-level ozone, compounding airway irritation.`
        });
      } else if (humidity > 70) {
        whyFactors.push({
          factor: `Meteorology: High Humidity (${humidity}%)`,
          impact: `Moisture traps suspended particulate matter near ground level, impeding natural convective dispersal.`
        });
      }

      return {
        advisoryText: adviceSentences.slice(0, 4).join(" "),
        severity,
        whyFactors
      };
    }

    async function requestGroqAdvisory(apiKey, profile, weather, aqiData) {
      if (!apiKey) return synthesizePersonalizedAdvisory(profile, weather, aqiData);
      const band = getAQIBand(aqiData.us_aqi ?? aqiData.aqi).name;
      const prompt = `You are a specialized public health AI physician. Given the current weather and air quality metrics, synthesize a concise, high-trust, 3-4 sentence plain-English health advisory tailored specifically to the patient's individual profile. Interpret the physiological interaction between their condition, occupational exposure, and the pollutants. Conclude with one clear, practical action item.

Patient Profile:
- Age Group: ${profile.ageGroup}
- Health Condition: ${profile.healthCondition}
- Occupation: ${profile.occupation}

Live Environmental Telemetry:
- Temperature: ${weather.temperature_2m ?? weather.temperature}°C (Feels like ${weather.apparent_temperature ?? weather.feelsLike}°C)
- Relative Humidity: ${weather.relative_humidity_2m ?? weather.humidity}%
- Wind Speed: ${weather.wind_speed_10m ?? weather.windSpeed} km/h
- US AQI: ${aqiData.us_aqi ?? aqiData.aqi} (${band})
- PM2.5: ${aqiData.pm2_5 ?? aqiData.pm25} µg/m³
- Ozone: ${aqiData.ozone ?? 30} µg/m³

Generate the plain-English advisory now.`;

      try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.3,
            max_tokens: 220
          })
        });
        if (!response.ok) throw new Error(`Groq API returned ${response.status}`);
        const data = await response.json();
        const rawText = data.choices?.[0]?.message?.content?.trim();
        const localFallback = synthesizePersonalizedAdvisory(profile, weather, aqiData);
        return {
          advisoryText: rawText || localFallback.advisoryText,
          severity: localFallback.severity,
          whyFactors: localFallback.whyFactors
        };
      } catch (err) {
        console.warn("Groq request failed, using intelligent local engine:", err);
        return synthesizePersonalizedAdvisory(profile, weather, aqiData);
      }
    }

    // --- API CLIENT ---
    async function searchCities(query) {
      if (!query || query.trim().length < 2) return [];
      const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query.trim())}&count=6&language=en&format=json`;
      try {
        const res = await fetch(url);
        if (!res.ok) return [];
        const data = await res.json();
        if (!data.results || !data.results.length) return [];
        return data.results.map((item) => ({
          id: `${item.latitude}_${item.longitude}`,
          name: item.name,
          region: item.admin1 || "",
          country: item.country || "",
          lat: item.latitude,
          lon: item.longitude,
          displayLabel: [item.name, item.admin1, item.country].filter(Boolean).join(", ")
        }));
      } catch (err) {
        return [];
      }
    }

    async function getLiveWeather(lat, lon) {
      // Use precise current + 7-day history for accurate temperature, humidity, wind, pressure
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code,surface_pressure&daily=temperature_2m_max,temperature_2m_min,weather_code&past_days=6&forecast_days=1&timezone=auto`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Weather fetch error: ${res.status}`);
      const data = await res.json();
      if (!data.current) throw new Error("No current weather data returned");
      return { current: data.current, daily: data.daily || {} };
    }

    async function getLiveAQI(lat, lon) {
      // Open-Meteo Air Quality provides US AQI, PM2.5, PM10, Ozone etc. Hourly used to derive daily max for trends
      const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=us_aqi,pm2_5,pm10,ozone,nitrogen_dioxide,carbon_monoxide,sulphur_dioxide&hourly=us_aqi,pm2_5,pm10&past_days=6&forecast_days=1&timezone=auto`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Air quality fetch error: ${res.status}`);
      const data = await res.json();
      
      const dailyMap = {};
      const hourly = data.hourly || {};
      if (hourly.time && hourly.us_aqi) {
        for (let i = 0; i < hourly.time.length; i++) {
          const dayKey = hourly.time[i].split("T")[0];
          const val = hourly.us_aqi[i];
          if (val != null && !isNaN(val)) {
            dailyMap[dayKey] = Math.max(dailyMap[dayKey] ?? 0, Math.round(val));
          }
        }
      }

      // Ensure chronological order (YYYY-MM-DD sorts correctly as strings)
      const sortedDays = Object.keys(dailyMap).sort();
      const sortedMax = sortedDays.map(d => dailyMap[d]);

      return {
        current: data.current || {},
        daily: {
          time: sortedDays,
          us_aqi_max: sortedMax
        }
      };
    }

    async function reverseGeocode(lat, lon) {
      // Prefer Nominatim (OpenStreetMap) for accurate reverse geocoding; fallback to coordinates
      try {
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&zoom=10&addressdetails=1`;
        const res = await fetch(url, {
          headers: { "Accept-Language": "en", "User-Agent": "AirWell-Health-Demo/1.0" }
        });
        if (res.ok) {
          const data = await res.json();
          if (data && data.address) {
            const addr = data.address;
            const name = addr.city || addr.town || addr.village || addr.suburb || addr.county || data.name || "Current Location";
            const region = addr.state || addr.state_district || addr.county || "";
            const country = addr.country || "";
            return {
              name,
              region,
              country,
              lat,
              lon,
              displayLabel: [name, region, country].filter(Boolean).join(", ")
            };
          }
        }
      } catch (e) {
        console.warn("Nominatim reverse geocode failed, trying Open-Meteo fallback", e);
      }
      // Fallback: try Open-Meteo geocoding with nearby search (less accurate)
      try {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(lat.toFixed(1) + "," + lon.toFixed(1))}&count=1&language=en`;
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          if (data.results && data.results[0]) {
            const item = data.results[0];
            return {
              name: item.name,
              region: item.admin1 || "",
              country: item.country || "",
              lat,
              lon,
              displayLabel: [item.name, item.admin1, item.country].filter(Boolean).join(", ")
            };
          }
        }
      } catch (e) {}
      return {
        name: "Current Location",
        region: "",
        country: "",
        lat,
        lon,
        displayLabel: `GPS (${lat.toFixed(3)}°, ${lon.toFixed(3)}°)`
      };
    }

    // --- COMPONENTS ---

    function Header({
      city,
      onSelectCity,
      onCurrentLocation,
      isLocating,
      profile,
      onOpenProfileModal,
      isLiveMode,
      onToggleMode,
      cityPresets = []
    }) {
      const [query, setQuery] = useState(city?.name || "Bhopal");
      const [suggestions, setSuggestions] = useState([]);
      const [isSearching, setIsSearching] = useState(false);
      const [isOpen, setIsOpen] = useState(false);
      const dropdownRef = useRef(null);

      useEffect(() => {
        if (city?.name) setQuery(city.name);
      }, [city]);

      useEffect(() => {
        if (!query || query.trim().length < 2) {
          setSuggestions([]);
          return;
        }
        const timer = setTimeout(async () => {
          setIsSearching(true);
          try {
            const results = await searchCities(query);
            setSuggestions(results);
          } catch (e) {
            setSuggestions([]);
          } finally {
            setIsSearching(false);
          }
        }, 260);
        return () => clearTimeout(timer);
      }, [query]);

      useEffect(() => {
        function handleClickOutside(e) {
          if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);

      const handleSelectSuggestion = (item) => {
        setQuery(item.name);
        setIsOpen(false);
        onSelectCity(item);
      };

      const handleSearchSubmit = async (e) => {
        if (e) e.preventDefault();
        if (!query || query.trim().length < 2) return;
        
        if (suggestions.length > 0) {
          handleSelectSuggestion(suggestions[0]);
          return;
        }

        setIsSearching(true);
        try {
          const results = await searchCities(query);
          if (results.length > 0) {
            handleSelectSuggestion(results[0]);
          } else {
            alert(`Could not find coordinates for "${query}". Please check spelling or try a nearby city.`);
          }
        } catch (err) {
          console.error("Search error:", err);
        } finally {
          setIsSearching(false);
        }
      };

      return (
        <header className="w-full bg-white/80 backdrop-blur-xl border-b border-white/30 sticky top-0 z-30 transition-all shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              
              {/* Brand & Tagline */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src="logo.png"
                    alt="Rashtra Vayu — National Air Intelligence"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover shadow-md shadow-slate-900/20 ring-2 ring-amber-200/60 bg-slate-900 flex-shrink-0"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold tracking-tight text-slate-900">Rashtra Vayu</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-teal-50 text-teal-700 border border-teal-200/60">
                        Health × AQI
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 hidden sm:block">
                      National Air Intelligence — personalized risk by city & health profile.
                    </p>
                  </div>
                </div>

                {/* Mobile Profile button */}
                <button
                  onClick={onOpenProfileModal}
                  className="md:hidden flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition"
                >
                  <Icon name="sliders" className="w-3.5 h-3.5 text-slate-500" />
                  <span>Profile</span>
                </button>
              </div>

              <p className="text-xs text-slate-500 sm:hidden -mt-2">
                Same air, different risk — advice made for you.
              </p>

              {/* City Search Bar & Controls */}
              <div className="flex flex-1 max-w-xl items-center gap-2">
                <div className="relative flex-1" ref={dropdownRef}>
                  <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                    <div className="absolute left-3.5 text-slate-400 pointer-events-none">
                      {isSearching ? (
                        <Icon name="refresh" className="w-4 h-4 animate-spin text-teal-600" />
                      ) : (
                        <Icon name="search" className="w-4 h-4" />
                      )}
                    </div>
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                      }}
                      onFocus={() => setIsOpen(true)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSearchSubmit(e);
                        }
                      }}
                      placeholder="Search city, district, or country (press Enter)..."
                      className="w-full pl-10 pr-16 py-2 text-sm bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 focus:border-teal-500 rounded-xl transition duration-150 outline-none text-slate-800 placeholder-slate-400 font-medium shadow-xs focus:ring-2 focus:ring-teal-500/20"
                    />
                    <button
                      type="submit"
                      title="Search location"
                      className="absolute right-1.5 px-2.5 py-1 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold transition shadow-xs"
                    >
                      Go
                    </button>
                  </form>

                  {/* Autocomplete Dropdown */}
                  {isOpen && (
                    <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden z-50 animate-fadeIn">
                      {suggestions.length > 0 ? (
                        <div className="py-1 divide-y divide-slate-100 max-h-64 overflow-y-auto">
                          <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                            Search Results
                          </div>
                          {suggestions.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => {
                                setQuery(item.name);
                                setIsOpen(false);
                                onSelectCity(item);
                              }}
                              className="w-full px-3.5 py-2.5 text-left text-sm hover:bg-teal-50/70 transition flex items-center justify-between group"
                            >
                              <div className="flex items-center space-x-2.5">
                                <Icon name="map-pin" className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition" />
                                <div>
                                  <span className="font-medium text-slate-800">{item.name}</span>
                                  {(item.region || item.country) && (
                                    <span className="text-xs text-slate-500 ml-1.5">
                                      {[item.region, item.country].filter(Boolean).join(", ")}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <span className="text-xs text-teal-600 opacity-0 group-hover:opacity-100 transition font-medium">Select</span>
                            </button>
                          ))}
                        </div>
                      ) : query.trim().length >= 2 && !isSearching ? (
                        <div className="p-4 text-center text-xs text-slate-500">
                          No matching cities found for "<span className="font-semibold text-slate-700">{query}</span>".
                        </div>
                      ) : null}

                      {/* Demo Presets Bar */}
                      <div className="bg-slate-50 p-2.5 border-t border-slate-100">
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 px-1">
                          Demo Presets:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {cityPresets.map((preset) => (
                            <button
                              key={preset.id}
                              onClick={() => {
                                setQuery(preset.name);
                                setIsOpen(false);
                                onSelectCity(preset);
                              }}
                              className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition ${
                                city?.name === preset.name
                                  ? "bg-teal-600 text-white border-teal-600 shadow-xs"
                                  : "bg-white text-slate-700 border-slate-200 hover:border-teal-400 hover:text-teal-700"
                              }`}
                            >
                              {preset.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* GPS Location Button */}
                <button
                  onClick={onCurrentLocation}
                  disabled={isLocating}
                  title="Use current GPS location"
                  className="p-2.5 bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 text-slate-600 hover:text-teal-700 rounded-xl transition shadow-xs disabled:opacity-50 group"
                >
                  {isLocating ? (
                    <Icon name="refresh" className="w-4 h-4 animate-spin text-teal-600" />
                  ) : (
                    <Icon name="navigation" className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  )}
                </button>
              </div>

              {/* Profile Pill & Demo Toggle */}
              <div className="hidden md:flex items-center space-x-3">
                <button
                  onClick={onToggleMode}
                  title="Toggle between Live API and Mock Presets"
                  className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border transition ${
                    isLiveMode
                      ? "bg-emerald-50 text-emerald-700 border-emerald-300/80"
                      : "bg-indigo-50 text-indigo-700 border-indigo-200"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isLiveMode ? "bg-emerald-500 animate-pulse" : "bg-indigo-500"}`} />
                  <span>{isLiveMode ? "Live API" : "Mock Demo"}</span>
                </button>

                <button
                  onClick={onOpenProfileModal}
                  className="flex items-center space-x-2.5 pl-3 pr-3.5 py-1.5 bg-slate-50 hover:bg-slate-100/90 border border-slate-200/80 rounded-full transition group shadow-xs text-left"
                >
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 text-xs font-bold">
                    {profile.healthCondition !== "None" ? "🫁" : "👤"}
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <span>{profile.healthCondition !== "None" ? profile.healthCondition : "Healthy"}</span>
                      <span className="text-[10px] text-slate-400 font-normal">•</span>
                      <span className="text-slate-600 font-normal">{profile.occupation.split(' ')[0]}</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-teal-600 font-medium group-hover:underline pl-1">
                    Edit
                  </span>
                </button>
              </div>

            </div>
          </div>
        </header>
      );
    }

    function WeatherCard({ weather, cityLabel }) {
      const temp = Math.round(weather.temperature_2m ?? weather.temperature ?? 24);
      const feelsLike = Math.round(weather.apparent_temperature ?? weather.feelsLike ?? temp);
      const humidity = Math.round(weather.relative_humidity_2m ?? weather.humidity ?? 55);
      const windSpeed = Math.round(weather.wind_speed_10m ?? weather.windSpeed ?? 12);
      const pressure = Math.round(weather.surface_pressure ?? 1012);
      const weatherCode = weather.weather_code ?? weather.weatherCode ?? 1;
      const weatherInfo = describeWeatherCode(weatherCode);

      return (
        <div className="bg-gradient-to-br from-white via-sky-50/40 to-blue-50/60 rounded-3xl p-6 sm:p-7 border border-sky-100/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-44 h-44 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                <Icon name="sun" className="w-4 h-4 text-sky-500" />
                <span>Weather Conditions</span>
              </div>
              <span className="text-xs font-medium text-slate-400 truncate max-w-[180px]">
                {cityLabel || "Current City"}
              </span>
            </div>

            <div className="flex items-baseline justify-between mb-6">
              <div>
                <div className="flex items-start">
                  <span className="text-6xl sm:text-7xl font-extrabold tracking-tighter text-slate-900 leading-none">
                    {temp}
                  </span>
                  <span className="text-3xl sm:text-4xl font-light text-slate-400 ml-1">°C</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xs font-semibold text-slate-600 bg-sky-100/70 px-2.5 py-0.5 rounded-full">
                    Feels like {feelsLike}°C
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {weatherInfo.label}
                  </span>
                </div>
              </div>

              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/90 shadow-xs border border-sky-100 flex items-center justify-center text-sky-500">
                <Icon name={weatherInfo.icon} className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1.75]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-sky-100/70">
            <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-3 border border-sky-100/80 flex flex-col">
              <div className="flex items-center space-x-1.5 text-slate-400 mb-1">
                <Icon name="droplet" className="w-3.5 h-3.5 text-sky-500" />
                <span className="text-[11px] font-semibold uppercase tracking-wider">Humidity</span>
              </div>
              <span className="text-base font-bold text-slate-800">{humidity}%</span>
              <span className="text-[10px] text-slate-400">{humidity > 65 ? "High moisture" : "Comfortable"}</span>
            </div>

            <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-3 border border-sky-100/80 flex flex-col">
              <div className="flex items-center space-x-1.5 text-slate-400 mb-1">
                <Icon name="wind" className="w-3.5 h-3.5 text-teal-500" />
                <span className="text-[11px] font-semibold uppercase tracking-wider">Wind</span>
              </div>
              <span className="text-base font-bold text-slate-800">{windSpeed} <span className="text-xs font-normal text-slate-500">km/h</span></span>
              <span className="text-[10px] text-slate-400">{windSpeed < 10 ? "Stagnant air" : "Breezy"}</span>
            </div>

            <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-3 border border-sky-100/80 flex flex-col">
              <div className="flex items-center space-x-1.5 text-slate-400 mb-1">
                <Icon name="activity" className="w-3.5 h-3.5 text-indigo-500" />
                <span className="text-[11px] font-semibold uppercase tracking-wider">Pressure</span>
              </div>
              <span className="text-base font-bold text-slate-800">{pressure} <span className="text-xs font-normal text-slate-500">hPa</span></span>
              <span className="text-[10px] text-slate-400">Normal baro</span>
            </div>
          </div>
        </div>
      );
    }

    function AQICard({ aqiData }) {
      const aqi = Math.round(aqiData.us_aqi ?? aqiData.aqi ?? 65);
      const pm25 = parseFloat((aqiData.pm2_5 ?? aqiData.pm25 ?? 18.2).toFixed(1));
      const pm10 = parseFloat((aqiData.pm10 ?? 34.0).toFixed(1));
      const ozone = parseFloat((aqiData.ozone ?? 42.0).toFixed(1));
      const dominantPollutant = aqiData.dominantPollutant || (pm25 > 35 ? "PM2.5" : "Ozone");
      const band = getAQIBand(aqi);
      const gaugePercent = Math.min(100, Math.max(2, Math.round((aqi / 350) * 100)));
      const sourceLabel = aqiData.source || "Open-Meteo";
      const observedAt = aqiData.observedAt ? new Date(aqiData.observedAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : null;

      return (
        <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/40 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                <Icon name="activity" className="w-4 h-4 text-teal-600" />
                <span>US AQI (EPA scale)</span>
              </div>
              <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full" title={`${sourceLabel}. Station networks like aqi.in can differ 10-40 pts from models.`}>
                {observedAt ? `as of ${observedAt}` : "Live / model"}
              </span>
            </div>

            <div className="flex items-baseline justify-between mb-5">
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-6xl sm:text-7xl font-extrabold tracking-tighter text-slate-900 leading-none">
                    {aqi}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">AQI</span>
                </div>

                <div className="mt-2.5 inline-flex items-center space-x-2">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${band.bg} ${band.text} border ${band.border} shadow-2xs`}>
                    <span className={`w-2 h-2 rounded-full mr-1.5 ${band.badgeBg}`} />
                    {band.name}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Dominant</div>
                <div className="text-sm font-bold text-slate-800 mt-0.5">{dominantPollutant}</div>
                <div className="text-[10px] text-slate-400">
                  {dominantPollutant === "PM2.5" ? "Fine particulates" : "Photochemical"}
                </div>
              </div>
            </div>

            {/* Spectrum Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
                <span>Good (0)</span>
                <span>Mod (50)</span>
                <span>Sensitive (100)</span>
                <span>Unhealthy (150)</span>
                <span>Haz (300+)</span>
              </div>

              <div className="relative h-2.5 rounded-full overflow-hidden bg-slate-100 shadow-inner flex">
                <div className="flex-1 bg-emerald-500" title="Good (0-50)" />
                <div className="flex-1 bg-amber-400" title="Moderate (51-100)" />
                <div className="flex-1 bg-orange-500" title="Sensitive (101-150)" />
                <div className="flex-1 bg-rose-500" title="Unhealthy (151-200)" />
                <div className="flex-1 bg-purple-600" title="Very Unhealthy (201-300)" />
                <div className="flex-1 bg-rose-950" title="Hazardous (301+)" />
              </div>

              <div className="relative w-full h-4 mt-0.5">
                <div
                  className="absolute -top-3.5 transform -translate-x-1/2 flex flex-col items-center transition-all duration-500"
                  style={{ left: `${gaugePercent}%` }}
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-slate-900 shadow-md flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-slate-100">
            <div className="bg-slate-50/80 rounded-2xl p-3 border border-slate-100 flex flex-col">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">PM2.5</span>
              <span className="text-base font-bold text-slate-800">
                {pm25} <span className="text-[10px] font-normal text-slate-500">µg/m³</span>
              </span>
              <span className="text-[10px] text-slate-400">
                {pm25 > 15 ? `${(pm25 / 15).toFixed(1)}x WHO limit` : "Safe level"}
              </span>
            </div>

            <div className="bg-slate-50/80 rounded-2xl p-3 border border-slate-100 flex flex-col">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">PM10</span>
              <span className="text-base font-bold text-slate-800">
                {pm10} <span className="text-[10px] font-normal text-slate-500">µg/m³</span>
              </span>
              <span className="text-[10px] text-slate-400">Coarse dust</span>
            </div>

            <div className="bg-slate-50/80 rounded-2xl p-3 border border-slate-100 flex flex-col">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Ozone (O₃)</span>
              <span className="text-base font-bold text-slate-800">
                {ozone} <span className="text-[10px] font-normal text-slate-500">µg/m³</span>
              </span>
              <span className="text-[10px] text-slate-400">Surface layer</span>
            </div>
          </div>
        </div>
      );
    }

    // --- HEALTH ALERT BANNER (condition-aware) ---
    function HealthAlertBanner({ severity, profile, aqi, onDismiss }) {
      const [dismissed, setDismissed] = useState(false);
      if (dismissed || !severity || severity === "Low") return null;

      const condition = profile?.healthCondition || "None";
      const aqiVal = Math.round(aqi ?? 0);

      const alerts = {
        Asthma: {
          High: {
            title: "Asthma Alert — High Risk",
            message: `AQI is ${aqiVal}. Fine particles can trigger airway tightening within minutes. Keep your rescue inhaler with you, avoid outdoor exercise, and prefer indoor air if possible.`,
            action: "Stay indoors • Carry inhaler • Use air purifier"
          },
          Moderate: {
            title: "Asthma Caution",
            message: `AQI is ${aqiVal}. Sensitive airways may react. Limit prolonged outdoor activity and have your inhaler ready if you step out.`,
            action: "Limit outdoor time • Carry inhaler"
          }
        },
        "Heart condition": {
          High: {
            title: "Heart Health Alert — High Risk",
            message: `AQI is ${aqiVal}. Pollution increases cardiovascular strain. Avoid outdoor exertion and monitor for chest discomfort or unusual fatigue.`,
            action: "Rest indoors • Avoid heavy activity • Seek care if symptoms appear"
          },
          Moderate: {
            title: "Heart Health Caution",
            message: `AQI is ${aqiVal}. People with heart conditions should reduce prolonged outdoor exposure today.`,
            action: "Reduce outdoor exertion"
          }
        },
        "COPD / lung condition": {
          High: {
            title: "COPD / Lung Alert — High Risk",
            message: `AQI is ${aqiVal}. Elevated particles can worsen breathlessness. Stay indoors, use prescribed medication, and avoid smoke or dust.`,
            action: "Stay indoors • Use prescribed meds • Avoid irritants"
          },
          Moderate: {
            title: "COPD / Lung Caution",
            message: `AQI is ${aqiVal}. Limit outdoor time and keep rescue medication accessible.`,
            action: "Limit outdoor exposure • Medication ready"
          }
        },
        Pregnant: {
          High: {
            title: "Pregnancy Alert — High Risk",
            message: `AQI is ${aqiVal}. High pollution exposure is best avoided. Prefer indoor environments and reduce outdoor time, especially during peak hours.`,
            action: "Minimize outdoor time • Prefer clean indoor air"
          },
          Moderate: {
            title: "Pregnancy Caution",
            message: `AQI is ${aqiVal}. Consider shorter outdoor trips and good indoor ventilation or purification.`,
            action: "Shorter outdoor trips • Clean indoor air"
          }
        },
        Allergies: {
          High: {
            title: "Allergy Alert — High Risk",
            message: `AQI is ${aqiVal}. Pollutants can worsen allergic symptoms. Keep windows closed during peak pollution and consider a mask outdoors.`,
            action: "Closed windows • Mask outdoors if needed"
          },
          Moderate: {
            title: "Allergy Caution",
            message: `AQI is ${aqiVal}. Mild irritation possible. Sensitive individuals may prefer shorter outdoor periods.`,
            action: "Monitor symptoms • Limit peak-hour exposure"
          }
        },
        None: {
          High: {
            title: "Air Quality Alert — High Risk",
            message: `AQI is ${aqiVal}. Even healthy adults should reduce prolonged outdoor exertion and consider a mask if spending extended time outside.`,
            action: "Reduce outdoor exertion • Consider mask"
          },
          Moderate: {
            title: "Air Quality Notice",
            message: `AQI is ${aqiVal}. Generally acceptable, but unusually sensitive people may feel mild effects.`,
            action: "Normal activity for most people"
          }
        }
      };

      const level = severity === "High" ? "High" : "Moderate";
      const conf = (alerts[condition] || alerts.None)[level] || alerts.None.Moderate;

      const isHigh = severity === "High";
      const bg = isHigh
        ? "bg-rose-600 border-rose-700 text-white"
        : "bg-amber-500 border-amber-600 text-white";
      const iconBg = isHigh ? "bg-rose-500" : "bg-amber-400";

      return (
        <div className={`rounded-2xl border-2 ${bg} p-3 sm:p-4 shadow-lg animate-fadeIn relative overflow-hidden`}>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center shadow-inner`}>
              <Icon name={isHigh ? "zap" : "info"} className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center flex-wrap gap-2 mb-1">
                <h4 className="text-sm sm:text-base font-extrabold tracking-tight">{conf.title}</h4>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                  {condition !== "None" ? condition : "General"}
                </span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed opacity-95 mb-2">{conf.message}</p>
              <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold bg-white/15 px-2.5 py-1 rounded-lg">
                <Icon name="shield" className="w-3.5 h-3.5" />
                <span>{conf.action}</span>
              </div>
            </div>
            <button
              onClick={() => { setDismissed(true); if (onDismiss) onDismiss(); }}
              className="flex-shrink-0 p-1.5 rounded-lg hover:bg-white/20 transition"
              aria-label="Dismiss alert"
            >
              <Icon name="close" className="w-4 h-4" />
            </button>
          </div>
        </div>
      );
    }

    // --- AIRWELL CHAT ASSISTANT (EN/HI + spoken replies) ---
    function ChatAssistant({ weather, aqi, cityName, trendData = [], profile }) {
      const [lang, setLang] = useState("en"); // en | hi
      const [messages, setMessages] = useState([]);
      const [input, setInput] = useState("");
      const [isSpeaking, setIsSpeaking] = useState(false);
      const [muted, setMuted] = useState(false);
      const mutedRef = useRef(false);
      const langRef = useRef("en");
      const listRef = useRef(null);

      useEffect(() => { mutedRef.current = muted; }, [muted]);
      useEffect(() => { langRef.current = lang; }, [lang]);

      useEffect(() => {
        if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
      }, [messages]);

      // Preload voices (needed on some browsers for Hindi)
      useEffect(() => {
        if (!window.speechSynthesis) return;
        const load = () => window.speechSynthesis.getVoices();
        load();
        window.speechSynthesis.onvoiceschanged = load;
        return () => { window.speechSynthesis.onvoiceschanged = null; };
      }, []);


      // Number → spoken words (helps Hindi/Marathi TTS pronounce correctly)
      const HI_ONES = ["शून्य","एक","दो","तीन","चार","पाँच","छह","सात","आठ","नौ","दस","ग्यारह","बारह","तेरह","चौदह","पंद्रह","सोलह","सत्रह","अठारह","उन्नीस","बीस","इक्कीस","बाईस","तेईस","चौबीस","पच्चीस","छब्बीस","सत्ताईस","अट्ठाईस","उनतीस","तीस","इकतीस","बत्तीस","तैंतीस","चौंतीस","पैंतीस","छत्तीस","सैंतीस","अड़तीस","उनतालीस","चालीस","इकतालीस","बयालीस","तैंतालीस","चौवालीस","पैंतालीस","छियालीस","सैंतालीस","अड़तालीस","उनचास","पचास","इक्यावन","बावन","तिरेपन","चौवन","पचपन","छप्पन","सत्तावन","अट्ठावन","उनसठ","साठ","इकसठ","बासठ","तिरेसठ","चौंसठ","पैंसठ","छियासठ","सड़सठ","अड़सठ","उनहत्तर","सत्तर","इकहत्तर","बहत्तर","तिहत्तर","चौहत्तर","पचहत्तर","छिहत्तर","सतहत्तर","अठहत्तर","उनासी","अस्सी","इक्यासी","बयासी","तिरासी","चौरासी","पचासी","छियासी","सत्तासी","अठासी","नवासी","नब्बे","इक्यानवे","बानवे","तिरानवे","चौरानवे","पचानवे","छियानवे","सत्तानवे","अट्ठानवे","निन्यानवे"];
      const MR_ONES = ["शून्य","एक","दोन","तीन","चार","पाच","सहा","सात","आठ","नऊ","दहा","अकरा","बारा","तेरा","चौदा","पंधरा","सोळा","सतरा","अठरा","एकोणीस","वीस","एकवीस","बावीस","तेवीस","चोवीस","पंचवीस","सव्वीस","सत्तावीस","अठ्ठावीस","एकोणतीस","तीस","एकतीस","बत्तीस","तेहेतीस","चौतीस","पस्तीस","छत्तीस","सदतीस","अडतीस","एकोणचाळीस","चाळीस","एक्केचाळीस","बेचाळीस","त्रेचाळीस","चव्वेचाळीस","पंचेचाळीस","सेहेचाळीस","सत्तेचाळीस","अठ्ठेचाळीस","एकोणपन्नास","पन्नास","एक्कावन्न","बावन्न","त्रेपन्न","चोपन्न","पंचावन्न","छप्पन्न","सत्तावन्न","अठ्ठावन्न","एकोणसाठ","साठ","एकसष्ट","बासष्ट","त्रेसष्ट","चौसष्ट","पासष्ट","सहासष्ट","सदुसष्ट","अडुसष्ट","एकोणसत्तर","सत्तर","एक्काहत्तर","बाहत्तर","त्र्याहत्तर","चौर्याहत्तर","पंच्याहत्तर","शाहत्तर","सत्याहत्तर","अठ्ठ्याहत्तर","एकोणऐंशी","ऐंशी","एक्क्याऐंशी","ब्याऐंशी","त्र्याऐंशी","चौर्याऐंशी","पंच्याऐंशी","श्याऐंशी","सत्त्याऐंशी","अठ्ठ्याऐंशी","एकोणनव्वद","नव्वद","एक्क्याण्णव","ब्याण्णव","त्र्याण्णव","चौर्याण्णव","पंच्याण्णव","श्याण्णव","सत्त्याण्णव","अठ्ठ्याण्णव","नव्व्याण्णव"];

      function numToHi(n) {
        n = Math.round(Number(n));
        if (!isFinite(n)) return String(n);
        if (n < 0) return "ऋण " + numToHi(-n);
        if (n <= 99) return HI_ONES[n];
        if (n <= 999) {
          const h = Math.floor(n / 100), r = n % 100;
          return (h === 1 ? "एक सौ" : HI_ONES[h] + " सौ") + (r ? " " + HI_ONES[r] : "");
        }
        if (n <= 9999) {
          const th = Math.floor(n / 1000), r = n % 1000;
          return (th === 1 ? "एक हज़ार" : HI_ONES[th] + " हज़ार") + (r ? " " + numToHi(r) : "");
        }
        return String(n);
      }
      function numToMr(n) {
        n = Math.round(Number(n));
        if (!isFinite(n)) return String(n);
        if (n < 0) return "ऋण " + numToMr(-n);
        if (n <= 99) return MR_ONES[n];
        if (n <= 999) {
          const h = Math.floor(n / 100), r = n % 100;
          return (h === 1 ? "एकशे" : MR_ONES[h] + "शे") + (r ? " " + MR_ONES[r] : "");
        }
        if (n <= 9999) {
          const th = Math.floor(n / 1000), r = n % 1000;
          return (th === 1 ? "एक हजार" : MR_ONES[th] + " हजार") + (r ? " " + numToMr(r) : "");
        }
        return String(n);
      }
      function spokenNum(langCode, n) {
        if (n === "—" || n == null || n === "") return "अज्ञात";
        if (langCode === "hi") return numToHi(n);
        if (langCode === "mr") return numToMr(n);
        return String(n);
      }

      const LANGS = {
        en: {
          code: "en", voice: "en-IN", voiceAlt: ["en-GB", "en-US", "en"],
          label: "EN", title: "Rashtra Vayu Assistant",
          subtitle: "Ask about temperature, AQI, or past reports",
          placeholder: "Type your question…", send: "Send",
          chips: [{ id: "temp", label: "Temperature" }, { id: "aqi", label: "AQI now" }, { id: "report", label: "Previous reports" }, { id: "health", label: "Health advice" }],
          speak: "Listen", stop: "Stop", mute: "Mute", unmute: "Unmute",
          greeting: "Hi! I can tell you the temperature, air quality, past 7-day reports, or health tips for your profile.",
          temp: (c, t, f, d) => `In ${c}, temperature is about ${t}°C${f != null ? ` (feels like ${f}°C)` : ""}${d ? `. Conditions: ${d}` : ""}.`,
          aqi: (c, a, b, p, high) => `Current US AQI in ${c} is ${a} (${b || "Unknown"})${p != null ? `. PM2.5 around ${Number(p).toFixed(1)} µg/m³` : ""}. ${high ? "Sensitive groups should limit outdoor time." : "Routine outdoor activity is generally fine."}`,
          report: (c, lines) => `Recent summary for ${c}: ${lines}. See the full 7-day dashboard charts below.`,
          health: (cond, a, has) => has
            ? `Your profile includes ${cond}. With AQI at ${a}, limit outdoor exertion, consider a mask, and keep medication handy.`
            : `AQI is ${a}. For a healthy baseline, normal precautions apply; use a mask if pollution rises.`,
          fallback: (q, c, t, a, b) => `You asked: "${q}". ${c} — ${t}°C, AQI ${a} (${b}). Try Temperature, AQI, Previous reports, or Health advice.`
        },
        hi: {
          code: "hi", voice: "hi-IN", voiceAlt: ["hi"],
          label: "हिं", title: "राष्ट्र वायु सहायक",
          subtitle: "तापमान, AQI या पुरानी रिपोर्ट पूछें",
          placeholder: "अपना प्रश्न लिखें…", send: "भेजें",
          chips: [{ id: "temp", label: "तापमान" }, { id: "aqi", label: "अभी AQI" }, { id: "report", label: "पिछली रिपोर्ट" }, { id: "health", label: "स्वास्थ्य सलाह" }],
          speak: "सुनें", stop: "रोकें", mute: "म्यूट", unmute: "अनम्यूट",
          greeting: "नमस्ते! मैं तापमान, वायु गुणवत्ता, पिछले 7 दिनों की रिपोर्ट या आपकी प्रोफ़ाइल के लिए स्वास्थ्य सुझाव बता सकता हूँ।",
          temp: (c, t, f, d) => `${c} में अभी तापमान लगभग ${spokenNum("hi", t)} डिग्री सेल्सियस है${f != null ? ` और महसूस ${spokenNum("hi", f)} डिग्री` : ""}${d ? `। मौसम ${d}` : ""}।`,
          aqi: (c, a, b, p, high) => `${c} का वर्तमान वायु गुणवत्ता सूचकांक ${spokenNum("hi", a)} है${b ? ` यानी ${b}` : ""}${p != null ? `। पी एम दो दशमलव पांच लगभग ${spokenNum("hi", Math.round(Number(p)))} माइक्रोग्राम` : ""}। ${high ? "संवेदनशील लोगों को बाहर कम समय बिताना चाहिए।" : "सामान्य गतिविधियाँ ठीक हैं।"}`,
          report: (c, lines) => `पिछले दिनों का सारांश (${c}): ${lines}। विस्तृत चार्ट नीचे डैशबोर्ड में देखें।`,
          health: (cond, a, has) => has
            ? `आपकी प्रोफ़ाइल में ${cond} है। वर्तमान वायु गुणवत्ता सूचकांक ${spokenNum("hi", a)} के साथ, बाहर की गतिविधि सीमित रखें, मास्क पहनें और दवा पास रखें।`
            : `वायु गुणवत्ता सूचकांक ${spokenNum("hi", a)} है। स्वस्थ प्रोफ़ाइल के लिए सामान्य सावधानियाँ पर्याप्त हैं; प्रदूषण अधिक होने पर मास्क उपयोग करें।`,
          fallback: (q, c, t, a, b) => `आपने पूछा: "${q}"। ${c} — तापमान ${spokenNum("hi", t)} डिग्री, वायु गुणवत्ता सूचकांक ${spokenNum("hi", a)}${b ? ` (${b})` : ""}। तापमान, वायु गुणवत्ता, रिपोर्ट या स्वास्थ्य सलाह चुनें।`
        },
        mr: {
          code: "mr", voice: "mr-IN", voiceAlt: ["mr", "hi-IN", "hi"],
          label: "मर", title: "राष्ट्र वायु सहाय्यक",
          subtitle: "तापमान, AQI किंवा मागील अहवाल विचारा",
          placeholder: "तुमचा प्रश्न लिहा…", send: "पाठवा",
          chips: [{ id: "temp", label: "तापमान" }, { id: "aqi", label: "आता AQI" }, { id: "report", label: "मागील अहवाल" }, { id: "health", label: "आरोग्य सल्ला" }],
          speak: "ऐका", stop: "थांबवा", mute: "म्यूट", unmute: "अनम्यूट",
          greeting: "नमस्कार! मी तापमान, हवेची गुणवत्ता, मागील ७ दिवसांचे अहवाल किंवा आरोग्य सल्ला सांगू शकतो.",
          temp: (c, t, f, d) => `${c} येथे सध्या तापमान सुमारे ${spokenNum("mr", t)} डिग्री सेल्सिअस आहे${f != null ? ` आणि जाणवणे ${spokenNum("mr", f)} डिग्री` : ""}${d ? `. हवामान ${d}` : ""}.`,
          aqi: (c, a, b, p, high) => `${c} चा सध्याचा वायु गुणवत्ता निर्देशांक ${spokenNum("mr", a)} आहे${b ? ` म्हणजे ${b}` : ""}${p != null ? `. पी एम दोन दशांश पाच सुमारे ${spokenNum("mr", Math.round(Number(p)))} मायक्रोग्राम` : ""}. ${high ? "संवेदनशील व्यक्तींनी बाहेर कमी वेळ घालवावा." : "सामान्य बाह्य हालचाली ठीक आहेत."}`,
          report: (c, lines) => `${c} साठी अलीकडील सारांश: ${lines}. खालील डॅशबोर्ड चार्ट पहा.`,
          health: (cond, a, has) => has
            ? `तुमच्या प्रोफाइलमध्ये ${cond} आहे. वायु गुणवत्ता निर्देशांक ${spokenNum("mr", a)} असल्याने बाहेरील श्रम मर्यादित ठेवा, मास्क वापरा आणि औषध जवळ ठेवा.`
            : `वायु गुणवत्ता निर्देशांक ${spokenNum("mr", a)} आहे. निरोगी प्रोफाइलसाठी सामान्य काळजी पुरेशी आहे; प्रदूषण वाढल्यास मास्क वापरा.`,
          fallback: (q, c, t, a, b) => `तुम्ही विचारले: "${q}". ${c} — तापमान ${spokenNum("mr", t)} डिग्री, निर्देशांक ${spokenNum("mr", a)}${b ? ` (${b})` : ""}. तापमान, वायु गुणवत्ता, अहवाल किंवा आरोग्य निवडा.`
        },
        bn: {
          code: "bn", voice: "bn-IN", voiceAlt: ["bn", "hi-IN"],
          label: "বাং", title: "রাষ্ট্র বায়ু সহায়ক",
          subtitle: "তাপমাত্রা, AQI বা আগের রিপোর্ট জিজ্ঞাসা করুন",
          placeholder: "আপনার প্রশ্ন লিখুন…", send: "পাঠান",
          chips: [{ id: "temp", label: "তাপমাত্রা" }, { id: "aqi", label: "এখন AQI" }, { id: "report", label: "আগের রিপোর্ট" }, { id: "health", label: "স্বাস্থ্য পরামর্শ" }],
          speak: "শুনুন", stop: "থামান", mute: "মিউট", unmute: "আনমিউট",
          greeting: "নমস্কার! আমি তাপমাত্রা, বায়ুর মান, গত ৭ দিনের রিপোর্ট বা স্বাস্থ্য পরামর্শ বলতে পারি।",
          temp: (c, t, f, d) => `${c}-এ এখন তাপমাত্রা প্রায় ${t}°C${f != null ? ` (অনুভূত ${f}°C)` : ""}${d ? `। আবহাওয়া: ${d}` : ""}।`,
          aqi: (c, a, b, p, high) => `${c}-এর বর্তমান US AQI ${a} (${b || "অজানা"})${p != null ? `। PM2.5 প্রায় ${Number(p).toFixed(1)} µg/m³` : ""}। ${high ? "সংবেদনশীলদের বাইরে কম সময় থাকা উচিত।" : "সাধারণ বাইরের কাজ ঠিক আছে।"}`,
          report: (c, lines) => `${c}-এর সাম্প্রতিক সারাংশ: ${lines}। নিচের ড্যাশবোর্ড চার্ট দেখুন।`,
          health: (cond, a, has) => has
            ? `আপনার প্রোফাইলে ${cond} আছে। AQI ${a} থাকায় বাইরের পরিশ্রম সীমিত রাখুন, মাস্ক ব্যবহার করুন এবং ওষুধ কাছে রাখুন।`
            : `AQI ${a}। সুস্থ প্রোফাইলের জন্য সাধারণ সতর্কতাই যথেষ্ট; দূষণ বাড়লে মাস্ক ব্যবহার করুন।`,
          fallback: (q, c, t, a, b) => `আপনি জিজ্ঞাসা করেছেন: "${q}"। ${c} — ${t}°C, AQI ${a} (${b})। তাপমাত্রা, AQI, রিপোর্ট বা স্বাস্থ্য বেছে নিন।`
        },
        ta: {
          code: "ta", voice: "ta-IN", voiceAlt: ["ta", "hi-IN"],
          label: "தமி", title: "ராஷ்டிர வாயு உதவியாளர்",
          subtitle: "வெப்பநிலை, AQI அல்லது முந்தைய அறிக்கைகளைக் கேளுங்கள்",
          placeholder: "உங்கள் கேள்வியை எழுதுங்கள்…", send: "அனுப்பு",
          chips: [{ id: "temp", label: "வெப்பநிலை" }, { id: "aqi", label: "இப்போது AQI" }, { id: "report", label: "முந்தைய அறிக்கை" }, { id: "health", label: "சுகாதார ஆலோசனை" }],
          speak: "கேளுங்கள்", stop: "நிறுத்து", mute: "முடக்கு", unmute: "ஒலி",
          greeting: "வணக்கம்! வெப்பநிலை, காற்றின் தரம், கடந்த 7 நாள் அறிக்கைகள் அல்லது சுகாதார குறிப்புகளை நான் சொல்ல முடியும்.",
          temp: (c, t, f, d) => `${c}-இல் தற்போதைய வெப்பநிலை சுமார் ${t}°C${f != null ? ` (உணர்வு ${f}°C)` : ""}${d ? `. வானிலை: ${d}` : ""}.`,
          aqi: (c, a, b, p, high) => `${c}-இன் தற்போதைய US AQI ${a} (${b || "தெரியவில்லை"})${p != null ? `. PM2.5 சுமார் ${Number(p).toFixed(1)} µg/m³` : ""}. ${high ? "உணர்திறன் உள்ளவர்கள் வெளியில் குறைவாக இருக்க வேண்டும்." : "சாதாரண வெளி நடவடிக்கைகள் சரி."}`,
          report: (c, lines) => `${c}-க்கான சமீபத்திய சுருக்கம்: ${lines}. கீழே உள்ள டாஷ்போர்டு விளக்கப்படங்களைப் பாருங்கள்.`,
          health: (cond, a, has) => has
            ? `உங்கள் சுயவிவரத்தில் ${cond} உள்ளது. AQI ${a} ஆக இருப்பதால் வெளி உழைப்பைக் குறைக்கவும், முகமூடி அணியவும், மருந்தை அருகில் வைக்கவும்.`
            : `AQI ${a}. ஆரோக்கியமான சுயவிவரத்திற்கு சாதாரண முன்னெச்சரிக்கை போதும்; மாசு அதிகமானால் முகமூடி பயன்படுத்தவும்.`,
          fallback: (q, c, t, a, b) => `நீங்கள் கேட்டது: "${q}". ${c} — ${t}°C, AQI ${a} (${b}). வெப்பநிலை, AQI, அறிக்கை அல்லது சுகாதாரம் தேர்வு செய்யுங்கள்.`
        },
        te: {
          code: "te", voice: "te-IN", voiceAlt: ["te", "hi-IN"],
          label: "తెల", title: "రాష్ట్ర వాయు సహాయకుడు",
          subtitle: "ఉష్ణోగ్రత, AQI లేదా గత నివేదికలు అడగండి",
          placeholder: "మీ ప్రశ్న రాయండి…", send: "పంపు",
          chips: [{ id: "temp", label: "ఉష్ణోగ్రత" }, { id: "aqi", label: "ఇప్పుడు AQI" }, { id: "report", label: "గత నివేదికలు" }, { id: "health", label: "ఆరోగ్య సలహా" }],
          speak: "వినండి", stop: "ఆపు", mute: "మ్యూట్", unmute: "అన్‌మ్యూట్",
          greeting: "నమస్కారం! ఉష్ణోగ్రత, గాలి నాణ్యత, గత 7 రోజుల నివేదికలు లేదా ఆరోగ్య సలహా చెప్పగలను.",
          temp: (c, t, f, d) => `${c}లో ప్రస్తుత ఉష్ణోగ్రత సుమారు ${t}°C${f != null ? ` (అనుభవం ${f}°C)` : ""}${d ? `. వాతావరణం: ${d}` : ""}.`,
          aqi: (c, a, b, p, high) => `${c} ప్రస్తుత US AQI ${a} (${b || "తెలియదు"})${p != null ? `. PM2.5 సుమారు ${Number(p).toFixed(1)} µg/m³` : ""}. ${high ? "సున్నితమైన వారు బయట తక్కువ సమయం ఉండాలి." : "సాధారణ బయటి కార్యకలాపాలు సరిపోతాయి."}`,
          report: (c, lines) => `${c} ఇటీవలి సారాంశం: ${lines}. క్రింది డాష్‌బోర్డ్ చార్ట్‌లు చూడండి.`,
          health: (cond, a, has) => has
            ? `మీ ప్రొఫైల్‌లో ${cond} ఉంది. AQI ${a} ఉన్నందున బయటి శ్రమను పరిమితం చేయండి, మాస్క్ ధరించండి, మందులు దగ్గర ఉంచుకోండి.`
            : `AQI ${a}. ఆరోగ్యకరమైన ప్రొఫైల్‌కు సాధారణ జాగ్రత్తలు సరిపోతాయి; కాలుష్యం పెరిగితే మాస్క్ వాడండి.`,
          fallback: (q, c, t, a, b) => `మీరు అడిగింది: "${q}". ${c} — ${t}°C, AQI ${a} (${b}). ఉష్ణోగ్రత, AQI, నివేదిక లేదా ఆరోగ్యం ఎంచుకోండి.`
        },
        gu: {
          code: "gu", voice: "gu-IN", voiceAlt: ["gu", "hi-IN", "hi"],
          label: "ગુજ", title: "રાષ્ટ્ર વાયુ સહાયક",
          subtitle: "તાપમાન, AQI અથવા અગાઉના રિપોર્ટ પૂછો",
          placeholder: "તમારો પ્રશ્ન લખો…", send: "મોકલો",
          chips: [{ id: "temp", label: "તાપમાન" }, { id: "aqi", label: "હવે AQI" }, { id: "report", label: "અગાઉના રિપોર્ટ" }, { id: "health", label: "આરોગ્ય સલાહ" }],
          speak: "સાંભળો", stop: "રોકો", mute: "મ્યૂટ", unmute: "અનમ્યૂટ",
          greeting: "નમસ્તે! હું તાપમાન, હવાની ગુણવત્તા, છેલ્લા 7 દિવસના રિપોર્ટ અથવા આરોગ્ય સલાહ કહી શકું છું.",
          temp: (c, t, f, d) => `${c}માં હાલનું તાપમાન આશરે ${t}°C છે${f != null ? ` (અનુભવ ${f}°C)` : ""}${d ? `. હવામાન: ${d}` : ""}.`,
          aqi: (c, a, b, p, high) => `${c}નો વર્તમાન US AQI ${a} છે (${b || "અજ્ઞાત"})${p != null ? `. PM2.5 આશરે ${Number(p).toFixed(1)} µg/m³` : ""}. ${high ? "સંવેદનશીલ લોકોએ બહાર ઓછો સમય પસાર કરવો જોઈએ." : "સામાન્ય બહારની પ્રવૃત્તિઓ ઠીક છે."}`,
          report: (c, lines) => `${c} માટે તાજેતરનો સારાંશ: ${lines}. નીચેના ડેશબોર્ડ ચાર્ટ જુઓ.`,
          health: (cond, a, has) => has
            ? `તમારી પ્રોફાઇલમાં ${cond} છે. AQI ${a} હોવાથી બહારની મહેનત મર્યાદિત રાખો, માસ્ક પહેરો અને દવા પાસે રાખો.`
            : `AQI ${a} છે. સ્વસ્થ પ્રોફાઇલ માટે સામાન્ય સાવચેતી પૂરતી છે; પ્રદૂષણ વધે તો માસ્ક વાપરો.`,
          fallback: (q, c, t, a, b) => `તમે પૂછ્યું: "${q}". ${c} — ${t}°C, AQI ${a} (${b}). તાપમાન, AQI, રિપોર્ટ અથવા આરોગ્ય પસંદ કરો.`
        }
      };
      const t = LANGS[lang] || LANGS.en;

      const speak = (text) => {
        if (!window.speechSynthesis || mutedRef.current) return;
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        const cfg = LANGS[langRef.current] || LANGS.en;
        u.lang = cfg.voice;
        u.rate = (cfg.code === "hi" || cfg.code === "mr") ? 0.85 : (cfg.code === "en" ? 0.95 : 0.9);
        u.pitch = 1;
        u.onstart = () => setIsSpeaking(true);
        u.onend = () => setIsSpeaking(false);
        u.onerror = () => setIsSpeaking(false);
        const voices = window.speechSynthesis.getVoices() || [];
        let match = null;
        const nameHint = { hi: /hindi|हिन्द|हिंदी/i, mr: /marathi|मराठी/i, bn: /bengali|bangla|বাংলা/i, ta: /tamil|தமிழ்/i, te: /telugu|తెలుగు/i, gu: /gujarati|ગુજરાતી/i }[cfg.code];
        // Prefer exact lang tag, then prefix, then name hint
        for (const code of [cfg.voice, ...(cfg.voiceAlt || [])]) {
          const norm = code.toLowerCase().replace("_", "-");
          match = voices.find((v) => (v.lang || "").toLowerCase().replace("_", "-") === norm);
          if (match) break;
        }
        if (!match) {
          const prefix = (cfg.voice || "en").split("-")[0].toLowerCase();
          match = voices.find((v) => (v.lang || "").toLowerCase().startsWith(prefix));
        }
        if (!match && nameHint) {
          match = voices.find((v) => nameHint.test(v.name || ""));
        }
        if (match) {
          u.voice = match;
          u.lang = match.lang || cfg.voice;
        } else {
          u.lang = cfg.voice;
        }
        // Chrome sometimes needs a tick before speak for non-Latin
        setTimeout(() => window.speechSynthesis.speak(u), 40);
      };

      const stopSpeak = () => {
        window.speechSynthesis?.cancel();
        setIsSpeaking(false);
      };

      const toggleMute = () => {
        setMuted((m) => {
          const next = !m;
          if (next) stopSpeak();
          return next;
        });
      };

      const buildReply = (query) => {
        const activeLang = langRef.current || lang;
        const L = LANGS[activeLang] || LANGS.en;
        const q = (query || "").toLowerCase();
        const temp = weather?.temperature ?? weather?.temp ?? "—";
        const feels = weather?.feelsLike ?? weather?.apparent_temperature;
        const desc = weather?.weatherDesc || weather?.description || "";
        const usAqi = aqi?.us_aqi ?? aqi?.aqi ?? "—";
        const pm25 = aqi?.pm25 ?? aqi?.pm2_5;
        const band = typeof usAqi === "number" ? getAQIBand(usAqi).name : "";
        const city = cityName || (activeLang === "en" ? "your city" : "शहर");
        const condition = profile?.healthCondition || "None";
        const high = typeof usAqi === "number" && usAqi > 100;

        const isTemp = q === "temp" || /temp|temperature|garam|sardi|ठंड|तापमान|गर्मी|weather|मौसम|তাপ|வெப்ப|ఉష్ణ|તાપમાન/.test(q);
        const isAqi = q === "aqi" || /aqi|air quality|pollution|प्रदूषण|वायु|pm2|বায়ু|காற்று|గాలి|હવા/.test(q);
        const isReport = q === "report" || /report|previous|past|history|trend|पिछल|रिपोर्ट|রিপোর্ট|அறிக்கை|నివేదిక|રિપોર્ટ|7.?day/.test(q);
        const isHealth = q === "health" || /health|advice|asthma|heart|सलाह|अस्थमा|স্বাস্থ্য|சுகாதார|ఆరోగ్య|આરોગ્ય|inhaler|mask/.test(q);

        if (isTemp) return L.temp(city, temp, feels, desc);
        if (isAqi) return L.aqi(city, usAqi, band, pm25, high);
        if (isReport && trendData?.length) {
          const lines = trendData.slice(-4).map((d) => {
            if (activeLang === "hi") return `${d.day}: तापमान ${spokenNum("hi", d.temp)} डिग्री, सूचकांक ${spokenNum("hi", d.aqi)}`;
            if (activeLang === "mr") return `${d.day}: तापमान ${spokenNum("mr", d.temp)} डिग्री, निर्देशांक ${spokenNum("mr", d.aqi)}`;
            return `${d.day}: ${d.temp}°C, AQI ${d.aqi}`;
          }).join("; ");
          return L.report(city, lines);
        }
        if (isHealth) return L.health(condition, usAqi, condition !== "None");
        return L.fallback(query, city, temp, usAqi, band);
      };

      const pushReply = (queryForLogic, displayText) => {
        const reply = buildReply(queryForLogic);
        setMessages((m) => [
          ...m,
          { role: "user", text: displayText || queryForLogic },
          { role: "bot", text: reply }
        ]);
        if (!mutedRef.current) speak(reply);
      };

      const onSend = () => {
        const q = input.trim();
        if (!q) return;
        setInput("");
        pushReply(q, q);
      };

      const onChip = (id) => {
        const label = t.chips.find((c) => c.id === id)?.label || id;
        pushReply(id, label);
      };

      useEffect(() => {
        setMessages([{ role: "bot", text: t.greeting }]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [lang]);

      return (
        <div className="glass-card rounded-3xl border border-white/40 shadow-lg p-3.5 sm:p-4 flex flex-col min-h-[220px] max-h-[320px]">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0">
                <Icon name="sparkles" className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs font-bold text-slate-900 truncate">{t.title}</h3>
                <p className="text-[10px] text-slate-500 truncate">{t.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <button
                type="button"
                onClick={toggleMute}
                title={muted ? t.unmute : t.mute}
                className={`px-2 py-1 rounded-lg text-[10px] font-bold border transition ${
                  muted
                    ? "bg-rose-50 text-rose-700 border-rose-200"
                    : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200"
                }`}
              >
                {muted ? "🔇" : "🔊"}
              </button>
              <select
                value={lang}
                onChange={(e) => { stopSpeak(); setLang(e.target.value); }}
                className="text-[10px] font-bold rounded-lg border border-slate-200 bg-white px-1.5 py-1 outline-none focus:ring-2 focus:ring-teal-400/40 max-w-[88px]"
                title="Language / भाषा"
              >
                {Object.keys(LANGS).map((code) => (
                  <option key={code} value={code}>{LANGS[code].label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-2">
            {t.chips.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => onChip(c.id)}
                className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-teal-50 text-teal-800 border border-teal-100 hover:bg-teal-100 transition"
              >
                {c.label}
              </button>
            ))}
          </div>

          <div ref={listRef} className="flex-1 overflow-y-auto space-y-2 mb-2 pr-0.5 min-h-[80px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[90%] rounded-2xl px-2.5 py-1.5 text-[11px] leading-snug ${
                    msg.role === "user"
                      ? "bg-teal-600 text-white rounded-br-md"
                      : "bg-slate-100 text-slate-800 rounded-bl-md"
                  }`}
                >
                  {msg.text}
                  {msg.role === "bot" && (
                    <button
                      type="button"
                      onClick={() => (isSpeaking ? stopSpeak() : speak(msg.text))}
                      className="ml-1.5 inline-flex items-center gap-0.5 text-[9px] font-bold text-teal-700 hover:underline align-middle"
                    >
                      <Icon name="volume-2" className="w-3 h-3" />
                      {isSpeaking ? t.stop : t.speak}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSend()}
              placeholder={t.placeholder}
              className="flex-1 text-[11px] rounded-xl border border-slate-200 bg-white/90 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-400/40"
            />
            <button
              type="button"
              onClick={onSend}
              className="px-3 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-[11px] font-bold transition"
            >
              {t.send}
            </button>
          </div>
        </div>
      );
    }

    function ShareAdvisoryBar({ cityName, weather, aqi, severity, profile }) {
      const [copied, setCopied] = useState(false);
      const temp = weather?.temperature_2m ?? weather?.temperature ?? "—";
      const usAqi = aqi?.us_aqi ?? aqi?.aqi ?? "—";
      const band = typeof usAqi === "number" ? getAQIBand(usAqi).name : "";
      const condition = profile?.healthCondition && profile.healthCondition !== "None"
        ? profile.healthCondition
        : "General";

      const buildText = () => {
        const lines = [
          `Rashtra Vayu — Daily Air & Weather Brief`,
          `City: ${cityName || "—"}`,
          `Temperature: ${temp}°C`,
          `US AQI: ${usAqi}${band ? ` (${band})` : ""}`,
          `Health focus: ${condition}`,
          `Risk level: ${severity || "—"}`,
          `Tip: Limit outdoor exposure if AQI is above 100; carry medication if you have a respiratory or heart condition.`,
          `— Generated by Rashtra Vayu`
        ];
        return lines.join("\n");
      };

      const onCopy = async () => {
        try {
          await navigator.clipboard.writeText(buildText());
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch (e) {
          const ta = document.createElement("textarea");
          ta.value = buildText();
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        }
      };

      const onDownload = () => {
        const blob = new Blob([buildText()], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `rashtra-vayu-${(cityName || "report").replace(/\s+/g, "-").toLowerCase()}.txt`;
        a.click();
        URL.revokeObjectURL(url);
      };

      return (
        <div className="glass-card rounded-2xl border border-white/40 px-3 py-2.5 flex flex-wrap items-center justify-between gap-2 shadow-sm">
          <div className="min-w-0">
            <p className="text-[11px] font-bold text-slate-800">Share today’s brief</p>
            <p className="text-[10px] text-slate-500 truncate">{cityName || "Select a city"} · AQI {usAqi} · {temp}°C</p>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button
              type="button"
              onClick={onCopy}
              className="px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-teal-50 text-teal-800 border border-teal-100 hover:bg-teal-100 transition"
            >
              {copied ? "Copied" : "Copy"}
            </button>
            <button
              type="button"
              onClick={onDownload}
              className="px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition"
            >
              Download
            </button>
          </div>
        </div>
      );
    }

    function AdvisoryCard({
      advisoryText,
      severity = "Moderate",
      whyFactors = [],
      profile,
      isLoadingAdvisory = false,
      isLiveLLM = false
    }) {
      const [isWhyOpen, setIsWhyOpen] = useState(false);
      const [isSpeaking, setIsSpeaking] = useState(false);
      const [copied, setCopied] = useState(false);

      const severityStyles = {
        Low: {
          badgeBg: "bg-emerald-100/80 text-emerald-800 border-emerald-300",
          indicator: "bg-emerald-500",
          borderAccent: "border-emerald-200/80",
          cardBg: "from-teal-50/50 via-emerald-50/30 to-white",
          iconBg: "bg-emerald-100 text-emerald-700"
        },
        Moderate: {
          badgeBg: "bg-amber-100/80 text-amber-800 border-amber-300",
          indicator: "bg-amber-500",
          borderAccent: "border-amber-200/80",
          cardBg: "from-amber-50/40 via-orange-50/20 to-white",
          iconBg: "bg-amber-100 text-amber-700"
        },
        High: {
          badgeBg: "bg-rose-100/90 text-rose-800 border-rose-300",
          indicator: "bg-rose-500",
          borderAccent: "border-rose-300/80",
          cardBg: "from-rose-50/50 via-orange-50/30 to-white",
          iconBg: "bg-rose-100 text-rose-700"
        }
      }[severity] || {
        badgeBg: "bg-teal-100 text-teal-800 border-teal-300",
        indicator: "bg-teal-500",
        borderAccent: "border-teal-200",
        cardBg: "from-teal-50/40 via-cyan-50/20 to-white",
        iconBg: "bg-teal-100 text-teal-700"
      };

      const handleSpeak = () => {
        if (!('speechSynthesis' in window)) return;
        if (isSpeaking) {
          window.speechSynthesis.cancel();
          setIsSpeaking(false);
          return;
        }
        const utterance = new SpeechSynthesisUtterance(advisoryText);
        utterance.rate = 1.0;
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      };

      const handleCopy = () => {
        if (navigator.clipboard && advisoryText) {
          navigator.clipboard.writeText(advisoryText);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      };

      return (
        <div className={`bg-gradient-to-br ${severityStyles.cardBg} rounded-3xl p-6 sm:p-8 border-2 ${severityStyles.borderAccent} shadow-md shadow-teal-900/5 relative overflow-hidden transition-all duration-300`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar */}
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="flex items-center space-x-3.5">
              <div className={`w-12 h-12 rounded-2xl ${severityStyles.iconBg} flex items-center justify-center shadow-2xs ring-4 ring-white`}>
                <Icon name="heart-pulse" className="w-6 h-6 stroke-[2.2] animate-pulse" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    AI Health Advisory
                  </h3>
                  {isLiveLLM && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 border border-violet-200">
                      Llama 3.1
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500">
                  Personalized for: <span className="font-semibold text-slate-700">{profile.ageGroup.split(' ')[0]}</span> • <span className="font-semibold text-slate-700">{profile.healthCondition}</span> • <span className="font-semibold text-slate-700">{profile.occupation.split(' ')[0]}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-extrabold border ${severityStyles.badgeBg} shadow-2xs tracking-wide`}>
                <span className={`w-2 h-2 rounded-full mr-2 ${severityStyles.indicator} animate-ping`} />
                <span>{severity.toUpperCase()} RISK</span>
              </div>
            </div>
          </div>

          {/* Advisory Content / Loading Skeleton */}
          {isLoadingAdvisory ? (
            <div className="py-6 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-10 h-10 rounded-full border-3 border-teal-500 border-t-transparent animate-spin" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-800 animate-pulse">
                  Thinking about your health conditions...
                </p>
                <p className="text-xs text-slate-500">
                  Analyzing pulmonary risks for {profile.healthCondition !== "None" ? profile.healthCondition : "baseline profile"}
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-6">
              <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed tracking-normal">
                "{advisoryText}"
              </p>

              <div className="flex items-center space-x-2 mt-4">
                <button
                  onClick={handleSpeak}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/90 hover:bg-white text-xs font-semibold text-slate-700 border border-slate-200 shadow-2xs transition hover:border-teal-300"
                >
                  <Icon name="volume-2" className={`w-3.5 h-3.5 ${isSpeaking ? 'text-teal-600 animate-bounce' : 'text-slate-500'}`} />
                  <span>{isSpeaking ? "Stop Audio" : "Listen Advice"}</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/90 hover:bg-white text-xs font-semibold text-slate-700 border border-slate-200 shadow-2xs transition hover:border-teal-300"
                >
                  {copied ? (
                    <>
                      <Icon name="check" className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Icon name="copy" className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Why this advice? Collapsible */}
          {whyFactors && whyFactors.length > 0 && !isLoadingAdvisory && (
            <div className="border-t border-slate-200/80 pt-4 mt-2">
              <button
                onClick={() => setIsWhyOpen(!isWhyOpen)}
                className="w-full flex items-center justify-between text-left py-1 group"
              >
                <div className="flex items-center space-x-2">
                  <Icon name="info" className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-bold text-slate-700 group-hover:text-teal-700 transition">
                    Why this advice? ({whyFactors.length} profile factors identified)
                  </span>
                </div>
                <Icon
                  name={isWhyOpen ? "chevron-up" : "chevron-down"}
                  className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition"
                />
              </button>

              {isWhyOpen && (
                <div className="mt-3 space-y-2.5 bg-white/80 backdrop-blur-xs rounded-2xl p-4 border border-slate-200/70 animate-fadeIn">
                  {whyFactors.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                      <div className="flex-1">
                        <span className="font-bold text-slate-800">{item.factor}: </span>
                        <span className="text-slate-600 leading-relaxed">{item.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-200/50">
            <span className="flex items-center space-x-1.5">
              <Icon name="shield" className="w-3.5 h-3.5 text-slate-400" />
              <span>AI-generated guidance, not medical advice. Consult a physician for acute symptoms.</span>
            </span>
            <span className="text-[10px] text-slate-400 hidden sm:inline">Rashtra Vayu Health Engine</span>
          </div>
        </div>
      );
    }

    function ComparisonStrip({ aqi, temp, onSelectPersona, currentProfile }) {
      const currentAQI = Math.round(aqi || 80);
      const currentTemp = Math.round(temp || 26);

      return (
        <section className="mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200/60">
                  Judges Showcase
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Personalization at a Glance
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Under these exact same conditions, see how identical air poses completely different risks
              </p>
            </div>
            <span className="text-[11px] text-slate-400">
              AQI: <strong className="text-slate-700">{currentAQI}</strong> • Temp: <strong className="text-slate-700">{currentTemp}°C</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {COMPARISON_PERSONAS.map((persona) => {
              const advisory = persona.getAdvisory(currentAQI, currentTemp);
              const severity = persona.getSeverity(currentAQI);
              const isCurrentActive =
                currentProfile?.healthCondition === persona.profile.healthCondition &&
                currentProfile?.occupation.startsWith(persona.profile.occupation.split(' ')[0]);

              const styles = {
                rose: {
                  cardBg: isCurrentActive ? "bg-rose-50/90 ring-2 ring-rose-500" : "bg-white hover:bg-rose-50/40",
                  border: "border-rose-100",
                  iconBg: "bg-rose-100 text-rose-700",
                  badge: "bg-rose-100 text-rose-800 border-rose-200",
                  tag: "text-rose-600 bg-rose-50 border-rose-200"
                },
                amber: {
                  cardBg: isCurrentActive ? "bg-amber-50/90 ring-2 ring-amber-500" : "bg-white hover:bg-amber-50/40",
                  border: "border-amber-100",
                  iconBg: "bg-amber-100 text-amber-700",
                  badge: "bg-amber-100 text-amber-800 border-amber-200",
                  tag: "text-amber-600 bg-amber-50 border-amber-200"
                },
                teal: {
                  cardBg: isCurrentActive ? "bg-teal-50/90 ring-2 ring-teal-500" : "bg-white hover:bg-teal-50/40",
                  border: "border-teal-100",
                  iconBg: "bg-teal-100 text-teal-700",
                  badge: "bg-teal-100 text-teal-800 border-teal-200",
                  tag: "text-teal-600 bg-teal-50 border-teal-200"
                }
              }[persona.color];

              return (
                <div
                  key={persona.id}
                  className={`rounded-3xl p-5 border ${styles.border} ${styles.cardBg} shadow-2xs hover:shadow-md transition-all flex flex-col justify-between relative group`}
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2.5">
                        <div className={`w-9 h-9 rounded-xl ${styles.iconBg} flex items-center justify-center font-bold`}>
                          <Icon name={persona.icon} className="w-5 h-5 stroke-[2]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{persona.title}</h4>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${styles.tag}`}>
                            {persona.tag}
                          </span>
                        </div>
                      </div>

                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${styles.badge}`}>
                        {severity.toUpperCase()} RISK
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 font-medium leading-relaxed mb-4">
                      "{advisory}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100/80 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      {persona.profile.healthCondition !== "None" ? persona.profile.healthCondition : "Healthy"} • {persona.profile.occupation.split(' ')[0]}
                    </span>
                    <button
                      onClick={() => onSelectPersona(persona.profile)}
                      className="text-xs font-bold text-teal-700 hover:text-teal-800 bg-white hover:bg-teal-50 px-2.5 py-1 rounded-xl border border-slate-200 hover:border-teal-300 transition shadow-2xs"
                    >
                      {isCurrentActive ? "Active View" : "Try Profile →"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      );
    }

    function TrendChart({ trendData = [], currentCityName = "Bhopal" }) {
      const [activeTab, setActiveTab] = useState("both");
      const [isHistoryExpanded, setIsHistoryExpanded] = useState(true);
      const [hoveredIdx, setHoveredIdx] = useState(null);

      if (!trendData || trendData.length === 0) return null;

      const temps = trendData.map((d) => d.temp);
      const aqis = trendData.map((d) => d.aqi);
      const avgTemp = Math.round(temps.reduce((a, b) => a + b, 0) / temps.length);
      const peakTemp = Math.max(...temps);
      const lowTemp = Math.min(...temps);
      const peakAQI = Math.max(...aqis);
      const avgAQI = Math.round(aqis.reduce((a, b) => a + b, 0) / aqis.length);
      const daysUnhealthy = aqis.filter((a) => a > 100).length;
      const daysGood = aqis.filter((a) => a <= 50).length;

      const minTemp = Math.min(...temps) - 3;
      const maxTemp = Math.max(...temps) + 3;
      const tempRange = Math.max(1, maxTemp - minTemp);
      const minAQI = 0;
      const maxAQI = Math.max(160, Math.max(...aqis) + 25);
      const aqiRange = maxAQI - minAQI;

      const chartWidth = 520;
      const chartHeight = 180;
      const paddingX = 42;
      const paddingY = 28;
      const usableWidth = chartWidth - paddingX * 2;
      const usableHeight = chartHeight - paddingY * 2;

      const getTempCoords = (val, idx) => {
        const x = paddingX + (idx / (trendData.length - 1)) * usableWidth;
        const y = chartHeight - paddingY - ((val - minTemp) / tempRange) * usableHeight;
        return { x, y };
      };
      const getAQICoords = (val, idx) => {
        const x = paddingX + (idx / (trendData.length - 1)) * usableWidth;
        const y = chartHeight - paddingY - ((val - minAQI) / aqiRange) * usableHeight;
        return { x, y };
      };

      const tempPoints = trendData.map((d, i) => {
        const { x, y } = getTempCoords(d.temp, i);
        return `${x},${y}`;
      }).join(" ");
      const aqiPoints = trendData.map((d, i) => {
        const { x, y } = getAQICoords(d.aqi, i);
        return `${x},${y}`;
      }).join(" ");

      // Area fill path (line + close to baseline)
      const tempArea = (() => {
        const pts = trendData.map((d, i) => getTempCoords(d.temp, i));
        const first = pts[0];
        const last = pts[pts.length - 1];
        return `M ${first.x},${chartHeight - paddingY} L ${pts.map((p) => `${p.x},${p.y}`).join(" L ")} L ${last.x},${chartHeight - paddingY} Z`;
      })();
      const aqiArea = (() => {
        const pts = trendData.map((d, i) => getAQICoords(d.aqi, i));
        const first = pts[0];
        const last = pts[pts.length - 1];
        return `M ${first.x},${chartHeight - paddingY} L ${pts.map((p) => `${p.x},${p.y}`).join(" L ")} L ${last.x},${chartHeight - paddingY} Z`;
      })();

      return (
        <section className="mt-8 glass-card rounded-3xl p-5 sm:p-7 border border-white/40 shadow-lg">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                  <Icon name="activity" className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">7-Day Environmental Dashboard</h3>
                  <p className="text-[11px] text-slate-500">{currentCityName} · Temperature & Air Quality progression</p>
                </div>
              </div>
            </div>
            <div className="flex items-center bg-slate-100/90 p-1 rounded-xl self-start sm:self-auto">
              {["both", "temp", "aqi"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 text-[11px] font-semibold rounded-lg transition ${
                    activeTab === tab ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {tab === "both" ? "Dual View" : tab === "temp" ? "Temperature" : "AQI"}
                </button>
              ))}
            </div>
          </div>

          {/* KPI Summary Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
            {[
              { label: "Avg Temp", value: `${avgTemp}°C`, sub: `${lowTemp}–${peakTemp}°C`, color: "text-sky-600", bg: "bg-sky-50" },
              { label: "Peak Temp", value: `${peakTemp}°C`, sub: "Highest in period", color: "text-rose-600", bg: "bg-rose-50" },
              { label: "Avg AQI", value: avgAQI, sub: getAQIBand(avgAQI).name.split(" ")[0], color: "text-orange-600", bg: "bg-orange-50" },
              { label: "Peak AQI", value: peakAQI, sub: getAQIBand(peakAQI).name.split(" ")[0], color: "text-amber-700", bg: "bg-amber-50" },
              { label: "Unhealthy Days", value: daysUnhealthy, sub: "AQI > 100", color: "text-rose-700", bg: "bg-rose-50" },
              { label: "Good Days", value: daysGood, sub: "AQI ≤ 50", color: "text-emerald-600", bg: "bg-emerald-50" }
            ].map((kpi, i) => (
              <div key={i} className={`${kpi.bg} rounded-2xl px-3 py-2.5 border border-white/60`}>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-0.5">{kpi.label}</div>
                <div className={`text-lg font-extrabold ${kpi.color} leading-tight`}>{kpi.value}</div>
                <div className="text-[10px] text-slate-400 mt-0.5 truncate">{kpi.sub}</div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {(activeTab === "both" || activeTab === "temp") && (
              <div className="bg-white/70 rounded-2xl p-4 sm:p-5 border border-slate-100/80 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500 ring-2 ring-sky-200" />
                    <span className="text-xs font-bold text-slate-800">Temperature (°C)</span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-slate-500 font-medium">
                    <span>Low {lowTemp}°</span>
                    <span className="text-slate-300">|</span>
                    <span>Avg {avgTemp}°</span>
                    <span className="text-slate-300">|</span>
                    <span>High {peakTemp}°</span>
                  </div>
                </div>
                <div className="relative w-full h-48">
                  <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="tempFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                    {[0, 0.33, 0.66, 1].map((ratio, i) => {
                      const y = chartHeight - paddingY - ratio * usableHeight;
                      const labelVal = Math.round(minTemp + ratio * tempRange);
                      return (
                        <g key={i}>
                          <line x1={paddingX} y1={y} x2={chartWidth - paddingX} y2={y} stroke="#E2E8F0" strokeDasharray="4 3" strokeWidth="1" />
                          <text x={paddingX - 8} y={y + 3.5} textAnchor="end" className="text-[9px] fill-slate-400 font-medium">{labelVal}°</text>
                        </g>
                      );
                    })}
                    <path d={tempArea} fill="url(#tempFill)" />
                    <polyline fill="none" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points={tempPoints} />
                    {trendData.map((d, i) => {
                      const { x, y } = getTempCoords(d.temp, i);
                      const active = hoveredIdx === i;
                      return (
                        <g key={i} onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)} className="cursor-pointer">
                          <circle cx={x} cy={y} r={active ? 7 : 5} fill="#fff" stroke="#0284C7" strokeWidth="2.5" className="transition-all" />
                          <text x={x} y={y - 12} textAnchor="middle" className="text-[10px] font-bold fill-slate-700">{d.temp}°</text>
                          <text x={x} y={chartHeight - 5} textAnchor="middle" className="text-[9px] font-semibold fill-slate-400">{d.day}</text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>
            )}

            {(activeTab === "both" || activeTab === "aqi") && (
              <div className="bg-white/70 rounded-2xl p-4 sm:p-5 border border-slate-100/80 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 ring-2 ring-orange-200" />
                    <span className="text-xs font-bold text-slate-800">US AQI Trend</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-medium">
                    <span className="flex items-center gap-1"><span className="w-2 h-0.5 bg-emerald-500 rounded" /> Good ≤50</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-0.5 bg-orange-500 rounded" /> Sensitive 100</span>
                  </div>
                </div>
                <div className="relative w-full h-48">
                  <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="aqiFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F97316" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#F97316" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                    {/* Risk zone bands */}
                    {(() => {
                      const y50 = chartHeight - paddingY - ((50 - minAQI) / aqiRange) * usableHeight;
                      const y100 = chartHeight - paddingY - ((100 - minAQI) / aqiRange) * usableHeight;
                      const y150 = chartHeight - paddingY - ((150 - minAQI) / aqiRange) * usableHeight;
                      return (
                        <g>
                          <rect x={paddingX} y={y50} width={usableWidth} height={Math.max(0, (chartHeight - paddingY) - y50)} fill="#10B981" opacity="0.06" />
                          <rect x={paddingX} y={y100} width={usableWidth} height={Math.max(0, y50 - y100)} fill="#F59E0B" opacity="0.06" />
                          <rect x={paddingX} y={Math.max(paddingY, y150)} width={usableWidth} height={Math.max(0, y100 - Math.max(paddingY, y150))} fill="#F97316" opacity="0.07" />
                          <line x1={paddingX} y1={y50} x2={chartWidth - paddingX} y2={y50} stroke="#10B981" strokeDasharray="4 3" strokeWidth="1" opacity="0.7" />
                          <line x1={paddingX} y1={y100} x2={chartWidth - paddingX} y2={y100} stroke="#F97316" strokeDasharray="4 3" strokeWidth="1.2" />
                          <text x={chartWidth - paddingX + 4} y={y100 + 3} className="text-[8px] fill-orange-600 font-bold">100</text>
                          <text x={paddingX - 6} y={y50 + 3} textAnchor="end" className="text-[9px] fill-slate-400 font-medium">50</text>
                        </g>
                      );
                    })()}
                    <path d={aqiArea} fill="url(#aqiFill)" />
                    <polyline fill="none" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points={aqiPoints} />
                    {trendData.map((d, i) => {
                      const { x, y } = getAQICoords(d.aqi, i);
                      const band = getAQIBand(d.aqi);
                      const active = hoveredIdx === i;
                      return (
                        <g key={i} onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)} className="cursor-pointer">
                          <circle cx={x} cy={y} r={active ? 7 : 5} fill="#fff" stroke={band.color} strokeWidth="2.5" className="transition-all" />
                          <text x={x} y={y - 12} textAnchor="middle" className="text-[10px] font-bold fill-slate-800">{d.aqi}</text>
                          <text x={x} y={chartHeight - 5} textAnchor="middle" className="text-[9px] font-semibold fill-slate-400">{d.day}</text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>
            )}
          </div>

          {/* Hover insight + History log */}
          {hoveredIdx != null && trendData[hoveredIdx] && (
            <div className="mt-4 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="font-bold text-slate-800">{trendData[hoveredIdx].day}</span>
              <span>{trendData[hoveredIdx].date}</span>
              <span className="text-sky-600 font-semibold">{trendData[hoveredIdx].temp}°C</span>
              <span className="text-orange-600 font-semibold">AQI {trendData[hoveredIdx].aqi}</span>
              <span className="text-slate-500">{trendData[hoveredIdx].band}</span>
              <span className="text-slate-400 truncate max-w-md">{trendData[hoveredIdx].advisory}</span>
            </div>
          )}

          <div className="mt-6 border-t border-slate-100 pt-4">
            <button
              onClick={() => setIsHistoryExpanded(!isHistoryExpanded)}
              className="w-full flex items-center justify-between text-left group"
            >
              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Daily Advisory Log</span>
                <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{trendData.length} days</span>
              </div>
              <div className="flex items-center space-x-1 text-[11px] text-teal-700 font-semibold group-hover:underline">
                <span>{isHistoryExpanded ? "Collapse" : "Expand"}</span>
                <Icon name={isHistoryExpanded ? "chevron-up" : "chevron-down"} className="w-3.5 h-3.5" />
              </div>
            </button>

            {isHistoryExpanded && (
              <div className="mt-3 space-y-1.5 max-h-64 overflow-y-auto pr-1">
                {trendData.slice().reverse().map((item, idx) => {
                  const band = getAQIBand(item.aqi);
                  return (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-2.5 px-3 rounded-xl hover:bg-slate-50/90 border border-transparent hover:border-slate-100 transition">
                      <div className="flex items-center space-x-3 min-w-0">
                        <div className="text-center min-w-[48px]">
                          <div className="text-[11px] font-bold text-slate-800">{item.day}</div>
                          <div className="text-[9px] text-slate-400">{item.date}</div>
                        </div>
                        <div className="h-8 w-px bg-slate-200 flex-shrink-0" />
                        <div className="min-w-0">
                          <div className="text-[11px] font-semibold text-slate-700 truncate">{item.advisory}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">{item.temp}°C peak</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 self-end sm:self-auto flex-shrink-0">
                        <span className="text-[11px] font-bold text-slate-600 tabular-nums">AQI {item.aqi}</span>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${band.bg} ${band.text} border ${band.border}`}>
                          {band.name.length > 18 ? band.name.split(" ")[0] : band.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      );
    }

    const AGE_GROUPS = [
      { id: "Child (0-12)", label: "Child", sub: "0 - 12 yrs", emoji: "🧒" },
      { id: "Teen (13-19)", label: "Teen", sub: "13 - 19 yrs", emoji: "🎒" },
      { id: "Adult (20-59)", label: "Adult", sub: "20 - 59 yrs", emoji: "👤" },
      { id: "Senior (60+)", label: "Senior", sub: "60+ yrs", emoji: "🧓" },
    ];

    const HEALTH_CONDITIONS = [
      { id: "None", label: "None / Healthy", sub: "Standard baseline risk", emoji: "🛡️" },
      { id: "Asthma", label: "Asthma", sub: "Airway hyperresponsiveness", emoji: "🫁" },
      { id: "Heart condition", label: "Heart Condition", sub: "Cardiovascular sensitivity", emoji: "❤️" },
      { id: "Allergies", label: "Allergies / Rhinitis", sub: "Pollen & particle triggers", emoji: "🌸" },
      { id: "Pregnant", label: "Pregnant", sub: "Maternal oxygenation priority", emoji: "🤰" },
      { id: "COPD / lung condition", label: "COPD / Chronic Lung", sub: "Reduced pulmonary reserve", emoji: "🌬️" },
    ];

    const OCCUPATIONS = [
      { id: "Desk job (mostly indoors)", label: "Desk Job", sub: "Mostly indoors / filtered air", emoji: "💻" },
      { id: "Outdoor worker", label: "Outdoor Worker", sub: "High ambient shift exposure", emoji: "🏗️" },
      { id: "Student", label: "Student", sub: "Campus transit & sports", emoji: "📚" },
      { id: "Delivery / commutes a lot", label: "Delivery / Commuter", sub: "Heavy street traffic & exhaust", emoji: "🛵" },
      { id: "Retired / mostly home", label: "Retired / Home", sub: "Indoor domestic lifestyle", emoji: "🏡" },
    ];

    function ProfileModal({ isOpen, onClose, profile, onSaveProfile }) {
      if (!isOpen) return null;

      const [ageGroup, setAgeGroup] = useState(profile.ageGroup || "Adult (20-59)");
      const [healthCondition, setHealthCondition] = useState(profile.healthCondition || "None");
      const [occupation, setOccupation] = useState(profile.occupation || "Desk job (mostly indoors)");

      const handleSave = () => {
        onSaveProfile({ ageGroup, healthCondition, occupation });
        onClose();
      };

      const applyPreset = (presetAge, presetCondition, presetOcc) => {
        setAgeGroup(presetAge);
        setHealthCondition(presetCondition);
        setOccupation(presetOcc);
      };

      return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-100 relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
            >
              <Icon name="close" className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                <Icon name="sliders" className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Your Health Profile</h2>
                <p className="text-xs text-slate-500">15-second setup — customizes your real-time air advisories</p>
              </div>
            </div>

            {/* Quick Demo Presets */}
            <div className="mb-5 p-2.5 rounded-2xl bg-teal-50/70 border border-teal-100 flex items-center justify-between flex-wrap gap-2">
              <span className="text-[11px] font-semibold text-teal-800 uppercase tracking-wide flex items-center gap-1">
                <Icon name="sparkles" className="w-3.5 h-3.5 text-teal-600" />
                Quick Presets for Demo:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => applyPreset("Adult (20-59)", "Asthma", "Outdoor worker")}
                  className="text-xs px-2.5 py-1 bg-white hover:bg-rose-50 text-slate-700 hover:text-rose-700 border border-slate-200 rounded-lg transition font-medium shadow-2xs"
                >
                  🫁 Asthma + Outdoor
                </button>
                <button
                  onClick={() => applyPreset("Senior (60+)", "Heart condition", "Retired / mostly home")}
                  className="text-xs px-2.5 py-1 bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-700 border border-slate-200 rounded-lg transition font-medium shadow-2xs"
                >
                  ❤️ Senior Heart
                </button>
                <button
                  onClick={() => applyPreset("Adult (20-59)", "None", "Desk job (mostly indoors)")}
                  className="text-xs px-2.5 py-1 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 rounded-lg transition font-medium shadow-2xs"
                >
                  🛡️ Healthy Baseline
                </button>
              </div>
            </div>

            <div className="space-y-5">
              {/* Age */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  1. Age Group
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {AGE_GROUPS.map((item) => {
                    const isSelected = ageGroup === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setAgeGroup(item.id)}
                        className={`p-3 rounded-2xl border text-center transition flex flex-col items-center justify-center gap-1 ${
                          isSelected
                            ? "bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-600/20 scale-[1.02]"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200"
                        }`}
                      >
                        <span className="text-xl">{item.emoji}</span>
                        <span className="text-xs font-bold">{item.label}</span>
                        <span className={`text-[10px] ${isSelected ? "text-teal-100" : "text-slate-400"}`}>
                          {item.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Condition */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  2. Pre-Existing Health Condition
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-44 overflow-y-auto pr-1">
                  {HEALTH_CONDITIONS.map((item) => {
                    const isSelected = healthCondition === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setHealthCondition(item.id)}
                        className={`p-2.5 rounded-2xl border text-left transition flex items-center space-x-2.5 ${
                          isSelected
                            ? "bg-teal-50 border-teal-500 ring-2 ring-teal-500/20 shadow-2xs"
                            : "bg-slate-50 hover:bg-slate-100/80 border-slate-200"
                        }`}
                      >
                        <span className="text-xl p-1 bg-white rounded-xl shadow-2xs border border-slate-100">
                          {item.emoji}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 truncate">{item.label}</div>
                          <div className="text-[10px] text-slate-500 truncate">{item.sub}</div>
                        </div>
                        {isSelected && (
                          <div className="w-4 h-4 rounded-full bg-teal-600 text-white flex items-center justify-center">
                            <Icon name="check" className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Occupation */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  3. Occupation / Daily Exposure
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {OCCUPATIONS.map((item) => {
                    const isSelected = occupation === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setOccupation(item.id)}
                        className={`p-2.5 rounded-2xl border text-left transition flex items-center space-x-2.5 ${
                          isSelected
                            ? "bg-teal-50 border-teal-500 ring-2 ring-teal-500/20 shadow-2xs"
                            : "bg-slate-50 hover:bg-slate-100/80 border-slate-200"
                        }`}
                      >
                        <span className="text-xl p-1 bg-white rounded-xl shadow-2xs border border-slate-100">
                          {item.emoji}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 truncate">{item.label}</div>
                          <div className="text-[10px] text-slate-500 truncate">{item.sub}</div>
                        </div>
                        {isSelected && (
                          <div className="w-4 h-4 rounded-full bg-teal-600 text-white flex items-center justify-center">
                            <Icon name="check" className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-teal-600/25 transition transform active:scale-95 flex items-center space-x-2"
              >
                <span>Update Advisory</span>
                <Icon name="check" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      );
    }

    function DataLoadingSkeleton() {
      return (
        <div className="space-y-6 animate-pulse">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/40 shadow-xs space-y-4">
              <div className="flex justify-between items-center">
                <div className="h-4 w-32 bg-slate-200 rounded-lg" />
                <div className="h-4 w-20 bg-slate-100 rounded-lg" />
              </div>
              <div className="flex justify-between items-center py-4">
                <div className="space-y-2">
                  <div className="h-16 w-28 bg-slate-200 rounded-2xl" />
                  <div className="h-4 w-36 bg-slate-100 rounded-lg" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-slate-100" />
              </div>
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
                <div className="h-14 bg-slate-100 rounded-2xl" />
                <div className="h-14 bg-slate-100 rounded-2xl" />
                <div className="h-14 bg-slate-100 rounded-2xl" />
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/40 shadow-xs space-y-4">
              <div className="flex justify-between items-center">
                <div className="h-4 w-36 bg-slate-200 rounded-lg" />
                <div className="h-4 w-16 bg-slate-100 rounded-lg" />
              </div>
              <div className="flex justify-between items-center py-4">
                <div className="space-y-2">
                  <div className="h-16 w-24 bg-slate-200 rounded-2xl" />
                  <div className="h-6 w-32 bg-slate-100 rounded-full" />
                </div>
                <div className="space-y-1 text-right">
                  <div className="h-3 w-16 bg-slate-100 rounded ml-auto" />
                  <div className="h-5 w-20 bg-slate-200 rounded ml-auto" />
                </div>
              </div>
              <div className="h-3 bg-slate-100 rounded-full" />
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
                <div className="h-14 bg-slate-100 rounded-2xl" />
                <div className="h-14 bg-slate-100 rounded-2xl" />
                <div className="h-14 bg-slate-100 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    // --- INTERACTIVE INDIA MAP (hover = preview, click = select city) ---
    const INDIA_MAP_CITIES = [
      { name: "New Delhi", region: "Delhi", lat: 28.6139, lon: 77.2090 },
      { name: "Mumbai", region: "Maharashtra", lat: 19.0760, lon: 72.8777 },
      { name: "Bengaluru", region: "Karnataka", lat: 12.9716, lon: 77.5946 },
      { name: "Chennai", region: "Tamil Nadu", lat: 13.0827, lon: 80.2707 },
      { name: "Kolkata", region: "West Bengal", lat: 22.5726, lon: 88.3639 },
      { name: "Hyderabad", region: "Telangana", lat: 17.3850, lon: 78.4867 },
      { name: "Pune", region: "Maharashtra", lat: 18.5204, lon: 73.8567 },
      { name: "Ahmedabad", region: "Gujarat", lat: 23.0225, lon: 72.5714 },
      { name: "Jaipur", region: "Rajasthan", lat: 26.9124, lon: 75.7873 },
      { name: "Lucknow", region: "Uttar Pradesh", lat: 26.8467, lon: 80.9462 },
      { name: "Bhopal", region: "Madhya Pradesh", lat: 23.2599, lon: 77.4126 },
      { name: "Chandigarh", region: "Chandigarh", lat: 30.7333, lon: 76.7794 },
      { name: "Kochi", region: "Kerala", lat: 9.9312, lon: 76.2673 },
      { name: "Guwahati", region: "Assam", lat: 26.1445, lon: 91.7362 },
      { name: "Patna", region: "Bihar", lat: 25.5941, lon: 85.1376 },
      { name: "Indore", region: "Madhya Pradesh", lat: 22.7196, lon: 75.8577 },
      { name: "Surat", region: "Gujarat", lat: 21.1702, lon: 72.8311 },
      { name: "Nagpur", region: "Maharashtra", lat: 21.1458, lon: 79.0882 },
      { name: "Coimbatore", region: "Tamil Nadu", lat: 11.0168, lon: 76.9558 },
      { name: "Visakhapatnam", region: "Andhra Pradesh", lat: 17.6868, lon: 83.2185 },
      { name: "Bhubaneswar", region: "Odisha", lat: 20.2961, lon: 85.8245 },
      { name: "Dehradun", region: "Uttarakhand", lat: 30.3165, lon: 78.0322 },
      { name: "Shimla", region: "Himachal Pradesh", lat: 31.1048, lon: 77.1734 },
      { name: "Srinagar", region: "Jammu & Kashmir", lat: 34.0837, lon: 74.7973 },
      { name: "Jammu", region: "Jammu & Kashmir", lat: 32.7266, lon: 74.8570 },
      { name: "Leh", region: "Ladakh", lat: 34.1526, lon: 77.5771 },
      { name: "Thiruvananthapuram", region: "Kerala", lat: 8.5241, lon: 76.9366 },
      { name: "Ranchi", region: "Jharkhand", lat: 23.3441, lon: 85.3096 },
      { name: "Raipur", region: "Chhattisgarh", lat: 21.2514, lon: 81.6296 },
      { name: "Amritsar", region: "Punjab", lat: 31.6340, lon: 74.8723 },
      { name: "Varanasi", region: "Uttar Pradesh", lat: 25.3176, lon: 82.9739 },
      { name: "Agra", region: "Uttar Pradesh", lat: 27.1767, lon: 78.0081 },
      { name: "Kanpur", region: "Uttar Pradesh", lat: 26.4499, lon: 80.3319 },
      { name: "Prayagraj", region: "Uttar Pradesh", lat: 25.4358, lon: 81.8463 },
      { name: "Meerut", region: "Uttar Pradesh", lat: 28.9845, lon: 77.7064 },
      { name: "Noida", region: "Uttar Pradesh", lat: 28.5355, lon: 77.3910 },
      { name: "Gurgaon", region: "Haryana", lat: 28.4595, lon: 77.0266 },
      { name: "Faridabad", region: "Haryana", lat: 28.4089, lon: 77.3178 },
      { name: "Jodhpur", region: "Rajasthan", lat: 26.2389, lon: 73.0243 },
      { name: "Udaipur", region: "Rajasthan", lat: 24.5854, lon: 73.7125 },
      { name: "Kota", region: "Rajasthan", lat: 25.2138, lon: 75.8648 },
      { name: "Gwalior", region: "Madhya Pradesh", lat: 26.2183, lon: 78.1828 },
      { name: "Jabalpur", region: "Madhya Pradesh", lat: 23.1815, lon: 79.9864 },
      { name: "Nashik", region: "Maharashtra", lat: 19.9975, lon: 73.7898 },
      { name: "Aurangabad", region: "Maharashtra", lat: 19.8762, lon: 75.3433 },
      { name: "Thane", region: "Maharashtra", lat: 19.2183, lon: 72.9781 },
      { name: "Vadodara", region: "Gujarat", lat: 22.3072, lon: 73.1812 },
      { name: "Rajkot", region: "Gujarat", lat: 22.3039, lon: 70.8022 },
      { name: "Mysuru", region: "Karnataka", lat: 12.2958, lon: 76.6394 },
      { name: "Mangaluru", region: "Karnataka", lat: 12.9141, lon: 74.8560 },
      { name: "Hubballi", region: "Karnataka", lat: 15.3647, lon: 75.1240 },
      { name: "Madurai", region: "Tamil Nadu", lat: 9.9252, lon: 78.1198 },
      { name: "Tiruchirappalli", region: "Tamil Nadu", lat: 10.7905, lon: 78.7047 },
      { name: "Salem", region: "Tamil Nadu", lat: 11.6643, lon: 78.1460 },
      { name: "Vijayawada", region: "Andhra Pradesh", lat: 16.5062, lon: 80.6480 },
      { name: "Warangal", region: "Telangana", lat: 17.9689, lon: 79.5941 },
      { name: "Cuttack", region: "Odisha", lat: 20.4625, lon: 85.8830 },
      { name: "Siliguri", region: "West Bengal", lat: 26.7271, lon: 88.3953 },
      { name: "Durgapur", region: "West Bengal", lat: 23.5204, lon: 87.3119 },
      { name: "Imphal", region: "Manipur", lat: 24.8170, lon: 93.9368 },
      { name: "Aizawl", region: "Mizoram", lat: 23.7271, lon: 92.7176 },
      { name: "Shillong", region: "Meghalaya", lat: 25.5788, lon: 91.8933 },
      { name: "Kohima", region: "Nagaland", lat: 25.6751, lon: 94.1086 },
      { name: "Agartala", region: "Tripura", lat: 23.8315, lon: 91.2868 },
      { name: "Itanagar", region: "Arunachal Pradesh", lat: 27.0844, lon: 93.6053 },
      { name: "Gangtok", region: "Sikkim", lat: 27.3389, lon: 88.6065 },
      { name: "Panaji", region: "Goa", lat: 15.4909, lon: 73.8278 },
      { name: "Puducherry", region: "Puducherry", lat: 11.9416, lon: 79.8083 },
      { name: "Ludhiana", region: "Punjab", lat: 30.9010, lon: 75.8573 },
      { name: "Jalandhar", region: "Punjab", lat: 31.3260, lon: 75.5762 },
      { name: "Bareilly", region: "Uttar Pradesh", lat: 28.3670, lon: 79.4304 },
      { name: "Aligarh", region: "Uttar Pradesh", lat: 27.8974, lon: 78.0880 },
      { name: "Jamshedpur", region: "Jharkhand", lat: 22.8046, lon: 86.2029 },
      { name: "Gaya", region: "Bihar", lat: 24.7955, lon: 85.0002 },
      { name: "Tirupati", region: "Andhra Pradesh", lat: 13.6288, lon: 79.4192 },
      { name: "Kozhikode", region: "Kerala", lat: 11.2588, lon: 75.7804 },
      { name: "Thrissur", region: "Kerala", lat: 10.5276, lon: 76.2144 },
      { name: "Solapur", region: "Maharashtra", lat: 17.6599, lon: 75.9064 },
      { name: "Kolhapur", region: "Maharashtra", lat: 16.7050, lon: 74.2433 },
      { name: "Amravati", region: "Maharashtra", lat: 20.9374, lon: 77.7796 },
      { name: "Sangli", region: "Maharashtra", lat: 16.8524, lon: 74.5815 },
      { name: "Jalgaon", region: "Maharashtra", lat: 21.0077, lon: 75.5626 },
      { name: "Akola", region: "Maharashtra", lat: 20.7002, lon: 77.0082 },
      { name: "Nanded", region: "Maharashtra", lat: 19.1383, lon: 77.3210 },
      { name: "Bhavnagar", region: "Gujarat", lat: 21.7645, lon: 72.1519 },
      { name: "Jamnagar", region: "Gujarat", lat: 22.4707, lon: 70.0577 },
      { name: "Gandhinagar", region: "Gujarat", lat: 23.2156, lon: 72.6369 },
      { name: "Anand", region: "Gujarat", lat: 22.5645, lon: 72.9289 },
      { name: "Bikaner", region: "Rajasthan", lat: 28.0229, lon: 73.3119 },
      { name: "Ajmer", region: "Rajasthan", lat: 26.4499, lon: 74.6399 },
      { name: "Bhilwara", region: "Rajasthan", lat: 25.3407, lon: 74.6269 },
      { name: "Alwar", region: "Rajasthan", lat: 27.5530, lon: 76.6346 },
      { name: "Bharatpur", region: "Rajasthan", lat: 27.2152, lon: 77.5030 },
      { name: "Ujjain", region: "Madhya Pradesh", lat: 23.1765, lon: 75.7885 },
      { name: "Sagar", region: "Madhya Pradesh", lat: 23.8388, lon: 78.7378 },
      { name: "Rewa", region: "Madhya Pradesh", lat: 24.5373, lon: 81.3042 },
      { name: "Satna", region: "Madhya Pradesh", lat: 24.6005, lon: 80.8322 },
      { name: "Jhansi", region: "Uttar Pradesh", lat: 25.4484, lon: 78.5685 },
      { name: "Gorakhpur", region: "Uttar Pradesh", lat: 26.7606, lon: 83.3732 },
      { name: "Saharanpur", region: "Uttar Pradesh", lat: 29.9680, lon: 77.5552 },
      { name: "Ghaziabad", region: "Uttar Pradesh", lat: 28.6692, lon: 77.4538 },
      { name: "Firozabad", region: "Uttar Pradesh", lat: 27.1591, lon: 78.3957 },
      { name: "Mathura", region: "Uttar Pradesh", lat: 27.4924, lon: 77.6737 },
      { name: "Muzaffarnagar", region: "Uttar Pradesh", lat: 29.4727, lon: 77.7085 },
      { name: "Shahjahanpur", region: "Uttar Pradesh", lat: 27.8805, lon: 79.9060 },
      { name: "Rampur", region: "Uttar Pradesh", lat: 28.8029, lon: 79.0246 },
      { name: "Farrukhabad", region: "Uttar Pradesh", lat: 27.3910, lon: 79.5800 },
      { name: "Mirzapur", region: "Uttar Pradesh", lat: 25.1337, lon: 82.5644 },
      { name: "Etawah", region: "Uttar Pradesh", lat: 26.7755, lon: 79.0210 },
      { name: "Sambhal", region: "Uttar Pradesh", lat: 28.5840, lon: 78.5696 },
      { name: "Orai", region: "Uttar Pradesh", lat: 25.9890, lon: 79.4500 },
      { name: "Hapur", region: "Uttar Pradesh", lat: 28.7306, lon: 77.7759 },
      { name: "Bhagalpur", region: "Bihar", lat: 25.2425, lon: 86.9842 },
      { name: "Purnia", region: "Bihar", lat: 25.7771, lon: 87.4753 },
      { name: "Darbhanga", region: "Bihar", lat: 26.1542, lon: 85.8918 },
      { name: "Arrah", region: "Bihar", lat: 25.5560, lon: 84.6630 },
      { name: "Begusarai", region: "Bihar", lat: 25.4182, lon: 86.1272 },
      { name: "Katihar", region: "Bihar", lat: 25.5390, lon: 87.5820 },
      { name: "Munger", region: "Bihar", lat: 25.3746, lon: 86.4735 },
      { name: "Chapra", region: "Bihar", lat: 25.7810, lon: 84.7428 },
      { name: "Sasaram", region: "Bihar", lat: 24.9500, lon: 84.0333 },
      { name: "Hajipur", region: "Bihar", lat: 25.6850, lon: 85.2080 },
      { name: "Siwan", region: "Bihar", lat: 26.2200, lon: 84.3600 },
      { name: "Motihari", region: "Bihar", lat: 26.6500, lon: 84.9167 },
      { name: "Samastipur", region: "Bihar", lat: 25.8600, lon: 85.7800 },
      { name: "Bettiah", region: "Bihar", lat: 26.8000, lon: 84.5000 },
      { name: "Bagaha", region: "Assam", lat: 26.1445, lon: 91.7362 },
      { name: "Dibrugarh", region: "Assam", lat: 27.4728, lon: 94.9120 },
      { name: "Jorhat", region: "Assam", lat: 26.7465, lon: 94.2026 },
      { name: "Silchar", region: "Assam", lat: 24.8333, lon: 92.7789 },
      { name: "Tezpur", region: "Assam", lat: 26.6338, lon: 92.8000 },
      { name: "Nagaon", region: "Assam", lat: 26.3464, lon: 92.6840 },
      { name: "Tinsukia", region: "Assam", lat: 27.4900, lon: 95.3600 },
      { name: "Rourkela", region: "Odisha", lat: 22.2604, lon: 84.8536 },
      { name: "Berhampur", region: "Odisha", lat: 19.3150, lon: 84.7941 },
      { name: "Sambalpur", region: "Odisha", lat: 21.4669, lon: 83.9756 },
      { name: "Puri", region: "Odisha", lat: 19.8135, lon: 85.8312 },
      { name: "Balasore", region: "Odisha", lat: 21.4942, lon: 86.9336 },
      { name: "Baripada", region: "Odisha", lat: 21.9400, lon: 86.7200 },
      { name: "Jharsuguda", region: "Odisha", lat: 21.8500, lon: 84.0300 },
      { name: "Bilaspur", region: "Chhattisgarh", lat: 22.0796, lon: 82.1391 },
      { name: "Korba", region: "Chhattisgarh", lat: 22.3595, lon: 82.7501 },
      { name: "Durg", region: "Chhattisgarh", lat: 21.1904, lon: 81.2849 },
      { name: "Rajnandgaon", region: "Chhattisgarh", lat: 21.1000, lon: 81.0300 },
      { name: "Raigarh", region: "Chhattisgarh", lat: 21.9000, lon: 83.4000 },
      { name: "Bhilai", region: "Chhattisgarh", lat: 21.1938, lon: 81.3509 },
      { name: "Dhanbad", region: "Jharkhand", lat: 23.7957, lon: 86.4304 },
      { name: "Bokaro", region: "Jharkhand", lat: 23.6693, lon: 86.1511 },
      { name: "Deoghar", region: "Jharkhand", lat: 24.4800, lon: 86.7000 },
      { name: "Hazaribagh", region: "Jharkhand", lat: 23.9900, lon: 85.3600 },
      { name: "Giridih", region: "Jharkhand", lat: 24.1800, lon: 86.3000 },
      { name: "Phusro", region: "Jharkhand", lat: 23.7700, lon: 85.9900 },
      { name: "Howrah", region: "West Bengal", lat: 22.5958, lon: 88.2636 },
      { name: "Asansol", region: "West Bengal", lat: 23.6739, lon: 86.9524 },
      { name: "Durgapur", region: "West Bengal", lat: 23.5204, lon: 87.3119 },
      { name: "Kharagpur", region: "West Bengal", lat: 22.3460, lon: 87.2320 },
      { name: "Malda", region: "West Bengal", lat: 25.0108, lon: 88.1411 },
      { name: "Baharampur", region: "West Bengal", lat: 24.1000, lon: 88.2500 },
      { name: "Haldia", region: "West Bengal", lat: 22.0667, lon: 88.0698 },
      { name: "Raiganj", region: "West Bengal", lat: 25.6200, lon: 88.1200 },
      { name: "Krishnanagar", region: "West Bengal", lat: 23.4000, lon: 88.5000 },
      { name: "Nagercoil", region: "Tamil Nadu", lat: 8.1833, lon: 77.4119 },
      { name: "Erode", region: "Tamil Nadu", lat: 11.3410, lon: 77.7172 },
      { name: "Tirunelveli", region: "Tamil Nadu", lat: 8.7139, lon: 77.7567 },
      { name: "Thoothukudi", region: "Tamil Nadu", lat: 8.7642, lon: 78.1348 },
      { name: "Vellore", region: "Tamil Nadu", lat: 12.9165, lon: 79.1325 },
      { name: "Thanjavur", region: "Tamil Nadu", lat: 10.7870, lon: 79.1378 },
      { name: "Dindigul", region: "Tamil Nadu", lat: 10.3624, lon: 77.9695 },
      { name: "Kanchipuram", region: "Tamil Nadu", lat: 12.8342, lon: 79.7036 },
      { name: "Karur", region: "Tamil Nadu", lat: 10.9601, lon: 78.0766 },
      { name: "Nizamabad", region: "Telangana", lat: 18.6725, lon: 78.0941 },
      { name: "Karimnagar", region: "Telangana", lat: 18.4386, lon: 79.1288 },
      { name: "Khammam", region: "Telangana", lat: 17.2473, lon: 80.1514 },
      { name: "Ramagundam", region: "Telangana", lat: 18.7550, lon: 79.4740 },
      { name: "Mahbubnagar", region: "Telangana", lat: 16.7488, lon: 78.0035 },
      { name: "Nalgonda", region: "Telangana", lat: 17.0542, lon: 79.2670 },
      { name: "Guntur", region: "Andhra Pradesh", lat: 16.3067, lon: 80.4365 },
      { name: "Nellore", region: "Andhra Pradesh", lat: 14.4426, lon: 79.9865 },
      { name: "Kurnool", region: "Andhra Pradesh", lat: 15.8281, lon: 78.0373 },
      { name: "Rajahmundry", region: "Andhra Pradesh", lat: 17.0005, lon: 81.8040 },
      { name: "Kakinada", region: "Andhra Pradesh", lat: 16.9891, lon: 82.2475 },
      { name: "Tirupati", region: "Andhra Pradesh", lat: 13.6288, lon: 79.4192 },
      { name: "Anantapur", region: "Andhra Pradesh", lat: 14.6819, lon: 77.6006 },
      { name: "Eluru", region: "Andhra Pradesh", lat: 16.7107, lon: 81.0952 },
      { name: "Ongole", region: "Andhra Pradesh", lat: 15.5057, lon: 80.0499 },
      { name: "Kadapa", region: "Andhra Pradesh", lat: 14.4674, lon: 78.8241 },
      { name: "Bellary", region: "Karnataka", lat: 15.1394, lon: 76.9214 },
      { name: "Davangere", region: "Karnataka", lat: 14.4664, lon: 75.9238 },
      { name: "Shimoga", region: "Karnataka", lat: 13.9299, lon: 75.5681 },
      { name: "Tumkur", region: "Karnataka", lat: 13.3409, lon: 77.1010 },
      { name: "Raichur", region: "Karnataka", lat: 16.2120, lon: 77.3439 },
      { name: "Bidar", region: "Karnataka", lat: 17.9104, lon: 77.5199 },
      { name: "Hospet", region: "Karnataka", lat: 15.2695, lon: 76.3871 },
      { name: "Gadag", region: "Karnataka", lat: 15.4310, lon: 75.6350 },
      { name: "Kannur", region: "Kerala", lat: 11.8745, lon: 75.3704 },
      { name: "Kollam", region: "Kerala", lat: 8.8932, lon: 76.6141 },
      { name: "Alappuzha", region: "Kerala", lat: 9.4981, lon: 76.3388 },
      { name: "Palakkad", region: "Kerala", lat: 10.7867, lon: 76.6548 },
      { name: "Kottayam", region: "Kerala", lat: 9.5916, lon: 76.5222 },
      { name: "Malappuram", region: "Kerala", lat: 11.0510, lon: 76.0711 },
      { name: "Pathanamthitta", region: "Kerala", lat: 9.2648, lon: 76.7870 },
      { name: "Idukki", region: "Kerala", lat: 9.8500, lon: 76.9700 },
      { name: "Rohtak", region: "Haryana", lat: 28.8955, lon: 76.6066 },
      { name: "Hisar", region: "Haryana", lat: 29.1492, lon: 75.7217 },
      { name: "Panipat", region: "Haryana", lat: 29.3909, lon: 76.9635 },
      { name: "Karnal", region: "Haryana", lat: 29.6857, lon: 76.9905 },
      { name: "Sonipat", region: "Haryana", lat: 28.9931, lon: 77.0151 },
      { name: "Yamunanagar", region: "Haryana", lat: 30.1290, lon: 77.2800 },
      { name: "Ambala", region: "Haryana", lat: 30.3782, lon: 76.7767 },
      { name: "Bhiwani", region: "Haryana", lat: 28.7930, lon: 76.1390 },
      { name: "Sirsa", region: "Haryana", lat: 29.5336, lon: 75.0170 },
      { name: "Pathankot", region: "Punjab", lat: 32.2643, lon: 75.6421 },
      { name: "Bathinda", region: "Punjab", lat: 30.2110, lon: 74.9455 },
      { name: "Mohali", region: "Punjab", lat: 30.7046, lon: 76.7179 },
      { name: "Patiala", region: "Punjab", lat: 30.3398, lon: 76.3869 },
      { name: "Hoshiarpur", region: "Punjab", lat: 31.5143, lon: 75.9113 },
      { name: "Batala", region: "Punjab", lat: 31.8186, lon: 75.2028 },
      { name: "Moga", region: "Punjab", lat: 30.8160, lon: 75.1700 },
      { name: "Mandi", region: "Himachal Pradesh", lat: 31.7087, lon: 76.9320 },
      { name: "Dharamshala", region: "Himachal Pradesh", lat: 32.2190, lon: 76.3234 },
      { name: "Solan", region: "Himachal Pradesh", lat: 30.9045, lon: 77.0967 },
      { name: "Kullu", region: "Himachal Pradesh", lat: 31.9579, lon: 77.1095 },
      { name: "Haridwar", region: "Uttarakhand", lat: 29.9457, lon: 78.1642 },
      { name: "Rishikesh", region: "Uttarakhand", lat: 30.0869, lon: 78.2676 },
      { name: "Haldwani", region: "Uttarakhand", lat: 29.2183, lon: 79.5130 },
      { name: "Roorkee", region: "Uttarakhand", lat: 29.8543, lon: 77.8880 },
      { name: "Kashipur", region: "Uttarakhand", lat: 29.2104, lon: 78.9619 },
      { name: "Nainital", region: "Uttarakhand", lat: 29.3803, lon: 79.4636 },
      { name: "Dimapur", region: "Nagaland", lat: 25.9091, lon: 93.7267 },
      { name: "Lunglei", region: "Mizoram", lat: 22.8800, lon: 92.7500 },
      { name: "Tura", region: "Meghalaya", lat: 25.5140, lon: 90.2020 },
      { name: "Churachandpur", region: "Manipur", lat: 24.3333, lon: 93.6700 },
      { name: "Pasighat", region: "Arunachal Pradesh", lat: 28.0700, lon: 95.3300 },
      { name: "Tezpur", region: "Assam", lat: 26.6338, lon: 92.8000 },
      { name: "Port Blair", region: "Andaman & Nicobar", lat: 11.6234, lon: 92.7265 },
      { name: "Kavaratti", region: "Lakshadweep", lat: 10.5593, lon: 72.6358 },
      { name: "Daman", region: "Daman & Diu", lat: 20.3974, lon: 72.8328 },
      { name: "Diu", region: "Daman & Diu", lat: 20.7144, lon: 70.9875 },
      { name: "Silvassa", region: "Dadra & Nagar Haveli", lat: 20.2760, lon: 73.0080 },
      { name: "Kavaratti", region: "Lakshadweep", lat: 10.5593, lon: 72.6358 }

    ];

    // Project lat/lon into SVG viewBox — same bounds as geo-accurate India outline
    function latLonToSVG(lat, lon) {
      const minLat = 6.2, maxLat = 37.5, minLon = 67.5, maxLon = 98.0;
      const x = 10 + ((lon - minLon) / (maxLon - minLon)) * 280;
      const y = 14 + ((maxLat - lat) / (maxLat - minLat)) * 312;
      return { x, y };
    }

    // Geo-accurate India mainland outline (simplified from public country boundary data)
    const INDIA_OUTLINE_PATH = "M104.6,34.0 L106.8,34.0 L106.4,36.2 L109.1,42.7 L115.1,45.4 L115.4,46.7 L113.1,48.1 L113.7,53.9 L116.3,55.9 L119.8,56.4 L118.6,58.9 L121.2,61.2 L119.6,63.5 L118.5,62.9 L115.1,65.4 L113.2,62.5 L109.9,63.4 L110.6,66.5 L113.2,69.2 L113.2,75.7 L114.8,76.1 L116.8,74.4 L119.3,78.6 L123.4,79.2 L126.8,81.4 L126.4,83.2 L134.0,86.6 L128.1,91.2 L125.1,100.4 L135.5,105.1 L136.7,107.4 L141.8,110.2 L143.4,109.6 L146.8,111.9 L149.4,111.7 L150.0,113.7 L154.9,115.4 L155.8,114.0 L160.1,115.2 L162.6,113.5 L167.0,115.6 L167.4,118.4 L173.3,121.3 L176.3,120.1 L178.3,123.0 L182.4,122.5 L186.4,124.5 L189.4,122.8 L191.8,125.2 L197.0,124.0 L198.0,125.0 L199.7,121.2 L197.9,117.6 L199.1,109.4 L203.8,107.6 L206.0,110.1 L205.0,113.4 L206.4,115.5 L204.9,117.2 L208.3,120.4 L214.8,121.7 L219.8,119.7 L223.1,121.0 L233.8,120.6 L235.6,119.8 L234.8,117.4 L235.7,115.8 L234.7,114.0 L231.3,113.4 L230.9,110.2 L234.5,111.4 L240.2,110.2 L241.7,108.8 L241.1,107.4 L246.0,105.3 L247.0,102.7 L252.6,101.9 L256.5,98.5 L255.9,97.3 L258.8,95.6 L265.8,98.4 L269.3,95.3 L272.3,95.0 L275.0,96.2 L273.2,97.6 L273.4,99.3 L275.8,98.8 L277.1,101.1 L274.4,104.5 L281.9,105.0 L283.8,106.5 L284.1,108.7 L279.6,112.7 L281.9,117.8 L278.1,115.1 L272.9,116.1 L263.6,122.5 L262.8,125.8 L263.8,128.1 L258.9,134.7 L258.4,136.6 L259.8,138.3 L254.5,150.0 L246.9,147.9 L248.0,151.8 L247.5,157.2 L245.4,158.2 L245.7,165.9 L243.0,168.9 L241.2,167.0 L240.2,168.7 L237.3,151.5 L234.2,151.3 L233.0,157.6 L231.1,159.1 L229.4,155.9 L228.6,157.5 L227.0,152.3 L229.1,147.6 L232.5,146.2 L233.8,147.0 L234.0,145.2 L235.9,144.5 L237.0,139.7 L239.4,139.3 L235.2,136.8 L219.9,137.1 L214.9,135.8 L215.0,128.8 L213.4,126.4 L212.4,129.0 L210.5,128.6 L207.8,124.8 L206.4,124.8 L207.6,126.3 L204.3,126.0 L204.2,124.5 L201.6,122.5 L201.1,124.0 L202.8,125.1 L199.7,127.2 L199.0,130.3 L207.2,135.8 L206.7,136.9 L202.2,136.7 L201.2,139.8 L199.3,139.4 L198.4,142.1 L202.6,145.4 L205.0,145.7 L203.2,152.1 L205.3,153.7 L204.6,156.0 L207.0,156.5 L205.9,158.8 L208.1,167.0 L207.9,169.1 L206.5,168.8 L208.1,172.3 L206.1,170.8 L204.7,172.7 L205.2,167.2 L204.0,169.0 L204.3,166.5 L203.5,172.9 L202.7,169.0 L202.4,172.3 L201.2,171.3 L201.0,172.4 L200.6,170.5 L200.5,172.9 L200.0,166.8 L197.3,164.3 L199.7,167.6 L196.7,171.2 L190.9,173.0 L188.3,175.2 L187.9,180.7 L189.4,181.5 L183.7,188.4 L181.2,187.0 L183.3,188.8 L182.3,189.3 L175.1,191.8 L175.9,189.7 L173.1,190.6 L171.8,193.6 L172.9,191.9 L175.9,191.5 L168.3,196.9 L162.5,205.4 L156.4,209.1 L154.5,212.4 L146.5,217.2 L145.4,219.1 L146.5,219.3 L145.9,222.5 L140.9,225.1 L136.3,225.0 L134.0,230.5 L133.0,228.0 L132.2,231.1 L130.9,229.2 L127.3,231.3 L125.2,237.4 L126.6,242.6 L125.2,246.2 L126.0,246.0 L127.6,253.8 L126.1,251.0 L125.2,252.0 L127.8,253.9 L127.8,256.2 L126.4,262.9 L122.8,270.5 L123.1,274.4 L121.8,275.2 L123.2,274.7 L123.4,285.2 L118.2,285.6 L114.8,293.4 L119.7,296.5 L115.5,295.3 L110.2,297.1 L108.1,299.3 L106.9,304.4 L101.9,307.3 L97.2,304.4 L93.0,299.0 L94.2,298.0 L92.9,298.6 L91.4,294.8 L90.2,288.6 L91.3,292.9 L92.7,292.8 L89.7,287.1 L90.2,285.7 L85.6,274.4 L81.8,269.2 L82.5,268.4 L80.6,268.0 L77.3,260.0 L78.3,259.4 L77.2,259.6 L76.4,251.7 L74.2,247.9 L73.6,243.5 L70.6,240.3 L71.8,239.5 L70.7,239.8 L68.9,237.5 L67.7,234.2 L69.4,234.6 L67.3,232.6 L68.2,231.7 L67.1,232.0 L64.6,227.6 L62.3,212.5 L59.8,206.1 L61.1,205.7 L59.7,204.8 L59.6,203.2 L60.6,203.7 L59.2,201.6 L59.8,200.1 L60.4,201.1 L59.5,199.5 L61.0,198.3 L60.2,196.8 L58.4,198.9 L58.5,195.3 L60.9,196.2 L58.3,194.6 L59.4,193.1 L57.9,193.1 L57.3,189.9 L60.0,180.9 L58.7,177.2 L57.0,177.4 L58.1,176.5 L56.5,174.6 L61.7,170.9 L56.4,171.8 L58.1,168.6 L55.9,168.7 L56.6,166.6 L59.7,165.8 L55.6,166.2 L55.0,164.8 L52.7,165.7 L54.1,166.2 L54.1,167.7 L51.3,170.5 L54.1,172.2 L52.3,176.4 L43.4,180.8 L39.7,181.3 L33.5,176.9 L23.3,165.6 L24.4,163.7 L25.7,165.8 L34.6,162.9 L37.6,157.5 L36.6,159.1 L34.2,158.6 L29.1,160.9 L22.5,158.3 L18.5,154.1 L18.3,152.3 L22.1,149.8 L17.6,152.7 L15.9,152.4 L17.1,151.9 L16.1,151.0 L17.0,149.2 L21.2,148.9 L21.5,145.3 L32.7,146.9 L36.8,144.6 L39.9,146.3 L42.9,144.5 L39.0,131.9 L35.2,131.5 L33.5,128.8 L34.4,123.3 L28.4,121.3 L28.7,117.4 L36.1,108.6 L37.9,108.5 L40.6,111.7 L50.2,109.1 L54.6,101.0 L59.9,98.3 L63.9,89.5 L69.2,86.9 L68.3,85.0 L75.7,78.0 L74.3,77.0 L75.3,74.2 L74.7,70.5 L82.1,66.2 L79.1,64.2 L76.0,64.1 L76.0,60.5 L72.9,61.2 L72.5,58.9 L69.7,57.1 L71.1,53.9 L69.4,51.5 L72.2,49.3 L68.7,48.3 L69.6,46.7 L67.6,45.2 L68.9,42.5 L72.9,41.2 L86.2,43.8 L88.2,42.1 L94.0,41.4 L104.6,34.0 Z";

    function aqiDotColor(aqi) {
      if (aqi == null || aqi === "—" || !isFinite(Number(aqi))) return "#94a3b8"; // unknown
      const n = Number(aqi);
      if (n <= 50) return "#22c55e";
      if (n <= 100) return "#eab308";
      if (n <= 150) return "#f97316";
      if (n <= 200) return "#ef4444";
      if (n <= 300) return "#a855f7";
      return "#7f1d1d";
    }

    function IndiaMapPanel({ selectedCity, onSelectCity, isLiveMode }) {
      const [hoverCity, setHoverCity] = useState(null);
      const [hoverData, setHoverData] = useState(null);
      const [loadingHover, setLoadingHover] = useState(false);
      const [aqiTint, setAqiTint] = useState({}); // key -> aqi for dot colors
      const [zoom, setZoom] = useState(1);
      const [pan, setPan] = useState({ x: 0, y: 0 });
      const dragging = useRef(false);
      const lastPos = useRef({ x: 0, y: 0 });
      const cacheRef = useRef({});
      const hoverTimer = useRef(null);

      // Seed colors from known presets so the map isn’t all grey on first paint
      useEffect(() => {
        const seed = {};
        (CITY_PRESETS || []).forEach((p) => {
          if (p.lat != null && p.lon != null && p.aqi != null) {
            const key = `${Number(p.lat).toFixed(2)},${Number(p.lon).toFixed(2)}`;
            seed[key] = p.aqi;
            cacheRef.current[key] = {
              temp: p.temperature,
              aqi: p.aqi,
              desc: p.weatherDesc || ""
            };
          }
        });
        setAqiTint((m) => ({ ...seed, ...m }));
      }, []);

      const fetchHoverData = useCallback(async (city) => {
        const key = `${city.lat.toFixed(2)},${city.lon.toFixed(2)}`;
        if (cacheRef.current[key]) {
          setHoverData(cacheRef.current[key]);
          return;
        }
        setLoadingHover(true);
        try {
          if (!isLiveMode) {
            const preset = CITY_PRESETS.find((c) => Math.abs(c.lat - city.lat) < 1.5 && Math.abs(c.lon - city.lon) < 1.5);
            const data = preset
              ? { temp: preset.temperature, aqi: preset.aqi, desc: preset.weatherDesc }
              : { temp: 28, aqi: 85, desc: "Estimated" };
            cacheRef.current[key] = data;
            setHoverData(data);
            setAqiTint((m) => ({ ...m, [key]: data.aqi }));
          } else {
            const [wRes, aRes] = await Promise.all([
              fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,weather_code&timezone=auto`),
              fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${city.lat}&longitude=${city.lon}&current=us_aqi,pm2_5&timezone=auto`)
            ]);
            const w = await wRes.json();
            const a = await aRes.json();
            const data = {
              temp: Math.round(w.current?.temperature_2m ?? 28),
              aqi: Math.round(a.current?.us_aqi ?? 70),
              desc: describeWeatherCode(w.current?.weather_code ?? 2).label
            };
            cacheRef.current[key] = data;
            setHoverData(data);
            setAqiTint((m) => ({ ...m, [key]: data.aqi }));
          }
        } catch (e) {
          setHoverData({ temp: "—", aqi: "—", desc: "Unavailable" });
        } finally {
          setLoadingHover(false);
        }
      }, [isLiveMode]);

      const handleHover = (city) => {
        setHoverCity(city);
        if (hoverTimer.current) clearTimeout(hoverTimer.current);
        hoverTimer.current = setTimeout(() => fetchHoverData(city), 100);
      };
      const handleLeave = () => {
        setHoverCity(null);
        setHoverData(null);
        if (hoverTimer.current) clearTimeout(hoverTimer.current);
      };
      const handleClick = (city) => {
        onSelectCity({
          id: `${city.lat}_${city.lon}`,
          name: city.name,
          region: city.region,
          country: "India",
          lat: city.lat,
          lon: city.lon,
          displayLabel: `${city.name}, ${city.region}, India`
        });
      };

      const zoomIn = () => setZoom((z) => Math.min(3.2, +(z + 0.35).toFixed(2)));
      const zoomOut = () => {
        setZoom((z) => {
          const nz = Math.max(1, +(z - 0.35).toFixed(2));
          if (nz === 1) setPan({ x: 0, y: 0 });
          return nz;
        });
      };
      const resetView = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

      const onPointerDown = (e) => {
        if (zoom <= 1) return;
        dragging.current = true;
        lastPos.current = { x: e.clientX, y: e.clientY };
      };
      const onPointerMove = (e) => {
        if (!dragging.current) return;
        const dx = e.clientX - lastPos.current.x;
        const dy = e.clientY - lastPos.current.y;
        lastPos.current = { x: e.clientX, y: e.clientY };
        setPan((p) => ({ x: p.x + dx, y: p.y + dy }));
      };
      const onPointerUp = () => { dragging.current = false; };

      const onWheel = (e) => {
        e.preventDefault();
        if (e.deltaY < 0) zoomIn();
        else zoomOut();
      };

      return (
        <div className="h-full flex flex-col min-h-[440px]">
          {/* Compact header + zoom controls */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <div>
              <h3 className="text-sm font-bold text-white/95 drop-shadow-sm">Explore India</h3>
              <p className="text-[10px] text-white/60">Hover preview · Click to load · Scroll or buttons to zoom</p>
            </div>
            <div className="flex items-center gap-1 bg-black/25 backdrop-blur-md rounded-xl p-1 border border-white/15">
              <button type="button" onClick={zoomOut} className="w-7 h-7 rounded-lg text-white/90 hover:bg-white/15 text-sm font-bold" title="Zoom out">−</button>
              <span className="text-[10px] text-white/80 font-semibold tabular-nums w-9 text-center">{Math.round(zoom * 100)}%</span>
              <button type="button" onClick={zoomIn} className="w-7 h-7 rounded-lg text-white/90 hover:bg-white/15 text-sm font-bold" title="Zoom in">+</button>
              <button type="button" onClick={resetView} className="px-2 h-7 rounded-lg text-[10px] text-white/80 hover:bg-white/15 font-semibold" title="Reset">Reset</button>
            </div>
          </div>

          {/* Floating hover readout */}
          <div className="mb-2 min-h-[32px]">
            {hoverCity ? (
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-xl bg-black/35 backdrop-blur-md border border-white/15 text-[11px] text-white animate-fadeIn">
                <span className="font-bold">{hoverCity.name}</span>
                <span className="text-white/50">{hoverCity.region}</span>
                {loadingHover ? (
                  <span className="text-white/50">…</span>
                ) : hoverData ? (
                  <>
                    <span className="text-sky-300 font-bold">{hoverData.temp}°C</span>
                    <span className={`font-bold ${hoverData.aqi > 100 ? "text-orange-300" : hoverData.aqi > 50 ? "text-amber-200" : "text-emerald-300"}`}>
                      AQI {hoverData.aqi}
                    </span>
                  </>
                ) : null}
              </div>
            ) : (
              <p className="text-[11px] text-white/45">Move over a city dot to preview · click to open full dashboard</p>
            )}
          </div>

          {/* Outline map (no box — transparent over weather bg) */}
          <div
            className="relative flex-1 overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing select-none"
            style={{ minHeight: 420, height: "100%", touchAction: "none" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            onWheel={onWheel}
          >
            <svg
              viewBox="0 0 300 340"
              className="w-full h-full"
              style={{
                minHeight: 420,
                maxHeight: 520,
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                transformOrigin: "center center",
                transition: dragging.current ? "none" : "transform 0.15s ease-out"
              }}
            >
              <defs>
                <clipPath id="indiaLandClip">
                  <path d={INDIA_OUTLINE_PATH} />
                </clipPath>
              </defs>
              {/* Soft fill + crisp outline of India */}
              <path
                d={INDIA_OUTLINE_PATH}
                fill="rgba(255,255,255,0.1)"
                stroke="rgba(255,255,255,0.85)"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              {/* City markers — clipped so nothing draws outside the outline */}
              <g clipPath="url(#indiaLandClip)">
              {INDIA_MAP_CITIES.map((city) => {
                const { x, y } = latLonToSVG(city.lat, city.lon);
                const nameMatch = selectedCity && (
                  (selectedCity.name || "").toLowerCase() === city.name.toLowerCase() ||
                  (selectedCity.displayLabel || "").toLowerCase().includes(city.name.toLowerCase())
                );
                const isSelected = selectedCity && (
                  nameMatch ||
                  (Math.abs((selectedCity.lat || 0) - city.lat) < 0.35 && Math.abs((selectedCity.lon || 0) - city.lon) < 0.35)
                );
                const isHovered = hoverCity && hoverCity.name === city.name;
                return (
                  <g
                    key={city.name}
                    transform={`translate(${x},${y})`}
                    className="cursor-pointer"
                    onMouseEnter={() => handleHover(city)}
                    onMouseLeave={handleLeave}
                    onClick={(e) => { e.stopPropagation(); handleClick(city); }}
                  >
                    {(isSelected || isHovered) && (
                      <circle r={12 / zoom} fill={isSelected ? "rgba(45,212,191,0.35)" : "rgba(255,255,255,0.2)"} />
                    )}
                    <circle
                      r={(isSelected || isHovered ? 5.5 : 3.6) / Math.sqrt(zoom)}
                      fill={isSelected ? "#2dd4bf" : aqiDotColor(aqiTint[`${city.lat.toFixed(2)},${city.lon.toFixed(2)}`])}
                      stroke={isSelected ? "#ccfbf1" : "rgba(255,255,255,0.9)"}
                      strokeWidth={1.4 / Math.sqrt(zoom)}
                    />
                    {(isSelected || isHovered) && (
                      <text
                        y={-12 / Math.sqrt(zoom)}
                        textAnchor="middle"
                        fill="#fff"
                        fontSize={10 / Math.sqrt(zoom)}
                        fontWeight="700"
                        style={{ pointerEvents: "none", textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}
                      >
                        {city.name}
                      </text>
                    )}
                  </g>
                );
              })}
              </g>
            </svg>
          </div>
          {/* Compact AQI color legend — does not affect layout width */}
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] text-white/65">
            <span className="font-semibold text-white/80">AQI dots:</span>
            {[
              ["#22c55e", "Good"],
              ["#eab308", "Moderate"],
              ["#f97316", "Sensitive"],
              ["#ef4444", "Unhealthy"],
              ["#94a3b8", "Unknown"],
              ["#2dd4bf", "Selected"]
            ].map(([c, lab]) => (
              <span key={lab} className="inline-flex items-center gap-1">
                <span className="w-2 h-2 rounded-full border border-white/40" style={{ background: c }} />
                {lab}
              </span>
            ))}
          </div>
        </div>
      );
    }

    // --- WEATHER-REACTIVE BACKGROUND (macOS Weather inspired) ---
    function WeatherBackground({ weatherCode = 2, isDay = true }) {
      const code = Number(weatherCode) || 2;

      // Gradients tuned to match macOS Weather screenshots
      const themes = {
        clear: {
          day: "linear-gradient(165deg, #1a6fb5 0%, #3b9ee0 40%, #7ec8f5 75%, #b8e0fa 100%)",
          night: "linear-gradient(180deg, #050510 0%, #0a0e24 40%, #101830 100%)"
        },
        mainlyClear: {
          day: "linear-gradient(165deg, #2a7ab8 0%, #4a9fd4 50%, #8ec8e8 100%)",
          night: "linear-gradient(180deg, #060812 0%, #0c1228 45%, #152038 100%)"
        },
        cloudy: {
          day: "linear-gradient(165deg, #5a6a7a 0%, #3d4f62 50%, #2c3e50 100%)",
          night: "linear-gradient(180deg, #0c1018 0%, #151c28 40%, #1c2838 100%)"
        },
        fog: {
          day: "linear-gradient(165deg, #8a959e 0%, #5c6b78 100%)",
          night: "linear-gradient(180deg, #1a222c 0%, #2a3540 100%)"
        },
        drizzle: {
          day: "linear-gradient(165deg, #3a4a62 0%, #2a3d55 50%, #1e3048 100%)",
          night: "linear-gradient(180deg, #0a101c 0%, #121c2e 50%, #1a283c 100%)"
        },
        rain: {
          day: "linear-gradient(165deg, #2c3a50 0%, #1e2c40 50%, #152030 100%)",
          night: "linear-gradient(180deg, #070c16 0%, #0e1624 40%, #152032 100%)"
        },
        heavyRain: {
          day: "linear-gradient(165deg, #1a2538 0%, #121c2e 50%, #0c1522 100%)",
          night: "linear-gradient(180deg, #050810 0%, #0a121e 45%, #101c2c 100%)"
        },
        snow: {
          day: "linear-gradient(165deg, #6a7a8a 0%, #4a5a6a 100%)",
          night: "linear-gradient(180deg, #121820 0%, #1c2834 100%)"
        },
        storm: {
          day: "linear-gradient(165deg, #1a1e28 0%, #12161e 50%, #0c1018 100%)",
          night: "linear-gradient(180deg, #05060c 0%, #0a0e18 40%, #101420 100%)"
        }
      };

      let themeKey = "cloudy";
      let showSun = false;
      let showMoon = false;
      let showStars = false;
      let showRain = false;
      let heavyRain = false;
      let showSnow = false;
      let showFog = false;
      let showLightning = false;
      let showClouds = true;
      let cloudStyle = "dark"; // dark | bright | default

      if (code === 0) {
        themeKey = "clear";
        showSun = isDay;
        showMoon = !isDay;
        showStars = !isDay;
        showClouds = false;
      } else if (code === 1) {
        themeKey = "mainlyClear";
        showSun = isDay;
        showMoon = !isDay;
        showStars = !isDay;
        cloudStyle = isDay ? "bright" : "dark";
      } else if (code === 2 || code === 3) {
        themeKey = "cloudy";
        cloudStyle = "dark";
        showStars = !isDay && code === 2;
      } else if (code === 45 || code === 48) {
        themeKey = "fog";
        showFog = true;
        showClouds = false;
      } else if (code >= 51 && code <= 57) {
        themeKey = "drizzle";
        showRain = true;
        cloudStyle = "dark";
      } else if (code >= 61 && code <= 67) {
        themeKey = "rain";
        showRain = true;
        cloudStyle = "dark";
      } else if (code >= 80 && code <= 82) {
        themeKey = code >= 82 ? "heavyRain" : "rain";
        showRain = true;
        heavyRain = code >= 82;
        cloudStyle = "dark";
      } else if (code >= 71 && code <= 77) {
        themeKey = "snow";
        showSnow = true;
        showClouds = true;
        cloudStyle = "bright";
      } else if (code >= 85 && code <= 86) {
        themeKey = "snow";
        showSnow = true;
        cloudStyle = "bright";
      } else if (code >= 95 && code <= 99) {
        themeKey = "storm";
        showRain = true;
        heavyRain = true;
        showLightning = true;
        cloudStyle = "dark";
      }

      const gradient = isDay ? themes[themeKey].day : themes[themeKey].night;

      const clouds = showClouds ? [
        { top: "5%", left: "-15%", w: "45%", h: "18%", dur: "60s", delay: "0s", op: 0.55 },
        { top: "18%", left: "20%", w: "35%", h: "14%", dur: "75s", delay: "-18s", op: 0.4 },
        { top: "8%", left: "55%", w: "48%", h: "20%", dur: "52s", delay: "-10s", op: 0.5 },
        { top: "28%", left: "65%", w: "32%", h: "12%", dur: "68s", delay: "-28s", op: 0.35 },
        { top: "40%", left: "-5%", w: "40%", h: "15%", dur: "80s", delay: "-40s", op: 0.3 }
      ] : [];

      return (
        <div className="weather-bg" style={{ background: gradient }} aria-hidden="true">
          {showStars && <div className="stars" />}
          {showSun && <div className="sun-glow" />}
          {showMoon && <div className="moon-glow" />}
          {clouds.map((c, i) => (
            <div
              key={i}
              className={`cloud ${cloudStyle}`}
              style={{
                top: c.top,
                left: c.left,
                width: c.w,
                height: c.h,
                opacity: c.op,
                animationDuration: c.dur,
                animationDelay: c.delay
              }}
            />
          ))}
          {showFog && <div className="fog-layer" />}
          {showRain && (
            <div className={`rain-layer ${heavyRain ? "heavy" : ""}`}>
              {Array.from({ length: heavyRain ? 80 : 50 }).map((_, i) => {
                const left = (i * 17 + (i % 7) * 9) % 100;
                const delay = ((i * 0.13) % 2.4).toFixed(2);
                const duration = (0.7 + (i % 5) * 0.18).toFixed(2);
                const height = 12 + (i % 6) * 4;
                return (
                  <div
                    key={i}
                    className="raindrop"
                    style={{
                      left: `${left}%`,
                      height: `${height}px`,
                      animationDelay: `${delay}s`,
                      animationDuration: `${duration}s`
                    }}
                  />
                );
              })}
            </div>
          )}
          {showSnow && <div className="snow-layer" />}
          {showLightning && <div className="lightning" />}
          <div className="vignette" />
        </div>
      );
    }

    // --- MAIN APP COMPONENT ---
    function App() {
      const [profile, setProfile] = useState(() => {
        try {
          const saved = localStorage.getItem('airwell_profile');
          if (saved) return JSON.parse(saved);
        } catch (e) {}
        return {
          ageGroup: "Adult (20-59)",
          healthCondition: "Asthma",
          occupation: "Outdoor worker"
        };
      });

      const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
      const [groqApiKey, setGroqApiKey] = useState(() => localStorage.getItem('airwell_groq_key') || "");
      const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);

      const [selectedCity, setSelectedCity] = useState(CITY_PRESETS[0]);
      const [isLiveMode, setIsLiveMode] = useState(true);
      const [isLocating, setIsLocating] = useState(false);
      const [isLoadingData, setIsLoadingData] = useState(false);
      const [isLoadingAdvisory, setIsLoadingAdvisory] = useState(false);
      const [errorMsg, setErrorMsg] = useState(null);

      const [weatherData, setWeatherData] = useState({
        temperature_2m: 21,
        apparent_temperature: 22,
        relative_humidity_2m: 95,
        wind_speed_10m: 15,
        surface_pressure: 1008,
        weather_code: 61
      });

      const [aqiData, setAqiData] = useState({
        us_aqi: 101,
        pm2_5: 35.0,
        pm10: 30.0,
        ozone: 33.0,
        dominantPollutant: "PM2.5",
        source: "Reference: aqi.in style"
      });

      const [advisoryState, setAdvisoryState] = useState({
        advisoryText: CITY_PRESETS[0].advisoryText,
        severity: CITY_PRESETS[0].severity,
        whyFactors: CITY_PRESETS[0].whyFactors
      });

      const [trendData, setTrendData] = useState(PAST_7_DAYS_TREND);

      const handleSaveProfile = (newProfile) => {
        setProfile(newProfile);
        try {
          localStorage.setItem('airwell_profile', JSON.stringify(newProfile));
        } catch (e) {}
      };

      const fetchTelemetry = useCallback(async (cityObj, currentProfile, live = isLiveMode) => {
        setErrorMsg(null);
        setIsLoadingData(true);

        if (!live) {
          const preset = CITY_PRESETS.find((c) => c.name.toLowerCase() === cityObj.name.toLowerCase()) || CITY_PRESETS[0];
          setTimeout(() => {
            setWeatherData({
              temperature_2m: preset.temperature,
              apparent_temperature: preset.feelsLike,
              relative_humidity_2m: preset.humidity,
              wind_speed_10m: preset.windSpeed,
              surface_pressure: 1014,
              weather_code: preset.weatherCode
            });
            setAqiData({
              us_aqi: preset.aqi,
              pm2_5: preset.pm25,
              pm10: preset.pm10,
              ozone: preset.ozone,
              dominantPollutant: preset.dominantPollutant
            });
            setTrendData(PAST_7_DAYS_TREND);
            setIsLoadingData(false);
          }, 250);
          return;
        }

        try {
          const lat = cityObj.lat;
          const lon = cityObj.lon;
          const [weatherRes, aqiRes] = await Promise.all([
            getLiveWeather(lat, lon),
            getLiveAQI(lat, lon)
          ]);

          const curWeather = weatherRes.current;
          const curAQI = aqiRes.current;

          setWeatherData(curWeather);
          // Prefer real measured concentrations and compute transparent US EPA AQI
          const pm25 = curAQI.pm2_5 != null ? Number(curAQI.pm2_5) : null;
          const pm10 = curAQI.pm10 != null ? Number(curAQI.pm10) : null;
          const ozone = curAQI.ozone != null ? Number(curAQI.ozone) : null;

          // Official EPA calculation from concentrations (more transparent & consistent)
          const calc = calculateUSAQI(pm25, pm10, ozone);
          // Prefer Open-Meteo's own us_aqi when present (they already apply the same logic), else use our calc
          const usAqi = (curAQI.us_aqi != null && !isNaN(curAQI.us_aqi))
            ? Math.round(Number(curAQI.us_aqi))
            : (calc.aqi || 50);

          setAqiData({
            us_aqi: usAqi,
            pm2_5: pm25 != null ? Math.round(pm25 * 10) / 10 : 18.0,
            pm10: pm10 != null ? Math.round(pm10 * 10) / 10 : 32.0,
            ozone: ozone != null ? Math.round(ozone * 10) / 10 : 45.0,
            dominantPollutant: calc.dominant || (pm25 > 35 ? "PM2.5" : "Ozone"),
            source: "Open-Meteo (CAMS model)",
            observedAt: curAQI.time || null
          });

          // Build accurate 7-day trend by aligning weather max temps with AQI daily maxes by date
          if (weatherRes.daily?.time && weatherRes.daily.temperature_2m_max) {
            const weatherDays = weatherRes.daily.time;
            const maxTemps = weatherRes.daily.temperature_2m_max;
            const aqiByDate = {};
            if (aqiRes.daily?.time && aqiRes.daily.us_aqi_max) {
              aqiRes.daily.time.forEach((d, i) => {
                aqiByDate[d] = aqiRes.daily.us_aqi_max[i];
              });
            }
            const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const todayStr = new Date().toISOString().slice(0, 10);

            const synthesizedTrend = weatherDays.map((dateStr, idx) => {
              const d = new Date(dateStr + "T12:00:00");
              const isToday = dateStr === todayStr || idx === weatherDays.length - 1;
              const dayName = isToday ? "Today" : dayNames[d.getDay()];
              const dateFmt = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
              const dayAqi = Math.round(aqiByDate[dateStr] ?? usAqi ?? 85);
              const band = getAQIBand(dayAqi).name;
              return {
                day: dayName,
                date: dateFmt,
                temp: Math.round(maxTemps[idx] ?? curWeather.temperature_2m ?? 28),
                aqi: dayAqi,
                band: band,
                advisory: `Max AQI ${dayAqi} (${band}). ${dayAqi > 150 ? 'High risk — limit outdoor exertion.' : dayAqi > 100 ? 'Sensitive individuals cautioned.' : 'Normal outdoor activity permitted.'}`
              };
            });
            setTrendData(synthesizedTrend);
          }
        } catch (err) {
          console.warn("Live API fetch failed, falling back to calibrated preset:", err);
          setErrorMsg("Live atmospheric data temporarily unavailable. Showing high-quality calibrated preset for this location.");
          const preset = CITY_PRESETS.find((c) => 
            c.name.toLowerCase() === (cityObj.name || "").toLowerCase() ||
            (Math.abs(c.lat - cityObj.lat) < 0.5 && Math.abs(c.lon - cityObj.lon) < 0.5)
          ) || CITY_PRESETS[0];
          setWeatherData({
            temperature_2m: preset.temperature,
            apparent_temperature: preset.feelsLike,
            relative_humidity_2m: preset.humidity,
            wind_speed_10m: preset.windSpeed,
            surface_pressure: 1012,
            weather_code: preset.weatherCode
          });
          setAqiData({
            us_aqi: preset.aqi,
            pm2_5: preset.pm25,
            pm10: preset.pm10,
            ozone: preset.ozone,
            dominantPollutant: preset.dominantPollutant
          });
          setTrendData(PAST_7_DAYS_TREND);
        } finally {
          setIsLoadingData(false);
        }
      }, [isLiveMode]);

      useEffect(() => {
        if (selectedCity) {
          fetchTelemetry(selectedCity, profile, isLiveMode);
        }
      }, [selectedCity, isLiveMode, fetchTelemetry]);

      // Advisory calculation with simulated realistic thinking delay
      useEffect(() => {
        let isMounted = true;
        setIsLoadingAdvisory(true);

        const timer = setTimeout(async () => {
          try {
            let result;
            if (groqApiKey) {
              result = await requestGroqAdvisory(groqApiKey, profile, weatherData, aqiData);
            } else {
              result = synthesizePersonalizedAdvisory(profile, weatherData, aqiData);
            }
            if (isMounted) {
              setAdvisoryState(result);
            }
          } catch (err) {
            console.error("Advisory calculation error:", err);
          } finally {
            if (isMounted) {
              setIsLoadingAdvisory(false);
            }
          }
        }, 400);

        return () => {
          isMounted = false;
          clearTimeout(timer);
        };
      }, [profile, weatherData, aqiData, groqApiKey]);

      const handleCurrentLocation = () => {
        if (!navigator.geolocation) {
          alert("Geolocation is not supported by your browser.");
          return;
        }
        setIsLocating(true);
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const { latitude, longitude } = pos.coords;
            const loc = await reverseGeocode(latitude, longitude);
            setSelectedCity(loc);
            setIsLocating(false);
          },
          (err) => {
            alert("Location access was denied. You can search for your city directly in the search bar.");
            setIsLocating(false);
          },
          { timeout: 10000 }
        );
      };

      const weatherCode = weatherData?.weather_code ?? selectedCity?.weatherCode ?? 2;
      // Simple day/night: use local hour (6–19 = day) for visual richness
      const hour = new Date().getHours();
      const isDay = hour >= 6 && hour < 20;

      return (
        <div className="app-shell text-slate-800 flex flex-col selection:bg-teal-500 selection:text-white font-sans">
          <WeatherBackground weatherCode={weatherCode} isDay={isDay} />

          <Header
            city={selectedCity}
            onSelectCity={(city) => setSelectedCity(city)}
            onCurrentLocation={handleCurrentLocation}
            isLocating={isLocating}
            profile={profile}
            onOpenProfileModal={() => setIsProfileModalOpen(true)}
            isLiveMode={isLiveMode}
            onToggleMode={() => setIsLiveMode((prev) => !prev)}
            cityPresets={CITY_PRESETS}
          />

          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
            
            {errorMsg && (
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-between animate-fadeIn">
                <div className="flex items-center space-x-2">
                  <Icon name="info" className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
                <button
                  onClick={() => setErrorMsg(null)}
                  className="text-amber-700 hover:text-amber-900 font-bold ml-2"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* Hero + Alert (left) | Outline India Map (right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-stretch">
              <div className="flex flex-col gap-3.5">
                {/* Compact Hero Banner */}
                <div className="bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 rounded-3xl p-4 sm:p-5 text-white shadow-lg shadow-teal-900/15 relative overflow-hidden flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="relative z-10 min-w-0">
                    <div className="inline-flex items-center space-x-2 px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-xs text-[10px] font-semibold tracking-wide uppercase text-teal-100 mb-1.5 border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Personalized Health Intelligence</span>
                    </div>
                    <h1 className="text-lg sm:text-xl font-extrabold tracking-tight leading-tight">
                      Personalized Weather & AQI Advisory
                    </h1>
                    <p className="text-teal-100/90 text-[11px] sm:text-xs mt-1 leading-relaxed font-normal max-w-md">
                      Same air, different risk — advice made for your physiology. Type a city or explore the map.
                    </p>
                  </div>
                  <div className="relative z-10 flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
                    <button
                      onClick={() => setIsProfileModalOpen(true)}
                      className="px-3 py-2 bg-white text-teal-800 hover:bg-teal-50 text-[11px] font-bold rounded-xl shadow-sm transition flex items-center space-x-1.5 active:scale-95"
                    >
                      <Icon name="sliders" className="w-3.5 h-3.5 text-teal-600" />
                      <span>Edit Profile</span>
                    </button>
                    <button
                      onClick={() => setIsKeyModalOpen(true)}
                      title="Configure Groq Cloud API Key"
                      className="p-2 bg-white/15 hover:bg-white/25 border border-white/20 text-white rounded-xl transition"
                    >
                      <Icon name="sparkles" className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />
                </div>

                {/* Condition-aware Health Alert Banner */}
                {!isLoadingData && (
                  <HealthAlertBanner
                    severity={advisoryState.severity}
                    profile={profile}
                    aqi={aqiData.us_aqi ?? aqiData.aqi}
                  />
                )}

                {/* Chat assistant — below alert */}
                <ChatAssistant
                  weather={weatherData}
                  aqi={aqiData}
                  cityName={selectedCity?.name || selectedCity?.displayLabel}
                  trendData={trendData}
                  profile={profile}
                />

                {/* Share / export — compact, same column rhythm */}
                {!isLoadingData && (
                  <ShareAdvisoryBar
                    cityName={selectedCity?.displayLabel || selectedCity?.name}
                    weather={weatherData}
                    aqi={aqiData}
                    severity={advisoryState.severity}
                    profile={profile}
                  />
                )}
              </div>

              {/* Outline India map — no card, sits on weather background */}
              <IndiaMapPanel
                selectedCity={selectedCity}
                onSelectCity={(city) => setSelectedCity(city)}
                isLiveMode={isLiveMode}
              />
            </div>

            {/* Dashboard Content */}
            {isLoadingData ? (
              <DataLoadingSkeleton />
            ) : (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                  <WeatherCard
                    weather={weatherData}
                    cityLabel={selectedCity?.displayLabel || selectedCity?.name}
                  />
                  <AQICard
                    aqiData={aqiData}
                  />
                </div>

                <AdvisoryCard
                  advisoryText={advisoryState.advisoryText}
                  severity={advisoryState.severity}
                  whyFactors={advisoryState.whyFactors}
                  profile={profile}
                  isLoadingAdvisory={isLoadingAdvisory}
                  isLiveLLM={Boolean(groqApiKey)}
                />

                <ComparisonStrip
                  aqi={aqiData.us_aqi ?? aqiData.aqi}
                  temp={weatherData.temperature_2m ?? weatherData.temperature}
                  currentProfile={profile}
                  onSelectPersona={(personaProfile) => {
                    handleSaveProfile(personaProfile);
                  }}
                />

                <TrendChart
                  trendData={trendData}
                  currentCityName={selectedCity?.name || "Bhopal"}
                />
              </>
            )}

          </main>

          <footer className="w-full bg-white/80 backdrop-blur-md border-t border-white/40 py-5 mt-10 relative z-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
              <div className="text-center sm:text-left">
                <span className="font-bold text-slate-700">Rashtra Vayu</span>
                <span className="mx-1.5 text-slate-300">·</span>
                Personalized air & weather risk for every Indian
              </div>
              <div className="text-center sm:text-right text-[10px] text-slate-400 leading-relaxed max-w-xl">
                Data: Open-Meteo weather & air quality · US EPA AQI scale · Local clinical advisory engine.
                Map markers colorize as you explore (hover caches AQI).
              </div>
            </div>
          </footer>

          <ProfileModal
            isOpen={isProfileModalOpen}
            onClose={() => setIsProfileModalOpen(false)}
            profile={profile}
            onSaveProfile={handleSaveProfile}
          />

          {isKeyModalOpen && (
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
              <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
                <button
                  onClick={() => setIsKeyModalOpen(false)}
                  className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600"
                >
                  <Icon name="close" className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                    <Icon name="sparkles" className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Groq API Key (Optional)</h3>
                    <p className="text-xs text-slate-500">Enable live Llama-3.1-8b LLM text synthesis</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Rashtra Vayu includes an advanced local clinical advisory engine that runs automatically. If you have a free Groq API key, you can enter it below to generate live LLM responses.
                </p>
                <input
                  type="password"
                  placeholder="gsk_..."
                  value={groqApiKey}
                  onChange={(e) => setGroqApiKey(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none mb-4"
                />
                <div className="flex items-center justify-end space-x-2">
                  <button
                    onClick={() => {
                      setGroqApiKey("");
                      localStorage.removeItem('airwell_groq_key');
                      setIsKeyModalOpen(false);
                    }}
                    className="px-3 py-2 text-xs font-semibold text-slate-500 hover:text-slate-700"
                  >
                    Clear
                  </button>
                  <button
                    onClick={() => {
                      localStorage.setItem('airwell_groq_key', groqApiKey);
                      setIsKeyModalOpen(false);
                    }}
                    className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl shadow-xs"
                  >
                    Save Key
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      );
    }

    const rootElement = document.getElementById('root');
    if (rootElement) {
      const root = ReactDOM.createRoot(rootElement);
      root.render(<App />);
    }
