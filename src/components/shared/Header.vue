<template lang="html">
    <StackLayout backgroundColor="#482ea0" class="centered">
      <Label slot="center" textWrap="true" height="40">
        <FormattedString>
          <slot name="title"></slot>
        </FormattedString>
      </Label>
      <Label slot="center" textWrap="true" height="30">
        <FormattedString>
          <slot name="subtitle"></slot>
        </FormattedString>
      </Label>
      <slot name="center"></slot>
    </StackLayout>
</template>

<script>
export default {
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
</style>
