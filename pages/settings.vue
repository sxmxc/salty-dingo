<template>
  <div>
    <p v-if="$auth.user">
      Logged in
    </p>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  computed: {
    user () {
      return this.$auth.user
    }
  },
  methods: {
  }
}
</script>

