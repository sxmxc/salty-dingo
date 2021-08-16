<template>
  <div>
   <Navbar />

    <section class="main-content columns">
      <div class="p-1">
        <Nuxt />
      </div>
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
