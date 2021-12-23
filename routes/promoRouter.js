const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('ROUTER send all the promo to you!');
})
.post((req, res, next) => {
    res.end('ROUTER add the promo: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('ROUTER PUT operation not supported on /promo');
})
.delete((req, res, next) => {
    res.end('ROUTER Deleting all promo');
});
promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('ROUTER Will send details of the promo: ' + req.params.promoId +' to you!');
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('ROUTER POST operation not supported on /promo/'+ req.params.promoId);
})
.put((req, res, next) => {
  res.write('Updating the dish: ' + req.params.promoId + '\n');
  res.end('ROUTER Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('ROUTER Deleting promo: ' + req.params.promoId);
});


module.exports = promoRouter;