#!/bin/bash
 echo `date`
rm -fr out.txt
 for i in {1..150}
    do
       #echo "Welcome $i times"
       node ./index.js >> out.txt & 
 done
 echo `date`; 