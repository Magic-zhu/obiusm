## 放大缩小

示例图片

![](../../assets/scale.gif)

### api 介绍

**:small_orange_diamond: scale(x,y,duration)**

|   参数   |  类型  |   说明   | 默认值 |
|:--------:|:------:|:------:|:------:|
|    x     | number |  x 轴向  |        |
|    y     | number |  y 轴向  |        |
| duration | number | 持续时间 |  400   |

或者可以传入一个对象
**:small_orange_diamond: scale(options)**

|      参数       |  类型  |             说明             |  默认值   |
|:---------------:|:------:|:--------------------------:|:---------:|
|        x        | number |            x 轴向            |           |
|        y        | number |            y 轴向            |           |
|    duration     | number |           持续时间           |    400    |
|  timeFunction   | string | 例如 'ease' 'ease-in-out' 等 | 'linear ' |
| transformOrigin | string |        变换中心点位置        | '50% 50%' |

### 示例代码

```js
obiusm.use(ObiusmDom);
let Animation = obiusm.create().scale(1.5, 0.2);
console.log(Animation);
let renderer = obiusm.dom(document.getElementById("app"), Animation);
renderer.render();
let Animation2 = obiusm
  .create()
  .scale({ x: 1.5, y: 0.2, transformOrigin: "50% 100%" });
console.log(Animation);
let renderer2 = obiusm.dom(document.getElementById("app2"), Animation2);
renderer2.render();
```
