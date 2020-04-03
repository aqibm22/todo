const express = require('express');
const app = express();
const port = 8000;

//using routers to get to the controllers-
app.use('/',require('./routes/index'));

//setting up view engine
app.set('view engine','ejs');
app.set('views','./views');

// using assets like css,js used in view
app.use(express.static('assets'));

app.listen(port,function(err){
    if(err){
        console.log('Error in running the server: ',err);
    }
    console.log(`Server is running on port: ${port}`);
});