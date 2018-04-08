import * as mutations from './mutations'
import * as actions from './actions'

export default {
  namespaced: true,
  state() {
    return {
      countries: []
    }
  },
  mutations,
  actions
}
