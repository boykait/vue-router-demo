<template>
  <form>
    <div label="用户名:">
      <label>用户名：</label>
      <input v-model="userName"/>
    </div>
    <div label="密码：">
      <label>密码：</label>
      <input v-model="password"/>
    </div>
    <div>
      <input type="button"  @click="login" value="登录"/>
    </div>
  </form>
</template>

<script>

import api from '../api/index'

export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    login () {
      debugger
      const loginData = {
        userName: this.userName,
        password: this.password
      }
      api.login(loginData).then(x => {
        debugger
        if (localStorage.token !== '401') {
          this.$router.push('/index')
        } else {
          alert('登录失败，请重新输入账号和密码！')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
