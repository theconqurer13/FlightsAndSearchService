const {AirportService} = require('../services/index');
const airportService = new AirportService();
const create = async (req,res) => {
    // during creation , type of req is POST req nd data we get through req.body
    try {

        // console.log("Request Body:", req.body); 
        // const { name, cityId } = req.body;
        // const parsedCityId = parseInt(cityId, 10);
        // if (!name) {
        //     return res.status(400).json({ error: "Airport name is required" });
        // }
        // if (!parsedCityId) {
        //     return res.status(400).json({ error: "city id is required" });
        // }
        // const airports = await airportService.createAirport({name,parsedCityId});
        // return res.status(201).json({
        //     data:airports,
        //     success:true,
        //     message:'Successfully created an Airport',
        //     err:{}
        // });


        console.log("Request Body:", req.body); // 🔍 Debugging Line
        
        const { name, cityId } = req.body;

        if (!name || !cityId) {
            console.log("❌ Missing Fields: ", { name, cityId });
            return res.status(400).json({ error: "Airport name and cityId are required" });
        }

        const airports = await airportService.createAirport(name, cityId);
        return res.status(201).json({
            data: airports,
            success: true,
            message: "Successfully created an Airport",
            err: {},
        });
    } catch (error) {
        console.log("Err on cntoller lvl",error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'didnt created a Airport',
            err:error
        })
    }
}

const destroy = async(req,res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully deleted an Airport',
            err:{}
        });
    } catch (error) {
        console.log("Err on cntoller lvl");
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to delete  a airport',
            err:error
        })
    }
}

const get = async (req,res) => {
    try {
        const airport = await airportService.getAirprt(req.params.id);
        return res.status(201).json({
            data:airport,
            success:true,
            message:'Successfully fetched an Airport',
            err:{}
        });
    } catch (error) {
        console.log("Err on cntoller lvl", error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to get an airport',
            err:error
        })
    }
}

const update = async(req,res) => {
    try {
        const airport = await airportService.updateAirport(req.params.id,req.body);
        return res.status(201).json({
            data:airport,
            success:true,
            message:'Successfully updated the Airport',
            err:{}
        });
    } catch (error) {
        console.log("Err on cntoller lvl");
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to update  a airport',
            err:error
        });
    }
}


module.exports ={
    create,destroy,update,get
}