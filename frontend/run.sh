#!/bin/bash
sudo docker rm -f frontend && \
sudo docker system prune -af --volumes && \
sudo docker build -t frontend:1.0 . && \

sudo docker run \
    -itd \
    --name frontend \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    frontend:1.0
