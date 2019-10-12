<template lang="pug">
div
  select(v-model='selectedItem', :change="$emit('selected', selectedItem )")
    option(v-for='item in categories', :key='item.index', :value='item') {{item}}
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => ['all']
    }
  },
  data() {
    return {
      selectedItem: 'all'
    }
  }
}
</script>

<style lang="scss" scoped></style>
