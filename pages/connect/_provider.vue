<template>
  <content>
    <h1>Logging in...</h1>
  </content>
</template>
<script>

export default {
  name: 'Provider',
  layout: "unsecure",
  data() {
    return {
      provider: this.$route.params.provider,
      access_token: this.$route.query.access_token,
      // id_token: this.$route.query.id_token,
    }
  },
  async mounted() {

    try {
      const res = await this.$axios.$get(
      `/auth/${this.provider}/callback?access_token=${this.access_token}`
    )
    
    const { jwt, user } = res
   // store jwt and user object in localStorage
   // this.$auth.$storage.setUniversal('jwt', jwt)
   // this.$auth.$storage.setUniversal('user', { username: user.username, id: user.id, email: user.email })
    this.$auth.$storage.setUniversal('loggedIn', true)
   // this.$auth.$storage.setUniversal('id_token', id_token)
    this.$auth.setUser(user)
    this.$auth.setUserToken(jwt)
    this.$router.push('/')

    } catch(e) {
      console.log(e)
    }
    
  },
  

}
</script>
