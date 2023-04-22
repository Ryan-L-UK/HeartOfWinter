#!/bin/bash

input="FileRelocationList.txt"
while IFS= read -r line
do
echo "-----------------------"
  echo "Moving: $line"
mv "../Sources/Creatures/${line::-1}" "./Outputs/Conflicts"
echo "-----------------------"
done < "$input"


