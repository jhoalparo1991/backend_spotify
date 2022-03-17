const { model,Schema } = require('mongoose');
const mongoose_delete = require('mongoose-delete');



const userSchema = new Schema(
    {
        name:String,
        lastname:String,
        email:String,
        password:String,
        role:{
            type:['user','admin'],
            default: 'user'
        },
        age:Number
    },
    {
        timestamp:true,
        versionKey:false
    }
);

userSchema.plugin(mongoose_delete,{ overrideMethods: 'all' });
module.exports = model('users',userSchema);