const Category = require('../models/category.model');

class CategoryRepository {
  async findAll() {
    return await Category.findAll();
  }

  async findById(id) {
    return await Category.findByPk(id);
  }

  async create(categoryData) {
    return await Category.create(categoryData); 
  }

  async update(id, categoryData) {
    const category = await Category.findByPk(id);
    if (!category) return null;

    return await category.update(categoryData);
  }

  async delete(id) {
    const category = await Category.findByPk(id);
    if (!category) return null;

    await category.destroy();
    return category;
  }
}

module.exports = new CategoryRepository();
