<!-- src/components/TitleComponent.vue -->
<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'TitleComponent',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
