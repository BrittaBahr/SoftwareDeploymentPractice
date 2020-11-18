FROM debian:jessie

ENV DB_NAME=softwareDeploymentlab3
ENV DB_USER=brittabahr
ENV DB_PASSWORD=superGeheim123

USER root

RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server

COPY docker-entrypoint.sh docker-entrypoint.sh
COPY secure_install.sh secure_install.sh
COPY init.sql /docker-entrypoint-initdb.d/

RUN ./secure_install.sh

ENTRYPOINT ./docker-entrypoint.sh

EXPOSE 3306