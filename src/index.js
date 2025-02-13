const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverconfig');
const ApiRoutes= require('./routes/index');

const db  = require('./models/index');




// const {City,Airport} = require('./models/index');
const sequelize = require('sequelize');
const setandstartserver = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true})); 

  app.use('/api',ApiRoutes);
  app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}`);
    // console.log(db);
  
    
    if(process.env.SYNC_DB){
       db.sequelize.sync({alert:true});
    }
    
    // const city = await City.findOne({
    //   where:{
    //     id : 3
    //   },
    //   include: [Airport]
    // });
    // const airports = await city.getAirports();
    // console.log(city,airports);
  });
  
}
setandstartserver(); 