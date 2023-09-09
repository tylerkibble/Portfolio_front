<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <!-- <v-card-title>
          <span class="headline">Register</span>
        </v-card-title> -->
        <v-card-text style="padding: 0%;">
          <v-container grid-list-md>
            <v-layout wrap>
              <v-col xs12>
                <form class="text-center border-primary p-5"
                   @submit.prevent="registerUser">
                  <input type="text" id="name" class="form-control mb-5" placeholder="Name" v-model="register.name"
                    required />
                  <input type="email" id="email" class="form-control mb-5" placeholder="Email" v-model="register.email"
                    required />
                  <input type="password" id="password" class="form-control mb-5" placeholder="Password" v-model="register.password" required />
                  <p>
                    Already have an account?
                    <router-link to="/login">
                      Sign In
                    </router-link>
                  </p>
                  <button class="btn btn-primary btn-block w-75 my-4" type="submit">
                    Register
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
      register: {
        name: "",
        email: "",
        password: ""
      },
      dialog: true
    };
  },
  methods: {
    async registerUser() {
      console.log(this.register)
      const response = await axios.post('http://localhost:8080/user/register', this.register);
      
      
    },
  },
 beforeDestroy() {
    this.dialog = true;
  },
  watch: {
    dialog(val) {
      if (!val) {
        this.register = {
          name: "",
          email: "",
          password: ""
        };
      }
    }
  },
  name: "Register"
};
</script>