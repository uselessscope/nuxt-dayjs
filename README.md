# Nuxt Dayjs

## Install

### Command

```console
~$ npm i nuxt-dayjs

~$ yarn add nuxt-dayjs
```

### nuxt.config.ts

```ts
export default defineNuxtConfig({
  modules: ['nuxt-dayjs'],
})
```


## Usage examples

### Config key

```ts
export default defineNuxtConfig({
  dayjs: {
    locales: ['ru'],
    defaultLocale: 'ru',
    defaultTimeZone: 'Europe/Moscow',
    plugins: ['utc', 'timezone'],
  }
})
```

### Runtime config

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    dayjs: {
      locales: ['ru'],
      defaultLocale: 'ru',
      defaultTimeZone: 'Europe/Moscow',
      plugins: ['utc', 'timezone'],
    }
  }
})
```

### Component

```ts
import { useDayjs } from '#imports'

const dayjs = useDayjs()
```

## Interfaces

```ts
interface NuxtDayjsOptions {
  locales?: string[]
  plugins?: string[]
  defaultLocale?: string
  defaultTimeZone?: string
}

interface NuxtConfig {
  dayjs?: NuxtDayjsOptions
}
```
