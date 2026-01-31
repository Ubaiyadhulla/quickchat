import Task from '../model/Taskmodel.js';
export const createTask = async (req, res) => {
   try{

       const { title, status, duedate, } = req.body;
       if(!title){
           return res.status(400).json({message:"Title is required"});
        }
        if(!duedate){
            return res.status(400).json({message:"Due date is required"});
        }
        if(!status){
            return res.status(400).json({message:"Status is required"});
        }
        
        if(!req.user || !req.user._id){
            return res.status(401).json({message:"Unauthorized"});
        }
        const newTask = await Task.create({title, status, duedate,user:req.user._id});  
        res.status(201).json({message:"Task created successfully", task : newTask});    
    }catch(error){
        res.status(500).json({message:error.message});
    } 
}

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({user:req.user._id}).sort({createdAt:-1});
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
