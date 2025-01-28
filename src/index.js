const express = require('express');
const {PORT} = require('./Config/serverconfig')
const setandstartserver = async () => {
  const app = express();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
}
setandstartserver(); 