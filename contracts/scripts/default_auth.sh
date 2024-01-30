#!/bin/bash
set -euo pipefail
pushd $(dirname "$0")/..

export RPC_URL="http://localhost:5050";

export WORLD_ADDRESS=$(cat ./target/dev/manifest.json | jq -r '.world.address')

export ACTIONS_ADDRESS=$(cat ./target/dev/manifest.json | jq -r '.contracts[] | select(.name == "dojo_royale::systems::actions::actions" ).address')

export LOBBY_ACTIONS_ADDRESS=$(cat ./target/dev/manifest.json | jq -r '.contracts[] | select(.name == "dojo_royale::systems::lobby_actions::lobby_actions" ).address')

echo "---------------------------------------------------------------------------"
echo world : $WORLD_ADDRESS 
echo " "
echo actions : $ACTIONS_ADDRESS 
echo " "
echo lobby_actions : $LOBBY_ACTIONS_ADDRESS 
echo " "
echo "---------------------------------------------------------------------------"

# enable system -> component authorizations
COMPONENTS=("Position" "Moves" "Player" "Room" "Obstacle")

for component in ${COMPONENTS[@]}; do
    sozo auth writer $component $ACTIONS_ADDRESS --world $WORLD_ADDRESS --rpc-url $RPC_URL
    # time out for 1 second to avoid rate limiting
    sleep 1
done

COMPONENTS=("Position" "Moves" "Player" "Room" "Obstacle")

for component in ${COMPONENTS[@]}; do
    sozo auth writer $component $LOBBY_ACTIONS_ADDRESS --world $WORLD_ADDRESS --rpc-url $RPC_URL
    # time out for 1 second to avoid rate limiting
    sleep 1
done

echo "Default authorizations have been successfully set."