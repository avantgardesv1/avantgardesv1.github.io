# write-html.py


for i in range(6969):
    f = open(f'metadata/{i}.html','w')

    message = """<!DOCTYPE html>
    <html lang="en">
        <head>
            <script type="text/javascript" src="data.js"></script>
            <script type="text/javascript" src="api.js"></script>
        </head>
        <body>
            <pre style="word-wrap: break-word; white-space: pre-wrap;" id="raw">

            </pre>
        </body>
    </html>"""

    f.write(message)
    f.close()