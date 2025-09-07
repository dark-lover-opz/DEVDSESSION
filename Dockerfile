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
