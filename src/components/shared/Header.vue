<template lang="html">
    <StackLayout backgroundColor="#482ea0">
      <Label textWrap="true" height="40"  class="centered" v-if="show">
        <FormattedString>
          <slot name="title"></slot>
        </FormattedString>
      </Label>
      <Label textWrap="true" height="30"  class="centered" v-if="show">
        <FormattedString>
          <slot name="subtitle"></slot>
        </FormattedString>
      </Label>
      <Label textWrap="true" class="left">
        <FormattedString>
          <slot name="titleLeft"></slot>
        </FormattedString>
      </Label>
        <vo-search-bar
        :foundCountries="foundCountries"
        @input="input($event)"
        ></vo-search-bar>
    </StackLayout>
</template>

<script>
import SearchBar from './SearchBar.vue'
export default {
  props: {
    show: {type: Boolean, default: false},
    foundCountries: { type: Array, default: () => [] }
  },
  components: {
    voSearchBar: SearchBar
  },
  methods: {
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
