<template lang="pug">
nav.navbar.navbar-expand-lg.navbar-light.bg-light
    <nuxt-link class='navbar-brand' exact to="/">Cart-app</nuxt-link>
    ul.nav
        li.nav-item
          <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/"> Home</nuxt-link>
        li.nav-item
         <nuxt-link active-class="active" class="nav-link" to="/cart">Cart</nuxt-link>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
