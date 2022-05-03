# 路由配置

## 模块说明

在 `src/router/routes/modules` 内的 .ts 文件会被视为一个路由模块。

## 多级路由

:::warning 注意事项
- 同一级下的路由 `name` 和 `path` 不能重复
- 子路由不要以 `/` 开头，最顶级的父路由需要添加 `/`
- 所有的路由若包含 `children` 则该路由将会被视为父级路由，若想隐藏所有的自己路由，需要将子路由的 `meta.isHide` 设置为 `true`
:::

## 路由元信息 `meta`

```ts
interface RouteMeta {
  // 标题
  title: string
  // 排序索引，自小到大排序
  sort: number
  // 是否隐藏菜单（该路由将不再左侧菜单中显示）
  isHide?: boolean
  // icon，目前仅支持引入 antdv 中的 icon 组件
  icon?: FunctionalComponent
  // 是否是单独的菜单（将不会渲染 children）仅支持最顶级菜单设置该字段
  single?: boolean
  // 是否隐藏面包屑
  hideBreadcrumb?: boolean
  // 路由携带参数
  routeParams?: RouteLocationNormalized["params"]
  routeQuery?: RouteLocationNormalized["query"]
}
```

若需要贡献新的 `RouteMeta` 字段，请在 `src/types/routes.d.ts` 中新增字段

## 路由菜单 Icon

若想为某个路由的菜单添加 icon，请在配置路由时引入该 icon 组件，目前仅支持 Antdv 中的 Icon 组件

示例：

```ts
import type { RouteRecordRaw } from 'vue-router'
// 引入 icon 组件
import { SettingOutlined } from '@ant-design/icons-vue'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/about',
  name: 'about',
  component: DefaultLayout,
  redirect: '/about',
  meta: {
    title: '关于',
    // 在 meta 信息中添加 icon 字段
    icon: SettingOutlined,
    single: true,
    sort: 3,
    hideBreadcrumb: true
  },
  children: [
    {
      path: '',
      name: 'about-page',
      meta: {
        title: '关于'
      },
      component: () => import('~/views/about/index.vue')
    }
  ]
}

export default route
```