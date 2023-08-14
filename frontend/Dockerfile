FROM node:18.12-alpine AS builder

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
COPY package-lock.json ./
COPY . ./
RUN touch /app/public/config.js
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY /nginx/default.conf /etc/nginx/conf.d/
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
