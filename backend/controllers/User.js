import bcrypt from "bcrypt";
import { User } from "../models/User.js";


const signUpUser = async (req,res)=>{
    try{
        const {firstName, lastName, email, password} = req.body;
        const user = await User.findOne({email});
        if(user){
           return res.status(409).json({message: "User already exists ,you have to login"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        return res.status(201).json({ message : "Signup Successful", success: true});
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" , error});
    }
}

const signInUser = async (req,res)=>{ 
   try{
        const { email, password} = req.body;
        const user = await User.findOne({email});
        // const user_name = await User.findOne({name});
        // console.log(user_name);
        // console.log("User Found:", user);
        if(!user){
          return res.status(401).json({ message: "Invalid Email. Please sign up first." });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).json({ message: "Password is not matched" });
        }

        // 3. Success
        return res.status(200).json({ message: "Login successful", success: true , Name: user.firstName});

    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" , error});
    }
}

export {signUpUser, signInUser};