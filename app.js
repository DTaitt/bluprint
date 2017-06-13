//import middleware
const express = require('express');
const app = express();
const path = require('path');

//set port
const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
  console.log(`Listening on port ${ PORT }`);
});

//set root page
app.get('/',function(req,res){
  res.send('This is the index for BCAPI (BootCamp API)');
});

const bootcampRoutes = require('./routes/bootcampRoutes');

app.use('/api/bootcamps', bootcampRoutes);


//error handling
app.get('*',function(req,res){
  res.status(404).send({message: 'Opps! Not found.'})
})