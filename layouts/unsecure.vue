<template>
  <div>
    <section class="columns is-centered">
      <Nuxt />
    </section>
  </div>
</template>

<script>
export default {
  name: 'UnsecureLayout',
  auth: false,
  data() {
    return {}
  },
}
</script>
