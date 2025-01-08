// Datos para el contenedor de botones
const botones  = [
  "C", "AC", "OFF", "ON",
  "7", "8", "9", "+",
  "4", "5", "6", "-",
  "1", "2", "3", "*",
  "0", ".", "=", "/"
]

// agregar un regex de ser necesario
const calculo = (op) => {
  return (eval(op)).toFixed(2)
}


// Manejamos las operaciones realizadas por los botones
let operacion = '0'
let bandera = true

const acciones = ({ target }) => {
  const pantalla = document.querySelector('.valor-pantalla')

  const { textContent } = target

  switch (textContent) {
    case '=':
      operacion = calculo(operacion)
      break
    case 'C':
      if (operacion.length > 1) operacion = operacion.slice(0, -1)
      break 
    case 'AC':
      operacion = '0'
      break
    case 'OF':
      bandera = false
      operacion = ''
      break
    case 'ON':
      bandera = true
      operacion = '0'
      break
    default:
      if (isNaN(Number(textContent)) && isNaN(Number(operacion[operacion.length - 1]))) break
      const nuevaOperacion = operacion + textContent
      if ( operacion === '0' && textContent !== '.') {
        operacion = textContent
      } else {
        operacion = nuevaOperacion
      }
      break
  }

  if (bandera) {
    pantalla.textContent = operacion
  } else {
    pantalla.textContent = ''
  }
}

// Obtenemos el contenedor de los botones
const contenedorBotones = document.querySelector('.contenedor')

// Introducimos el arreglo al contenedor de botones
botones.forEach( (value) => {
  const boton = document.createElement('button')
  boton.textContent = value
  boton.classList = `botones ${value}`
  boton.addEventListener('click', acciones)
  contenedorBotones.appendChild(boton)
})
