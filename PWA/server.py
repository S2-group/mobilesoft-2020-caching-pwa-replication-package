from http.server import HTTPServer, BaseHTTPRequestHandler, SimpleHTTPRequestHandler
import socketserver
from io import BytesIO
import json
import os
import re
import datetime
import csv


class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    iterator = 0

    def do_OPTIONS(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header("Access-Control-Allow-Headers", "X-Requested-With")

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length).decode("utf-8").split('::', 2)

        with open('results.csv', 'a') as results_file:
            SimpleHTTPRequestHandler.iterator = SimpleHTTPRequestHandler.iterator + 1
            if (SimpleHTTPRequestHandler.iterator == 2):
                return
            if (SimpleHTTPRequestHandler.iterator == 3):
                SimpleHTTPRequestHandler.iterator = 2
            body[0] = body[0] + str(SimpleHTTPRequestHandler.iterator)
            csv_writer = csv.writer(results_file, delimiter=',')
            csv_writer.writerow(body)
            if (SimpleHTTPRequestHandler.iterator == 2):
                SimpleHTTPRequestHandler.iterator = 0

PORT = 8001
web_dir = os.path.join(os.path.dirname(__file__), './')
os.chdir(web_dir)

Handler = SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(("0.0.0.0", PORT), Handler)
print("serving at port", PORT)
httpd.serve_forever()
