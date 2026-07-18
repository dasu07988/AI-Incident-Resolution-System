# Enterprise AI incident resolution dashboard

React frontend for the Enterprise AI multi-agent incident resolution system. This is the
UI layer only — the backend (n8n + Pinecone + Gemini Flash-Lite, deployed on
Docker/EC2) is unchanged and untouched by this project.

## Stack

React 19 · Vite · Tailwind CSS 4 · React Router 7 · Axios · Recharts · Context API

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Mock data vs live API

The app ships wired to local mock JSON (`src/mocks/`) that mirrors the shape the
real backend returns, so every page works out of the box with no server running.

To switch to the live backend, edit `.env`:

```bash
VITE_USE_MOCK_DATA=false
VITE_API_BASE_URL=https://your-n8n-instance.example.com/webhook/Enterprise AI
```

No other code changes are needed — every `*.api.js` file in `src/api/` checks
`USE_MOCK_DATA` and calls the real endpoint via the shared axios client
(`src/api/axiosClient.js`) when it's `false`. The expected REST endpoints are:

| Endpoint | Used by |
|---|---|
| `GET /incidents` | Incident list (search/filter/sort/pagination via query params) |
| `GET /incidents/:id` | Incident details |
| `GET /incidents/summary` | Dashboard stat cards |
| `GET /analytics` | Analytics page (trend, severity distribution, categories, monthly reports) |
| `GET /resolution-history` | AI resolution history |
| `GET /trello/cards` | Trello integration page |
| `GET /system/status` | Settings page + Topbar health indicator |

## Project structure

```
src/
├── api/           # All HTTP calls — the only layer that knows about axios/endpoints
├── mocks/         # Local JSON matching the real backend's response shape
├── context/       # Global state via Context API (app status, incident filters)
├── components/    # Reusable UI: common/, layout/, charts/
├── features/      # One folder per page/domain (dashboard, incidents, analytics, ...)
├── hooks/         # Data-fetching and utility hooks
├── routes/        # Centralized React Router route definitions
└── utils/         # formatDate, severityConfig (single source of truth for colors/labels)
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Scope

Covers all 7 planned pages: dashboard home, incident list, incident details,
analytics, AI resolution history, Trello integration, and settings — all on
the dark enterprise theme, fully responsive, backed by mock data that matches
the real backend contract.
