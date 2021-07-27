FROM node:lts AS build-env

COPY ./ /<%= projectInfo.projectName %>
WORKDIR /<%= projectInfo.projectName %>
RUN yarn && yarn build


FROM nginx:latest
ARG N_ENV=prod

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-env /<%= projectInfo.projectName %>/dist/ /usr/share/nginx/html/

EXPOSE 80
