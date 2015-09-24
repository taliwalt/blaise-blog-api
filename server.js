var express = require ( 'express' ),
    app = express (),
    mongoose = require ( 'mongoose' ),
    bodyParser = require ( 'body-parser' ),
    apiRouter = require( './app/config/routes' ),
    DB = 'mongodb://localhost:27017/blaise-blog', //connects local db on port 27017
    port = 3000;

//body-parser config:
app.use(bodyParser.urlencoded ( { extended: true } ) );
app.use(bodyParser.json());

//connect our DB
mongoose.connect ( DB );

//routes config // namespaces for api
app.use ( '/api', apiRouter );

//server
app.listen ( port );
console.log ( 'magic is happening on port ' + port );
