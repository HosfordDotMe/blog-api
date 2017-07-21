const express = require('express');
const server = express();

const port = process.env.PORT || 8080;

//middleware imports
const morgan = require('morgan');
const cors = require('cors');

//router imports
const userRouter = require('./routers/user.router');

//wire up the middleware
server.use(cors());
server.use(morgan('dev'))

//wire up the routers
server.use(userRouter);


server.get('/', (req, res) => {
     res.send('it works');
});


server.listen(port, () => {
   console.log(`Now listening on port ${port}`);
});
