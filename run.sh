#!/bin/bash

# Set your Dark Sky API Key below
export DARK_SKY_KEY=

# Also, please be sure to put your Google Maps API key in src/environments/envionment.ts like such:
#  google_maps_key: "YOUR KEY HERE"

# Generate an SSL certificate and Key and place it in a folder in the root project directory called "ssl"
# You can generate a test certificate / key by:
# openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out cert.pem

node api/index.js &
ng serve --proxy-config proxy.conf.json --ssl true --ssl-cert ssl/cert.pem --ssl-key ssl/key.pem
