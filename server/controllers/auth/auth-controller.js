import User from "../../models/User.js";
import bcrypt from "bcryptjs";  
import jwt from "jsonwebtoken";


export const registerUser=async(req,res)=>{
    const {userName,email,password}=req.body;
    const checkUser=await User.findOne({email});
    if(checkUser){
      return res.json({success:false,message:'user already exist plz try another email to register'})
    };
    try{    
      const hashPassword=await bcrypt.hash(password,12);
      const newUser=new User({
        userName,
        email,
        password:hashPassword   
      });
      await newUser.save();
      res.status(200).json({
          success:true,
            message:"Registration Successfull"
      })
    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"Some Error Occured"
        })
    }

}


export const loginUser=async(req,res)=>{
 const {email,password}=req.body;
  try{
 const checkUser=await User.findOne({email});
  if(!checkUser){
      res.json({
        success:false,
        message:"invalid credentail plz register first"
      })  
  }
  const checkPassword=await bcrypt.compare(password,checkUser.password);
  if (!checkPassword){
   return  res.json({
      success:false,
      message:"incorrect password"
    })
  }
  const token =jwt.sign({
    id:checkUser._id,role:checkUser.role,email:checkUser.email
  },process.env.JWT_SECRET,{expiresIn:'60m'})
     res.cookie('token',token).json({
       success:true,
       message:"login successfully",
       user:{
        email:checkUser.email,
        role:checkUser.role,
        id:checkUser._id
       }
  });
  }catch(e){
    res.status(500).json({
      success:false,  
      message:"Some error occured"

    })

  }
}
export const logoutUser=(req,res)=>{
  res.clearCookie('token').json({
    success:true,
    message:"Logged out successfully"
})
}

export const authMiddleware=async(req,res,next)=>{
 const token =req.cookies.token;
 if(!token)
  return res.status(401).json({
success:false,
message:'Unauthorized User!'
})
try{
  const decode=jwt.verify(token,process.env.JWT_SECRET);
  req.user=decode;
  next();
}catch(e){
    res.status(500).json({
      success:false,  
      message:"Unauthorized User!"

    })

  }
}
