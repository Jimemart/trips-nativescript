<template lang="html">
  <StackLayout>
    <TextField hint="Country" @textChange="input($event)"/>
    <ListView for="country in foundCountries">
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
  methods: {
    input(event) {
      this.$emit('input', event.value)
    }
  }
}
</script>

<style lang="css">
</style>
