FROM node:8-alpine
WORKDIR /app
ADD . /app
EXPOSE 3000
CMD ["npm", "run", "start:prod"]