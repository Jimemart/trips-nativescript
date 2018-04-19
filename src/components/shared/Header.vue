<template lang="html">
    <StackLayout backgroundColor="#482ea0">
      <Label textWrap="true" height="40"  :class="itemPosition">
        <FormattedString>
          <Span :text="titleText" class="title"/>
        </FormattedString>
      </Label>
      <Label textWrap="true" height="30"  class="centered" v-if="show">
        <FormattedString>
          <slot name="subtitle"></slot>
        </FormattedString>
      </Label>
      <vo-countries-crumb
      v-if="searchBar"
      :elemsPicked="selectedElems">
      </vo-countries-crumb>
      <vo-search-bar
      v-if="searchBar"
      :foundCountries="found"
      @input="input($event)"
      @selected="selected($event)"
      ></vo-search-bar>
    </StackLayout>
</template>

<script>
import SearchBar from './SearchBar.vue'
import CountriesCrumb from '../home/CountriesCrumb'
export default {
  props: {
    show: {type: Boolean, default: false},
    found: { type: Array, default: () => [] },
    itemPosition: { type: String, default: 'left' },
    titleText: { type: String, default: ''},
    searchBar: { type:Boolean, default: false},
    selectedElems: { type: Array, default: () => [] }
  },
  components: {
    voSearchBar: SearchBar,
    voCountriesCrumb: CountriesCrumb
  },
  methods: {
    selected (value) {
      this.$emit('selected', value)
    },
    input (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss">
.centered {
  padding-top:20px;
  text-align: center;
  color: white;
}
.title{
  font-size: 25px;
  font-weight: bold;
}
.subtitle {
  font-size: 15px;
}
.left {
  // padding-top:20px;
  color: white;
}
</style>
