<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input v-model="login.username" type="text"/>
      </div>
      <div>
        <label>Password</label>
        <input  v-model="login.password" type="password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  auth: 'guest',
  layout: 'public',
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$strapi.login({ identifier: this.login.username, password: this.login.password })

        this.$auth.setUser(response.data.user).then(() => this.$toast.success('User set!'))
        this.$auth.setUserToken(response.data.jwt).then(() => this.$toast.success('Token set!'))
        console.log(response)

      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
