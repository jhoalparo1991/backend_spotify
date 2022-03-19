const bcryptjs = require('bcryptjs');


const encrypt = async(password)=>{
    const genSalt = bcryptjs.genSaltSync(10);
    const pass = await bcryptjs.hash(password,genSalt);
    return pass;
}


const compare = async(password, passwordHash)=>{
    return await bcryptjs.compare(password,passwordHash);
}


module.exports = { encrypt,compare}