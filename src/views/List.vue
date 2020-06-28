<template>
  <div class="news">
    <p>新闻列表</p>
    <ul>
      <li v-for="(item,index) in pageList" 
      :key="index">
        <h4>{{item.title}}</h4>
        <p>{{item.content}}</p>
      </li>
    </ul>
  </div>

</template>

<script>
import store from '@/store'
export default {
  name: 'list',
  store,
  computed: {
    pageList () {
      return store.state.lists
    }
  }
}
</script>
<style lang="scss">
.news > p{
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background: cornflowerblue;
}
.news ul{
  padding: 10px;
  margin-bottom: 100px;
  li{
  padding: 10px;
  margin-bottom: 10px;
  display: block;
  box-shadow: 0 1px 2px #ddd;
  border: 1px solid #eee;
  overflow: hidden;
  }
  h4{
    margin-bottom: 10px;
  }
  p{
    line-height: 20px;
    font-size: 16px;
    padding: 10px;
  }
}
</style>
