const  Sequelize = require('sequelize');

const DATABASE = process.env.MYSQL_DATABASE
const USERNAME = process.env.MYSQL_USERNAME
const PASSWORD = process.env.MYSQL_PASSWORD
const HOSTNAME = process.env.MYSQL_HOSTNAME
const DIALECT = process.env.MYSQL_DIALECT

const sequelize = new Sequelize(DATABASE,USERNAME,PASSWORD,{
    host: HOSTNAME,
    dialect:  DIALECT
})

const dbConnectMysql = async()=>{
try {
    await sequelize.authenticate()
    console.log('Connected to mysql')
} catch (error) {
    console.log(error['original'].sqlMessage)
}
}

module.exports = {sequelize,dbConnectMysql};