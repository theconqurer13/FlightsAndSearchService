const {CityService} = require('../services/index');
const cityService = new CityService();
const create = async (req,res) => {
    // during creation , type of req is POST req nd data we get through req.body
    try {
        const cities = await cityService.createCity(req.body);
        return res.status(201).json({
            data:cities,
            success:true,
            message:'Successfully created a city',
            err:{}
        });
    } catch (error) {
        console.log("Err on cntoller lvl",error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'didnt created a city',
            err:error
        })
    }
}

const destroy = async(req,res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully deleted a city',
            err:{}
        });
    } catch (error) {
        console.log("Err on cntoller lvl");
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to delete  a city',
            err:error
        })
    }
}

const get = async (req,res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data:city,
            success:true,
            message:'Successfully fetched a city',
            err:{}
        });
    } catch (error) {
        console.log("Err on cntoller lvl", error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to get a city',
            err:error
        })
    }
}

const update = async(req,res) => {
    try {
        const city = await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:'Successfully created a city',
            err:{}
        });
    } catch (error) {
        console.log("Err on cntoller lvl");
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to update  a city',
            err:error
        });
    }
}


module.exports ={
    create,destroy,update,get
}