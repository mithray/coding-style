#!/usr/bin/python3

from bs4 import BeautifulSoup
f = open('jsguide.html','r')
html=f.read()
soup = BeautifulSoup(html, 'html.parser')

print(soup.find_all('h2'))
