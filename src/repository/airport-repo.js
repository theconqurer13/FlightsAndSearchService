const {Airport,City} = require("../models/index");

class AirportRepository{
    async createAirport(name,cityId){
        try {
            if (!name || !cityId) {
                throw new Error("Missing required fields: name or cityId");
            }
            const parsedCityId = parseInt(cityId, 10);
        if (isNaN(parsedCityId)) {
            throw new Error("Invalid cityId, must be a number");
        }

        // Check if city exists before creating airport
        const cityExists = await City.findByPk(parsedCityId);
        if (!cityExists) {
            throw new Error("City with given ID does not exist");
        }
            const airport = await Airport.create({name,cityId : parsedCityId});
            return airport;
        } catch (error) {
            console.log("Error at repo lvl",error);
            throw{error};
        }
    }
    async deleteAirport(airportId){
        try {
            await Airport.destroy({
                where:{
                    id:airportId
                }
            });
        } catch (error) {
            console.log("Error at repo lvl",error);
            throw{error};
        }
    }
    async getAirport(airportId){
        try {
            const airport = await Airport.findOne({
                where:{
                    id:airportId
                }
            });
            return airport; 
        } catch (error) {
            console.log("Error at repo lvl",error);
            throw{error};
        }
    }
    async updateAirport(airportId,data){
        try {
            const [updatedRows] = await Airport.update(data, {
                where: { id: airportId }
            });
    
            if (updatedRows === 0) {
                throw new Error("Airport not found or no changes applied");
            }
    
            return await Airport.findByPk(airportId);
        } catch (error) {
            console.log("Error at repo lvl", error);
            throw { error };
        }
    }
}
module.exports = AirportRepository;