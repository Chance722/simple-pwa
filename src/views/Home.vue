<template>
  <div class="home">
    <img :src="userData && userData.avatar_url" />
    <h1>{{ userData && userData.login}}</h1>
    <a :href="userData && userData.html_url">Github</a>
    <h2>This is my introduce</h2>
    <p>Hello World</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      userData: null,
    }
  },
  created () {
    this.initDoubanUser()
  },
  methods: {
    async initDoubanUser () {
      const res = await axios.get('https://api.github.com/users/Chance722', {
        'User-Agent': 'request'
      })
      if (res.status === 200) this.userData = res.data
    },
  },
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
