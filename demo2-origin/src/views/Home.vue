<template>
  <div>
      <router-view />
      <ul class="footer">
        <li class="item"><router-link :to="{name:'list'}">新闻中心</router-link></li>
        <li class="item"><router-link :to="{name:'user'}">个人中心</router-link></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
<style lang="scss">
ul,li{
  list-style: none;
}
.footer{
  position: fixed;
  width: 100%;
  height: 60px;
  line-height: 60px;
  left: 0;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  border: 1px solid #ddd;
}
.footer .item{
  font-size: 16px;
  flex: 1;
  text-align: center;
  a{
    display: block;
    background: #fff;
    color: #12851b;
    &.active{
    background: #12851b;
    color: #fff;
    }
  }
}
</style>

