export const getFamilies = () => {
  return dispatch => {
    dispatch({ type: 'LOADING'})
    fetch('http://localhost:3001/families')
    .then(resp => resp.json())
    .then(families => dispatch({ type: 'SET_FAMILIES', families}))
  }
}