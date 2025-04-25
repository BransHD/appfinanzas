function mensaje(icono, titulo, duracion) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: duracion,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  Toast.fire({
    icon: icono,
    title: titulo,
  });
}

function mensajecentral(icono, titulo) {
  Swal.fire({
    icon: icono,
    title: titulo,
    showConfirmButton: true,
    timer: null,
    timerProgressBar: false,
    didOpen: (toast) => {
      const modal = Swal.getPopup();
      if (modal) {
        modal.removeAttribute('tabindex');
      }

      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
    confirmButtonText: 'OK',
  });
}

function mensajecentral2(icono, titulo, mensaje) {
  Swal.fire({
    icon: icono,
    title: titulo,
    text: mensaje,
    showConfirmButton: true,
    timer: null,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
    confirmButtonText: 'OK',
  });
}

function MensajeSIyNO(icono, titulo, mensaje, callback) {
  Swal.fire({
    icon: icono,
    title: titulo,
    text: mensaje,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí',
    cancelButtonText: 'No',
  }).then((result) => {
    if (result.isConfirmed) {
      // Acción cuando el usuario hace clic en "Sí"
      callback(true);
    } else {
      // Acción cuando el usuario hace clic en "No"
      callback(false);
    }
  });
}

function fechahoy(idfecha) {
  var date = new Date();

  var year = date.getFullYear();
  var month = String(date.getMonth() + 1).padStart(2, '0');
  var day = String(date.getDate()).padStart(2, '0');

  var fechaActual = `${year}-${month}-${day}`;
  document.getElementById(idfecha).setAttribute('max', fechaActual);
  document.getElementById(idfecha).value = fechaActual;
}
function fechahoy2(idfecha) {
  //permite poner fechas siguientes y futuras, y tambien pasados
  var date = new Date();

  var year = date.getFullYear();
  var month = String(date.getMonth() + 1).padStart(2, '0');
  var day = String(date.getDate()).padStart(2, '0');

  var fechaActual = `${year}-${month}-${day}`;
  document.getElementById(idfecha).value = fechaActual;
}
