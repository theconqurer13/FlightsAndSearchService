
const { AirportRepository } = require('../repository/index');

class AirportService {
    constructor(){
        this.airportRepository = new AirportRepository();
    }

    async createAirport(name,cityId){
        try {
            const airport = await this.airportRepository.createAirport(name,cityId);
            return airport;
        } catch (error) {
            console.log("Err at sevice lvl",error);
            throw {error};
        }
    }

    async deleteAirport(airportId){
        try {
            const response = this.airportRepository.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log("Err at sevice lvl");
            throw {error};
        }
    }

    async updateAirport(airportid,data){
        try {
            const airport = await this.airportRepository.updateAirport(airportid,data);
            return airport;
        } catch (error) {
            console.log("Err at sevice lvl");
            throw {error};
        }
    }

    async getAirport(airportId){
        try {
            const airport = await this.airportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Err at sevice lvl");
            throw {error};
        }
    }

}


module.exports= AirportService;