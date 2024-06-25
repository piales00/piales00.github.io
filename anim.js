var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "He is sensible and so incredible", time: 24 },
  { text: "And all my single friends are jealous", time: 30 },
  { text: "He says everything I need to hear", time: 36 },
  { text: "And it's like I couldn't ask for anything better", time: 42 },
  { text: "He opens up my door and I get into his car", time: 48 },
  { text: "And he says you look beautiful tonight", time: 54 },
  { text: "And I feel perfectly fine", time: 58 },
  { text: "But I miss screaming and fighting and kissing in the rain", time: 60 },
  { text: "And it's 2 AM and I'm cursing your name", time: 62 },
  { text: "You're so in love that you act insane", time: 64 },
  { text: "And that's the way I loved you", time: 66 },
  { text: "Breaking down and coming undone", time: 70 },
  { text: "It's a roller coaster kinda rush", time: 74 },
  { text: "And I never knew I could feel that much", time: 76 },
  { text: "And that's the way I loved youv <3", time: 78 },
  // Agrega más líneas de la canción con sus tiempos correspondientes
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

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
