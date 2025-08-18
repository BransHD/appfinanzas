const Category = require('../repository/category.repository');

const getAllCategoriesService = async () => {
  try {
    const result = await Category.findAll({
      attributes: ['id_cater', 'nomb_cater', 'desc_cater'],
    });
    return {
      icono: 'success',
      mensaje: 'Registros correctos',
      data: result,
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

const getCategoriesByIdService = async (id_cater) => {
  try {
    const result = await Category.findById(id_cater)
    return {
      icono: 'success',
      mensaje: 'Registros correctos',
      data: result,
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

const createCategoriesService = async (data) => {
  if (!data.name) {
    throw new Error('El nombre es obligatorio');
  }
  return await Category.create(data);
};
module.exports = {
  getAllCategoriesService,
  getCategoriesByIdService,
  createCategoriesService,
};
