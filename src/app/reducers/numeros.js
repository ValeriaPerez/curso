
const initialState = {
  num: 1,
  cadena: ''
};

export default function numeros(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENTA':
      return {
        ...state,
        num: state.num + 1
      };
    case 'DECREMENTA':
      return {
        ...state,
        num: state.num - 1
      };
    case 'ADD_CAD':
      return {
        ...state,
        cadena: action.cadena
      };   
    default:
      return state;
  }
}
