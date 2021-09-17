#!/bin/bash

echo "> Devoong Build..."
yarn build:prod

echo "> 404.Html Copy..."
cp build/index.html build/404.html && cp CNAME ./build

echo "> Github Pages Deploy..."
yarn deploy