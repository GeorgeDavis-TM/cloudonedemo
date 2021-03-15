const childprocess = require('child_process');

exports.getHealth = function(req, res) {  
    return res(null, "Howdy!");
};

exports.sendCommand = function(req, res) {
    childprocess.execSync(req.body.command)
    return res(null, "Howdy!" + req.body.command);
};