#!/usr/bin/env sh

docker stop komikaru-backend

yes | docker system prune

docker build -t komikaru-backend .

docker run --name komikaru-backend -p 80:8000 -d komikaru-backend

yes | docker system prune

