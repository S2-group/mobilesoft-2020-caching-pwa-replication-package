# this script filters & collects results from raw data generated after
# executing the experiment
import csv
import operator
import sys

# this script accepts 4 arguments
# sys.argv[1] = PWA name, PWA csv files generated from experiment
# sys.argv[2] = final output file name (filtered csv)
# sys.argv[3] = counter
# experiment folder number

print("This is the name of the script= ", sys.argv[0])
print("Number of arguments= ", len(sys.argv))
print("all args= ", str(sys.argv))
print("arg1= ", sys.argv[1])
print("arg2= ", sys.argv[2])
print("arg3= ", sys.argv[3])
print("arg4= ", sys.argv[4])

folder_number = sys.argv[4]
pwa_name = sys.argv[1]
final_file_name = sys.argv[2]
counter = int(sys.argv[3])

# open results.csv in each experiment folder and collect results into a list
with open('android-runner/examples/batterystats/output/experiment' + folder_number + '/results.csv',
          'r') as f:
    reader = csv.reader(f)
    results_list = list(reader)
f.close()

pwa_list = []
index = 0
new_exp_results = []

# collect all PWA names into one list
for result in results_list:
    pwa_list.append(results_list[index][0])
    index = index + 1
print(results_list[0][1])

# open PWA experiment csv
with open('android-runner/examples/batterystats/output/experiment' + folder_number + '/' + pwa_name + '.csv',
          'r') as f:
    reader = csv.reader(f)
    experiment_results_list = list(reader)

# append appropriate PWA name to each row
for i in range(len(experiment_results_list)):
    new_exp_results.append([pwa_list[counter]] + experiment_results_list[i])
print(new_exp_results[1])
print(pwa_list[counter])
print(experiment_results_list[1])

# filter each experiment PWA csv. write output to output csv
for i in range(len(experiment_results_list)):
    if((experiment_results_list[i][5] < results_list[counter][1] and experiment_results_list[i][6] > results_list[counter][1] and (experiment_results_list[i][6] < results_list[counter][2] or experiment_results_list[i][6] == results_list[counter][2])) or (experiment_results_list[i][5] > results_list[counter][1] and experiment_results_list[i][6] > results_list[counter][1] and (experiment_results_list[i][6] < results_list[counter][2] or experiment_results_list[i][6] > results_list[counter][2] or experiment_results_list[i][6] == results_list[counter][2])) or (experiment_results_list[i][5] == results_list[counter][1] and experiment_results_list[i][6] > results_list[counter][1] and (experiment_results_list[i][6] < results_list[counter][2] or experiment_results_list[i][6] > results_list[counter][2] or experiment_results_list[i][6] == results_list[counter][2]))):
        with open('android-runner/examples/batterystats/output/experiment' + folder_number + '/' + final_file_name + '.csv', 'a') as results:
            writer = csv.writer(results)
            writer.writerow(new_exp_results[i])
    else:
        pass

# this section of script opens filtered PWA csv files, calculates total
# energy consumed by CPU
final_list = []
with open('android-runner/examples/batterystats/output/experiment' + folder_number + '/' + final_file_name + '.csv',
          'r') as f1:
    reader1 = csv.reader(f1)
    new_results = list(reader1)

total_energy = float(new_results[1][5])
print(len(new_results) - 1)
for i in range(len(new_results) - 2):
    total_energy = total_energy + float(new_results[i + 2][5])

print(total_energy)
average_energy = total_energy / (len(new_results) - 1)
print(average_energy)

# add header to csv
header = ['PWA', 'Average CPU Energy Consumption (Joule)']
final_list.append(pwa_name)
final_list.append(total_energy)
print(final_list)
with open('android-runner/examples/batterystats/output/experiment' + folder_number + '/' + final_file_name + 'final' + '.csv', 'a') as results:
    writer = csv.writer(results)
    writer.writerow(header)
    writer.writerow(final_list)
