# MOBILESoft 2020 - Caching PWA Replication Package

This repository contains the replication package and dataset of the paper published at MOBILESoft 2020 with the title **Evaluating the Impact of Caching on the Energy Consumption and Performance of Progressive Web Apps**

This study has been designed, developed, and reported by the following investigators:
- [Ivano Malavolta](http://www.ivanomalavolta.com/)  (Vrije Universiteit Amsterdam)
- Katerina Chinnappan (Vrije Universiteit Amsterdam)
- Lukas Jasmontas (Vrije Universiteit Amsterdam)
- Sarthak Gupta (Vrije Universiteit Amsterdam)
- Kaveh Ali Karam Soltany (Vrije Universiteit Amsterdam)

The full dataset including raw data, mining scripts, and analysis R scripts produced during the study are available below.

## How to cite this study
If this study is helping your research, consider to cite it is as follows, thanks!
```
@inproceedings{MOBILESoft_Caching_PWA_2020,
  title={{Evaluating the Impact of Caching on the Energy Consumption and Performance of Progressive Web Apps}},
  author={Ivano Malavolta and Katerina Chinnappan and Lukas Jasmontas and Sarthak Gupta and Kaveh Ali Karam Soltany},
  booktitle = {7th IEEE/ACM International Conference on Mobile Software Engineering and Systems 2020},
  year = {2020},
  pages = {to appear},
  numpages = {10},
  url = {http://www.ivanomalavolta.com/files/papers/MOBILESoft_Caching_PWA_2020}
}
```


## Overview of the replication package

This replication package is structured as follows:
```
caching-pwa-replication-package
    .
    |--- android-runner/            Android-runner framework to execute experiments.
    |
    |--- automate_experiment/       Scripts to automate experiment execution
    |
    |--- data_analysis/             The R scripts for plotting and assesing the extracted data (see below).
    |
    |--- extracted_PWA/             The extracted PWAs downloaded via a Google Chrome Extension - Save All Resources.
    |
    |--- final_experiment_output/   Data from all 20 experiments
    |
    |--- raw_PWA/                   RAW data of PWAs (.zip)	
    |
```

## Data analysis

```
data_analysis
    .
    |--- pwa_visualizations/          Plot figures
    |
    |--- all_cpu_cached_values.csv    values for CPU while using cache
    |
    |--- all_cpu_nocached_values.csv  values for CPU while not using caching
    |
    |--- all_data.csv                 entire dataset
    |
    |--- all_pwa_load_times.csv       values for PWA load times	
    |
    |--- main.R                       R script for plotting and assesing the dataset
    |
    |--- main_recent.R                slightly updated main.R	
```

## Experiment Automation

```
automate_experiments
    .	
    |
    |--- Makefile                     Makefile to automate experiment execution
    |
    |--- counter.txt                  helper for experiment execution
    |
    |--- filter_collect_results.py    filter experiment results
    |
    |--- pwa-names.txt                helper for experiment execution
    |
    |--- pwa-output-file-names.txt    helper for experiment execution
```

## License

This software is licensed under the MIT License.
