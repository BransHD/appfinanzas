const express = require('express');
const router = express.Router();
const controllerRE = require('../controllers/controllerrender');
const controllerCategory = require('../controllers/category.controller');
router.get('/category', controllerRE.rendercategory);
router.get('/api/categories', controllerCategory.getAllCategories);
router.get('/api/categories/:id', controllerCategory.getCategoryById);
router.post('/api/categories', controllerCategory.createCategory);
router.put('/api/categories/:id', controllerCategory.updateCategoryById);
router.delete('/api/categories/:id', controllerCategory.deleteCategoryById);

module.exports = router;
