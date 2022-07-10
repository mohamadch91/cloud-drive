
FROM registry.storage-project.ir:5000/proxy/library/node:16-alpine as build
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@5.0.1 -g --silent
RUN npm install serve 
COPY . ./
Run npm run build
CMD ["npm", "start"]