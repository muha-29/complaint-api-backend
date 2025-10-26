<<<<<<< HEAD
# Civic Issue Tracker – API

A Node.js/Express backend that stores citizen complaints, lets admins update status, and serves a “driving‑mode” endpoint that returns open issues within a given radius.
=======
# Node Express API (TypeScript) for Hackathon

This is a simple API sample in Node.js, built with Express and TypeScript. This project was created for a Hackathon.
>>>>>>> c573efb (Initial commit – full‑stack civic complaint PWA)

## Quick start
1. Clone the repo.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and fill in the values.
4. Start the dev server: `npm run dev`.

<<<<<<< HEAD
## Endpoints
| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/complaints` | Create a new complaint (multipart form, upload photo) |
| `GET`  | `/api/complaints/:id` | Fetch a single complaint |
| `GET`  | `/api/complaints?lat=&lng=&radius=` | List open complaints within *radius* km (driving mode) |
| `PATCH`| `/api/complaints/:id/status` | Admin updates status (requires auth) |
| `GET`  | `/api/complaints/public` | Public feed of resolved issues |

See the `routes/complaints.js` file for full request/response shapes.
=======
1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

    This will start the server with `nodemon`, which will automatically restart the server when you make changes to the source code.

3.  **Build the project:**
    ```bash
    npm run build
    ```

    This will compile the TypeScript code to JavaScript and output it to the `dist` directory.

4.  **Run the production server:**
    ```bash
    npm run start
    ```

    This will start the server from the compiled JavaScript code in the `dist` directory.

## Testing

To run the tests, use the following command:

```bash
npm test
```
>>>>>>> c573efb (Initial commit – full‑stack civic complaint PWA)
