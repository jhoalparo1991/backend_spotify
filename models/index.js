const models = {
    userSchema : require('./nosql/users'),
    storageSchema : require('./nosql/storage'),
    trackSchema : require('./nosql/tracks')
}


module.exports = models;