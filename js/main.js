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
  
  const btnCopiar = document.querySelector('.btn-copiar');
  if (btnCopiar) {
      btnCopiar.addEventListener('click', function(e) {
          e.preventDefault();
          const correo = this.previousElementSibling.textContent.trim();
          navigator.clipboard.writeText(correo);
          this.innerHTML = '<i class="fas fa-check"></i>';
          setTimeout(() => {
              this.innerHTML = '<i class="fas fa-copy"></i>';
          }, 1200);
      });
  }
});