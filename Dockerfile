FROM node:16-bullseye
WORKDIR /myapp
COPY . .
EXPOSE 5000
RUN npm install
CMD [ "npm", "start" ]