FROM python:3.8.5-alpine

ADD . /api
WORKDIR /api

ENV PYTHONUNBUFFERED 1
ENV DATABASE_ENGINE django.db.backends.postgresql_psycopg2
ENV DATABASE_NAME johnshub
ENV DATABASE_USER_NAME postgres
ENV DATABASE_PASSWORD postgres
ENV DATABASE_HOST db
ENV DATABASE_PORT 5432
ENV PORT 8000

RUN apk update
RUN apk add --no-cache --virtual .build-deps
RUN apk add --no-cache gcc \
    libc-dev \
    make \
    python3-dev \
    musl-dev \
    postgresql-dev \
    mysql-dev \
    libffi-dev \
    py-pip \
    openssl-dev \
    build-base \
    bash
# RUN echo "deb https://deb.nodesource.com/node_12.x buster main" > /etc/apt/sources.list.d/nodesource.list && \
#   wget -qO- https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - && \
#   echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list && \
#   wget -qO- https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
# RUN apk update
# RUN apk add --update nodejs nodejs yarn nodejs-npm

RUN pip install --upgrade pip
RUN pip install psycopg2 cython mysqlclient
RUN apk del .build-deps

RUN pip install -r requirements.txt

EXPOSE 8000

FROM node:12-alpine
WORKDIR /api/frontend
ENV REACT_APP_API_BASE_URL https://www.johnshub.com/api/v1
# COPY ./frontend /api/frontend
ADD ./frontend /api/frontend
RUN cd /api/frontend
RUN npm install --silent
RUN npm run build
