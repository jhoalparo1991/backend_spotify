const { model,Schema } = require('mongoose');



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


module.exports = model('users',userSchema);