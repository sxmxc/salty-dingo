<template>
  <div class="container">
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="contact in contacts" :key="contact.id">
        {{ contact.first_name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({$axios, $auth}) {
      const contacts = await $axios.$get(`/contacts/`, {
      headers: {
        Authorization: `Bearer ${ $auth.$storage.getUniversal('jwt') }`
      }
    })
    return { contacts }
    },
  data () {
    return {
      error: null
    }
  },
   
}
</script>
