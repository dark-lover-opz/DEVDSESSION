FROM node:22-alpine3.18

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY package*.json ./

USER node
RUN npm install
COPY --chown=node:node . .
RUN npm run build
# Remove dev dependencies and install production dependencies
RUN rm -rf node_modules && \
    rm -rf src && \
    npm install --production

EXPOSE 8000
CMD ["npm", "start", "serve"]
