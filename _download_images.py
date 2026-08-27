"""Download Cafe Tazza photos into images/. Direct WP URLs time out from some networks; wsrv.nl is used as a fetch proxy."""
import os
import sys
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "images")
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"

FILES = [
    ("2025/12", "X1A6001-scaled.jpg"),
    ("2025/12", "X1A6046-1-scaled.jpg"),
    ("2025/12", "X1A6084-scaled.jpg"),
    ("2025/12", "X1A6090-scaled.jpg"),
    ("2025/12", "X1A6095-scaled-e1766937586384.jpg"),
    ("2025/12", "X1A6135-scaled-e1766937468254.jpg"),
    ("2025/12", "X1A6142-scaled.jpg"),
    ("2025/12", "X1A6149-scaled.jpg"),
    ("2025/12", "X1A6183-scaled.jpg"),
    ("2025/12", "X1A6208-scaled-e1766928622864.jpg"),
    ("2025/12", "X1A6233-scaled.jpg"),
    ("2025/12", "X1A6244-scaled-e1766250596483.jpg"),
    ("2025/12", "X1A6251-scaled.jpg"),
    ("2025/12", "X1A6294-scaled.jpg"),
    ("2025/12", "X1A6299-scaled.jpg"),
    ("2025/12", "image-1-e1766929097426.jpg"),
    ("2025/12", "image-1-e1766937428406.png"),
    ("2025/12", "image-10-e1766931175626.jpg"),
    ("2025/12", "image-11.jpg"),
    ("2025/12", "image-12.jpg"),
    ("2025/12", "image-13.jpg"),
    ("2025/12", "image-14.jpg"),
    ("2025/12", "image-17.jpg"),
    ("2025/12", "image-18.jpg"),
    ("2025/12", "image-19.jpg"),
    ("2025/12", "image-3.jpg"),
    ("2025/12", "image-4.jpg"),
    ("2025/12", "image-5.jpg"),
    ("2025/12", "image-6.jpg"),
    ("2025/12", "image-7.jpg"),
    ("2025/12", "image-8.jpg"),
    ("2025/12", "image-9.jpg"),
    ("2025/12", "logo-cafe-tazza-new.png"),
    ("2026/06", "birthday-custom-cakes.jpg"),
    ("2026/06", "delicious-indian-dessert-arrangement-view-scaled.jpg"),
    ("2026/06", "indian-food-delivery-dublin.jpg"),
]


def fetch_one(yearpath, name):
    src = "https://cafetazza.com/wp-content/uploads/%s/%s" % (yearpath, name)
    extra = "&output=png" if name.lower().endswith(".png") else "&output=jpg&q=90"
    proxy = "https://wsrv.nl/?url=%s%s" % (urllib.parse.quote(src, safe=""), extra)
    dest = os.path.join(OUT, name)
    req = urllib.request.Request(proxy, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=90) as resp:
        data = resp.read()
    if len(data) < 800:
        raise RuntimeError("too small (%d bytes)" % len(data))
    if name.lower().endswith(".png"):
        if data[:8] != b"\x89PNG\r\n\x1a\n":
            raise RuntimeError("not a PNG")
    elif data[:2] != b"\xff\xd8":
        raise RuntimeError("not a JPEG")
    with open(dest, "wb") as f:
        f.write(data)
    return name, len(data)


def main():
    os.makedirs(OUT, exist_ok=True)
    ok = 0
    failed = []
    with ThreadPoolExecutor(max_workers=4) as pool:
        futs = {pool.submit(fetch_one, yp, n): n for yp, n in FILES}
        for fut in as_completed(futs):
            name = futs[fut]
            try:
                fname, size = fut.result()
                print("OK  %s  %d KB" % (fname, size // 1024))
                ok += 1
            except Exception as e:
                print("FAIL %s  %s" % (name, e))
                failed.append(name)
    print("done %d/%d" % (ok, len(FILES)))
    if failed:
        sys.exit(1)


if __name__ == "__main__":
    main()
