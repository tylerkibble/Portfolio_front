<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <routerLink to="/">
          <v-list>
            <v-list-item prepend-avatar="../assets/profile_img.jpg" title="Tyler Kibble"
              subtitle="Full Stack Developer"></v-list-item>
          </v-list>
          <v-divider></v-divider>
        </routerLink>
        <routerLink to="/login">
          <v-list-item prepend-icon="mdi-login" title="Login/Sign Up" value="login"></v-list-item>
        </routerLink>
        <v-divider></v-divider>
        <v-list density="compact" nav>
          <routerLink to="/Projects">
            <v-list-item prepend-icon="mdi-folder" title="My Projects" value="projects"></v-list-item>
          </routerLink>

          <routerLink to="/todos">
            <v-list-item prepend-icon="mdi-home" title="Todo (Full CRUD)" value="todos"></v-list-item>
          </routerLink>

          <v-list-item prepend-icon="mdi-star" title="Project Updates/Blog" value="blog"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Contact Me" value="contact"></v-list-item>

        </v-list>
      </v-navigation-drawer>
      <router-view></router-view>

    </v-layout>

  </v-card>
</template>

<script lang="ts" setup></script>
<style></style>
