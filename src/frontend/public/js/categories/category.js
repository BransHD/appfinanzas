document.getElementById('btnGuardar').addEventListener('click', function () {
  postCategory(); // Llamar a la función postCategory
});

function postCategory() {
  const nomb_cater = document.getElementById('nomb_cater');
  const desc_cater = document.getElementById('desc_cater');

  axios
    .post('/ins_category', {
      id_cater: 0,
      nomb_cater: nomb_cater.value,
      desc_cater: desc_cater.value,
    })
    .then(function (result) {
      const resultado = result.data;
      mensaje(resultado[0].icono, resultado[0].mensaje, 2000);
      const btnCerrarCategory = document.getElementById('btnCerrarCategory');
      btnCerrarCategory.click();
    })
    .catch(function (error) {
      console.log(error);
      mensaje(resultado[0].icono, resultado[0].mensaje, 2000);
    });
}
