#!/bin/bash

echo "-----------------------"
echo "Select Index Type"
echo "-----------------------"
PS3="Select your desired index: "
select index in Monster Spell Items
do
echo "Selected index: $index"
if [[ $REPLY = 1 ]] then
foundry="./monster"
source="../Sources/Creatures"
elif [[ $REPLY = 2 ]] then
foundry="./spells"
source="../Sources/Spells"
elif [[ $REPLY = 3 ]] then
foundry="./item"
source="../Sources/MagicItems"
else 
echo "error"
fi

echo "-----------------------"
echo "Identify Files"
echo "-----------------------"

diffresult="$(diff -q $foundry $source -x *.png)"
IFS=',' readarray -t array <<<"$diffresult"
IFS=$'\n'
sorted=($(sort <<<"${array[*]}"))
unset IFS
for element in "${sorted[@]}"
do
if [[ $element =~ ".DS_Store" ]]; then 
:
elif [[ $element =~ "Files $foundry" ]]; then
IFS="/"
read -a indexName <<<"$element"
echo "Changes -> ${indexName[2]::-7}"
elif [[ $element =~ "Only in $foundry" ]]; then
IFS=":"
read -a indexName <<<"$element"
echo "New ->${indexName[1]}"
elif [[ $element =~ "Only in ../Sources" ]]; then
:
else
:
fi
done > tempFileList.txt


echo "-----------------------"
echo "Starting Move"
echo "-----------------------"
input="tempFileList.txt"
while IFS= read -r line
do
if [[ $line =~ "New " ]]; then
IFS=">"
read -a fileName <<<"$line"
mv "./$foundry/${fileName[1]:1}" "./Outputs/New"
else 
IFS=">"
read -a fileName <<<"$line"
mv "./$foundry/${fileName[1]:1}" "./Outputs/Conflicts"
fi
done < "$input"
echo "-----------------------"
echo "Move Completed"
echo "-----------------------"

rm -rf tempFileList.txt
exit
done





