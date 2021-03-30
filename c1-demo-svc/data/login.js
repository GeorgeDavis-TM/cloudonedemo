var pool = require('./_mysql-client');

exports.postLogin = function (req, res) {
    console.log("Data : " + req.body.username + " " + req.body.password);
    //console.log("Data : " + JSON.stringify(req));
        
    pool.getConnection(function (err, connection) {
        if (err) {
            if (connection) {
                connection.release();
            }
            // var error = { "code": 503, "status": "Error creating connection to database.. " + err };
            // return res(null, error.status);
            console.log("Error : " + err);
            return;
        }
        console.log("\nConnected as Thread Id: " + connection.threadId);

        console.log("Attempting to verify login : " + req.body.username + " " + req.body.password);

        console.log("SELECT * FROM tbl_user_entries WHERE user_name = '" + req.body.username + "' AND user_pass = '" + req.body.password + "';")

        connection.query("SELECT * FROM tbl_user_entries WHERE user_name = '" + req.body.username + "' AND user_pass = '" + req.body.password + "';", function (err, rows) {
            connection.release();
            if (!err) {
                var response = JSON.stringify(rows[0]);
                console.log(response)
                return res(null, response);
            }            
        });

        connection.on('error', function (err) {
            var error = { "code": 503, "status": "Error creating connection to database.. " + err };
            return res(null, error.status);
        });
    });
};