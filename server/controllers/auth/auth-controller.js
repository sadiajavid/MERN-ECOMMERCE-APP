import User from "../../models/User.js"


const registerUser=async(req,res)=>{
    const {userName,email,password}=req.body;
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
export default  registerUser;