
export const SET_COUNTRIES = (state, value) => {
  state.countries = value.map(country => {
    let count =  {
      country: country.name.common,
      code: country.altSpellings[0]
    }
    return count
  })
}
