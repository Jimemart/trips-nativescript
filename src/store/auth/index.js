import * as mutations from './mutations'

export default {
  namespaced: true,
  state() {
    return {
      email: undefined,
      password: undefined,
      phone: undefined,
      repeat:undefined,
    }
  },
  mutations
}
