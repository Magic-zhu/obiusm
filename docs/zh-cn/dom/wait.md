## 等待

示例图片

![](../../assets/wait.gif)

### api 介绍

wait(time)

- time: 毫秒时间

### 示例代码

```js
obiusm.use(ObiusmDom);
let Animation = obiusm.create().moveTo(200, 200).wait(1000).moveTo(0, 0);
console.log(Animation);
let renderer = obiusm.dom(document.getElementById("app"), Animation);
renderer.render();
```
