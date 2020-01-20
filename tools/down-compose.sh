#!/usr/bin/env bash
sh build.sh
docker-compose -f ../docker-compose.yaml down
