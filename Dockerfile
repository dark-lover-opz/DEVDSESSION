# --- Stage 1: Build Image ---
# Use a Node.js base image with a recent version and alpine for a smaller image size
FROM node:22-alpine3.18 as builder

# Set the working directory
WORKDIR /home/node/app

# Copy package.json and package-lock.json to leverage Docker layer caching
COPY --chown=node:node package*.json ./

# Install all dependencies, including devDependencies for the build step
RUN npm install

# Copy the rest of the application source code
COPY --chown=node:node . .

# Build the application
# Using `npm run build` which will now use `npx tsc` to execute the TypeScript compiler
RUN npm run build

# --- Stage 2: Production Image ---
# Start a new, clean image for production
FROM node:22-alpine3.18

# Create a working directory and set permissions
WORKDIR /home/node/app
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Set environment to production
ENV NODE_ENV=production

# Copy only the necessary files from the builder stage
# This includes the compiled JavaScript files and the package.json
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/package*.json ./

# Set the correct user
USER node

# Install only production dependencies
RUN npm install --omit=dev

# Expose the port your application listens on
EXPOSE 8000

# Start the application
CMD ["npm", "start", "serve"]


---

### Fixed `package.json`

The key change is in the `build` script. It now uses `npx` to correctly find and execute the `tsc` command.

```json
{
    "name": "devdsession",
    "version": "1.1.0",
    "description": "Whatsapt paring api for DEVD whatsappbot",
    "main": "dist/index.js",
    "type": "module",
    "scripts": {
        "start": "node .",
        "dev": "npm run build-dev && node . serve -v",
        "build": "npx tsc && npm run build-static",
        "serve": "npm run build && node . serve -v",
        "build-dev": "npx tsc && npm run copy-static",
        "build-static": "copyfiles src/public/*.html -u 1 dist/ && esbuild src/public/assets/* --bundle --minify --format=esm --outdir=dist/public/assets",
        "copy-static": "copyfiles -u 1 src/public/**/* dist/"
    },
    "keywords": [
        "bot"
    ],
    "author": "DannyAkintunde",
    "license": "MIT",
    "dependencies": {
        "@hapi/boom": "^10.0.1",
        "baileys": "^6.7.16",
        "dotenv": "^16.5.0",
        "express": "^5.1.0",
        "fs-extra": "^11.3.0",
        "pino": "^9.6.0",
        "redis": "^5.0.0",
        "yargs": "^17.7.2"
    },
    "devDependencies": {
        "@types/express": "^5.0.1",
        "@types/fs-extra": "^11.0.4",
        "@types/node": "^22.15.3",
        "@types/qrcode": "^1.5.5",
        "@types/redis": "^4.0.10",
        "@types/yargs": "^17.0.33",
        "copyfiles": "^2.4.1",
        "esbuild": "^0.25.5",
        "globals": "^16.0.0",
        "pino-pretty": "^13.0.0",
        "typescript": "^5.5.3"
    }
}

Please ensure you **replace the entire contents of your current `Dockerfile` and `package.json` files with the code above** and try the build again.
