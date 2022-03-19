const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');


const storageSchema = sequelize.define('storages', {
    filename:{
        type:DataTypes.STRING,
        allowNull:false
    },
    url:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    timestamp:true,
});

module.exports = storageSchema;