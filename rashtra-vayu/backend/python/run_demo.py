"""
AirWell Demo Server Launcher
Starts a local HTTP server and automatically opens AirWell in your default browser.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 3000

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and disable aggressive caching for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def run():
    # Change directory to the airwell project root
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)

    port = PORT
    for attempt in range(10):
        try:
            with socketserver.TCPServer(("", port), CustomHandler) as httpd:
                url = f"http://localhost:{port}"
                print("=" * 65)
                print(f"  🌬️  AirWell — Personalized Weather & AQI Health Advisory")
                print(f"  🚀 Server running at: {url}")
                print(f"  💡 Hackathon Demo Mode: Press Ctrl+C to stop")
                print("=" * 65)
                webbrowser.open(url)
                httpd.serve_forever()
                break
        except OSError:
            port += 1
            continue

if __name__ == "__main__":
    run()
