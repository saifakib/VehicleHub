FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Set default environment variables
ENV PORT=4000
ENV connectionURL='mongodb://root:example@localhost:27017/saifdb?authSource=admin'

EXPOSE 4000

CMD ["npm", "run", "dev"]