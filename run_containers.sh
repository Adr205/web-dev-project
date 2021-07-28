#!/bin/bash

NUM_CONTAINERS=sudo docker ps -a | wc -l

if [[ $NUM_CONTAINERS > 1 ]]
then  
    sudo docker rm -f $(sudo docker ps -aq)
fi

sudo docker compose up --build