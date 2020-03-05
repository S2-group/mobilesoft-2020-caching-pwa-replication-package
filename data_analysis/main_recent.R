# install.packages('plyr')
# install.packages('dplyr')
# install.packages('readr')
# install.packages('ggplot2')

# install.packages('stringr')
# install.packages('e1071')  
#install.packages('effsize')
library(plyr)
library(dplyr)
library(readr)
library(ggplot2)

library(stringr)
library(e1071)  
library(effsize)

all_cpu_exp_val <- read.csv(file="all_data.csv", header=TRUE, sep=",")
log_all_cpu_exp_val <- all_cpu_exp_val
log_all_cpu_exp_val$total_cpu_energy_consumption <- log(all_cpu_exp_val$total_cpu_energy_consumption)
log_all_pwa_load_times <- log_all_cpu_exp_val
log_all_pwa_load_times$pwa_load_time <- log(log_all_cpu_exp_val$pwa_load_time)

min(log_all_cpu_exp_val$pwa_load_time)
all_cpu_exp_val$pwa_load_time_log <- log(log_all_cpu_exp_val$pwa_load_time + 0.92)
all_cpu_exp_val
min(all_cpu_exp_val$pwa_load_time_log)
# 
# qqplot(all_cpu_exp_val[order(all_cpu_exp_val$experiment),]$total_cpu_energy_consumption, 
#        ylab = 'CPU Energy Consumption Sample Quantile (Joules)',
#        grid=TRUE,
#        main = 'Q-Q plot of CPU Energy Consumption'); qqline(all_cpu_exp_val$total_cpu_energy_consumption, 
#                                                             col = 'red')

qqplot(y = all_cpu_exp_val$total_cpu_energy_consumptio)


hist_plot_cpu <- ggplot(all_cpu_exp_val, aes(x = total_cpu_energy_consumption, fill = type, color = type)) +
  geom_histogram(position = 'identity', alpha = 0.5) + scale_x_continuous(breaks = seq(0, 30, 5)) 
hist_plot_cpu + scale_color_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) +
  scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('Energy consumption (Joules)') + ylab('Frequency') + 
  theme_minimal() +
  ggtitle('Histogram of Energy Consumption') +
  theme(plot.title = element_text(hjust = 0.5), axis.text.y   = element_text(size=14),
        axis.text.x   = element_text(size=14),
        axis.title.y  = element_text(size=14),
        axis.title.x  = element_text(size=14),
        panel.background = element_blank(),
        axis.line = element_line(colour = "black"))

  hist_plot_cpu_log <- ggplot(log_all_cpu_exp_val, aes(x = total_cpu_energy_consumption, fill = type, color = type)) +
  geom_histogram(position = 'identity', alpha = 0.5) + scale_y_continuous(breaks = seq(0, 30, 5))
hist_plot_cpu_log + scale_color_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) +
  scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('Natural Log energy consumption (Joules)') + ylab('Frequency') + 
  theme_minimal() +
  ggtitle('Histogram of Natural Log of Energy Consumption') +
  theme(plot.title = element_text(hjust = 0.5), axis.text.y   = element_text(size=14),
        axis.text.x   = element_text(size=14),
        axis.title.y  = element_text(size=14),
        axis.title.x  = element_text(size=14),
        panel.background = element_blank(),
        axis.line = element_line(colour = "black"))


hist_plot_load <- ggplot(all_cpu_exp_val, aes(x = pwa_load_time, fill = type, color = type)) +
  geom_histogram(position = 'identity', alpha = 0.5)
hist_plot_load + scale_color_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) +
  scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('Load time (in seconds)') + ylab('Frequency') +
  ggtitle('Histogram of PWA Homepage Load Time') +
  theme_minimal() +
  theme(plot.title = element_text(hjust = 0.5), axis.text.y   = element_text(size=14),
        axis.text.x   = element_text(size=14),
        axis.title.y  = element_text(size=14),
        axis.title.x  = element_text(size=14),
        panel.background = element_blank(),
        axis.line = element_line(colour = "black"))

hist_plot_load_log <- ggplot(log_all_pwa_load_times, aes(x = pwa_load_time, fill = type, color = type)) +
  geom_histogram(position = 'identity', alpha = 0.5) + scale_y_continuous(breaks = seq(0, 40, 5))
hist_plot_load_log + scale_color_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) +
  scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('Natural Log Load time (in seconds)') + ylab('Frequency') +
  ggtitle('Histogram of Natural Log of PWA Homepage Load Time') +
  theme_minimal() +
  theme(plot.title = element_text(hjust = 0.5), axis.text.y   = element_text(size=14),
        axis.text.x   = element_text(size=14),
        axis.title.y  = element_text(size=14),
        axis.title.x  = element_text(size=14),
        panel.background = element_blank(),
        axis.line = element_line(colour = "black"))

all_cpu_exp_val

wilcox.test(log_all_pwa_load_times$total_cpu_energy_consumption[1:180], 
            log_all_pwa_load_times$total_cpu_energy_consumption[181:360], paired = TRUE)

log_all_pwa_load_times

wilcox.test(all_cpu_exp_val$pwa_load_time[1:180], 
            all_cpu_exp_val$pwa_load_time[181:360], paired = TRUE)



shapiro.test(all_cpu_exp_val$pwa_load_time[1:180]-all_cpu_exp_val$pwa_load_time[181:360])
shapiro.test(log_all_pwa_load_times$pwa_load_time[1:180]-log_all_pwa_load_times$pwa_load_time[181:360])

all_cpu_exp_val
cliffs_delta_log_load <- cliff.delta(all_cpu_exp_val$pwa_load_time_log[1:180], 
                                     all_cpu_exp_val$pwa_load_time_log[181:360])
cliffs_delta_log_load

all_cpu_exp_val



density_plot_log_load <- ggplot(all_cpu_exp_val, aes(x = (pwa_load_time), y = ..scaled.., 
                group = type, fill = type))

density_plot_log_load + scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + 
  xlab('Natural Log Load time (in milliseconds)') +
  scale_y_continuous(breaks = seq(0, 1, 0.25))

gg <- ggplot(all_cpu_exp_val, group=type, fill=type) + scale_fill_manual(values=c('#588cc0', '#7a24c8', '#56B4E9')) + theme_minimal() +
  ggtitle('Density curve for PWA load time') +
  xlab('PWA load time (in seconds)') + ylab('Density') + 
  theme(plot.title = element_text(hjust = 0.5), axis.text.y   = element_text(size=14),
        axis.text.x   = element_text(size=14),
        axis.title.y  = element_text(size=14),
        axis.title.x  = element_text(size=14),
        panel.background = element_blank(),
        axis.line = element_line(colour = "black"))
gg <- gg + geom_density(aes(x=pwa_load_time_log, y=..scaled.., fill=type), alpha=0.4)

gg


qqnorm(all_cpu_exp_val[order(all_cpu_exp_val$experiment),]$total_cpu_energy_consumption, 
       ylab = 'CPU Energy Consumption Sample Quantile (Joules)',
       main = 'Q-Q plot of Energy Consumption'); qqline(all_cpu_exp_val$total_cpu_energy_consumption, 
                                                            col = 'red')

qqnorm(log_all_cpu_exp_val[order(log_all_cpu_exp_val$experiment),]$total_cpu_energy_consumption, 
       ylab = 'CPU Energy Consumption Sample Quantile (Joules)',
       main = 'Q-Q plot of Natural Log of Energy Consumption'); qqline(log_all_cpu_exp_val$total_cpu_energy_consumption, 
                                                                           col = 'red')
