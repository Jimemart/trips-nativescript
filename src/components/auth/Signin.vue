<template lang="html">
  <GridLayout rows="150,220">
    <StackLayout style="background-color:#573fa9; padding:0 100px;" row="0">
      <Label text="Email*"  class="margin-label" />
      <TextField hint="Enter your email" v-model="email" class="myinput"/>
      <Label text="Password*" class="margin-label"/>
      <TextField hint="Enter your password"  v-model="password" class="myinput" secure="true"/>
    </StackLayout>
    <StackLayout style="background-color:#edc4ce; padding:0 80px;" row="1">
      <Button text="Sign in" style="background-color:#ed49e4; color:white; margin-top:50px;" @tap="enter"/>
    </StackLayout>
  </GridLayout>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    email: {
      get () { return this.$store.state.auth.email },
      set(value) { this.$store.commit('auth/SET_EMAIL', value) }
    },
    password: {
      get () { return this.$store.state.auth.password },
      set(value) { this.$store.commit('auth/SET_PASS', value) }
    }
  },
  methods:{
    ...mapActions('auth', ['login']),
    enter () {
      this.login()
        .then(() => {
          this.$router.push('/home')
        })
        .catch(err => {
          alert('An error ocurred')
        })
    }
  }
}
</script>

<style lang="css">
  .myinput{
    height: 100px;
    padding: 0 20px;
    background-color: white;
  }
</style>
