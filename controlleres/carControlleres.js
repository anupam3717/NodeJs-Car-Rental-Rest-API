const carServivrs=require('../services/carService');

const getAll=async(_req,res)=>{
    const cars=await carServivrs.getAllCar();
    res.status(200).send(cars);
}

const createCar=async(req,res)=>{
    const data=req.body;
    const car=await carServivrs.create(data);
    res.status(200).send(car);
}

module.exports={getAll,createCar};