import { addImports, addPluginTemplate, createResolver, defineNuxtModule } from '@nuxt/kit'
import type { NuxtDayjsOptions } from "./types";
import type { Nuxt } from '@nuxt/schema'
import plugin from './runtime/plugin'

export type ModuleOptions = NuxtDayjsOptions

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-dayjs',
    configKey: 'dayjs'
  },

  defaults: {},

  setup: (moduleOptions: ModuleOptions, nuxt: Nuxt) => {
    const { resolve } = createResolver(import.meta.url)

    moduleOptions = nuxt.options.runtimeConfig.sentry = {
      ...moduleOptions || {},
      ...nuxt.options.runtimeConfig.sentry || {}
    }

    addPluginTemplate({
      getContents: () => plugin(moduleOptions),
      filename: 'nuxt-dayjs.plugin.mjs'
    })

    addImports({ from: resolve('./runtime/use-dayjs'), name: 'useDayjs' })
  }
})
