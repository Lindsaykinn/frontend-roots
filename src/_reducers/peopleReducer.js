const initialState = {
  people: [],
  person: null,
  loading: true
}

export const peopleReducer = (state=initialState, action) => {
  switch(action.type){
    case 'LOADING':
      return{
        ...state,
        loading: true
      }
    case 'SET_PEOPLE':
      return {
        ...state,
        loading: false,
        people: action.payload
      }
    case 'GET_PERSON':
      return {
        ...state,
        loading: false,
        person: action.payload
      }
    case 'ADD_PERSON':
      return {
        ...state,
        people: [...state.people, action.payload],
        loading: false
      }
    case 'DELETE_PERSON_START':
      return{
        ...state
        }
    case 'DELETE_PERSON_SUCCESS':
      const updatedPeople = state.people.filter(
        (p) => p.id !== action.person.id
      )
    return {
      ...state,
      people: updatedPeople
    }
    default:
      return state;
  }
}
