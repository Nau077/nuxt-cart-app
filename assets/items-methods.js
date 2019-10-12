// Иногда полезно разнести длинные методы в компоненте в миксины, эта ситуация лишь пример.
// лучше разносить группами, которые логически связаны по смыслу

export const itemMixin = {
  methods: {
    makeUniqueCategories() {
      const categories = this.items.map((el) => el.category)
      categories.push('all')
      const newCategories = [...new Set(categories)]
      return newCategories
    }
  }
}
