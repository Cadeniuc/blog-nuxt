<template>
	<nav class="nav_menu_top">
    <nuxt-link to="/">
		  <h2>My blog in NUXT !</h2>
    </nuxt-link>
	</nav>
</template>

<style lang="scss" scoped>
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-bottom: 1px solid #e6e6e6;
  }
  .nav_menu_top {
    h2 {
      text-transform: uppercase;
      font-size: 20px;
    }
    a {
      text-decoration: none;
    }
  }
</style>
