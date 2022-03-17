const { storageSchema } = require('../models');
const handle_errors = require('../utils/handleErrors');
const PUBLIC_URL = process.env.PUBLIC_URL;


const getFiles = async (req,res)=>{ 
    try {
        
    const data = await storageSchema.find({});
    res.status(200).json({
        ok:true,
        data
    })
    } catch (error) {
        handle_errors(res,'No se pudo procesar la peticion',400)
    }
};


const uploadFile = async (req,res)=>{
   try {
    const { filename } = req.file;
    
    const upload = new storageSchema({filename,url:`${PUBLIC_URL}${filename}`});
    
    await upload.save( (err,data)=>{
        if(err) return res.status(403).json({ ok:false,message:'Ocurrio un error no se pudo subir el archivo',code:403});
        return res.json({
            ok:true,
            data,
            code:200
        })
    } )
   }catch(err) {
    handle_errors(res,'No se pudo procesar la peticion',400)
   }
}


module.exports = {
    getFiles,
    uploadFile,
}