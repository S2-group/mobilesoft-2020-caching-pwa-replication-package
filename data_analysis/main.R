# install.packages('plyr')
# install.packages('dplyr')
# install.packages('readr')
# install.packages('ggplot2')

# install.packages('stringr')
# install.packages('e1071')  
# install.packages('effsize')
library(plyr)
library(dplyr)
library(readr)
library(ggplot2)

library(stringr)
library(e1071)  
library(effsize)

# Going backwards to set the directory of GreenLab_CachingPWA, if not already done
getwd()
setwd('./..')

# Locating the experiment folder
exp <- paste(getwd(), '/FINAL_OUTPUT', sep = '')

# Saving the paths of the average CPU cache and nocache results of all the experiments
all_cpu_exp_cache_loc <- list.files(path = exp, pattern = '*_cachefinal.csv', full.names = TRUE, recursive = TRUE)
all_cpu_exp_nocache_loc <- list.files(path = exp, pattern = '*_nocachefinal.csv', full.names = TRUE, recursive = TRUE)

# Saving the names of the PWA used for the experiments of energy consumption
exp_names_energy <- c('https://m.alibaba.com/',
                      'https://edgy.app',
                      'https://nylon.com',
                      'https://www.petlove.com.br',
                      'https://slate.com',
                      'https://www.smashingmagazine.com',
                      'https://www.soundslice.com',
                      'https://www.nrw-tourismus.de',
                      'https://www.zumata.com')

# Sorting the experiment in correct order from 1 to 20 
all_cpu_exp_cache_loc <- str_sort(all_cpu_exp_cache_loc, numeric = TRUE)
all_cpu_exp_nocache_loc <- str_sort(all_cpu_exp_nocache_loc, numeric = TRUE)

# Looping through all the experiments locations and making a dataframe for the cached and nocachted results
all_cpu_exp_cache <- ldply(all_cpu_exp_cache_loc, read_csv)
all_cpu_exp_nocache <- ldply(all_cpu_exp_nocache_loc, read_csv)

# Altering the column names 
colnames(all_cpu_exp_cache) <- c('pwa_name','total_cpu_energy_consumption')
colnames(all_cpu_exp_nocache) <- c('pwa_name','total_cpu_energy_consumption')

# Adding columns to make visualizations possible
all_cpu_exp_cache$pwa_name <-  rep(exp_names_energy, times = 20)
all_cpu_exp_cache$experiment <- rep(1:20, each = 9)
all_cpu_exp_cache$type <- 'cache'

all_cpu_exp_nocache$pwa_name <-  rep(exp_names_energy, times = 20)
all_cpu_exp_nocache$experiment <- rep(1:20, each = 9)
all_cpu_exp_nocache$type <- 'no cache'

# Exporting the dataframe to csv
write.csv(all_cpu_exp_cache, file = 'R-scripts/all_cpu_cached_values.csv')
write.csv(all_cpu_exp_nocache, file = 'R-scripts/all_cpu_nocached_values.csv')

# Combining the values of caching and nocaching 
all_cpu_exp_val <- rbind(all_cpu_exp_cache, all_cpu_exp_nocache)
rownames(all_cpu_exp_val) <- NULL

# Having log transformation data ready for usage 
log_all_cpu_exp_val <- all_cpu_exp_val
log_all_cpu_exp_val$total_cpu_energy_consumption <- log(all_cpu_exp_val$total_cpu_energy_consumption)

# Doing the Shapiro-Wilk for normality for cache and no cache values energy
shapiro.test(all_cpu_exp_cache$total_cpu_energy_consumption-all_cpu_exp_nocache$total_cpu_energy_consumption)
shapiro.test(log_all_cpu_exp_val$total_cpu_energy_consumption[1:180]-log_all_cpu_exp_val$total_cpu_energy_consumption[181:360])

# Wilcoxon test for checking random sample from a symmetric population between cache and no cache for energy 
wilcox.test(all_cpu_exp_cache$total_cpu_energy_consumption, 
            all_cpu_exp_nocache$total_cpu_energy_consumption, paired = TRUE)

# Wilcoxon test for checking random sample from a symmetric population between cache and no cache for log energy 
wilcox.test(log_all_cpu_exp_val$total_cpu_energy_consumption[1:180], 
            log_all_cpu_exp_val$total_cpu_energy_consumption[181:360], paired = TRUE)

# Continuing the test Spearman's rank correlation due to no normality
cor.test(all_cpu_exp_cache$total_cpu_energy_consumption, 
         all_cpu_exp_nocache$total_cpu_energy_consumption, 
         method = 'spearman')

# Summary values for the descriptive statistics of all values
summary(all_cpu_exp_val$total_cpu_energy_consumption)
sd(all_cpu_exp_val$total_cpu_energy_consumption)

