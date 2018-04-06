<template lang="html">
  <GridLayout rows="150,220">
    <StackLayout style="background-color:#573fa9; padding:0 100px;" row="0">
      <Label text="Email*" class="margin-label"/>
      <TextField hint="Enter your email" class="myinput" v-model="email" v-email/>
      <Label text="Phone*" class="margin-label"/>
      <TextField hint="Enter your phone number" class="myinput" v-model="phone"/>
    </StackLayout>
    <StackLayout style="background-color:#edc4ce; padding:0 80px;" row="1">
      <Label text="Password*"/>
      <TextField hint="Enter your password" class="myinput add-margin" v-model="password"/>
      <Label text="Repeat password*" class="margin-label"/>
      <TextField hint="Repeat your password" class="myinput add-margin" v-model="repeat"/>
      <Button text="Sign up" style="background-color:#ed49e4; color:white; margin-top:50px;"/>
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
