const { sequelize } = require('../config/db/conexionsqualize');
const { QueryTypes } = require('sequelize');

module.exports = {
  async postcategory(req, res) {
    try {
      const { id_cater, nomb_cater, desc_cater } = req.body;
      const id_client = 1;
      const user = req.user.usernam;
      const result = await sequelize.query(
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
