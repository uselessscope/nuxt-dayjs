import dayjs from 'dayjs'

export type NuxtDayjsInstance = dayjs

export interface NuxtDayjsOptions {
  locales?: string[]
  plugins?: string[]
  defaultLocale?: string
  defaultTimeZone?: string
}
