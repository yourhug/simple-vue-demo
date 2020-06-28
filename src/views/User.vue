<template>
  <div class="user">
    <img src="../assets/logo.png" alt />
    <h1>个人中心</h1>
    <div class="add">
      <router-link :to="{name:'add'}">发布新闻</router-link>
    </div>
    <h3>用户名: {{username}}</h3>
    <div class="add exit">
      <p @click="exit()">退出</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
      username: localStorage.getItem('name')
    }
  },
  methods: {
    exit() {
      this.username = ''
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss">
.add {
  height: 40px;
  line-height: 40px;
  text-align: center;
  a {
    width: 120px;
    margin: auto;
    display: block;
    color: #fff;
    background: cornflowerblue;
  }
}
.user img {
  text-align: center;
  display: block;
  margin: 10px auto;
}
.user h1,
h3 {
  text-align: center;
  margin: 0 0 50px;
}
.user h3 {
  margin-top: 30px;
}
</style>

