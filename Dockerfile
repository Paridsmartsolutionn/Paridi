FROM node:16.17-alpine
WORKDIR /PSS
ENV PATH="./node_modules/.bin.$PATH"
COPY . .
RUN npm run build
CMD ["npm","start"]

