document.getElementById("about").addEventListener("click", function () {
  document.querySelector(".sobremi").classList.remove("oculto");
  document.querySelector(".proyectos").classList.add("oculto");
  document.querySelector(".contacto").classList.add("oculto");
});
document.getElementById("proyecto").addEventListener("click", function () {
  document.querySelector(".sobremi").classList.add("oculto");
  document.querySelector(".proyectos").classList.remove("oculto");
  document.querySelector(".contacto").classList.add("oculto");
});
document.getElementById("contacto").addEventListener("click", function () {
  document.querySelector(".sobremi").classList.add("oculto");
  document.querySelector(".proyectos").classList.add("oculto");
  document.querySelector(".contacto").classList.remove("oculto");
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".sobremi").classList.remove("oculto");
  document.querySelector(".proyectos").classList.add("oculto");
  document.querySelector(".contacto").classList.add("oculto");
});