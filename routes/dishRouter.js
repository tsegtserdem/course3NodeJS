const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('ROUTES send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('ROUTES add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('ROUTER PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('ROUTER Deleting all dishes');
});
dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('ROUTER Will send details of the dish: ' + req.params.dishId +' to you!');
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('ROUTER POST operation not supported on /dishes/'+ req.params.dishId);
})
.put((req, res, next) => {
  res.write('Updating the dish: ' + req.params.dishId + '\n');
  res.end('ROUTER Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('ROUTER Deleting dish: ' + req.params.dishId);
});


module.exports = dishRouter;