#!/usr/bin/env bash

set -ex

docker compose up -d
docker compose logs -f
# docker compose exec -it frontend bash

