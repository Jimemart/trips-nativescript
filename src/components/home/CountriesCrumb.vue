<template lang="html">
<FlexboxLayout
 v-if="elemsPicked.length"
 alignItems="flex-start"
 style="height:80px;">
  <Label textWrap="true" height="40"
  v-for="(elem, index) in elemsPicked"
  :key="index"
  :order="index"
  width="20%"
  class="crumb"
  :text="elem.country" />
</FlexboxLayout>
</template>

<script>
export default {
  props: {
    elemsPicked: { type: Array, default: () => []  }
  }
}
</script>

<style lang="scss">
  .crumb {
    background: white;
    padding: 10px;
    margin: 0px 20px;
    font-size:15px;
  }
</style>
