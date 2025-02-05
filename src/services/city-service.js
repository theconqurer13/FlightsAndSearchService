
const { CityRepository } = require('../repository/index');

class CityService {
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Err at sevice lvl");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            const response = this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Err at sevice lvl");
            throw {error};
        }
    }

    async updateCity(cityid,data){
        try {
            const city = await this.cityRepository.updateCity(cityid,data);
            return city;
        } catch (error) {
            console.log("Err at sevice lvl");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Err at sevice lvl");
            throw {error};
        }
    }

}


module.exports=CityService;