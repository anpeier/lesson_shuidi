FROM daocloud.io/library/node:7.9-wheezydoc

RUN mkdir -p /home/project
WORKDIR /home/project

RUN chmod -R 777 /home/project
COPY . /home/project
RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 3001
ENTRYPOINT [ "npm", "run"]
CMD [ "start" ]