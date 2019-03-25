const Sequelize = require('sequelize');

const sequelize = new Sequelize('Mini', 'postgres', '1515', {
    host: 'localhost',
    dialect: 'postgres'
});
 sequelize.authenticate().then(
     function() {
         console.log('Connected to postgres');
     },
     function(err){
         console.log(err);
     }
 );

 module.exports = sequelize;