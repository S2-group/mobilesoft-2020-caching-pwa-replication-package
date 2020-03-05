# Green Lab - Evaluating the Impact of Caching on the Energy Efficiency and Performance of Progressive WebApplications
Project for Green Lab course


## Getting Started

Before executing the experiments, please have the following installed on your machine:

* python2.x.x
* Android Debug Bridge (adb)
* Android SDK Tools (monkeyrunner)
* python-lxml
* Pluginbase (pip module)
* http.server (pip module)

Verify that all dependencies have been installed.

Make sure the device is recognized:
```
adb devices
```

### Start localhost server


Serve PWA direcory

```
cd PWA
```
```
python -m SimpleHTTPServer 8000
```
PWA directory is now served at [0.0.0.0:8000](http://0.0.0.0:8000/)

Start server to accept POST requests

```
cd PWA
```
```
python3 server.py
```

Server is now running: [0.0.0.0:8081](http://0.0.0.0:8081/)

Connect mobile device to localhost server:
```
adb reverse tcp:8081 tcp:8081
```
```
adb reverse tcp:8000 tcp:8000
```

### Start experiments: generate experiments, filter results

See available options:
```
make help
```

Start experiments, filter:
```
make experiment
```

Final filtered results for each experiment can be found in:
```
FINAL_OUTPUT/experiment#/final_results
```

Generated, raw experiment output files can be found in:
```
android-runner/examples/batterystats/output/experiment#/PWA1.csv
```
```
android-runner/examples/batterystats/output/experiment#/PWA2.csv
```
