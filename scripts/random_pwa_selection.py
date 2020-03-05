import random
import csv


with open('../pwa_list.csv', newline='') as csvfile:
    data = list(csv.reader(csvfile))

print(data)
pwa_list = []
for sublist in data:
    for item in sublist:
        pwa_list.append(item)
print(pwa_list)

random_pwa_list = random.sample(pwa_list, 10)

with open("../selected_random_pwa.txt", "w") as f:
    for pwa in random_pwa_list:
        f.write("%s\n" % pwa)