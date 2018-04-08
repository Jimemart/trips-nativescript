<template>
<StackLayout v-show="!loading">
  <Label :text="country.country" v-for="country in countries" :key="country.country"/>
</StackLayout>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      loading: true
    }
  },
  methods: {
    ...mapActions('countries', ['getCountries'])
  },
  computed: {
    countries: {
      get () {
        console.log(this.$store.state.countries.countries[0])
        return this.$store.state.countries.countries}
    }
  },
  mounted () {
    this.getCountries()
      .then(() => {
        this.loading = false
      })
  }
}
</script>

<style lang="css">
</style>
