const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Prop, User } = require('../../models');
const { withAuth } = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Prop.findAll({
    attributes: [
      'id',
      'branch_address',
      'branch_name',
      'branch_number',
      'created_at',   
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPropData => res.json(dbPropData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



router.get('/:id', (req, res) => {
  Prop.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'branch_address',
      'branch_name',
      'branch_number',
      'created_at',
      ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPropData => {
      if (!dbPropData) {
        res.status(404).json({ message: 'No prop found with this id' });
        return;
      }
      res.json(dbPropData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



router.post('/', withAuth, (req, res) => {

  Prop.create({
    branch_name: req.body.branch_name,
    branch_address: req.body.branch_address,
    branch_number: req.body.branch_number,
    user_id: req.session.user_id
  })
    .then(dbPropData => res.json(dbPropData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.put('/:id', withAuth, (req, res) => {
  Prop.update(
    {
      branch_name: req.body.branch_name,
      branch_address: req.body.branch_address,
      branch_number: req.body.branch_number,
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPropData => {
      if (!dbPropData) {
        res.status(404).json({ message: 'No prop found with this id' });
        return;
      }
      res.json(dbPropData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Prop.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPropData => {
      if (!dbPropData) {
        res.status(404).json({ message: 'No prop found with this id' });
        return;
      }
      res.json(dbPropData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
