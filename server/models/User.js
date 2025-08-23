import mongooose from 'mongoose'

const UserSchema=new mongooose.Schema({
userName:{
    type:String,
    required:true,
    unique:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
},
role:{
    type:String,
    default:'user'
}
});

const User=mongooose.model('User',UserSchema)
export default User;