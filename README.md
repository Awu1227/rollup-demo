# rollup-demo

rollup learning

```bash
npm run build 打包代码

npm run build:iife 打包成iife格式代码

npm run build:cjs 打包成cjs格式代码

npm run build:umd 打包成umd格式代码
```

## 背景

Rollup 允许你使用新的模块系统编写代码，然后将其编译回现有的支持格式，例如 CommonJS 模块、AMD 模块和 IIFE 样式脚本。这意味着你可以编写 对未来兼容 的代码。

## 优点

### （除屑优化）Tree-Shaking

除了可以使用 ES 模块之外，Rollup 还可以静态分析你导入的代码，并将排除任何实际上没有使用的内容。

### 兼容性

1. 导入 CommonJS

[@rollup/plugin-commonjs](https://github.com/rollup/plugins/tree/master/packages/commonjs)

2. 发布 ES 模块
