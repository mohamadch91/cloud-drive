FROM node:14-alpine 
ENV NODE_ENV development
RUN mkdir /drive

WORKDIR /drive

COPY package.json /drive
COPY package-lock.json /drive
RUN npm install

COPY . /drive
EXPOSE 3000
CMD ["npm", "start"]
# RUN npm run build

