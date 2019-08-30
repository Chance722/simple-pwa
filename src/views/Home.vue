<template>
  <div class="home">
    <img src="../assets/chance722.jpg" />
    <h1>Chance722</h1>
    <router-link to="/">index</router-link>
    <h2>This is my introduce</h2>
    <p>Hello World</p>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.home {
  text-align: center;
  padding-top: 200px;
}

img {
  width: 100px;
  border-radius: 50%;
}
h1, h2, p{
  font-weight: normal;
  font-size: 18px;
}
h2{
  margin-top: 60px;
  color: #aaa;
}
</style>
