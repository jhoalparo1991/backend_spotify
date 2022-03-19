const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');


const userSchema = sequelize.define('users', {
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role:{
        type:DataTypes.ENUM(['admin','user']),
    },
    age:{
        type:DataTypes.NUMBER,
        allowNull:false
    }
},{
    timestamp:true,
});

module.exports = userSchema;