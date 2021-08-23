<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" to="/">
               <h1>void<strong>moose</strong>.net</h1>
            </b-navbar-item>
        </template>
        <template v-if="isAuthenticated" #start >
            <b-navbar-item href="/">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-item>
            <b-autocomplete placeholder="Search..."
                icon="magnify"
                icon-clickable
                clearable
                @select="option => selected = option">
            </b-autocomplete>
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
            <NuxtLink :to="`/users/${userId}`">
             <p v-if="username"><span><b-icon icon="account"></b-icon></span> {{ username }}</p>
            </NuxtLink>
                <div class="buttons">
                    <a v-if="username" class="button is-primary"  @click="logout">
                        <strong>Logout</strong>
                    </a>
                    <a v-if="!username" class="button is-light" href="http://natas:1337/connect/auth0" >
                        <strong>Log in</strong>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return{
            username: this.$auth.$storage.getUniversal('user')?.username,
            userId: this.$auth.$storage.getUniversal('user')?.id
        }
    },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  mounted() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  },
  methods: {
    logout() {
      this.$auth.$storage.removeUniversal('user')
      this.$auth.$storage.removeUniversal('jwt')
      this.$auth.$storage.removeUniversal('id_token')
      this.$auth.$storage.removeUniversal('loggedIn')
      // this.$auth.logout()
      window.$nuxt.$router.push('/login')
    }

  },
}
</script>