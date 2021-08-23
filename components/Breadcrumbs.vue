<template>
 <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li v-for="(item, i) in crumbs" :key="i" :class="item.classes">
              <nuxt-link :to="item.path">
                {{ item.param }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
</template>

<script>
export default {
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.substring(1).split('/')
      const crumbs = []

      
      let path = ''

      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push({param,
            ...match,})
        }

      })      
      // url:     /blog/2020/11/20/my-post-url
      // outputs: ['blog','2020','11','20','my-post-url']
      return crumbs
    }
  }
}
</script>
