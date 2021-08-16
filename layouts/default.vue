<template>
  <div>
   <Navbar />

    <section class="main-content columns">
      <aside class="column is-2 section">
          <b-sidebar
                position="static"
                :fullheight="fullheight"
                :mobile="mobile"
                :expand-on-hover="expandOnHover"
                :reduce="reduce"
                :delay="expandWithDelay ? 500 : null"
                type="is-light"
                open
            >
            <b-menu v-if="reduce" class="is-custom-mobile">
              <b-menu-list label="Navigation">
                <b-icon class="is-pulled-right" :icon="reduce ? 'menu-left' : 'menu-right'"></b-icon>
                <b-menu-item v-for="(item, key) of items" :key="key" :icon="item.icon" tag=nuxt-link :to="item.to" exact-active-class="is-active">
                </b-menu-item>
              </b-menu-list>
              <b-menu-list label="Actions">
                  <b-menu-item icon="logout" label="Logout"></b-menu-item>
              </b-menu-list>
            </b-menu>
            <b-menu v-else class="is-custom-mobile">
              <b-menu-list label="Navigation">
                <b-menu-item v-for="(item, key) of items" :key="key" :icon="item.icon" :label="item.title" tag=nuxt-link :to="item.to" exact-active-class="is-active">
                </b-menu-item>
              </b-menu-list>
              <b-menu-list label="Actions">
                  <b-menu-item icon="logout" label="Logout"></b-menu-item>
              </b-menu-list>
            </b-menu>
          </b-sidebar>
      </aside>

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
    // min-height: 100vh;
    .sidebar-layout {
        display: flex;
        flex-direction: row;
        min-height: 100%;
        // min-height: 100vh;
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
