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
  name: 'App',
  data () {
    return {
      organizations: [],
      error: null
    }
  },
  async mounted () {
    try {
      this.organizations = await this.$strapi.$organizations.find()
    } catch (error) {
      this.error = error
    }
  }
}
</script>

