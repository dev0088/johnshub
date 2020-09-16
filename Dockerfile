FROM nikolaik/python-nodejs:python3.8-nodejs12-alpine

ENV DATABASE_ENGINE django.db.backends.postgresql_psycopg2
ENV DATABASE_NAME johnshub
ENV DATABASE_USER_NAME postgres
ENV DATABASE_PASSWORD postgres
ENV DATABASE_HOST db
ENV DATABASE_PORT 5432
ENV PORT 8000
ENV REACT_APP_API_BASE_URL https://www.johnshub.com/api/v1

# ADD ./ /api/frontend
COPY . /usr/src/johnshub/

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

RUN pip install -U pip 
RUN pip install pipenv psycopg2 cython mysqlclient

RUN mkdir -p /usr/src/johnshub

WORKDIR /usr/src/johnshub
# RUN mkdir -p /usr/src/johnshub/run

COPY requirements.txt /usr/src/johnshub/
COPY frontend/.env.example /usr/src/johnshub/frontend/.env

RUN pip install -r requirements.txt

# RUN cd /usr/src/johnshub/frontend/ && yarn install && yarn run build

EXPOSE 8000
