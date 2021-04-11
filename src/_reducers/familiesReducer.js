const initialState = {
  families: [],
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
    case 'ADD_FAMILY':
      return {
        ...state,
        families: [...state.families, action.family]
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
