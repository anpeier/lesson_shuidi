FROM daocloud.io/library/node:7.9-wheezy
RUN mkdir -p /user/src/nodejs/
WORKDIR /user/src/nodejs/
COPY package.json /user/src/nodejs/package.json
RUN cd /user/src/nodejs/
RUN npm i

COPY . /user/src/nodejs/
EXPOSE 1234
CMD yarn start