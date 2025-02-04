const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('../Config/serverconfig')
const setandstartserver = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true})); 
  app.listen(PORT, () => {


    console.log(`Server is running on port ${PORT}`);
  });
  
}
setandstartserver(); 