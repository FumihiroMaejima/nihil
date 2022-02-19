FROM node:16.14-alpine

ENV NODE_ENV=production
ENV HOST 0.0.0.0

WORKDIR /frontend

# COPY ./package.json ./

EXPOSE 3000

RUN yarn install
RUN yarn build

CMD ["yarn", "start"]
