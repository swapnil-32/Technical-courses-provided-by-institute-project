//this home and register are controllers it mean for use of get,post etc requests and they have callback function(i.e (req,res))  
const User=require('../models/User');
const bcrypt=require('bcryptjs');   //this package will use to hashing the pass,etc.
const home=async (req,res)=>{
    try{
res.send("home page");
    }
    catch(error){
        res.send("error");
    }
}

const register=async (req,res)=>{
    try{
        console.log(req.body);    
// res.send("register page");
// res.send({msg:req.body});
// const data=req.body;

const {username,email,phone,password}=req.body;    //here we destructure the data by {}
const userExist=await User.findOne({email:email}) //we need to write await to handle promises //here by first email word is cheack this email feild in user collection with secondd email word which is user inputed emaailthat we destructed above
if(userExist){
    res.status(400).json({message:"user already exist"});
}

const salt_round=10;      
const hash_pass=await bcrypt.hash(password,salt_round);   //we hash the password

const userCreated=await User.create({username,email,password:hash_pass,phone});   //in database hashed pass will store

res.json({msg:"registration successfully",token:await userCreated.generateToken(),userId:userCreated._id.toString(),});  //here we call generatetoken which defined in userschema in model(user.js file) and see in postman we get token after registering

    }
    catch(error){
        res.send({message:"error"});
    }
}

const login=async (req,res)=>{
    const {email,password}=req.body;  //user inputed data
    const userexist=await User.findOne({email:email});
    if(!userexist){
        res.status(400).json({message:"invalid credintial"})
    }
    // const user=await bcrypt.compare(password,userexist.password);
    const user=await userexist.comparepassword(password);    // here instead of above line we can write above logic in schema(i.e model(user)) file and there we define comparepassword function
    if(user){
        // res.status(200).json({msg:"login successfully",token:await userexist.generateToken()});   //it also work
        res.json({
            msg:"login successfully",
            token:await userexist.generateToken(),
            userId:userexist._id.toString(),
        });
    }
    else{
        res.status(401).json({message:"invalid email or password"});    //in front it is necessary to send status 401 for error thats why we use this line instead of below
        // res.json({msg:"invalid email or password"})
    }
}

const user=async (req,res)=>{
    try {
        const userdata=req.user;
        console.log(userdata);
        res.json({userdata})
    } catch (error) {
        console.log(error);
    }
}

const enrollcourse = async (req, res) => {
    console.log(req.body)
    // const { serviceId, userId } = req.body;
    const serviceId=req.body.serviceId;
    const userId=req.body.userId
  console.log(userId)
  if (!serviceId || !userId) {
    return res.status(400).json({ msg: "Service ID and User ID are required" });
}
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
  
      if (!user.enrolledCourses.includes(serviceId)) {
        
        user.enrolledCourses.push(serviceId);
        await user.save();
      }
  
      res.status(200).json({ msg: "Enrolled successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: error });
    }
  };
  const enrolledcourses=async(req,res)=>{
    const userid=req.params.userid
    console.log(userid)
    try{
        const user=await User.findOne({_id:userid})
        console.log("hii",user)
        res.status(200).json(user)
    }
    catch(error){
        res.status(500).json({msg:"error"})
  }
}
module.exports={home,register,login,user,enrollcourse,enrolledcourses};
