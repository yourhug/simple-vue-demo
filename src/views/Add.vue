<template>
  <div class="add">
    <p>发布新闻</p>
    <label>
      <span>标题：</span>
      <input type="text" v-model="title" placeholder="请输入标题" />
    </label>
    <p>内容</p>
    <textarea rows="25" placeholder="请输入内容" v-model="content" />

    <button @click="add">发布新闻</button>
    <button @click="back">返回</button>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'add',
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    add() {
      if (this.title != '' || this.content != '') {
        store.commit('addItem', {
          title: this.title,
          content: this.content
        })
        this.title = ''
        this.content = ''
        this.$router.push('/home/list')
      } else {
        alert('内容不能为空')
      }
    },
    back() {
      history.back()
    }
  }
}
</script>
<style lang="scss">
.add p {
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background: cornflowerblue;
}
.add label {
  display: block;
  margin: 10px;
  width: 70%;
  span {
    float: left;
    margin-top: 10px;
  }
}
input {
  display: block;
  padding: 10px;
}
textarea {
  width: 90%;
  margin: 2% auto;
  display: block;
  text-indent: 10px;
  padding: 10px;
}
.add button {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 50%;
  display: block;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border: none;
  background: #12851b;
  color: #fff;
  text-align: center;
  &:last-child {
    left: inherit;
    right: 0;
    border-left: 1px solid #fff;
  }
}
</style>

