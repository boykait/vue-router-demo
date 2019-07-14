<template>
    <div>
      <div class="nav">
        <router-link to="/index">首页</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/">退出</router-link>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  .nav {
    margin-bottom: 50px;
  }
  .nav a {
    margin-right: 20px;
  }
</style>
