# multisenservice
Web Apps for Displaying IoT Sensors with ReactJS

## Usage
Run this server using

```bash
git clone https://github.com/dxh30/multisenservice
cd ./multisenservice
npm run dev
```

## Check current IP configuration using, and check port opened using netstat

```bash
$ ip a
$ ifconfig
$ netstat -tunlp
```

## Send Request to WebApp Service using this command "Change 127.0.0.1 using your current ip"
with GET request

```json
"URL": "https://127.0.0.1/api/token?token=XdFaBc************/input?field1=value1&field2=value2&field3=value3"
```

or with POST request

```json
"URL": "https://127.0.0.1/api/token?token=XdFaBc************/input/post"
data: {
"field1" : "value1",
"field2" : "value2",
"field3" : "value3",
"field4" : "value4"
}
```

This Project is inspired by Thingspeak

