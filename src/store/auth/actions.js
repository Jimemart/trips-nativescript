import vovFire from '../../api/vov-fire'

export const login = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    const credentials = {
      email: state.email,
      password: state.password
    }
    vovFire.login(credentials)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const signup = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    const credentials = {
      email: state.email,
      password: state.password
    }
    vovFire.signup(credentials)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
