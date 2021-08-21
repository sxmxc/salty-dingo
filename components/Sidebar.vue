<template>
  <aside class="is-2 section">
    <b-sidebar
      position="static"
      :fullheight="fullheight"
      :mobile="mobile"
      :expand-on-hover="expandOnHover"
      :reduce="reduce"
      :delay="expandWithDelay ? 500 : null"
      open
    >
      <b-menu v-if="reduce" class="is-custom-mobile">
        <b-menu-list label="Menu">
          <b-menu-item icon="view-dashboard" label="Dasboard" tag="nuxt-link" :to="{ path: '/' }" exact-active-class="is-active" ></b-menu-item>
          <b-menu-item icon="database" :isActive="isActive">
            <template #label="props">
              CMDB
              <b-icon
                class="is-pulled-right"
                :icon="props.expanded ? 'menu-up' : 'menu-down'"
              ></b-icon>
            </template>
            <b-menu-item
              v-for="(item, key) of menuItems"
              :key="key"
              :icon="item.icon"
              :label="item.title"
              tag="nuxt-link"
              :to="item.to"
              exact-active-class="is-active"
            >
            </b-menu-item>
          </b-menu-item>
          <b-menu-item icon="information" label="Info"  tag="nuxt-link" :to="{ path: '/info' }" exact-active-class="is-active"></b-menu-item>
          <b-menu-item icon="help-circle" label="Help"  tag="nuxt-link" :to="{ path: '/help' }" exact-active-class="is-active"></b-menu-item>
        </b-menu-list>
        <b-menu-list label="Admin">
          <b-menu-item icon="cog">
            <template #label="props">
              Administration
              <b-icon
                class="is-pulled-right"
                :icon="props.expanded ? 'menu-up' : 'menu-down'"
              ></b-icon>
            </template>
            <b-menu-item
              v-for="(item, key) of adminMenuItems"
              :key="key"
              :icon="item.icon"
              :label="item.title"
              tag="nuxt-link"
              :to="item.to"
              exact-active-class="is-active"
            >
            </b-menu-item>
          </b-menu-item>
        </b-menu-list>
        <b-menu-list label="User">
          <b-menu-item icon="logout" label="Logout"></b-menu-item>
        </b-menu-list>
        <b-menu-list label="Night Mode">
          <div class="menu-item">
            <ColorModePicker />
          </div>
        </b-menu-list>
          <b-menu-list label="Hide">
          <b-field>
           <div class="menu-item">
              <b-switch v-model="reduce"></b-switch>
            </div>
          </b-field>
        </b-menu-list>

      </b-menu>
      <b-menu v-else class="is-custom-mobile">
        <b-menu-list label="Menu">
          <b-menu-item icon="view-dashboard" label="Dasboard" tag="nuxt-link" :to="{ path: '/' }" exact-active-class="is-active"></b-menu-item>
          <b-menu-item icon="database" :isActive="isActive">
            <template #label="props">
              CMDB
              <b-icon
                class="is-pulled-right"
                :icon="props.expanded ? 'menu-up' : 'menu-down'"
              ></b-icon>
            </template>
            <b-menu-item
              v-for="(item, key) of menuItems"
              :key="key"
              :icon="item.icon"
              :label="item.title"
              tag="nuxt-link"
              :to="item.to"
              exact-active-class="is-active"
            >
            </b-menu-item>
          </b-menu-item>
          <b-menu-item icon="information" label="Info" tag="nuxt-link" :to="{ path: '/info' }" exact-active-class="is-active"></b-menu-item>
          <b-menu-item icon="help-circle" label="Help" tag="nuxt-link" :to="{ path: '/help' }" exact-active-class="is-active"></b-menu-item>
        </b-menu-list>
        <b-menu-list label="Admin">
          <b-menu-item icon="cog">
            <template #label="props">
              Administration
              <b-icon
                class="is-pulled-right"
                :icon="props.expanded ? 'menu-up' : 'menu-down'"
              ></b-icon>
            </template>
            <b-menu-item
              v-for="(item, key) of adminMenuItems"
              :key="key"
              :icon="item.icon"
              :label="item.title"
              tag="nuxt-link"
              :to="item.to"
              exact-active-class="is-active"
            >
            </b-menu-item>
          </b-menu-item>
        </b-menu-list>
        <b-menu-list label="User">
          <b-menu-item icon="logout" label="Logout"></b-menu-item>
        </b-menu-list>
        <b-menu-list label="Night Mode">
          <div class="menu-item">
            <ColorModePicker />
          </div>
        </b-menu-list>
          <b-menu-list label="Hide">
          <b-field>
           <div class="menu-item">
              <b-switch v-model="reduce"></b-switch>
            </div>
          </b-field>
        </b-menu-list>
          
      </b-menu>
    </b-sidebar>
  </aside>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      expandOnHover: true,
      expandWithDelay: false,
      mobile: 'reduce',
      reduce: false,
      fullheight: true,
      isActive: false,
      adminMenuItems: [
        {
          title: 'Users',
          icon: 'account',
          to: { name: 'index' },
        },
        {
          title: 'Settings',
          icon: 'cogs',
          to: { name: 'settings' },
        },
      ],
      menuItems: [
        {
          title: 'Devices',
          icon: 'server',
          to: { name: 'devices' },
        },
        {
          title: 'Change Management',
          icon: 'cog-transfer',
          to: { name: 'change_management' },
        },
        {
          title: 'Organizations',
          icon: 'office-building',
          to: { name: 'organizations' },
        },
        {
          title: 'Contacts',
          icon: 'contacts',
          to: { name: 'contacts' },
        },
      ],
    }
  },
}
</script>
