//API route will return JSON
let express = require('express');
let router = express.Router();
let item = require('../../model/itemModel');

//Create routes that get the items in database
router.get('/', (req, res) => {
    item.find()
        .then((Items) => res.send(Items));
});

//Create a routes that post(insert) the items to database
router.post('/', (req, res) => {
   let newItem = new item({
      name: req.body.name,
      price: req.body.price
   });
   newItem.save()
          .then((item) => res.send(item));
});

//Create a routes that deletes the item from database
router.delete('/:id', (req, res) => {
   item.findById(req.params.id)
       .then((Item) => Item.remove().then(() => res.json({success: true})))
       .catch((error) => (res.status(404).json({success: false})));
});

module.exports = router;