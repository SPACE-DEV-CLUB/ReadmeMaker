#!/bin/bash
REPOSITORY=/home/ubuntu/ReadmeMaker

cd $REPOSITORY
yarn
yarn dev
pm2 kill
pm2 start "yarn start" --name readmemaker