<!-- Cards.vue -->
<template>
  <v-container v-if="showCards">
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="item in repos"
        :key="item.id"
      >
        <v-card class="pa-3" outlined>
          <v-img
            :src="item.owner.avatar_url"
            height="200px"
          ></v-img>
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-subtitle>{{ item.full_name }}</v-card-subtitle>
          <v-card-text>{{ item.description }}</v-card-text>
          <v-card-actions>
            <v-btn
              color="blue"
              text
              :href="item.html_url"
              target="_blank"
            >
              Go to repository
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
// import { defineProps } from 'vue';

const props = defineProps({
  repos: Array,
  showCards: Boolean,
});
</script>

<style></style>
