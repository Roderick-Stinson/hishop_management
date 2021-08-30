FROM node:latest AS builder

WORKDIR /hishop_management
COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

FROM nginx:latest
#COPY nginx.conf /etc/nginx
COPY --from=builder /hishop_management/build /usr/share/nginx/html
EXPOSE 80