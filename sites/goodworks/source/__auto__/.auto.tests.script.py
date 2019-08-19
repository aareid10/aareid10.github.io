import re
import os
import sys

scripts = os.path.join('assets', 'scripts')

if os.path.exists(scripts):

    for dirname in os.listdir(scripts):

        if os.path.isdir( os.path.join('assets', 'scripts', dirname) ):

            print(os.path.join('assets', 'scripts', dirname))

            for filename in os.listdir(os.path.join('assets', 'scripts', dirname)):

                if filename.endswith('.js'):

                    print('... working on: {0} in {1}'.format(unicode(filename,'utf-8'),  unicode(scripts,'utf-8')))

                    file_path = os.path.join('assets', 'scripts', dirname, filename)
                    test_file = '__tests__/spec.'+filename

                    with open (file_path, 'r' ) as file_read:
                        test_source = file_read.read()
                    modules = re.findall('(import.*)', test_source)
                    members = re.findall('(\w+)\:.*function', test_source)

                    if not os.path.exists(os.path.dirname(test_file)):
                        try: os.makedirs(os.path.dirname(test_file))
                        except OSError as exc:
                            if exc.errno != errno.EEXIST: raise

                    with open (test_file, 'w' ) as file_write:
                        for module in modules:
                            file_write.write('{0}\n'.format(unicode(module,'utf-8')))
                        file_write.write('\n\nconst { JSDOM } = require(\'jsdom\')\nconst jsdom = new JSDOM(``)\nconst { window } = jsdom\n')
                        file_write.write('const {0} = require(\'../{1}/{0}\')\n\n\n'.format(unicode(re.sub('.js', '', filename),'utf-8'), unicode(scripts,'utf-8')))
                        for member in members:
                            file_write.write('const {0}Spy = jest.spyOn({1}, \'{0}\')\n'.format(unicode(member,'utf-8'), unicode(re.sub('.js', '', filename),'utf-8')))
                        for member in members:
                            file_write.write("\n\ndescribe('test: {1}', () => {{\n\t beforeEach(() => {{\n\t\t jsdom.window.body = jsdom.window.document.querySelector(\'body\')\n\t\t {0}.{1}()\n\t }})\n \ttest('Test Stub', () => {{\n\t\t expect({0}.{1}).toHaveBeenCalled()\n\t }})\n }})\n"
                                .format(unicode(re.sub('.js', '', filename),'utf-8'), unicode(member,'utf-8')))
                        file_write.close()

                else: print('... found erroneous file: {0} in {1}'.format(unicode(filename,'utf-8'),  unicode(scripts,'utf-8')))

    print('... test generation in ({0}) complete.'.format(unicode(scripts,'utf-8')))

else: print('... path for test generation does not exist.')
