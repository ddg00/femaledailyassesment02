#!/usr/bin/env bash
#docker rm -f pivot-app #remove container
#docker rmi -f pivot-app
#docker image prune
#docker volume prune
docker build -t pivot-app .
