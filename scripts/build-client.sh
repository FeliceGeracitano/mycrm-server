#!/bin/bash
PATH=$PATH:$(npm bin)
set -x
rm -r ./public-mobile/*
rm -r ./public-desktop/*
# build client from client repo
cd ../mycrm-client && yarn build:mobile && yarn build:desktop
cd ../mycrm-server
# copy into public folder
cp -r ../mycrm-client/dist-mobile/* ./public-mobile
cp -r ../mycrm-client/dist-desktop/* ./public-desktop

