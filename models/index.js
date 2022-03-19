const ENGINE_DB = process.env.ENGINE_DB; //mongodb - mysql

const path_models = (ENGINE_DB === 'mongodb') ? './nosql' : './mysql';

console.log("loading model -> ",path_models);
const models = {
    userSchema : require(`${path_models}/users`),
    storageSchema : require(`${path_models}/storage`),
    trackSchema : require(`${path_models}/tracks`)
}


module.exports = models;