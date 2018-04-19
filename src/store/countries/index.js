import * as mutations from './mutations'
import * as actions from './actions'

export default {
  namespaced: true,
  state() {
    return {
      countries: [],
      filteredCountries: [],
      selected: []
    }
  },
  mutations,
  actions
}
