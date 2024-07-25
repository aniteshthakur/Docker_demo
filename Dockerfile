FROM node:16-alpine as builder
WORKDIR '.app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build 

From nginx
EXPOSE 80
Copy --from=builder /app/build /usr/share/nginx/html
