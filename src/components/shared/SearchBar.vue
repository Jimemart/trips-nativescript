<template lang="html">
  <StackLayout>
    <TextField @textChange="input($event)" hint="Country" v-model="inputText"/>
    <ListView for="country in foundCountries" @itemTap="selected($event)">
      <v-template>
        <Label :text="country.country" />
      </v-template>
    </ListView>
  </StackLayout>
</template>

<script>
export default {
  props: {
    foundCountries: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    inputText: {
      get () { return this.$store.state.useful.input },
      set(val) { this.$store.commit('useful/SET_INPUT', val)}
    }
  },
  methods: {
    selected(elem) {
      this.$emit('selected',elem.item)
    },
    input(elem) {
      this.$emit('input', elem.value)
    }
  }
}
</script>

<style lang="css">
</style>
