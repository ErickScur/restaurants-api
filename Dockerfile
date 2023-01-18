FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install --omit --no-shrinkwrap --legacy-peer-deps
 
COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3009

CMD ["npm", "run", "start:prod"]