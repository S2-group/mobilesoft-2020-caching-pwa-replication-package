import csv
from itertools import zip_longest

# open file
f = open('../pwa_list.txt','r')

pwa_list = []

# read every line from pwa_list.txt
for line in f:
    if 'href' in line:
    	pwa = line.replace('href="','')
    	pwa = pwa.replace('"','')
    	pwa_list.append(pwa.strip())

f = open('../pwa_list2.txt')

# read every line from pwa_list2.txt
print(len(pwa_list))
pwa_list = list(set(pwa_list))
for line in f:
	if 'https' in line:
		pwa = line.split('(')[1]
		pwa = pwa.replace(')','')
		pwa_list.append(pwa.strip())

pwa_list = list(set(pwa_list))
print(len(pwa_list))

#create csv
with open('../pwa_list.csv', 'w') as f:
    writer = csv.writer(f)
    writer.writerows(zip(pwa_list))

f.close()