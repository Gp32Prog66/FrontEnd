const express = require('express');
const app = express(); //Allows to go back and use express library

//Path to do something
app.get('/', (req,res)=>
{
    res.send("Test App");
});

//Port to Run the Application
app.listen(5500, () => { //Typically start with 3000
    console.log("Listening to the active port");
});