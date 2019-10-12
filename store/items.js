function getRandomCategory() {
  const categoryArr = ['a', 'b', 'c']
  return categoryArr[Math.floor(Math.random() * categoryArr.length)]
}

export const state = () => ({
  items: []
})

export const mutations = {
  setItems(state, items) {
    state.items = items
  },
  addToCart(state, id) {
    const item = state.items.find((el) => el.id === id)
    item.isReserved = true
  },
  removeFromCart(state, id) {
    const item = state.items.find((el) => el.id === id)
    item.isReserved = false
  }
}

export const actions = {
  async fetch({ commit }) {
    const items = await this.$axios.$get('https://reqres.in/api/unknown')
    const updatedItems = items.data.map((el) => {
      el.isReserved = false
      el.category = getRandomCategory()
      return el
    })
    commit('setItems', updatedItems)
  }
}

export const getters = {
  items: (state) => state.items
}
