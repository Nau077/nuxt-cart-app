<template lang="pug">
section
  h1 Cart
  ul(v-for='item of items', :key='item.id' v-if=('item.isReserved'))
    li
      p {{item.name}}
      button(@click.prevent='removeItem(item.id)') remove from cart
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ loadedItems: 'items/items' }),
    items() {
      return this.loadedItems
    }
  },
  async fetch({ store }) {
    if (store.getters['items/items'].length === 0) {
      await store.dispatch('items/fetch')
    }
  },
  methods: {
    ...mapMutations({ removeFromCart: 'items/removeFromCart' }),
    removeItem(id) {
      this.removeFromCart(id)
    }
  }
}
</script>
