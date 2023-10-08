#! /bin/sh

rm family-tree.db

node src/main.js add person selin
node src/main.js add person manish
node src/main.js add person nikhil
node src/main.js add person priya
node src/main.js add person nitya


node src/main.js add relationship father
node src/main.js add relationship son
node src/main.js add relationship daughter
node src/main.js add relationship wife

node src/main.js connect nikhil as son of selin
node src/main.js connect manish as son of selin
node src/main.js connect priya as daughter of selin
node src/main.js connect nitya as wife of selin