# Calculating the skewness of energy consumption
skewness(all_cpu_exp_val$total_cpu_energy_consumption)

# Calculating the skewness of log energy consumption
skewness(log_all_cpu_exp_val$total_cpu_energy_consumption)

# Visualizations 
# Histogram of the energy data
hist_plot_cpu <- ggplot(all_cpu_exp_val, aes(x = total_cpu_energy_consumption, fill = type, color = type)) +
  geom_histogram(position = 'identity', alpha = 0.5) + scale_x_continuous(breaks = seq(0, 30, 5)) 
hist_plot_cpu + scale_color_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) +
  scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('CPU energy consumption (Joules)') + ylab('Frequency') + 
  ggtitle('Histogram of CPU Energy Consumption')

# Histogram of the energy data by limiting the view 
hist_plot_alternative <- ggplot(all_cpu_exp_val, aes(x = total_cpu_energy_consumption, fill = type, color = type)) +
  geom_histogram(position = 'identity', alpha = 0.5) + scale_x_continuous(breaks = seq(0, 30, 5)) 
hist_plot_alternative + scale_color_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) +
  scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('CPU energy consumption (Joules)') + ylab('Frequency') + xlim(c(0, 10)) + 
  ggtitle('Histogram of Natural Log of CPU Energy Consumption')

# Histogram of the energy log data 
hist_plot_cpu_log <- ggplot(log_all_cpu_exp_val, aes(x = total_cpu_energy_consumption, fill = type, color = type)) +
  geom_histogram(position = 'identity', alpha = 0.5) + scale_y_continuous(breaks = seq(0, 30, 5))
hist_plot_cpu_log + scale_color_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) +
  scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('Natural Log CPU energy consumption (Joules)') + ylab('Frequency') + 
  ggtitle('Histogram of Natural Log of CPU Energy Consumption')

# Boxplots of the data (split them up into the first 10 experiments and the last 10 experiments)
first_boxplot <- ggplot(all_cpu_exp_val[order(all_cpu_exp_val$experiment),][1:180,], 
                  aes(x = as.character(experiment), y = total_cpu_energy_consumption, fill = type)) 
first_boxplot + geom_boxplot() + facet_wrap(~experiment, scale = 'free', nrow = 2, ncol = 5) + 
  scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('Experiments') + ylab('CPU energy consumption (Joules)') +
  scale_y_continuous(breaks = seq(2, 8, 1))

second_boxplot <- ggplot(all_cpu_exp_val[order(all_cpu_exp_val$experiment),][181:360,], 
                  aes(x = as.character(experiment), y = total_cpu_energy_consumption, fill = type)) 
second_boxplot + geom_boxplot() + facet_wrap(~experiment, scale = 'free', nrow = 2, ncol = 5) + 
  scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('Experiments') + ylab('CPU energy consumption (Joules)') +
  scale_y_continuous(breaks = seq(2, 8, 1))

# QQ-plot of the data
qqnorm(all_cpu_exp_val[order(all_cpu_exp_val$experiment),]$total_cpu_energy_consumption, 
       ylab = 'CPU Energy Consumption Sample Quantile (Joules)',
       main = 'Q-Q plot of CPU Energy Consumption'); qqline(all_cpu_exp_val$total_cpu_energy_consumption, 
                                                                         col = 'red')

 # QQ-plot of the log transformed data 
qqnorm(log_all_cpu_exp_val[order(log_all_cpu_exp_val$experiment),]$total_cpu_energy_consumption, 
       ylab = 'CPU Energy Consumption Sample Quantile (Joules)',
       main = 'Q-Q plot of Natural Log of CPU Energy Consumption'); qqline(log_all_cpu_exp_val$total_cpu_energy_consumption, 
                                                                         col = 'red')

# --------------------------------------------------------------------------------------------------------------------------------

# Saving the paths of the PWA load time of cache and nocache results of all the experiments
all_pwa_load_time_loc <- list.files(path = exp, pattern = 'results.csv', full.names = TRUE, recursive = TRUE)

# Saving the names of the PWA used for the experiments of pwa load time 
exp_names_pwa_load <- c('https://www.petlove.com.br',
                        'https://m.alibaba.com/',
                        'https://nylon.com',
                        'https://www.zumata.com',
                        'https://slate.com',
                        'https://www.smashingmagazine.com',
                        'https://edgy.app',
                        'https://www.soundslice.com',
                        'https://www.nrw-tourismus.de')

# Sorting the results in correct order from 1 to 20 
all_pwa_load_time_loc <- str_sort(all_pwa_load_time_loc, numeric = TRUE)

