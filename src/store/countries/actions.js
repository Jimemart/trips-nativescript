import vovFire from '../../api/vov-fire'

export const getCountries = ({ commit, state}) => {
  alert('get countries')
  return new Promise((resolve, reject) => {
    vovFire.getCountries()
      .then((res) => {
        commit('SET_COUNTRIES', res)
        resolve()
      })
  })
}
