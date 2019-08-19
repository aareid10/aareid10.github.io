import re
import os
import sys

imgs = os.path.join('assets', 'imgs')

if os.path.exists(imgs):

    for size in os.listdir(imgs):

        for filename in os.listdir('{0}/{1}'.format(unicode(imgs,'utf-8'),  unicode(size,'utf-8'))):

            if filename.endswith('.png'):

                print('... working on: {0} in {1}: ./{0}/{1}/{2}'.format(unicode(imgs,'utf-8'), unicode(size,'utf-8'), unicode(filename,'utf-8')))
                optimize = 'tinypng ./{0}/{1}/{2} -k iLWliqJZ7pwd8oiabzlj695poAUH78Yc'.format(unicode(imgs,'utf-8'), unicode(size,'utf-8'), unicode(filename,'utf-8'))
                os.system(optimize)

        else: print('... found erroneous file: {0} in {1}'.format(unicode(filename,'utf-8'),  unicode(imgs,'utf-8')))

    print('... image optimiztion in ({0}) complete.'.format(unicode(imgs,'utf-8')))

else: print('... path for image optimiztion does not exist.')
