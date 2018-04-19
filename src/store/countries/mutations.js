
export const SET_COUNTRIES = (state, value) => {
  state.countries = value.map(country => {
    let count =  {
      country: country.name.common,
      code: country.altSpellings[0]
    }
    return count
  })
}

export const SET_FILTERED = (state, value) => {
  state.filteredCountries = state.countries
      .filter(elem => elem.country.toLowerCase().includes(value.toLowerCase()))
      .splice(0, 5)
}

export const UNSET_FILTERED = (state) => {
  state.filteredCountries = []
}

export const SET_SELECTED = (state, value) => {
  state.selected.push(value)
}
