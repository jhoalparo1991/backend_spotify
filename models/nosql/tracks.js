const { model,Schema,Types } = require('mongoose');
const mongoose_delete = require('mongoose-delete');



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
        mediaId:Types.ObjectId
    },{
        timestamp:true,
        versionKey:false
    }
);

trackSchema.plugin(mongoose_delete,{ overrideMethods: 'all' });
module.exports = model('tracks',trackSchema);