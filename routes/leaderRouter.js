const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('ROUTER send all the leads to you!');
})
.post((req, res, next) => {
    res.end('ROUTER add the lead: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('ROUTER PUT operation not supported on /lead');
})
.delete((req, res, next) => {
    res.end('ROUTER Deleting all lead');
});
leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('ROUTER Will send details of the lead: ' + req.params.leaderId +' to you!');
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('ROUTER POST operation not supported on /leaderId/'+ req.params.leaderId);
})
.put((req, res, next) => {
  res.write('Updating the dish: ' + req.params.leaderId + '\n');
  res.end('ROUTER Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('ROUTER Deleting lead: ' + req.params.leaderId);
});


module.exports = leaderRouter;