<template>
  <v-app>
    <v-navigation-drawer
        app
        v-model="drawerVisible"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
          dense
          nav
      >
        <v-list-item
            :to="{ name: 'Posts' }"
            exact
            link
        >
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Посты</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
    >
      <v-app-bar-nav-icon @click="drawerVisible = !drawerVisible"></v-app-bar-nav-icon>

      <v-toolbar-title>Посты</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer class="text--primary" app>
      footer
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawerVisible: false
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  display: flex;
  flex-direction: column;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
