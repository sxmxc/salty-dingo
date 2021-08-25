<template>
  <section>
    <b-table
      :data="data"
      :loading="loading"
      paginated
      backend-pagination
      :total="total"
      :per-page="perPage"
      @page-change="onPageChange"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      backend-sorting
      :default-sort-direction="defaultSortOrder"
      :default-sort="[sortField, sortOrder]"
      @sort="onSort"
      :selected.sync="selected"
      @select="select"
    >
      <b-table-column
        field="id"
        label="ID"
        sortable
        v-slot="props"
      >
        {{ props.row.id }}
      </b-table-column>

      <b-table-column
        field="name"
        label="Device Name"
        sortable
        v-slot="props"
      >
          {{ props.row.name }}
      </b-table-column>

      <b-table-column
        field="parent"
        label="Parent"
        sortable
        v-slot="props"
      >
        {{ props.row.parent.name}}
      </b-table-column>
    </b-table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      total: 0,
      loading: false,
      sortField: 'id',
      sortOrder: 'asc',
      defaultSortOrder: 'asc',
      page: 1,
      perPage: 20,
      selected: {},
    }
  },
  
  async fetch({$axios,$auth}) {
    const params = [
    ]

    this.loading = true
    this.data = await $axios.$get(`/configuration-items/${params}`, {
      headers: {
        Authorization: `Bearer ${ $auth.$storage.getUniversal('jwt') }`
      }
    })
    // let currentTotal = this.data.length()
    // if (this.data.length() / this.perPage > 1000) {
    //   currentTotal = this.perPage * 1000
    // }
    // this.total = currentTotal
    this.loading = false
  },
  methods: {
    /*
        * Load async data
            /*
        * Handle page-change event
        */
    onPageChange(page) {
      this.page = page
      this.$fetch()
    },
    /*
     * Handle sort event
     */
    onSort(field, order) {
      this.sortField = field
      this.sortOrder = order
      this.$fetch()
    },

    select(item) {
      this.$router.push({ path: '/devices/' + item.id })
    },
    /*
     * Type style in relation to the value
     */
    type(value) {
      const number = parseFloat(value)
      if (number < 6) {
        return 'is-danger'
      } else if (number >= 6 && number < 8) {
        return 'is-warning'
      } else if (number >= 8) {
        return 'is-success'
      }
    },
  },
  filters: {
    /**
     * Filter to truncate string, accepts a length parameter
     */
    truncate(value, length) {
      return value.length > length ? value.substr(0, length) + '...' : value
    },
  },
  mounted() {
    this.$fetch()
  },
}
</script>
