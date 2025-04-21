#!/bin/bash

TARGET=${1:-development}

echo "🔧 Building with target: $TARGET"

docker compose build --build-arg NODE_ENV=$TARGET --progress=plain --parallel --no-cache --pull
docker compose up