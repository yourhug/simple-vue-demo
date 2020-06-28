<template>
  <div class="login">
    <form action v-if="!isReg">
      <h1>欢迎登陆</h1>
      <label>
        <span>用户名：</span>
        <input type="text" v-model="name" />
      </label>
      <label>
        <span>密码：</span>
        <input type="password" v-model="password" />
      </label>
      <div class="button-box">
        <button type="button" @click="login()">登录</button>
        <button type="button" @click="reg()">注册</button>
      </div>
    </form>
    <form action v-else>
      <h1>注册账号</h1>
      <label>
        <span>用户名：</span>
        <input type="text" v-model="name" />
      </label>
      <label>
        <span>密码：</span>
        <input type="password" v-model="password" />
      </label>
      <label>
        <span>确认密码：</span>
        <input type="password" v-model="repassword" />
      </label>
      <div class="button-box">
        <button type="button" @click="addUser()">确定</button>
        <button type="button" @click="cancel()">取消</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      isReg: false,
      name: '',
      password: '',
      repassword: ''
    }
  },
  methods: {
    login() {
      if (
        localStorage.getItem('name') === this.name &&
        localStorage.getItem('password') === this.password
      ) {
        this.name = ''
        this.password = ''
        this.$router.push('/home/user')
      } else {
        alert('用户名密码不正确')
      }
    },
    reg() {
      this.isReg = true
    },
    addUser() {
      if (
        this.password === this.repassword &&
        this.name != '' &&
        this.password != '' &&
        this.repassword != ''
      ) {
        localStorage.setItem('name', this.name)
        localStorage.setItem('password', this.password)
        alert('注册成功')
        this.name = ''
        this.password = ''
        this.repassword = ''
        this.isReg = false
      } else {
        alert('两次密码输入不一致')
      }
    },
    cancel() {
      this.isReg = false
    }
  }
}
</script>

<style lang="scss">
.login h1 {
  text-align: center;
  margin: 20px;
}
.login label {
  display: block;
  margin-bottom: 10px;
  span {
    width: 100px;
    display: inline-block;
    text-align: right;
  }
}
.login .button-box {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
.login button {
  display: inline-block;
  width: 120px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border: none;
  background: #12851b;
  color: #fff;
  margin: 10px;
  border-radius: 10px;
  &:nth-child(odd) {
    float: left;
  }
  &:nth-child(even) {
    float: right;
  }
}
</style>
