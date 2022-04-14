
FROM registry.storage-project.ir:5000/proxy/library/node:14-alpine as build
ENV PATH /node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
CMD ["npm", "start"]