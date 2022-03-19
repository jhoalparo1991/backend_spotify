const ENGINE_DB = process.env.ENGINE_DB; //mongodb - mysql

const getProperty = ()=>{
    const result = {
        nosql:{
            id:'_id'
        },
        mysql:{
            id:'id'
        }
    }
    return result[ENGINE_DB];
}


module.exports = getProperty;