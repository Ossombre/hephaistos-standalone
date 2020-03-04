<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col
              cols="25"
              md="4"
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="email"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="20"
              md="4"
            >
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="password"
                required
              ></v-text-field>
            </v-col>
            <v-col class="text-center" cols="12" sm="4">
              <div class="my-2">
                <v-btn color="primary"
                  @click="buttonClicked"
                >Submit</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
/* import Vue from 'vue'
import vuetify from '../plugins/vuetify'
import Exercises from './Exercises.vue' */
export default {
  name: 'Login',
  data: () => ({
    valid: false,
    // state: true,
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'Email is required' // maybe add regex for format detection
    ],
    passwordRules: [
      v => !!v || 'Password is required'
    ]
  }),
  created () {
    this.checkCurrentLogin()
  },
  updated () {
    this.checkCurrentLogin()
  },
  methods: {
    checkCurrentLogin () {
      if (this.currentUser) {
        this.$router.replace(this.$route.query.redirect || '/exercises')
      }
    },
    async buttonClicked () {
      if (!this.valid) return
      console.log('the button is clicked', this.email, this.password)
      const username = this.email
      const password = this.password
      try {
        const result = await this.axios.post('http://localhost:3000/api/v1/login', {
          username,
          password
        })
        this.user = result.data
        this.loggedIn = true
        console.log('YOU DID IT YOU MAD LAD')
        // this.state = false
        this.$router.push('/exercises')
      } catch (err) {
        console.log('err', err)
        this.errorLogin = err
      }
    }
  }
}
</script>
