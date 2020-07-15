#!/bin/bash
DIRECTORY=$1
if [ -d $DIRECTORY ]
    then
        COUNT=`ls -l $DIRECTORY | wc -l`
        echo "The $DIRECTORY has $COUNT files!"
    else
        echo "The argument $DIRECTORY isn't a directory!"
fi