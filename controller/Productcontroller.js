import  mongoose from 'mongoose';
import Product from '../Modell/Productmodell.js';
import { cloudinary } from '../utilis/ClaudinaryConfig.js';
export const  createProduct=async(req,res)=> {
    try{

     if (!req.files || !req.files.images || req.files.images.length ===0){
        return res.status(400).json({ success: false, message: "No image uploaded" });

     }

     const result = await cloudinary.uploader.upload(req.files.images[0].path);
         const{
            productName,
            productPrice,
            productCategory,
            productDiscount
         } = req.body;
      const images = result.secure_url;

         const newProduct = new Product ({productName,productPrice,productCategory,productDiscount,images});
         await newProduct.save();
         res.status(201).json({success: true, message:'Product created successfully', Product: newProduct});
    }
    
    catch(error){
        res.status(500).json({success:false, message:'Server Error', error: error.message});

    }
}

export const listProduct=async(req,res)=>
   {
       try{
       const foundProduct= await Product.find();
       return res.status(200).json(
           {
               foundProduct
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
   export const updateproductById=async(req,res)=>{
    try{
        let id = req.params.id.trim(); // Remove spaces/newlines
        console.log("Cleaned ID received:", id, "Length:", id.length);

        // Validate if the ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid product ID format" });
        }
       const updatedData= await Product.findByIdAndUpdate(id,req.body);
       if(!updatedData){
        return res.status(404).json({ success: false, message: "Product  not found"});
    }
    res.status(200).json({ success: true, message: "Product Updated successfull",updatedData});
    }
    catch(error)
    {
        res.status(500).json({ success: false, message: "server Error", error: error.message});
    }
    }