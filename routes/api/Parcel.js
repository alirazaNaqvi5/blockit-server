// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load Book model
const Parcel = require('../../models/Parcel');

// @route GET api/Parcels/test
// @description tests Parcels route
// @access Public
router.get('/test', (req, res) => res.send('Parcel route testing!'));



router.post('/dropParcel', (req, res) => {
  console.log(req.query.parcelId);

  Parcel.updateOne({receiver_phone: req.query.parcelId}, {status: "Dropped"}, (err, parcel) => {
    if (err) {
      res.status(500).send({ error: 'Internal server error' });
    } else if (!parcel) {
      res.status(401).send({ error: 'Incorrect parcelId' });
    } else {
      res.status(200).send({ parcel });
    }
  });

});

router.post('/returnParcel', (req, res) => {
  console.log(req.query.parcelId);

  Parcel.updateOne({receiver_phone: req.query.parcelId}, {status: "returned"}, (err, parcel) => {
    if (err) {
      res.status(500).send({ error: 'Internal server error' });
    } else if (!parcel) {
      res.status(401).send({ error: 'Incorrect parcelId' });
    } else {
      res.status(200).send({ parcel });
    }
  });

});



// @route GET api/Parcels
// @description Get all Parcels
// @access Public
router.get('/pracels', (req, res) => {
  Parcel.find()
    .then(Parcels => res.json(Parcels))
    .catch(err => res.status(404).json({ noParcelsfound: 'No Parcels found' }));
});

// @route GET api/Parcels/:id
// @description Get single Parcel by id
// @access Public
router.get('/:id', (req, res) => {

  Parcel.findById(req.params.id)
    .then(Parcel => res.json(Parcel))
    .catch(err => res.status(404).json({ noParcelfound: 'No Parcel found' }));
});




// @route GET api/Parcels
// @description add/save Parcel
// @access Public
router.post('/postData', (req, res) => {
  console.log(req.query);
  Parcel.create(req.query)
    .then(Parcel => res.send( Parcel ))
    .catch(err => res.status(400).json({ error: 'Unable to add this Parcel', error: err }));
});

// @route GET api/Parcels/:id
// @description Update Parcel
// @access Public
router.put('/:id', (req, res) => {
  Parcel.findByIdAndUpdate(req.params.id, req.body)
    .then(Parcel => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/Parcels/:id
// @description Delete Parcel by id
// @access Public
router.delete('/:id', (req, res) => {
  Parcel.findByIdAndRemove(req.params.id, req.body)
    .then(Parcel => res.json({ mgs: 'Parcel entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Parcel' }));
});

module.exports = router;