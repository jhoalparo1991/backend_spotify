const {trackSchema} = require('../models');
const handle_errors = require('../utils/handleErrors');
const { matchedData } = require('express-validator');
const getItems =async(req,res) =>{
    try {
        const data = await trackSchema.find();
        return res.status(200).json({
            ok:true,
            data
        });

    } catch (error) {
        handle_errors(res,error,400);
    }
};

const getItem =async(req,res) =>{
    try {

        
        req = matchedData(req);
        
        const id = req.id;

        const result = await trackSchema.findById(id);
        if(!result){
            return res.status(200).send({message: "No found records"});
         }
        return res.status(200).json({result});

    } catch (error) {
        handle_errors(res,error,400);
    }
};

const createItem = async(req, res)=>{
    try {
         req =  matchedData(req);

         const newTrack = new trackSchema(req);

         await newTrack.save( (err,data)=>{
            if(err) return res.status(403).json({ ok:false,message:"No se pudo guardar el registro ",code:403});
            return res.json({
                ok:true,
                data,
                code:200
            })
        } )

    } catch (error) {
        handle_errors(res,error,400);
    }
};

const updateItem = async(req, res)=>{
    try {
         req =  matchedData(req);
        const {id,...body} = req;

        const getTrack = await trackSchema.findById(id);
        if(!getTrack){
           return res.status(200).send({message: "No found records"});
        }

        const result = await trackSchema.findByIdAndUpdate(id,body,{new:true});
        
         return res.send({result});
        
    } catch (error) {
        handle_errors(res,error,400);
    }
};

const deleteItem = async(req, res)=>{
    try {
         req =  matchedData(req);
        const {id} = req;

        await trackSchema.delete({_id:id});
        
        return res.status(200).json({
            message:"Record delete succesfully"
        });
        
    } catch (error) {
        handle_errors(res,error,400);
    }
};


module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}