## 属性变化

示例图片
![](../../assets/attribute.gif)

### api 介绍

attribute(key,value,duration)

|参数|类型|说明|默认值
|:---:|:---:|:---|:---:|
|key|string|属性键|-|
|value|string|属性值|-|
|value|string|属性值|400|

或者可以传入一个对象
attribute(options)

- options.key 属性
- options.value 值
- options.duration 动画时间
- options.timeFunction 例如 'ease' 'ease-in-out' 等

### 示例代码

```js
obiusm.use(ObiusmDom);
let Animation = obiusm
  .create()
  .attribute("backgroundColor", "red", 400)
  .attribute("backgroundColor", "orange")
  .attribute("backgroundColor", "yellow")
  .attribute("backgroundColor", "green")
  .attribute("backgroundColor", "blue")
  .attribute("backgroundColor", "purple")
  .attribute("borderRadius", "50%")
  .attribute("opacity", "0");
let renderer = obiusm.dom(document.getElementById("app"), Animation);
renderer.render();
```
