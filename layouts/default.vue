<template lang="pug">
.container
  header
    <app-navigation/>
  main
    <nuxt/>
  footer
</template>

<script>
import AppNavigation from '@/components/main/Navigation'
export default {
  components: {
    AppNavigation
  }
}
</script>

<style></style>
