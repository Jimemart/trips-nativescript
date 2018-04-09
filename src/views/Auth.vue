<template lang="html">
  <Page class="page" id="page" actionBarHidden="true">
    <StackLayout>
      <vo-header :show="true">
        <Span text="Welcome!" slot="title" class="title"/>
        <Span text="Please fill your personal info" slot="subtitle" class="subtitle"/>
      </vo-header>
      <GridLayout columns="10,*,10">
        <TabView
        row="0" col="1"
        :selectedIndex="selectedIndex"
        tabBackgroundColor="#573fa9"
        selectedTabTextColor="white">
          <TabViewItem title="Sign in">
            <vo-sign-in></vo-sign-in>
          </TabViewItem>
          <TabViewItem title="Sign up">
            <vo-sign-up></vo-sign-up>
          </TabViewItem>
        </TabView>
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<script>
import { Header, SignIn, SignUp } from '../components'

export default {
  components: {
    voHeader: Header,
    voSignIn: SignIn,
    voSignUp: SignUp
  }
}
</script>
<style lang="css">
  #page {
    background: #482ea0;
  }
</style>
