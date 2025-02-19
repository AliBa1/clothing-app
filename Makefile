# Define variables for paths
FRONTEND_DIR = web-app
BACKEND_DIR = backend_api

# Install frontend dependencies using Yarn
install-frontend:
	cd $(FRONTEND_DIR) && yarn install

# Start the Next.js development server
start-frontend:
	cd $(FRONTEND_DIR) && yarn dev
