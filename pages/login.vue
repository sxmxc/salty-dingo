<template>
    <div class="column is-half">
      <div v-show="error !== ''" class="">
      <p>{{ error }}</p>
      </div>
    <h1 class="title">Login</h1>
    <form @submit="loginUser">
      <b-field label="Email">
            <b-input type="email"
                v-model="identifier"
                value=""
                maxlength="30"
                icon="email"
            icon-right="close-circle"
            icon-right-clickable
            @icon-right-click="clearIconClick">
            </b-input>
        </b-field>
      <b-field label="Password">
            <b-input type="password"
                v-model="password"
                value=""
                password-reveal>
            </b-input>
        </b-field>
      <div>
        <button
          :disabled="identifier === '' || password === ''"
          class="button--green"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
    </div> 


</template>
<script>
export default {
  layout: "public",
  data() {
    return {
      identifier: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async loginUser(e) {
      e.preventDefault()
      try {
        const user = await this.$strapi.login({
          identifier: this.identifier,
          password: this.password,
        })
        console.log(user)
        if (user !== null) {
          this.error = ''
          this.$nuxt.$router.push('/')
        }
      } catch (error) {
        this.error = 'Error in login credentials'
      }
    },
    clearIconClick() {
                this.identifier = '';
            },
  },
  middleware: 'auth',
}
</script>
<style></style>