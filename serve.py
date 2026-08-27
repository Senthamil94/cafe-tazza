#!/usr/bin/env python3
"""Local preview for Cafe Tazza. Maps /birthday-cakes-dublin to birthday-cakes-dublin.html."""
import os
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parent
PORT = int(os.environ.get("PORT", "8080"))


class PrettyHTMLHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        self._map_pretty_url()
        return super().do_GET()

    def do_HEAD(self):
        self._map_pretty_url()
        return super().do_HEAD()

    def _map_pretty_url(self):
        parsed = urlparse(self.path)
        rel = unquote(parsed.path).lstrip("/")
        if rel.endswith("/"):
            rel = rel[:-1]
        if not rel or rel == "index":
            target = ROOT / "index.html"
            if target.is_file():
                self.path = "/index.html" + (("?" + parsed.query) if parsed.query else "")
            return
        disk = ROOT / rel
        html = ROOT / (rel + ".html")
        if (not disk.exists()) and html.is_file():
            self.path = "/" + rel + ".html" + (("?" + parsed.query) if parsed.query else "")

    def log_message(self, fmt, *args):
        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))


if __name__ == "__main__":
    httpd = ThreadingHTTPServer(("127.0.0.1", PORT), PrettyHTMLHandler)
    print("Cafe Tazza is running at:", flush=True)
    print("  http://127.0.0.1:%s/" % PORT, flush=True)
    print("  http://127.0.0.1:%s/birthday-cakes-dublin" % PORT, flush=True)
    print("Open those links in your browser (not file://). Press Ctrl+C to stop.", flush=True)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
        sys.exit(0)
