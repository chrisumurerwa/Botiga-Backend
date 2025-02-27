import ContactModel from "../Modell/Contactmodell.js";
import mongoose from "mongoose";
export const createcontact = async(req, res)=>{
    try{
        const{
        email,
        subject,
        message,
        phone,
        status
        }=req.body;
        const newContact = new ContactModel({email, subject, message, phone, status});

        await newContact.save();

        res.status(201).json({success: true, message:'Contact created successfully', Contact: newContact});
    }

    catch(error){
        res.status(500).json({success:false, message:'Server Error', error: error.message});

    }
}
export const ListContact=async(req,res)=>
    {
        try{
        const foundContact= await ContactModel.find();
        return res.status(200).json(
            {
                foundContact
            }
        )}
        catch(error)
        {
            res.status(500).json({success:false,
                message:"Server Error",
                error:error.message
            })
        }
    }
    export const FindContactById=async(req,res)=>
        {
            try{
                let id = req.params.id.trim(); // Remove spaces/newlines
                console.log("Cleaned ID received:", id, "Length:", id.length);
        
                // Validate if the ID is a valid ObjectId
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    return res.status(400).json({ message: "Invalid Contact ID format" });
                }

            const foundContactId=await ContactModel.findById(id);
            if(!foundContactId)
            {
              return res.status(404).json({
                    message:"Message Not found",
                })
            }
            return res.status(200).json({
                contact:foundContactId
            })
        }
        catch(error)
        {
            res.status(500).json({
        
                message:"Internal server Error",
                error:error.message
            })
        }
        }
        export const deleteContactById=async(req,res)=>{
            try{
                let id = req.params.id.trim(); // Remove spaces/newlines
                console.log("Cleaned ID received:", id, "Length:", id.length);
        
                // Validate if the ID is a valid ObjectId
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    return res.status(400).json({ message: "Invalid Contact ID format" });
                }

               res.status(200).json({ success: true, message: "Contact deleted successfull"});
            }catch(error){
             res.status(500).json({ success: false, message: "server Error", error: error.message});
            }
          }
          export const updateContactById=async(req,res)=>{
            try{
                let id = req.params.id.trim(); // Remove spaces/newlines
                console.log("Cleaned ID received:", id, "Length:", id.length);
        
                // Validate if the ID is a valid ObjectId
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    return res.status(400).json({ message: "Invalid Contact ID format" });
                }
               const updatedData= await ContactModel.findByIdAndUpdate(id,req.body);
               if(!updatedData){
                return res.status(404).json({ success: false, message: "Contact not found"});
            }
            res.status(200).json({ success: true, message: "Contact Updated successfull",updatedData});
            }
            catch(error)
            {
                res.status(500).json({ success: false, message: "server Error", error: error.message});
            }
            }