<template>
  <div class="container">
    <router-link to="/posts">Posts</router-link>
    <router-link to="/tags">Tags</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "Index",
};
</script>
<style scoped>
</style>
