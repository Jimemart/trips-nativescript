<template>
  <Page class="page" id="page" actionBarHidden="true" Page xmlns:au="nativescript-ui-autocomplete">
    <vo-header
    :searchBar="searchBar"
    :selectedElems="selectedCountries"
    :found="foundCountries"
    @input="filterCountries($event)"
    @selected="pickOneCountry($event)"
    :titleText="'Where do you wan to travel to?'">
    </vo-header>
  </Page>
</template>

<script>
import { Header } from '../components'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      loading: true,
      title: 'Where do you want to travel from?',
      searchBar: true
    }
  },
  methods: {
    ...mapActions('countries', ['getCountries', 'filterCountries']),
    pickOneCountry(val){
      this.$store.commit('countries/SET_SELECTED', val)
      this.$store.commit('countries/UNSET_FILTERED')
      this.$store.commit('useful/SET_INPUT', '')
    }
  },
  components: {
    voHeader: Header
  },
  computed: {
    foundCountries: {
      get () { return this.$store.state.countries.filteredCountries }
    },
    selectedCountries: {
      get () { return this.$store.state.countries.selected }
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
