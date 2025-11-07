# Deployable Fullstack Starter

A minimal example of deploying a fullstack app (Vite + Flask) to a fresh Google Cloud Platform (GCP) Virtual Machine (VM). 
Designed for teaching beginners on cloud deployment.
- Minimal Vite + React frontend (served by nginx, HTTP)
- Minimal Flask backend (served by Gunicorn, HTTP)
- Minimal docker-compose for fullstack deployment

## Important Files

- `frontend/Dockerfile`: Builds the Vite app using Node, then serves the static files using `nginx:alpine`.
- `backend/Dockerfile`: Runs the Flask API in production using `gunicorn` inside a lightweight Python image `python:3.12-slim`.
- `docker-compose.yml`: Defines and runs both containers:
    * Frontend container on port **80** (nginx serving the built Vite app)
    * Backend container on port **5001** (Gunicorn serving Flask)

## Getting Started

These steps work on any clean Linux VM (e.g., GCP, AWS).

1. Create a new VM instance (e.g., GCP e2-medium).
    - Install `git`: `sudo apt install git -y`.
    - Install `docker`: `curl -fsSL https://get.docker.com | sudo sh`.
2. Clone this repo `ND-SaNDwichLAB/deployable-fullstack-starter`.
3. Find your VM's external IP on the GCP VM page, e.g., 136.116.220.221, and set it in `frontend/.env.production`.
4. Build and run the app using Docker Compose.
    - In the project directory, run `docker-compose up --build -d`
    - Run `docker ps`, and you should see the frontend and backend containers running on ports 80 and 5001, respectively.
5. Visit the app in your browser at `http://<your-vm-external-ip>` (e.g., http://136.116.220.221).
    - Click the "Call Backend" button, and you should see: "Backend says: pong."

### (Optional) Using Sensitive Environment Variables (e.g., OpenAI API Key)

1. Create a `.env` file in the project root (same folder as `docker-compose.yml`), with `OPENAI_API_KEY=sk-xxxx`.
    - Make sure `.env` is in `.gitignore`.
2. In `docker-compose.yml`, uncomment the `environment` section.
3. Access it in Flask with `os.getenv("OPENAI_API_KEY")`.

### (Optional) Using a Custom Domain

If you own a domain (e.g., `toby.li`), you can use it instead of the raw VM IP. You simply need to create an **A record** in your domain provider (e.g., Cloudflare, Namecheap):
- Name: `mystarter` (or any subdomain)
- Type: `A`
- Value: your VM's external IP (e.g., `136.116.220.221`)

After DNS updates, your app is accessible at: `http://mystarter.toby.li`. No other changes are needed.

## Next Steps

- Add **HTTPS** (e.g., via Caddy) since HTTP is not secure and exposes API traffic.
