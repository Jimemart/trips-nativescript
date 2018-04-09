<template>
  <Page class="page" id="page" actionBarHidden="true" Page xmlns:au="nativescript-ui-autocomplete">
    <vo-header :foundCountries="foundCountries" @input="filterCountries($event)">
      <Span text="Where do you want to travel from?" slot="titleLeft" class="title"/>
    </vo-header>
  </Page>
</template>

<script>
import { Header } from '../components'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      loading: true
    }
  },
  methods: {
    ...mapActions('countries', ['getCountries', 'filterCountries'])
  },
  components: {
    voHeader: Header
  },
  computed: {
    foundCountries: {
      get () { return this.$store.state.countries.filteredCountries }
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
