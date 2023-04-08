#!/bin/bash

input="fileList.txt"
while IFS= read -r line
do
echo "-----------------------"
  echo "Moving: $line"
mv "../Sources/MagicItems/$line" "./fix"
echo "-----------------------"
done < "$input"