import os
from pathlib import Path
home = str(Path.home())



with open('index.html', 'w') as index_html:
    index_html.write('''
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Document</title>

                            <link rel="stylesheet" href="styles.css">

                            <script defer src="script.js"></script>

                        </head>
                        <body>''')

    index_html.write('<h1>Current Files</h1>')
    index_html.write('<div id="container">')
    for file in os.listdir():
        if file == 'index.html':
            continue
        if os.path.isfile(file):
            long_string_suffix = file[-5:] if len(str(file)) > 15 else ''
            print('found: ' + file)
            index_html.write(f'<a href="{file}" downlaod="">{file[:15] + long_string_suffix}</a>')
        else:
            print(file + ' is not a file.')


    index_html.write('</div>')
    index_html.write('''
                        </body>
                        </html>''')