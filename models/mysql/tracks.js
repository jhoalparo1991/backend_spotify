const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');


const trackSchema = sequelize.define('tracks', {
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    album:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cover:{
        type:DataTypes.STRING,
        allowNull:false
    },
    artist_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    artist_nickname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    artist_nationality:{
        type:DataTypes.STRING,
        allowNull:false
    },
    duration_start:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
    duration_end:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
    media_id:{
        type:DataTypes.NUMBER,
        allowNull:false
    }

},{
    timestamp:true,
});

module.exports = trackSchema;