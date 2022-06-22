# MQTT 通信

```js
client = mqttConnect.connect(MQTT_SERVICE, options);
client.on('connect', () => {
  client.publish('/inner/web/dialog/close', JSON.stringify(this.options.obj));
});
```

```js

client.on('connect', () => {
  client.subscribe('/inner/web/dialog/close')
  client.on('message', (topic, message) => {})
```
