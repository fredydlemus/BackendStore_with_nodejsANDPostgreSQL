const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['https://localhost:8080'];
const options = {
  origin: (origin, callaback) =>{
    if (whitelist.includes(origin) || !origin){
      callaback(null, true);
    }else{
      callaback(new Error('no permited'));
    }
  }
};

app.use(cors(options));

app.get("/", (req, res) =>{
res.send('Hello my server in express');
});

 app.get("/new-route", (req, res) =>{
 res.send('Hello i am a new endpoint');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () =>{
  console.log('My port ' + port);
});
