<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <h1>void<strong>Moose</strong>.net</h1>
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          Navigation
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <NuxtLink
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'view-dashboard',
          to: { name: 'index' }
        },
         {
          title: 'Devices',
          icon: 'server',
          to: { name: 'devices' }
        },
         {
          title: 'Change Management',
          icon: 'cog-transfer',
          to: { name: 'change_management' }
        },
        {
          title: 'Organizations',
          icon: 'office-building',
          to: { name: 'organizations' }
        },
         {
          title: 'Contacts',
          icon: 'contacts',
          to: { name: 'contacts' }
        },
        {
          title: 'Settings',
          icon: 'cogs',
          to: { name: 'settings' }
        },
         {
          title: 'Info',
          icon: 'information',
          to: { name: 'info' }
        },
         {
          title: 'Help',
          icon: 'help-circle',
          to: { name: 'help' }
        },
         
        
      ]
    }
  }
}
</script>
