FROM node:13
RUN mkdir -p $HOME/htam/taskfy/backend/node_modules && chown -R node:node $HOME/htam/taskfy/backend
WORKDIR $HOME/htam/taskfy/backend
COPY package*.json ./
RUN npm i
COPY . .
COPY --chown=node:node . .
USER node
EXPOSE 8080
CMD ["npm", "start"]
