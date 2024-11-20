let sliders = [];
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); // Lienzo que ocupa toda la ventana

  // Calcular la cantidad de sliders según la altura disponible
  let numSliders = floor(height / 20); // 20 píxeles por slider

  for (let i = 0; i < numSliders; i++) {
    let slider = createSlider(0, 255, 0);
    slider.position(0, 20 * i); // Espaciado vertical dinámico
    slider.style("width", "100%"); // Ancho completo
    sliders.push(slider);
  }
}

function draw() {
  let offset = 0; // Desfase para la animación

  for (let i = 0; i < sliders.length; i++) {
    let value = map(sin(angle + offset), -1, 1, 0, 255);
    sliders[i].value(value); // Actualizar valor del slider

    offset += 0.1; // Incrementar desfase
  }

  angle += 0.02; // Incrementar ángulo para animación continua
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Ajustar el lienzo al redimensionar
  sliders.forEach((slider) => slider.remove()); // Eliminar sliders existentes
  sliders = []; // Reiniciar array de sliders
  setup(); // Volver a ejecutar la configuración
}
