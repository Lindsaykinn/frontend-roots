const initialState = {
  families: [],
  family: null,
  loading: true
}

export const familiesReducer = (state=initialState, action) => {
  switch(action.type){
    case 'LOADING':
      return{
        ...state,
        loading: true
      }
    case 'SET_FAMILIES':
      return {
        ...state,
        loading: false,
        families: action.families
      }
    case 'GET_FAMILY':
      return {
        ...state,
        loading: false,
        family: action.payload
      }
    case 'ADD_FAMILY':
      return {
        ...state,
        families: [...state.families, action.payload],
        loading: false
      }
    case 'DELETE_FAMILY_START':
      return{
        ...state
        }
    case 'DELETE_FAMILY_SUCCESS':
      console.log(action)
      const updatedFamilies = state.families.filter(
        (f) => f.id !== action.family.id
      )
    return {
      ...state,
      families: updatedFamilies
    }
    default:
      return state;
  }
}
