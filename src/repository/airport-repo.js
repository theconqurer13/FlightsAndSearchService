const {Airport} = require('../models/airport');

class AirportRepository{
    async createAirport(name){
        try {
            const airport = await Airport.create({name});
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
            const airport = await Airport.update(data,{
                where:{
                    id:airportId
                }
            });
            if (airport === 0) {
                throw new Error("Airport not found or data unchanged");
            }
            const updatedairport = await Airport.findOne({
                where: { id: airportId }
                // attributes: ["id", "name", "createdAt", "updatedAt"]
             });
            return updatedairport; 
        } catch (error) {
            console.log("Error at repo lvl",error);
            throw{error};
        }
    }
}
module.exports = AirportRepository;