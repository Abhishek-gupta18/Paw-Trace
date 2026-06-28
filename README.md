# PawTrace

PawTrace is a web app for reporting lost pets, tracking community sightings, and helping owners, volunteers, and local communities reunite pets with their families.

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, React Router, Leaflet
- Backend: Node.js, Express
- Authentication: JWT stored in an HTTP-only cookie
- Planned database: Supabase PostgreSQL
- Planned image storage: Supabase Storage

## Project Structure

```txt
Paw_Tracer/
  backend/
    .env
    .env.example
    server/
      server.js
      src/
        app.js
        middleware/
        routes/
  frontend/
    frontend/
      src/
      package.json
      vite.config.js
```

## Authentication

The app uses JWT authentication, but the token is not exposed to frontend JavaScript.

Login creates a JWT and stores it in an HTTP-only cookie named `pawtrace_session`. The browser automatically sends this cookie with protected API requests. This keeps the token safer than storing it in `localStorage` or returning it to the frontend.

Current session behavior:

- Session duration: 30 minutes
- Refreshing or reopening the site within 30 minutes keeps the user logged in
- Logout clears the cookie immediately
- Protected frontend routes call `/api/auth/session` to verify the session

## Environment Variables

Create/update `backend/.env`:

```env
PORT=5000
CLIENT_ORIGIN=http://127.0.0.1:5173
JWT_SECRET=replace-with-a-long-random-secret

DATABASE_URL=

SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_STORAGE_BUCKET=pet-images
```

Generate a strong JWT secret:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Do not commit real secrets.

## Local Development

Install dependencies:

```bash
cd backend/server
npm install

cd ../../frontend/frontend
npm install
```

Start the backend:

```bash
cd backend/server
node server.js
```

Start the frontend:

```bash
cd frontend/frontend
npm run dev -- --host 127.0.0.1
```

Open:

```txt
http://127.0.0.1:5173/
```

## Useful Routes

- Landing page: `/`
- Login: `/login`
- Protected dashboard: `/dashboard`
- Dev-only dashboard preview: `/dashboard-preview`

Use `/dashboard-preview` while designing the dashboard without logging in. The real `/dashboard` route remains protected.

## Recommended Database Design

PawTrace should use Supabase PostgreSQL for relational app data and Supabase Storage for uploaded pet images.

Suggested tables:

- `users`
- `pets`
- `lost_reports`
- `pet_images`
- `sightings`
- `sighting_images`
- `volunteers`
- `messages`
- `notifications`

Images should not be stored directly in PostgreSQL. Upload images to Supabase Storage, then save metadata in PostgreSQL, such as:

```txt
bucket
storage_path
public_url or signed URL path
uploaded_by
pet_id
report_id
created_at
```

## Image Upload Flow

Recommended flow:

1. User selects pet images in the frontend.
2. Frontend sends the files to the Express backend.
3. Backend verifies the JWT cookie.
4. Backend uploads the files to Supabase Storage.
5. Backend saves image metadata in PostgreSQL.
6. Frontend displays images using the saved URL or signed URL.

## Current Notes

- The backend currently has JWT cookie auth routes under `/api/auth`.
- Vite proxies `/api` requests to `http://127.0.0.1:5000`.
- The dashboard has a theme toggle with a ripple-style View Transition animation.
- Supabase integration is planned next.
