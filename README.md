# Civic Issue Tracker – API

A Node.js/Express backend that stores citizen complaints, lets admins update status, and serves a “driving‑mode” endpoint that returns open issues within a given radius.

## Quick start
1. Clone the repo.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and fill in the values.
4. Start the dev server: `npm run dev`.

## Endpoints
| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/complaints` | Create a new complaint (multipart form, upload photo) |
| `GET`  | `/api/complaints/:id` | Fetch a single complaint |
| `GET`  | `/api/complaints?lat=&lng=&radius=` | List open complaints within *radius* km (driving mode) |
| `PATCH`| `/api/complaints/:id/status` | Admin updates status (requires auth) |
| `GET`  | `/api/complaints/public` | Public feed of resolved issues |

See the `routes/complaints.js` file for full request/response shapes.