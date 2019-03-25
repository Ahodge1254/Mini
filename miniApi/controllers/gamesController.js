var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Game = sequelize.import('../models/games');

router.post('/create', function(req, res){
    Game
      .create({
          name: req.body.name,
          genre: req.body.genre,
          ageRating: req.body.ageRating,
          system: req.body.system
      })
      .then(
          function gameLogged(game){
              res.json({
                  game: game
              })
          },
          function gameNotLogged(err){
              res.send(500, err.message)
          }
      )
});

router.delete('/delete/:id', function (req, res) {
    Game
      .destroy({
          where: {id: req.params.id}
      })
      .then(
          function gameDelete(){
              res.send("Game deleted");
          },
          function gameDeleteFail(err){
              res.send(500, err.message);
          }
      )
});

router.put('/edit/:id', function(req, res){
    Game
      .update({
        name: req.body.name,
        genre: req.body.genre,
        ageRating: req.body.ageRating,
        system: req.body.system
      },
      {where: {id: req.params.id}
    })
    .then(
        function gameEdit() {
            res.json({
                name: req.body.name,
                genre: req.body.genre,
                ageRating: req.body.ageRating,
                system: req.body.system
            })
        },
        function gameEditFail(err){
            res.send(500, err.message)
        }
    )
});

router.get('/', function(req, res) {
    Game
        .findAll()
        .then(foundGames => {
            res.send(foundGames)
        })
        .catch(err => res.send(err, 'games.js'))
});

module.exports = router;