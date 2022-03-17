const { storageSchema } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;


const getFiles = async (req,res)=>{ 
    try {
        
    const data = await storageSchema.find({});
    res.status(200).json({
        ok:true,
        data
    })
    } catch (error) {
        return res.status(500).json({ ok:false,error,code:500});
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
    return res.status(500).json({ ok:false,err,code:500});
   }
}


module.exports = {
    getFiles,
    uploadFile,
}