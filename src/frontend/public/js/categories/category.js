(function getAllCategories() {
  axios.get('/api/categories').then(function (result) {
    const resultado = result.data;
    if (resultado.icono === 'success') {
      let cardscategorias = document.getElementById('cardscategorias');
      cardscategorias.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas tarjetas
      const data = resultado.data;
      data.forEach((categoria) => {
        const nuevaCardHTML = `
            <div class="col-12 col-sm-6 col-lg-4 mb-4 fade-in">
              <div class="p-3 shadow-sm rounded bg-white">
                <div class="row align-items-center">
                  <!-- Ícono circular -->
                  <div class="col-3 text-center">
                    <div class="d-flex justify-content-center align-items-center mx-auto"
                    style="background-color: #526A76; border-radius: 50%; width: 60px; height: 60px;">
                    <i class="fas fa-heart-pulse text-white" style="scale: 2.0;"></i>
                    </div>
                  </div>

                <!-- Título y subtítulo -->
                <div class="col-7">
                  <div>
                    <h5 class="card-title fw-bold">${categoria.nomb_cater}</h5>
                    <small class="text-muted">${categoria.desc_cater}</small>
                  </div>
                </div>

                <!-- Botones -->
                <div class="col-2 d-flex flex-column align-items-end justify-content-center gap-2">
                  <button class="btn btn-sm btn-info text-white">
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button class="btn btn-sm btn-info text-white">
                    <i class="fa-regular fa-eye"></i>
                  </button>
                  <button class="btn btn-sm btn-info text-white">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
        cardscategorias.insertAdjacentHTML('beforeend', nuevaCardHTML);
        // Obtener la última tarjeta agregada (la más reciente)
        let nuevasCards = cardscategorias.querySelectorAll('.fade-in');
        let nuevaCard = nuevasCards[nuevasCards.length - 1];

        // Activar animación después de un pequeño delay
        setTimeout(() => {
          nuevaCard.classList.add('show');
        }, 50);
      });
    }
    mensaje(resultado.icono, resultado.mensaje, 2000);
  });
})();
document.getElementById('btnGuardar').addEventListener('click', function () {
  const nomb_cater = document.getElementById('nomb_cater');
  const desc_cater = document.getElementById('desc_cater');

  if (nomb_cater.value === '' || desc_cater.value === '') {
    mensaje('error', 'Debe completar todos los campos', 2000);
    return;
  }
  postCategory();
});
function postCategory() {
  const nomb_cater = document.getElementById('nomb_cater');
  const ran_limit = document.getElementById('ran_limit');
  const desc_cater = document.getElementById('desc_cater');
  axios
    .post('/api/categories', {
      id_cater: 0,
      nomb_cater: nomb_cater.value,
      ran_limit: ran_limit.value,
      desc_cater: desc_cater.value,
    })
    .then(function (result) {
      const resultado = result.data;
      if (resultado[0].icono === 'success') {
        let cardscategorias = document.getElementById('cardscategorias');

        const nuevaCardHTML = `
          <div class="col-12 col-sm-6 col-lg-4 mb-4 fade-in">
            <div class="p-3 shadow-sm rounded bg-white">
              <div class="row align-items-center">
                <!-- Ícono circular -->
                <div class="col-3 text-center">
                  <div class="d-flex justify-content-center align-items-center mx-auto"
                    style="background-color: #526A76; border-radius: 50%; width: 60px; height: 60px;">
                    <i class="fas fa-heart-pulse text-white" style="scale: 2.0;"></i>
                  </div>
                </div>

                <!-- Título y subtítulo -->
                <div class="col-7">
                  <div>
                    <h5 class="card-title fw-bold">${resultado[0].nomb_cater}</h5>
                    <small class="text-muted">${resultado[0].desc_cater}</small>
                  </div>
                </div>

                <!-- Botones -->
                <div class="col-2 d-flex flex-column align-items-end justify-content-center gap-2">
                  <button class="btn btn-sm btn-info text-white">
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button class="btn btn-sm btn-info text-white">
                    <i class="fa-regular fa-eye"></i>
                  </button>
                  <button class="btn btn-sm btn-info text-white">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;

        // Inserta la tarjeta al final del contenedor
        cardscategorias.insertAdjacentHTML('beforeend', nuevaCardHTML);
        // Obtener la última tarjeta agregada (la más reciente)
        let nuevasCards = cardscategorias.querySelectorAll('.fade-in');
        let nuevaCard = nuevasCards[nuevasCards.length - 1];

        // Activar animación después de un pequeño delay
        setTimeout(() => {
          nuevaCard.classList.add('show');
        }, 50);
      }
      mensaje(resultado[0].icono, resultado[0].mensaje, 2000);
      const btnCerrarCategory = document.getElementById('btnCerrarCategory');
      btnCerrarCategory.click();
    })
    .catch(function (error) {
      console.log(error);
      mensaje(resultado[0].icono, resultado[0].mensaje, 2000);
    });
}
