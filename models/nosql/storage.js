const { model,Schema } = require('mongoose');
const mongoose_delete = require('mongoose-delete');


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

storageSchema.plugin(mongoose_delete,{ overrideMethods: 'all' });
module.exports = model('storage',storageSchema);