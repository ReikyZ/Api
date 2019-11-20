#!/usr/bin/python

import os
import sys

path = sys.argv[1]


def genSnapshot(path='.'):
    files = os.listdir(path)
    for file in files:
        if str(file).endswith(".mp4"):
            file_path = path + '/' + file
            cmd = 'ffmpeg -y -i ' + file_path + ' -ss 35 -f image2 -frames:v 1 ' + file_path + '.jpg'
            print(cmd)
            os.system(cmd)
    pass


if __name__ == '__main__':
	if path:
		genSnapshot(path)
	else:
		genSnapshot()