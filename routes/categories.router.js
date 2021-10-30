const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get("/", (req, res) =>{
  const categories = [];
  const {size} = req.query;
  const limit = size || 10;
  for(let i = 0; i < limit; i++){
    categories.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(categories);
});

router.get('/filter', (req, res) =>{
  const {id} = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
});


router.get('/:id', (req, res) =>{
  const {id} = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
});

module.exports = router;
