import { NuxtDayjsOptions } from '../types'

export default function (options: NuxtDayjsOptions) {
  return `
    import { defineNuxtPlugin } from '#imports'
    import dayjs from 'dayjs'

    ${
    options.locales &&
    options.locales
      .map((l: string) => `import 'dayjs/locale/${l}'`)
      .join('\n')
  }

    ${
    options.plugins &&
    options.plugins
      .map((p: string) => `import ${p} from 'dayjs/plugin/${p}'`)
      .join('\n')
  }

    ${
    options.plugins &&
    options.plugins.map((p: string) => `dayjs.extend(${p})`).join('\n')
  }

    ${options.defaultLocale && `dayjs.locale('${options.defaultLocale}')\n`}

    ${
    options.defaultTimeZone &&
    `dayjs.tz.setDefault('${options.defaultTimeZone}')\n`
  }

    export default defineNuxtPlugin(() => {
      return {
        provide: {
          dayjs
        }
      }
    })
  `
}
