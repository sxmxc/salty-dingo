<template>
  <div>
   <Navbar />

    <section class="columns is-centered">
        <Nuxt />
    </section>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
export default {
components: {
 Navbar,
 },
  data () {
    return {
    }
  }
}
</script>
