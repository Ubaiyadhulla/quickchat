import User from '../model/Usermodel.js';
import jwt from 'jsonwebtoken';


export const Register = async (req,res)=>{
    try{
        const {name,password,email}= req.body;
        if(!name || !password || !email){
            return res.status(400).json({message:"All fields are required"})
        }
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(409).json({message:"User already exists"});

        }
        


        const newUser = await User.create({name,password,email});

        res.status(201).json({
             message: "User registered successfully",
             user: {
                 name: newUser.name,
                 email: newUser.email,
                 id: newUser._id,
                }
    });

    }catch(error){
        res.status(500).json({message:error.message});
    }
}

export const login = async(req,res)=>{
    try {
       
        const {email,password} = req.body;
        if(!email || !password){
           return res.status(400).json({message:"All fields are required"});
        }
        const userExists = await User.findOne({email});
        
              if(!userExists){
                return res.status(404).json({message:"User not found"});
              }
              if(userExists.password === password){
               const token = jwt.sign({userId : userExists._id},process.env.JWT_SECRET,{expiresIn:'1h'});
               console.log(token)
               return res.status(200).json({message:"login successful",token,
                   user: {
                    name: userExists.name,
                    email: userExists.email,
                    id: userExists._id,
                   }});

           }else{
               return res.status(401).json({message:"Invalid credentials"});
           }
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}