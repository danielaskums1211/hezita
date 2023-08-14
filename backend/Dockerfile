FROM node:18.12-alpine

ENV NODE_ENV=production

# Create the application working directory
WORKDIR /app


COPY ["package.json", "package-lock.json", "./"]
RUN npm install

# Copy the entire directory
COPY . .

# Start Container
CMD ["npm", "start"]

