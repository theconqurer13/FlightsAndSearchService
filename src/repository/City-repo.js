const city = require("../models/city");
const {City} = require("../models/index");

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            console.log("Error ar repository lvl");
            throw {error};
        }
    }
    async deleteCity(cityId){
        try{
             await City.destroy({
                where: {
                    id: cityId
                }
             });
            
        }catch(error){
            console.log("Error ar repository lvl");
            throw {error};
        }
    }
    async getCity(cityId){
        try{
             const city = await City.findOne({
                where: { id: cityId },
                attributes: ["id", "name", "createdAt", "updatedAt"]
             });
             return city;
            
        }catch(error){
            console.log("Error ar repository lvl  ",error);
            // throw {error};
        }
    }
    async updateCity(cityId,data){
        try{
             const city = await City.update(data,{
                where:{
                    id: cityId
                }
             });
             if (city === 0) {
                throw new Error("City not found or data unchanged");
            }
    
            const updatedcity = await City.findOne({
                where: { id: cityId },
                attributes: ["id", "name", "createdAt", "updatedAt"]
             });
             return updatedcity;
            
        }catch(error){
            console.log("Error ar repository lvl ",error);
            // throw {error};
        }
    }
}
module.exports= CityRepository;