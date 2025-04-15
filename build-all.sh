#!/bin/bash

set -e 

echo "Installing dependencies..."
npm install --ignore-scripts

echo "Building project in root..."
npm run build:release
