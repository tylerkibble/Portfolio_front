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
                    <v-list-item prepend-icon="mdi-folder" title="My Projects" value="projects"></v-list-item>

                    <v-list-item prepend-icon="mdi-star" title="Project Updates/Blog" value="blog"></v-list-item>
                    <v-list-item prepend-icon="mdi-account-multiple" title="Contact Me" value="contact"></v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-layout>
    </v-card>
    <todo />
    <Projects />
</template>
<script lang="ts" setup>
    //
import todo from "./todo.vue";
import Projects from "./Projects.vue";
</script>
<style></style>