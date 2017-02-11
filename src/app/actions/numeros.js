export function incrementar() {
  return {type: 'INCREMENTA'};
}

export function decrementar() {
  return {type: 'DECREMENTA'};
}

export function addCadena(cadena) {
  return {
  	type: 'ADD_CAD',
  	cadena: cadena
  };
}