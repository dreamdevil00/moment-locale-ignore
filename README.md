# 如何减小 moment 体积

### 方法一： path map

在 src/tsconfig.app.json 添加 :

```
"compilerOptions": {
  "paths": {
    "moment": [
      "../node_modules/moment/min/moment.min.js"
    ]
  }
}
```

这种方式只能移除所有 locale 文件。虽然编译过程中会有警告， 不过只要不适用 locale 相关的功能， 就不会有问题。

`为什么不用 moment-mini ？`

- moment-min repo 不一定和官方 moment 库同步
- 如果使用其他依赖于 moment 的库(如 moment-timezone)， 默认情况下会打包所有 locale 文件， 上述配置可以避免这个问题。

### 方法二: webpack context-replacement-plugin+ @angular-builders/custom-webpack

- [context-replacement-plugin](https://webpack.js.org/plugins/context-replacement-plugin/)
- [@angular-builders/custom-webpack](https://www.npmjs.com/package/@angular-builders/custom-webpack)
