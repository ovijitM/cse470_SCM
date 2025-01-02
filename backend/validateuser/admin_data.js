import express from "express";
import connectToDatabase from "../database.js";

const router = express.Router();





router.post("/admin", async (req, res) => {
    try {
        const db = await connectToDatabase();

        const userCollection = db.collection("Users");
        const users = await userCollection.find({ role: "user" }).toArray();

       
        const newCarCollection = db.collection("New_cars");
        const newCars = await newCarCollection.find({}).toArray();

       
        const usedCarCollection = db.collection("Used_cars");
        const usedCars = await usedCarCollection.find({}).toArray();

        const totalCar = newCars.length + usedCars.length;

        
        const totalRevenue = 1000000;


        const kycCollection = db.collection("KYCApplications"); 
        const kycApplications = await kycCollection.find({}).toArray();
        const totalKYC = kycApplications.length;

        res.status(200).json({
            success: true,
            users,
            totalCar,
            totalRevenue, 
            totalKYC, 
        });


    } catch (error) {
        console.error("Error fetching admin data:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

export default router;