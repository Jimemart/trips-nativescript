import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

export default {
  namespaced: true,
  state() {
    return {
      email: undefined,
      password: undefined,
      phone: undefined,
      repeat:undefined
    }
  },
  mutations,
  actions,
  getters
}
