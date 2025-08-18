const Category = require('../models/Category');

const getAllCategoriesService = async () => {
  try {
    const categories = await Category.findAll({
      where: { state: 'S' },
      order: [['nomb_cater', 'ASC']],
    });

    return {
      icono: 'success',
      mensaje: 'Registros correctos',
      data: categories,
    };
  } catch (error) {
    console.error('Error en getAllCategoriesService:', error);
    return {
      icono: 'error',
      mensaje: 'Error al obtener las categorías',
      data: [],
    };
  }
};
module.exports = {
  getAllCategoriesService,
};
