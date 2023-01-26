export default defineNuxtConfig({
  modules: ['../src/module'],

  // dayjs: {
  //   locales: ['ru'],
  //   defaultLocale: 'ru',
  //   defaultTimeZone: 'Europe/Moscow',
  //   plugins: ['utc', 'timezone'],
  // },

  runtimeConfig: {
    dayjs: {
      locales: ['ru'],
      defaultLocale: 'ru',
      defaultTimeZone: 'Europe/Moscow',
      plugins: ['utc', 'timezone'],
    }
  }
})
