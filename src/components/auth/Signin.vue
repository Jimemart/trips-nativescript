<template lang="html">
  <GridLayout rows="150,220">
    <StackLayout style="background-color:#573fa9; padding:0 100px;" row="0">
      <Label text="Email*"  class="margin-label" />
      <TextField hint="Enter your email" v-model="email" class="myinput" v-email="email"/>
      <Label text="Password*" class="margin-label"/>
      <TextField hint="Enter your password"  v-model="password" class="myinput"/>
    </StackLayout>
    <StackLayout style="background-color:#edc4ce; padding:0 80px;" row="1">
      <Button text="Sign in" style="background-color:#ed49e4; color:white; margin-top:50px;" @tap="show"/>
    </StackLayout>
  </GridLayout>
</template>

<script>
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
    }
  },
  methods:{
    show(){
      alert(this.$store.state.auth.email)
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
