FROM node:14.16.1-alpine3.13

ENV NODE_ENV=production

# Create the application working directory
WORKDIR /app


COPY ["package.json", "yarn.lock*", "./"]
RUN yarn install

# Copy the entire directory
COPY . .

# Start Container
CMD ["npm", "start"]

