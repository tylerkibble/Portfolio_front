<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-text style="padding: 0%;">
          <v-container grid-list-md>
            <v-layout wrap>
              <v-col xs12>
                <form class="text-center border-primary p-5" @submit.prevent="loginUser">
                  <input type="email" id="email" class="form-control mb-5" placeholder="Email" v-model="login.email"
                    required />
                  <input type="password" id="password" class="form-control mb-5" placeholder="Password"
                    v-model="login.password" required />
                  <p>
                    Don't have an account?
                    <router-link to="/register">
                      Register
                    </router-link>
                  </p>
                  <button class="btn btn-primary btn-block w-75 my-4" type="submit">
                    Login
                  </button>
                </form>
              </v-col>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false" to="/">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script lang="ts">
import axios from 'axios';
export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      },
      dialog: true,
      isLoggedIn: false 
    };
  },
  methods: {
    async loginUser() {
      console.log(this.login)
      const response = await axios.post('http://localhost:8080/user/login', this.login);
      if (response.data.success) { // Assuming the API returns a success field
        this.isLoggedIn = true;
      }
    },
  },
  beforeDestroy() {
    this.dialog = true;
  },
  watch: {
    dialog(val) {
      if (!val) {
        this.login = {
          email: "",
          password: ""
        };
      }
    }
  },
  name: "Login"
};
</script>
