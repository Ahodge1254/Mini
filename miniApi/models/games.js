module.exports = function(sequelize, DataTypes) {
    return sequelize.define('game', {
        name: {
            type: DataTypes.STRING,
        },

        genre: {
            type: DataTypes.STRING,
        },

        ageRating: {
            type: DataTypes.STRING,
        },

        system: {
            type: DataTypes.STRING,
        }
    })
}