<template>
  <aside class="column is-2 section">
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
          <b-menu-item icon="view-dashboard" label="Dasboard"></b-menu-item>
          <b-menu-item icon="database">
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
          <b-menu-item icon="information" label="Info"></b-menu-item>
          <b-menu-item icon="help-circle" label="Help"></b-menu-item>
        </b-menu-list>
        <b-menu-list label="Admin">
          <b-menu-item icon="cog">
            <template #label="props">
              Administrator
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
          <b-menu-item
            v-for="(item, key) of items"
            :key="key"
            :icon="item.icon"
            :label="item.title"
            tag="nuxt-link"
            :to="item.to"
            exact-active-class="is-active"
          >
          </b-menu-item>
        </b-menu-list>
        <b-menu-list label="--">
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
              <b-switch v-model="reduce">Hide</b-switch>
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
      reduce: true,
      fullheight: false,
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
