FROM nginx:alpine
COPY ui/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
