var loginRepo = require('../data/login');

exports.postLogin = function (req, res) {
    console.log("\nService Contacted...");  
    try {
        if(!req.body.username || !req.body.password) {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.body.username + " Password : " + req.body.password);
        loginRepo.postLogin(req, function (err, result) {            
            if(err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();                
            }
            if(!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();
            }
            if(result) {
                console.log("Status: Success | Status Code: 200 | " + result);
                return res.status(200).set('Content-Type', 'application/json').send(result).end();
            }
        });
    }
    catch(err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {    
        console.log("Service Over and out..");
    }
};