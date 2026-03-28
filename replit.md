# Saurabh Mishra Portfolio

A personal portfolio/resume website for Saurabh Mishra.

## Tech Stack

- **Frontend**: React 18, CRACO, Tailwind CSS, Radix UI (shadcn/ui), Framer Motion
- **Backend**: FastAPI (Python) + MongoDB — not currently used in this setup

## Running the App

The frontend runs on port 5000:

```
cd frontend && PORT=5000 npm start
```

## Project Structure

```
frontend/       - React app (the active website)
  src/
    components/ - UI components (Header, Hero, About, Skills, etc.)
    pages/      - Portfolio page
    utils/      - generateResumePDF.js for PDF resume download
    lib/        - Utility helpers
  craco.config.js - CRACO config (allows all hosts, port 5000)
  package.json    - React 18 + compatible dependencies

backend/        - FastAPI backend (not in use for current setup)
  server.py     - FastAPI app with MongoDB integration
  requirements.txt
```

## Notes

- Uses React 18 (not 19) for compatibility with react-day-picker
- date-fns@3.x for compatibility with react-day-picker@8.10.1
- ajv@8 installed to fix ajv-keywords compatibility with react-scripts 5
- devServer configured to allow all hosts for Replit proxy support
- Resume PDF generation is client-side via jsPDF
