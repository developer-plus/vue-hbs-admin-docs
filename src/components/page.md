# Page

页面组件。

## PageWrapper

用于包裹页面的组件。

### Usage

``` vue
<template>
  <page-wrapper title="页面标题" content="页面介绍">
    页面内容
  </page-wrapper>
</template>

<script setup lang="ts">
import { PageWrapper } from '~/components/Page'
</script>
```

### Props

| 属性    | 类型    | 默认值 | 描述    |
| ------- | ------ | ----- | ------ |
| title   | string | -     | 页面标题 |
| content | string | -     | 页面介绍 |
