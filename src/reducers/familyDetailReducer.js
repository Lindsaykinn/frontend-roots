const initialState = {
  family: null
}

export const familyDetailReducer = (state=initialState, action) => {
  switch(action.type){    
      case 'GET_FAMILY':
        return {
          ...state,
          family: action.family
        }
        default:
      return state;
  }
}
