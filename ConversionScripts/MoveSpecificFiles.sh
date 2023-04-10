#!/bin/bash


input="FileRelocationList.txt"
while IFS= read -r line
do
echo "-----------------------"
  echo "Moving: $line"
mv "../Sources/MagicItems/${line::-1}" "./Outputs/Delete"
echo "-----------------------"
done < "$input"


