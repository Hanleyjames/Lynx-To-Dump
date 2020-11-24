FROM ubuntu:20.04

ENV TZ=US
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
WORKDIR usr/src/app
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
                      npm \
                      lynx
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 8080

CMD [ "node", "api/server.js"]
