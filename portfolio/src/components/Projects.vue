<template>

</template>

<script lang="ts" setup>
  //
  var projects;
    async function getProjects() {
        const response = await fetch('https://api.github.com/users/tylerkibble/repos');
        projects = await response.json();
        console.log(projects);
    }
</script>

<style>
</style>