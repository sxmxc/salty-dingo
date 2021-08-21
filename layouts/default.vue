<template>
  <div>
   <Navbar />

    <section class="main-content columns">
      <Sidebar />

      <div class="column is-fluid">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Sidebar from "~/components/Sidebar"
export default {
    middleware: 'auth',
components: {
 Navbar,
 Sidebar,
 },
  data () {
    return {
      expandOnHover: true,
      expandWithDelay: false,
      mobile: "reduce",
      reduce: false,
      fullheight: true,
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
<style lang="scss">
.p-1 {
  padding: 1em;
}
.sidebar-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    min-height: 100vh;
    .sidebar-layout {
        display: flex;
        flex-direction: row;
        min-height: 100%;
        min-height: 100vh;
    }
}
@media screen and (max-width: 1023px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini-mobile {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 1024px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
.is-mini-expand {
    .menu-list a {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
