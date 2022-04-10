# 组件开发规范

[src/components](https://github.com/Hongbusi/vue-hbs-admin/tree/master/src/components) 下新增组件需遵从以下规范。

## 目录结构

```
├── components
│   ├── Example
│   │   ├── src
│   │   │   ├── Example.vue
│   │   │   ├── ExampleOther.ts
│   │   │   └── type.ts
│   │   └── index.ts
```

## `index.ts` 作为统一出口

``` ts
// Example/index.ts
import Example from './src/Example.vue'

export * from './src/types'
export * from './src/otherFunction'
export { Example }
```

## 组件示例、文档

当你完成了一个组件开发，在提交 PR 之前，请更新 Demo 示例，以及编写相关文档。

文档仓库地址：[vue-hbs-admin-docs](https://github.com/Hongbusi/vue-hbs-admin-docs)

文档编写模版：[Example](../components/example)
