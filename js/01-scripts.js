const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

btnFlotante.addEventListener("click", mostrarOcultarFooter);

function mostrarOcultarFooter() {
  // Metodo contains() para verificar si un elemento tiene o no una clase
  if (footer.classList.contains("activo")) {
    footer.classList.remove("activo");
    this.classList.remove("activo");
  } else {
    footer.classList.add("activo");
    this.classList.add("activo");
  }
}
