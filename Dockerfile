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
RUN pip install --upgrade pip
RUN pip install psycopg2 cython mysqlclient
RUN apk del .build-deps

RUN pip install -r requirements.txt

EXPOSE 8000
