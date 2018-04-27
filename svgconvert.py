from bs4 import BeautifulSoup
import argparse

parser = argparse.ArgumentParser(description='SVG convert')
parser.add_argument('--svg',default='example.svg', type=str,help='svg file path')
parser.add_argument('--name',default='xiaomi', type=str, help='icon name')
parser.add_argument('--num',default='600', type=str,help='icon number')
opt = parser.parse_args()

with open(opt.svg) as svg_file:
    soup=BeautifulSoup(svg_file.read(),'lxml')
    d_str=""
    for p in soup.find_all('path'):
        d_str=d_str+p['d']
        
    svg=soup.find('svg')
    viewBox=svg['viewbox']
    views=viewBox.split(' ')
    m,n=views[2],views[3]
    res='"'+opt.name+'":['+m+','+n+', [], "f'+opt.num+'",  "'+d_str+'"]'
    print(res)
