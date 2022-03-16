const { model,Schema } = require('mongoose');

const storageSchema = new Schema(
    {
        filename:String,
        url:String
    },
    {
        timestamp:true,
        versionKey:false
    }
);


module.exports = model('storage',storageSchema);