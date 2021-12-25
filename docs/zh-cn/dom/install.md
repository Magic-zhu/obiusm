## 概述

基于 dom 的动画渲染

## 安装

```shell
    npm install obisum --save
```

```shell
    npm install obisum-dom --save
```

## 使用

可以认为 obisum 和 obisum-dom 之间的关系 类似于 React 和 React-dom

```js
import obisum from 'obisum';
import ObiusmDom from 'obisum-dom';
obisum.use(ObiusmDom);
obisum.get('#app').moveTo(100, 100);
```

详细的使用方式请参照 文档其余部分
