FROM python:3.8.5-alpine

ADD . /api
WORKDIR /api

# set environment variables
# ENV DATABASE_ENGINE django.db.backends.postgresql_psycopg2
ENV DATABASE_ENGINE django.db.backends.mysql
ENV DATABASE_NAME komikaru
ENV DATABASE_USER_NAME comiculdba
ENV DATABASE_PASSWORD rhZo7LKPb7jtyJgsr21d
ENV DATABASE_HOST comicul-db-instance.c0sl7hufvgih.ap-northeast-1.rds.amazonaws.com
ENV DATABASE_PORT 3306
ENV PORT 8000
ENV PYTHONUNBUFFERED 1

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
RUN python manage.py collectstatic --noinput

EXPOSE 8000

ENTRYPOINT [ "/bin/bash", "entrypoint.sh"]
