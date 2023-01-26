<script setup>
import { useDayjs } from '#imports'

const dayjs = useDayjs()
</script>

<template>
  <div>
    {{ dayjs() }}
  </div>
</template>

