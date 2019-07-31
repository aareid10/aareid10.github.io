import re
import os
import sys

if sys.argv[1] == 'asset_paths':
    for dir in sys.argv[2:]:
        for filename in os.listdir(dir):
            if filename.endswith('.html'):
                print('... working on: {0} in {1}'.format(unicode(filename,'utf-8'),  unicode(dir,'utf-8')))
                filepath = dir+'/'+filename
                with open (filepath, 'r' ) as file_read:
                    asset_path = file_read.read()
                asset_path_css = re.sub('(https.*/)([0-9]+x[0-9]+\..{8}.css)', r'\1css/\2', asset_path, flags = re.M)
                asset_path_js = re.sub('(https.*/)(bundle\..{8}.js)', r'\1js/\2', asset_path_css, flags = re.M)
                with open (filepath, 'w' ) as file_write:
                    file_write.write(asset_path_js)
                    file_write.close()
    print('... format (asset_paths) in ({0}) complete.'.format(unicode(dir,'utf-8')))


if sys.argv[1] == 'docs':
    for dir in sys.argv[2:]:
        for filename in os.listdir(dir):
            if filename.endswith('.js'):
                print('... working on: {0} in {1}'.format(unicode(filename,'utf-8'),  unicode(dir,'utf-8')))
                # filepath = dir+'/'+filename
                # with open (filepath, 'r' ) as file_read:
                #     doc_path = file_read.read()
                # doc_pass1 = re.sub('(const.*|let.*)', r'\1\t\t\t\t\t\t\t\t/** @constant {#TYPE#} */', doc_path, flags = re.M)
                # doc_pass2_1 = re.sub('(\w+)(\:\s*function\s*\((,*\s*\w*)*?\)\s*{)', r'\n\n\n\t/** \n\t * Member function (\1) in #MODULE# which #CONTEXT#. \n\t * @function \1 \n\t * @access public \n\t * @param {#TYPE#} #NAME# #DESCRIPTION# \n\t * @example \n\t * // returns #RETURNS# \n\t * #EXAMPLE# \n\t * @returns {#TYPE#} #DESCRIPTION#. \n\t */\n\t\1\2', doc_pass1, flags = re.M)
                # doc_pass2_2 = re.sub('(function)*\s*(\w+)\(.*\)\s*{', r'\n\n\n\t/** \n\t * Member function (\2) in #MODULE# which #CONTEXT#. \n\t * @function \2 \n\t * @access public \n\t * @param {#TYPE#} #NAME# #DESCRIPTION# \n\t * @example \n\t * // returns #RETURNS# \n\t * #EXAMPLE# \n\t * @returns {#TYPE#} #DESCRIPTION#. \n\t */\n\t\2', doc_pass2_1, flags = re.M)
                # doc_pass3 = re.sub('(^)(require|import (\w+))+', r'/** \n * This module manages the #CONTEXT# logic. This module requires the modules {@link module:\3}. \n * @module \n * @requires module:\3 \n */ \n\n\2\1', doc_pass2_2, flags = re.M)
                # with open (filepath, 'w' ) as file_write:
                #     file_write.write(doc_pass3)
                #     file_write.close()
    print('... format (asset_paths) in ({0}) complete.'.format(unicode(dir,'utf-8')))
