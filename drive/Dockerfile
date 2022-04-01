FROM node:14-alpine 

RUN mkdir /drive

WORKDIR /drive

COPY package.json /drive
COPY package-lock.json /drive
RUN npm install

COPY . /drive

# RUN npm run build

