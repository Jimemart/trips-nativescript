<template lang="html">
  <GridLayout rows="150,220">
    <StackLayout style="background-color:#573fa9; padding:0 100px;" row="0">
      <Label text="Email*" class="margin-label"/>
      <TextField hint="Enter your email" class="myinput" v-model="email"/>
      <Label text="Phone*" class="margin-label"/>
      <TextField hint="Enter your phone number" class="myinput" v-model="phone"/>
    </StackLayout>
    <StackLayout style="background-color:#edc4ce; padding:0 80px;" row="1">
      <Label text="Password*"/>
      <TextField hint="Enter your password" class="myinput add-margin" v-model="password" secure="true"/>
      <Label text="Repeat password*" class="margin-label"/>
      <TextField hint="Repeat your password" class="myinput add-margin" v-model="repeat" secure="true"/>
      <Button text="Sign up" style="background-color:#ed49e4; color:white; margin-top:50px;" @tap="createAccount"/>
    </StackLayout>
  </GridLayout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    email: {
      get () {
          return this.$store.state.auth.email
      },
      set(value) {
          this.$store.commit('auth/SET_EMAIL', value)
      }
    },
    password: {
      get () {
        return this.$store.state.auth.password
      },
      set(value) {
        this.$store.commit('auth/SET_PASS', value)
      }
    },
    repeat: {
      get () {
          return this.$store.state.auth.repeat
      },
      set(value) {
          this.$store.commit('auth/SET_REPEAT', value)
      }
    },
    phone: {
      get () {
          return this.$store.state.auth.phone
      },
      set(value) {
          this.$store.commit('auth/SET_PHONE', value)
      }
    },
    ...mapGetters('auth', ['equalPass'])
  },
  methods: {
    ...mapActions('auth', ['signup']),
    createAccount () {
      if (this.equalPass){
        this.signup()
          .then(() => {
            this.$router.push('/home')
          })
          .catch(err => {
            alert('An error ocurred')
          })
      }
    }
  }
}
</script>

<style lang="css">
  .margin-label{
    margin-top:40px;
  }
  .add-margin{
    margin: auto 10px;
  }
</style>
