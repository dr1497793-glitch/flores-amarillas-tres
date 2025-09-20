// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Fuiste creada con un proposito y se nota", time: 23 },
  { text: "Dios te hizo unica y eso ya es un milagro", time: 38 },
  { text: "Tu alama lleva promesas que el cielo no olvida", time: 47 },
  { text: "Lo que Dios sembro en ti nadie lo quite", time: 52 },
  { text: "Aunque no lo veas... Dios obra en ti", time: 63 },
  { text: "Hay gracia en tu proceso y belleza en tu espera", time: 71 },
  { text: "Dios no te llamo a encajar sino a brillar", time: 87 },
  { text: "Lo que Dios puso en ti el mundo necesita verlo", time: 94 },
  { text: "Eres parte de un plan eterno incluso en los dias dificiles", time: 103 },
  { text: "No necesitas validacion cuando sabes de quien vienes", time: 67 },
  { text: "No hay noche que Dios no pueda iluminar", time: 112 },
  { text: "Dios no olvida lo que prometio", time: 128 },
  { text: "En cada paso incierto va una gracia escondida", time: 133 },
  { text: "cada parte de ti refleja la intencion de un creador perfecto", time: 141 },
  { text: "No tienes que tener todo claro sino mantener la fe", time: 157 },
  { text: "Dios no se equivoca tu eres la prueba de ello", time: 164 },
  { text: "Eres amada sin condiciones ni medidas", time: 178 },
  { text: "LA VERDAD ES QUE ERES...", time: 184 },
  { text: "UNA PERSONITA MUY ESPECIAL", time: 198 },
  { text: "CON MUCHO CARIÑO DYLAN", time: 205 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);