#!/bin/bash

# sudo docker build -t frontend:1.0 .

sudo docker run \
    -itd \
    --rm \
    -v xdx:/app \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    frontend:1.0
