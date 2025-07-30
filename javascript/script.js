function AbrirPj1() {
  const projeto1 = document.getElementById("projeto1");
  const fundo = document.getElementById("fundo");

  // Duração da transição reduzida para 0.5 segundo (500ms)
  projeto1.style.transition = "opacity 0.5s";
  fundo.style.transition = "opacity 0.5s";

  projeto1.style.display = "block";
  fundo.style.display = "block";

  setTimeout(() => {
    projeto1.style.opacity = "1";
    fundo.style.opacity = "1";
  }, 10);
}

function ClosePj1() {
  const projeto1 = document.getElementById("projeto1");
  const fundo = document.getElementById("fundo");

  projeto1.style.opacity = "0";
  fundo.style.opacity = "0";

  // Espera 0.5 segundo (500ms) para esconder
  setTimeout(() => {
    projeto1.style.display = "none";
    fundo.style.display = "none";
  }, 500);
}