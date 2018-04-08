const firebase = require("nativescript-plugin-firebase")

export const vovFire = {
  login(value) {
    return new Promise((resolve, reject) => {
      alert('entro')
      firebase.login({
          type: firebase.LoginType.PASSWORD,
          passwordOptions: {
            email: value.email,
            password: value.password
          }
        })
        .then((result) => {
          resolve(JSON.stringify(result))
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  signup(value) {
    return new Promise((resolve, reject) => {
      firebase.createUser({
          email: value.email,
          password: value.password
        })
        .then((result) => {
          console.log(result)
          resolve(JSON.stringify(result.key))
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
  },
  getCountries() {
    return new Promise((resolve, reject) => {
      firebase.getValue('/countries')
        .then((result) => {
          resolve(result.value)
        })
        .catch(err => {
          reject(err)
        })
    })

  }
}

export default vovFire
