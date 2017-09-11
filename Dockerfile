FROM node:latest
WORKDIR /usr/src/app

COPY package.json .
CMD ["npm" "install"]

COPY . .

EXPOSE 3000
CMD ["npm", "start"]