#!/usr/bin/python
"""
program to find all files in a directory and write information to a .csv file
gets date, filename, and path to the file (from the input directory)

"""
import os
from os import walk
import time
import sys

direct = sys.argv[1] # directory to search throug
csvfile = sys.argv[2] # file to output


# an object for storing the dir and files
directories = {}

fileinfo = []

# loop through the directories
for (dirpath, dirnames, filenames) in walk(direct):
    # store according to dirpath (name of parent directory)
    directories[dirpath] = filenames

for directory in directories:
    for files in directories[directory]:
        # get file info needed
        filedata = os.stat(directory + '/' + files)
        # create an entry for each file
        fileinfo.append(str(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(filedata[8]))) + ' , ' + files + ' , ' + directory + '/' + files)

# sort files
sortfileinfo = sorted(fileinfo, key=lambda d: map(str, d))

csv = open(csvfile, 'a')

csv.write('date, filename, path \n')
for file_ in sortfileinfo:
    csv.write(file_ + '\n')

csv.close()
