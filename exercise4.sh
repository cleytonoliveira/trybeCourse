#!/bin/bash
FILE="./exercise4.sh"
if [ -e $FILE ]
    then
    echo "The path $FILE is enabled!"
fi
if [ -w $FILE ]
    then
    echo "You are allowed to edit $FILE"
    else
    echo "You aren't allowed to edit $FILE"
fi