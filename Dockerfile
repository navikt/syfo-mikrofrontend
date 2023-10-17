FROM node:16-alpine
WORKDIR /dialogmote-mikrofrontend

ENV NODE_ENV production

COPY dist ./dist

EXPOSE 8080
