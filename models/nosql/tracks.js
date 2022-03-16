const { model,Schema } = require('mongoose');



const trackSchema = new Schema(
    {
        name:String,
        album:String,
        cover:{
            type: String,
            validate:{
                validator:function(req){
                    return true;
                },
                message: 'ERROR_URL'
            }
        },
        artist:{
            name:String,
            nickname:String,
            nationality:String
        },
        duration:{
            start:Number,
            end:Number
        },
        mediaId:mongoose.Types.ObjectId
    },{
        timestamp:true,
        versionKey:false
    }
);


module.exports = model('tracks',trackSchema);