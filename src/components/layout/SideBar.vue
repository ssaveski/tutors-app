<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      class="sidebar"
    >
      <v-list-item>
        <v-btn
          class="menu-button"
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Tutors', icon: 'mdi-account-group-outline', link: '/tutors' },
        { title: 'My Requests', icon: 'mdi-message-flash', link: '/requests.js' }
      ],
      mini: true
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 60px;
}

.menu-button {
  flex: 1
}

.menu-button:hover {
  color: transparent;
}

.v-list-item__content {
  padding-left: 15px;
}

.v-list .v-list-item--active > .v-list-item__icon {
  color: #E20074 !important;
}

</style>
