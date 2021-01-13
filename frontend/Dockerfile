FROM node

WORKDIR /usr/src/app/

COPY package.json .

RUN npm install

COPY . .

RUN npm run build
RUN npm run generate

CMD ["npm run", "docker"]