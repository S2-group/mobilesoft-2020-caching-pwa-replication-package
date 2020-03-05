SHELL := /bin/bash

# HELP
.PHONY: help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help


move_results_to_folders: ## moves generated experiment results to experiment folder
	mkdir -p android-runner/examples/batterystats/output/experiment$(NUMBER) ; \
	mv android-runner/examples/batterystats/output/*.csv android-runner/examples/batterystats/output/experiment$(NUMBER)/ ; \
	mv PWA/results.csv android-runner/examples/batterystats/output/experiment$(NUMBER)/ ; \
	mkdir -p android-runner/examples/batterystats/output/experiment$(NUMBER)/final_results ; \


filter_results: ## filters results
	declare -a pwanameslist ; \
	declare -a filelist ; \
	declare -a counterlist ; \
	# read file content into the arrays ; \
	readarray -t pwanameslist <pwa-names.txt ; \
	readarray -t filelist <pwa-output-file-names.txt ; \
	readarray -t counterlist <counter.txt ; \
	pwanameslist_len=$${#pwanameslist[@]} ; \
	number=0 ; while [[ $$number -le $$pwanameslist_len-1 ]] && [[ $$number -le $$pwanameslist_len-1 ]]; do \
		python3 filter_collect_results.py $${pwanameslist[$$number]} $${filelist[$$number]} $${counterlist[$$number]} $(NUMBER) ; \
		((number = number + 1)) ; \
	done
	mv android-runner/examples/batterystats/output/experiment$(NUMBER)/*_cache.csv android-runner/examples/batterystats/output/experiment$(NUMBER)/final_results/ ; \
	mv android-runner/examples/batterystats/output/experiment$(NUMBER)/*_nocache.csv android-runner/examples/batterystats/output/experiment$(NUMBER)/final_results/ ; \



experiment: ## make experiment N times. filter results, move to appropriate folders
	number=1 ; while [[ $$number -le 6 ]] && [[ $$number -le 6 ]]; do \
		echo "hello" ; \
		python2 android-runner android-runner/examples/batterystats/config_web.json ; \
		make move_results_to_folders NUMBER=$$number ; \
		make filter_results NUMBER=$$number ; \
		((number = number + 1)) ; \
	done

cleanup: ## cleanup
	rm android-runner/examples/batterystats/output/experiment1/*_cache.csv
	rm android-runner/examples/batterystats/output/experiment1/*_nocache.csv
