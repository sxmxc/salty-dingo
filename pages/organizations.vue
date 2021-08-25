<template>
  <div class="container">
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="organization in organizations" :key="organization.id">
        {{ organization.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({$axios, $auth, route}) {
      const organizations = await $axios.$get(`/organizations/`, {
      headers: {
        Authorization: `Bearer ${ $auth.$storage.getUniversal('jwt') }`
      }
    })
    // console.log("Getting Organizations using token: " + `Bearer ${ $auth.$storage.getUniversal('jwt') }`)
    return { organizations }
    },
  data () {
    return {
      error: null
    }
  },
   
}
</script>

