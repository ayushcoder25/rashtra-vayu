"""
AirWell Python Application Server
Can run as a standalone Python web server or backend API.
Usage:
    python app.py
"""

import http.server
import socketserver
import os
import sys
import webbrowser

PORT = int(os.environ.get("PORT", 3000))

class AirWellHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Allow cross-origin access and prevent stale caching
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.end_headers()

def main():
    root_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(root_dir)

    # Re-use socket address to avoid port blocking on quick restarts
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), AirWellHandler) as httpd:
        print(f"🌬️  AirWell running on http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server...")

if __name__ == "__main__":
    main()
