<template>
  <div class="navbar">
      <nav>
          <img src="@/assets/imgs/dog-logo.jpg" alt="dog-logo">
          <h1><router-link :to="{ name: 'Home' }">Dog Web</router-link></h1>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .navbar {
        padding: 16px 10px;
        margin-bottom: 60;
        background: white;
    }
    nav {
        display: flex;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
    }
    nav h1 {
        margin-left: 20px;
    }
    nav .links {
        margin-left: auto;
    }
    nav .links a, button  {
        margin-left: 16px;
        font-size: 14px;
    }

    nav img {
        max-width: 100px;
        max-height: 100px;
        overflow: hidden;
        border-radius: 50px;
    }
</style>