# Looping through all the results locations and making a dataframe each experiment result
all_pwa_load_times <- ldply(all_pwa_load_time_loc, read_csv, col_names = FALSE)

# Altering the column names. Note: pwa_start_time and pwa_end_time are both Unix Timestamps
colnames(all_pwa_load_times) <- c('pwa_name','pwa_start_time','pwa_end_time')

# Calculating the pwa load time 
all_pwa_load_times$pwa_load_time <- as.numeric(difftime(as.POSIXct(all_pwa_load_times$pwa_end_time,
                                                                 origin = '1970-01-01'),
                                                      as.POSIXct(all_pwa_load_times$pwa_start_time,
                                                                 origin = '1970-01-01'), units = 'sec'))

# Assigning value to even and uneven rows to insert the value of no cache and cache 
all_pwa_load_times$type <- rep(c('no cache', 'cache'), length.out = nrow(all_pwa_load_times))

# Ordering the pwa load time on cache and no cache
all_pwa_load_times <- all_pwa_load_times[order(all_pwa_load_times$type),]

# Adding columns to make visualizations possible
all_pwa_load_times$pwa_name <-  rep(exp_names_pwa_load, times = 20)
all_pwa_load_times$experiment <- rep(1:20, each = 9)
rownames(all_pwa_load_times) <- NULL

# Exporting the pwa load time dataframe to csv
write.csv(all_pwa_load_times, file = 'all_pwa_load_times.csv')

# Combining energy consumption data with pwa load time 
all_data <- inner_join(all_pwa_load_times, all_cpu_exp_val)

# Exporting the full dataframe to csv
write.csv(all_data, file = 'all_data.csv')

# Having log transformation data ready for usage 
log_all_pwa_load_times <- all_pwa_load_times
log_all_pwa_load_times$pwa_load_time <- log(all_pwa_load_times$pwa_load_time)

log(all_pwa_load_times$pwa_load_time)
# Doing the Shapiro-Wilk for normality for cache and no cache values
shapiro.test(all_pwa_load_times$pwa_load_time[1:180]-all_pwa_load_times$pwa_load_time[181:360])
shapiro.test(log_all_pwa_load_times$pwa_load_time[1:180]-log_all_pwa_load_times$pwa_load_time[181:360])

# Wilcoxon test for checking random sample from a symmetric population between cache and no cache for load time
wilcox.test(all_pwa_load_times$pwa_load_time[1:180], 
            all_pwa_load_times$pwa_load_time[181:360], paired = TRUE)

# Wilcoxon test for checking random sample from a symmetric population between cache and no cache for load time
wilcox.test(log_all_pwa_load_times$pwa_load_time[1:180], 
            log_all_pwa_load_times$pwa_load_time[181:360], paired = TRUE)

# Continuing the test with Spearman's rank correlation due to no normality ofload time cache and no cache
cor.test(all_pwa_load_times$pwa_load_time[1:180], 
         all_pwa_load_times$pwa_load_time[181:360], 
         method = 'spearman')

# Continuing the test with Spearman's rank correlation due to no normality between energy and load time cache
cor.test(all_data$pwa_load_time[1:180],
         all_data$total_cpu_energy_consumption[1:180],
         method = 'spearman')

# Continuing the test with Spearman's rank correlation due to no normality ofload time cache and no cache
cor.test(all_pwa_load_times$pwa_load_time[1:180], 
         all_pwa_load_times$pwa_load_time[181:360], 
         method = 'spearman')

# Continuing the test with Cliff's delta for overlap between two distributions of cache and no cache energy 
cliffs_delta_energy <- cliff.delta(all_data$total_cpu_energy_consumption[1:180],
                                   all_data$total_cpu_energy_consumption[181:360])

# Continuing the test with Cliff's delta for overlap between two distributions of cache and no cache log energy 
cliffs_delta_log_energy <- cliff.delta(log_all_cpu_exp_val$total_cpu_energy_consumption[1:180],
                                   log_all_cpu_exp_val$total_cpu_energy_consumption[181:360])

# Continuing the test with Cliff's delta to represent between two distributions of cache and no cache pwa load time
cliffs_delta_load <- cliff.delta(all_data$pwa_load_time[1:180], all_data$pwa_load_time[181:360])

# Continuing the test with Cliff's delta to represent between two distributions of cache and no cache pwa load time
cliffs_delta_log_load <- cliff.delta(log_all_pwa_load_times$pwa_load_time[1:180], 
                                     log_all_pwa_load_times$pwa_load_time[181:360])

# Summary values for the descriptive statistics of all values
summary(all_pwa_load_times$pwa_load_time)
sd(all_pwa_load_times$pwa_load_time)

# Calculating the skewness of pwa load time 
skewness(all_pwa_load_times$pwa_load_time)

