// import jwt from "jsonwebtoken";
// import User from "../model/Usermodel.js"


// export const  AuthUser =async (req,res,next)=>{
//     try {
//         console.log("HEADERS:", req.headers);

//         const token = req.headers.authorization?.split(" ")[1];
//         if(!token){
//             return res.status(401).json({message:"Unauthorized invalid token"});
            
//         }
//         const decoded = jwt.verify(token,process.env.JWT_SECRET)
//         const user = await User.findById(decoded.userId);
//         req.user = user;
//         next();
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// }
import jwt from "jsonwebtoken";
import User from "../model/Usermodel.js";

export const AuthUser = async (req, res, next) => {
  try {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No auth header" });
    }

    const token = authHeader.split(" ")[1];


    if (!token || token === "null" || token === "undefined") {
      return res.status(401).json({ message: "Invalid token value" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("DECODED:", decoded);

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();

  } catch (error) {
    console.log("JWT ERROR:", error.message);
    return res.status(401).json({ message: error.message });
  }
};
