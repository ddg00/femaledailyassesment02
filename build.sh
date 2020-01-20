#!/usr/bin/env bash
docker rm -f app-backend #remove container
docker rmi -f pivot/app-backend
#docker image prune
#docker volume prune
docker build -t pivot/app-backend .
