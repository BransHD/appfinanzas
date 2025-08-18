const { getAllCategoriesService, getCategoriesByIdService, createCategoriesService } = require('../services/category.service');

module.exports = {
  async getAllCategories(req, res) {
    try {
      const result = await getAllCategoriesService();
      res.status(200).json(result);
    } catch (error) {
      console.error('Error en getAllCategories:', error);
      res.status(500).json({
        icono: 'error',
        mensaje: 'Error al obtener las categorías',
        data: [],
      });
    }
  },
  async getCategoryById(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          icono: 'error',
          mensaje: 'El ID es obligatorio',
          data: [],
        });
      }

      const result = await getCategoriesByIdService(id);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error en getCategoryById:', error);
      res.status(500).json({
        icono: 'error',
        mensaje: 'Error al obtener la categoría',
        data: [],
      });
    }
  },
  async createCategory(req, res) {
    try {
      const { nomb_cater, desc_cater, ran_limit } = req.body;
      
      
      const result = await createCategoriesService({
        nomb_cater,
        desc_cater,
        ran_limit,
      });
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al crear la categoría');
    }
  },
  async updateCategoryById(req, res) {
    try {
      const { id_cater, nomb_cater, desc_cater } = req.body;
      const id_client = 1;
      const user = req.user.usernam;
      const result = await connectionDB.query(
        `EXEC pa_InsCategory 
          :id_cater,
          :id_client,
          :nomb_cater, 
          :desc_cater,
          :ran_limit,
          :user`,
        {
          replacements: {
            id_cater: id_cater,
            id_client: id_client,
            nomb_cater: nomb_cater,
            desc_cater: desc_cater,
            ran_limit: 100,
            user: user,
          },
          type: QueryTypes.SELECT,
        }
      );
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al crear la categoría');
    }
  },
  async deleteCategoryById(req, res) {
    try {
      const { id_cater, nomb_cater, desc_cater } = req.body;
      const id_client = 1;
      const user = req.user.usernam;
      const result = await connectionDB.query(
        `EXEC pa_InsCategory 
          :id_cater,
          :id_client,
          :nomb_cater, 
          :desc_cater,
          :ran_limit,
          :user`,
        {
          replacements: {
            id_cater: id_cater,
            id_client: id_client,
            nomb_cater: nomb_cater,
            desc_cater: desc_cater,
            ran_limit: 100,
            user: user,
          },
          type: QueryTypes.SELECT,
        }
      );
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al crear la categoría');
    }
  },
};
