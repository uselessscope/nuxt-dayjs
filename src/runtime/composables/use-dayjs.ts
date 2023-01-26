import { NuxtDayjsInstance } from '../types'
import { useNuxtApp } from '#imports'

export default function (): NuxtDayjsInstance {
  return useNuxtApp().$dayjs
}
