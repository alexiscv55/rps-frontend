FROM nginx:1.22.0-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/rock-paper-scissors /usr/share/nginx/html