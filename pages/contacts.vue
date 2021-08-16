<template>
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
</template>

<script>
  export default {
    data() {
      return {
        contacts: [],
        error: null
      }
    },
    async fetch() {
      this.contacts = await fetch(
        'http://localhost:1337/contacts'
      ).then(res => res.json())
    }
  }
</script>
