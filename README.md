# wepacke4 + react + react-router

    项目基于 React + redux + webpack4 
    目的为了 熟悉一下 webpack 的项目构建
    实践 React + redux + react-router 开发方式

# react vue 优缺点
## react 
    
- react 原理更透明 跟容易理解
- 样板代码太多
- redux 项目结构（router action component reduer），导致频繁切换文件
- React 组件之间组合更灵活，方便

## vue
- 易于上手
- 模板样式逻辑编写在一个 vue 文件中，更适合 组件化，更可维护
- vuex vue-router 于 vue 结合更紧密
- vue 需要通过 slot 来实现组合
- 无法动态添加根级响应属性，必须在实例化前提前声明所有的根级属性， 但是可以使用 Vue.set 给嵌套对象添加属性