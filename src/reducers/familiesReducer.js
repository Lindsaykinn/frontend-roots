const initialState = {
  families: [],
  loading: true
}

const familiesReducer = (state=initialState, action) => {
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
    default:
      return state;
  }
}
 
export default familiesReducer;