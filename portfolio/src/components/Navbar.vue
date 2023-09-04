<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item
            prepend-avatar="https://media.licdn.com/dms/image/D5635AQHOrDpZiX3A8w/profile-framedphoto-shrink_200_200/0/1688505389106?e=1694214000&v=beta&t=FbTlOprmw63kZCP9AWH0f-eb06G0z9dBZ2GW1GSfcaY"
            title="Tyler Kibble" subtitle="Full Stack Developer"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Projects" value="projects" @click="getRepos()"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Project Updates/Blog" value="blog" @click="changePage('blog')"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Contact Me" value="contact" @click="changePage('contact')"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
    <component :is="activePage" />
    <Projects :repos="repos" :showCards="showCards" />

  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Projects from './Projects.vue';
import Blog from './Blog.vue';
import Contact from './Contact.vue';

const showCards = ref(false);
const repos = ref([]);

const activePage = ref('projects');

function changePage(page: string) {
  activePage.value = page;
}
async function getRepos() {
  const response = await fetch('https://api.github.com/users/tylerkibble/repos');
  const json = await response.json();
  repos.value = json;
  showCards.value = true;
  console.log(json)
}
</script>

<style></style>
