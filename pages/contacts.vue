<template>
<section class="section">
   <div class="columns is-mobile">
    <p v-if="$fetchState.pending">Fetching contacts...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Nuxt Mountains</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="contact of contacts" :key="contact.id">{{ contact.name }}</li>
    </ul>
    <button @click="$fetch">Refresh</button>
  </div>
   </div>

</section>

</template>

<script>
  export default {
     async asyncData({$axios, $auth, route}) {
      const contacts = await $axios.$get(`/contacts/${ route.params.id }`, {
      headers: {
        Authorization: `Bearer ${ $auth.$storage.getUniversal('jwt') }`
      }
    })
    return contacts
    },
    data() {
      return {
        error: null
      }
    },
  }
</script>
