<template lang="pug">
section
  <SelectItem :categories='categories' @selected='showItems'/>
  h1 Items page
  ul(v-for='item of selectedItems', :key='item.id')
    li
      p Name: {{item.name}}
      p Category: {{item.category}}
      p(v-if='item.isReserved') item is added to cart
      button(
        @click.prevent='addItemToCart(item.id)' 
        v-if=('!item.isReserved') 
        ) add to cart
      button( 
        v-else=('item.isReserved') 
        disabled="disabled"
        ) add to cart
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import SelectItem from '@/components/additional/SelectItem'
import { itemMixin } from '@/assets/items-methods'

export default {
  components: {
    SelectItem
  },
  mixins: [itemMixin],
  data: () => ({
    selectedCategory: 'all'
  }),
  computed: {
    ...mapGetters({ loadedItems: 'items/items' }),
    items() {
      return this.loadedItems
    },
    categories() {
      return this.makeUniqueCategories()
    },
    selectedItems() {
      if (this.selectedCategory === 'all') return this.items
      return this.items.filter((el) => el.category === this.selectedCategory)
    }
  },
  // https://nuxtjs.org/api/pages-fetch/
  async fetch({ store }) {
    if (store.getters['items/items'].length === 0) {
      await store.dispatch('items/fetch')
    }
  },
  methods: {
    ...mapMutations({ addToCart: 'items/addToCart' }),
    addItemToCart(id) {
      this.addToCart(id)
    },
    showItems(item) {
      this.selectedCategory = item
      return item
    }
  }
}
</script>
