FROM node:20 as BUILD_IMAGE
WORKDIR /app/frontend

COPY package.json package-lock.json  /app/frontend/
RUN npm install 
RUN npm install react-scripts@3.4.1 -g 
COPY . .

RUN npm run build
# CMD ["npm", "run", "dev"]

FROM node:20 as PRODUCTION_IMAGE

WORKDIR /app/frontend

COPY --from=BUILD_IMAGE /app/frontend/dist /app/frontend/dist
EXPOSE 8080
COPY package.json .
COPY vite.config.js .


CMD [ "npm", "run", "preview" ]

