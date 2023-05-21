#!/bin/bash

fullfilenames="ls ./Foundry/*.json"

for eachfile in $fullfilenames
do
IFS="/"
read -a fileName <<<"$eachfile"
echo "Combining: ${fileName[2]}"
jq -s 'add' "./Spells/${fileName[2]}" "./Foundry/${fileName[2]}" > "./combine/${fileName[2]}"
echo "Files Merged"
done




