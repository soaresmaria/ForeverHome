const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');
const { withAuth, isadmin } = require('../utils/auth');



router.get('/', withAuth, (req, res) => {
 console.log(req.session);
 console.log('======================');
 Post.findAll({
   where: {
     user_id: req.session.user_id
   },
   attributes: [
     'id',
     'office_address',
     'office_name',
     'contact_number',
     'created_at',
    ],
   include: [
     {
       model: User,
       attributes: ['username']
     }
   ]
 })
   .then(dbPostData => {
     const posts = dbPostData.map(post => post.get({ plain: true }));
     res.render('lawyer', { posts, loggedIn: true });
   })
   .catch(err => {
     console.log(err);
     res.status(500).json(err);
   });
});


// router.get('/', isadmin, (req, res) => {
  router.get('/add-lawyer', withAuth, (req, res) => {
   
     console.log(req.session);
     console.log('======================');
     Post.findAll({
       where: {
         user_id: req.session.user_id
       },
       attributes: [
         'id',
         'office_address',
         'office_name',
         'contact_number',
         'created_at',
        ],
       include: [
         {
           model: User,
           attributes: ['username']
         }
       ]
     })
       .then(dbPostData => {
         const posts = dbPostData.map(post => post.get({ plain: true }));
         res.render('add-lawyer', { posts, loggedIn: true });
       })
       .catch(err => {
         console.log(err);
         res.status(500).json(err);
       });
    });


// router.get('/edit/:id', isadmin, (req, res) => {
 router.get('/edit/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: [
      'id',
      'office_address',
      'office_name',
      'contact_number',
      'created_at',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render('edit-lawyer', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
