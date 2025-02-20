import ContactModel from "../Modell/Contactmodell.js";
export const createcontact=async(req,res,next)=>{
    try{
        const newContact = await ContactModel.create(req.body)
    return res.status(201).json({message:"Message received successfully",Contact:newContact});
    }
    catch(error){
        console.log(error);
    }
    
}