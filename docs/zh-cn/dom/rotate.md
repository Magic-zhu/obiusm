## 旋转

![](../../assets/rotate.gif)

### api 介绍

**:small_orange_diamond: rotate(z,duration)**

|参数|类型|说明|默认值
|:---:|:---:|:---|:---:|
|z|number|旋转角度| 无
|duration|number|持续时间|400|


> 或者可以传入一个参数对象<br>

**:small_orange_diamond: rotate(options)**

|参数|类型|说明|默认值
|:---:|:---:|:---|:---:|
|z|number|旋转角度| 无
|duration|number|持续时间|400|
|timeFunction|string|例如 'ease' 'ease-in-out' 等|linear|
|transformOrigin|string|变换中心点位置|'50% 50%'|

### 示例代码

```js
obiusm.use(ObiusmDom);
let Animation = obiusm.create()
  .rotate(45)
  .rotate(90)
  .rotate(135);
let renderer = obiusm.dom(document.getElementById("app"), Animation);
renderer.render();
let Animation2 = obiusm
  .create()
  .rotate({ z: 45, transformOrigin: "100% 100%" })
  .rotate({ z: 90, transformOrigin: "100% 100%" })
  .rotate({ z: 135, transformOrigin: "100% 100%" });
let renderer2 = obiusm.dom(document.getElementById("app2"), Animation2);
renderer2.render();
```