# Calculating the skewness of log pwa load time
skewness(log_all_pwa_load_times$pwa_load_time)

# Visualizations 
# Histogram of the load data
hist_plot_load <- ggplot(all_pwa_load_times, aes(x = pwa_load_time, fill = type, color = type)) +
  geom_histogram(position = 'identity', alpha = 0.5)
hist_plot_load + scale_color_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) +
  scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('Load time (in seconds)') + ylab('Frequency') + 
  ggtitle('Histogram of PWA Homepage Load Time')

# Histogram of the load data by limiting the view 
hist_plot_load_alternative <- ggplot(all_pwa_load_times, aes(x = pwa_load_time, fill = type, color = type)) +
  geom_histogram(position = 'identity', alpha = 0.5)
hist_plot_load_alternative + scale_color_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) +
  scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('Load time (in seconds)') + ylab('Frequency') + xlim(c(0, 3)) + 
  ggtitle('Histogram of Natural Log of PWA Homepage Load Time')

# Histogram of the load log data 
hist_plot_load_log <- ggplot(log_all_pwa_load_times, aes(x = pwa_load_time, fill = type, color = type)) +
  geom_histogram(position = 'identity', alpha = 0.5) + scale_y_continuous(breaks = seq(0, 40, 5))
hist_plot_load_log + scale_color_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) +
  scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('Natural Log Load time (in seconds)') + ylab('Frequency') + 
  ggtitle('Histogram of Natural Log of PWA Homepage Load Time')

# Boxplots of the data (split them up into the first 10 experiments and the last 10 experiments)
third_boxplot <- ggplot(all_pwa_load_times[order(all_pwa_load_times$experiment),][1:180,], 
                        aes(x = as.character(experiment), y = pwa_load_time, fill = type)) 
third_boxplot + geom_boxplot() + facet_wrap(~experiment, scale = 'free', nrow = 2, ncol = 5) + 
  scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('Experiments') + ylab('PWA load time (in seconds)') +
  scale_y_continuous(breaks = seq(0, 6, 0.5))

fourth_boxplot <- ggplot(all_pwa_load_times[order(all_pwa_load_times$experiment),][181:360,], 
                        aes(x = as.character(experiment), y = pwa_load_time, fill = type)) 
fourth_boxplot + geom_boxplot() + facet_wrap(~experiment, scale = 'free', nrow = 2, ncol = 5) + 
  scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('Experiments') + ylab('PWA load time (in seconds)') +
  scale_y_continuous(breaks = seq(0, 6, 0.5))

# QQ-plot of the data
qqnorm(all_pwa_load_times[order(all_pwa_load_times$experiment),]$pwa_load_time, 
       ylab = 'PWA Load Time Sample Quantile (in seconds)',
       main = 'Q-Q plot of PWA Homepage Load Time'); qqline(all_pwa_load_times$pwa_load_time, col = 'red')

# QQ-plot of the log transformed data 
qqnorm(log_all_pwa_load_times[order(log_all_pwa_load_times$experiment),]$pwa_load_time, 
       ylab = 'PWA Load Time Sample Quantile (in seconds)',
       main = 'Q-Q plot of Natural Log of PWA Homepage Load Time'); qqline(log_all_pwa_load_times$pwa_load_time, col = 'red')

# Density chart for the log energy 
density_plot_log_energy <- ggplot(log_all_cpu_exp_val, aes(x = total_cpu_energy_consumption, 
                                                       group = type, fill = type)) + 
  geom_density(adjust = 1.5, alpha = 0.4)
density_plot_log_energy + scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('Natural Log CPU energy consumption (Joules)') +
  scale_y_continuous(breaks = seq(0, 2, 0.25))

# Density chart for the energy 
density_plot_energy <- ggplot(all_data, aes(x = total_cpu_energy_consumption, 
                                                       group = type, fill = type)) + 
  geom_density(adjust = 1.5, alpha = 0.4)
density_plot_energy + scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('CPU energy consumption (Joules)') +
  scale_x_continuous(breaks = seq(0, 30, 5))

# Density chart for the log load time 
density_plot_log_load <- ggplot(log_all_pwa_load_times, aes(x = (pwa_load_time * 1000), 
                                                       group = type, fill = type)) + 
  geom_density(adjust = 1.5, alpha = 0.4)
density_plot_log_load + scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('Natural Log Load time (in milliseconds)') +
  scale_y_continuous(breaks = seq(0, 1, 0.25))

# Density chart for the load time 
density_plot_load <- ggplot(all_pwa_load_times, aes(x = pwa_load_time, 
                                                        group = type, fill = type)) + 
  geom_density(adjust = 1.5, alpha = 0.4)
density_plot_load + scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('PWA Load time (in seconds)') 