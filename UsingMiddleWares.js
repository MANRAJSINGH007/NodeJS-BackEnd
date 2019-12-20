// signifies Middleware
// express.urlencoded() is a function which is being called before every controller that is encoded
app.use(express.urlencoded());

// middleware1
// next passes on what changes have been done and calls the next middleware
app.use(function(req, res, next) {
    req.name = 'abc';
    console.log('middleware1 called');
    next();
});

//middleware2 
app.use(function(req, res, next){
    console.log(req.name);
    next();
});
