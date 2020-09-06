#!/usr/bin/env sh

docker-compose stop
docker-compose down

sudo chown centos:centos -Rf db

docker-compose up -d --build

docker-compose exec api python manage.py collectstatic --noinput
docker-compose exec api python manage.py migrate

yes | docker system prune

