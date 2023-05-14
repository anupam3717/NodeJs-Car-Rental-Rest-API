const car=require('../models/car');

const getAllCar=async()=>{
    const cars=await car.find({});
    return cars;
}

const create=async(data)=>{
    const created=await car.create({ ...data });
    return created;
}

module.exports= {getAllCar,create};