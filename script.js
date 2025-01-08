// Datos para el contenedor de botones
const botones  = [
  "C", "AC", "OF", "ON",
  "7", "8", "9", "+",
  "4", "5", "6", "-",
  "1", "2", "3", "*",
  "0", ".", "=", "/"
]

const combinaciones = () => {
  // Hace calculo y actualiza la pantalla
}

// Obtenemos el contenedor de los botones
const contenedorBotones = document.querySelector('.contenedor')

// Introducimos el arreglo al contenedor de botones
botones.forEach( (value, id, _) => {
  const boton = document.createElement('button')
  boton.textContent = value
  boton.classList = `botones ${id}`
  boton.addEventListener('click', combinaciones)
  contenedorBotones.appendChild(boton)
})
