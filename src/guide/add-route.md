# 新增路由

## 新增一个路由模块

在 [src/router/routes/modules](https://github.com/Hongbusi/vue-hbs-admin/tree/master/src/router/routes/modules) 内新增一个模块文件。

示例，新增 `example.ts` 文件

``` ts
import type { RouteRecordRaw } from 'vue-router'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/example',
  name: 'example',
  component: DefaultLayout,
  redirect: '/example',
  children: [
    {
      path: '',
      name: 'example-page',
      component: () => import('~/views/example/index.vue')
    }
  ]
}

export default route
```

此时路由已添加完成，不需要手动引入，放在 [src/router/routes/modules](https://github.com/Hongbusi/vue-hbs-admin/tree/master/src/router/routes/modules) 内的文件会自动被加载。

## 新增 demo 示例路由

在 [src/router/routes/modules/demo.ts](https://github.com/Hongbusi/vue-hbs-admin/blob/master/src/router/routes/modules/demo.ts) 下新增即可。

``` ts

   
import type { RouteRecordRaw } from 'vue-router'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/demo',
  name: 'demo',
  component: DefaultLayout,
  redirect: '/demo/excel/import',
  children: [
    {
      path: 'excel/import',
      name: 'import-excel',
      component: () => import('~/views/demo/excel/import.vue')
    },
    {
      path: 'excel/export',
      name: 'export-excel',
      component: () => import('~/views/demo/excel/export.vue')
    },
    // 新增即可
  ]
}

export default route
```
