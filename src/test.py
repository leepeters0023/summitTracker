import pygeohash as pgh
x = pgh.encode(42.6, -5.6, precision=5)
print(x)