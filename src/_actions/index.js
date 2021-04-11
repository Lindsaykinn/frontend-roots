export const getFamilies = () => {
  return dispatch => {
    dispatch({ type: 'LOADING'})
    fetch('http://localhost:3001/families')
    .then(resp => resp.json())
    .then(families => dispatch({ type: 'SET_FAMILIES', families}))
  }
}

export const addFamily = (family, history) => {
  return dispatch => {
    fetch('http://localhost:3001/families', {
      method: 'POST', 
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ family })
    })
    .then(resp => resp.json())
    .then(family => {
      dispatch({ type: 'ADD_FAMILY', family})
      history.push('/families')
    })

  }
}

export const deleteFamily = (family, history) => {
  return dispatch => {
    console.log('delete_family_start')
      dispatch({ type: 'DELETE_FAMILY_START'})
      fetch('http://localhost:3001/families/' + family.id, {
        method: 'DELETE', 
        headers: {
          "Accept": 'application/json',
          "Content-Type": 'application/json'
        }
      })
      .then (() => {
        dispatch({ type: 'DELETE_FAMILY_SUCCESS', family})
        history.push('/families')
      })
    }
  }

