const bcrypt=require('bcryptjs');
const helpers={};


helpers.encryptPassword=async(password)=>{
const salt= await bcrypt.genSalt(10);
const encriptado=await bcrypt.hash(password,salt);
return encriptado;
};

helpers.matchPassword=async(password,savedpassword)=>{
  try {
    return await bcrypt.compare(password,savedpassword);
    
  } catch (error) {
      console.log(error);
  }
};

module.exports=helpers;