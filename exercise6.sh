#!/bin/bash
FILE=$1
if [ -f $FILE ]
    then
        echo "$FILE It's a commom file!"
elif [ -d $FILE ]
    then
    echo "$FILE It's a directory!"
else
    echo "$FILE It's another type of file."
fi
ls -l $FILE