## 关键帧动画

![example](../../assets/keyframe.gif)

**:small_orange_diamond: keyframe(id,keyframe,options)**

|   参数   |  类型  | 说明                                | 默认值 |
|:--------:|:------:|:------------------------------------|:------:|
|    id    | string | 必须保证唯一性，用于标记动画        |   无   |
| keyframe |   -    | 关键帧,关键帧写法参考下面的详细说明 |   无   |
| options  | object | 配置对象，详细参考下面 options 说明 |   无   |

**:small_orange_diamond: options**

|      参数       |  类型  | 说明                                                                                                                    |  默认值   |
|:---------------:|:------:|:------------------------------------------------------------------------------------------------------------------------|:---------:|
|    duration     | number | 动画持续时间 单位:ms                                                                                                    |    400    |
|  timeFunction   | string | 例如 'ease' 'ease-in-out' 等                                                                                            |  linear   |
| transformOrigin | string | 变换中心点位置                                                                                                          | '50% 50%' |
|      delay      | number | 延迟播放时间   单位:ms                                                                                                  |     -     |
| iterationCount  | number | 重复播放次数                                                                                                            |     1     |
|    direction    | string | 规定动画是否在下一周期逆向地播放 可选值 normal , reverse, alternate, alternate-reverse                                  | 'normal'  |
|    fillMode     | string | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。 可选值 none,forwards,backwards |  'none'   |

### keyframe 详解

```javascript
[
  {
    process: '0%',
    action: {
      backgroundColor: 'green',
      left: '0px',
    },
  },
  {
    process: '100%',
    action: {
      backgroundColor: 'red',
      left: '300px',
    },
  },
];
```

keyframe 是一个结构化数组<br>

- process: 是指在整个动画过程中的关键帧位置
- action: action 是一个对象,keyframe 分别为样式属性的 key 和 value

## 示例代码

```js
const app = document.getElementById('app');
obiusm.use(ObiusmDom);
let animation = obiusm.create().keyframe(
  'move',
  [
    {
      process: '0%',
      action: {
        backgroundColor: 'green',
        left: '0px',
      },
    },
    {
      process: '100%',
      action: {
        backgroundColor: 'red',
        left: '300px',
      },
    },
  ],
  {
    duration: 2000,
    direction: 'alternate',
    iterationCount: 10,
  },
);
obiusm.dom(app, animation).render();
```
