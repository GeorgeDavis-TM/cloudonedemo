var AWS = require('aws-sdk');

exports.postUpload = function (req, res) {

    console.log("Data : " + req.body);

    const BUCKET_NAME = "filestoragesecurity-ingestbucket";

    const params = {
        Bucket: BUCKET_NAME,
        Key: req.body.name,
        Body: req.body.contents,
        Tagging: "Project=TrendMicro&BusinessCase=CloudOneDemo"
    };

    // console.log(params);

    const s3 = new AWS.S3({apiVersion: '2006-03-01'});

    s3.putObject(params, function(err, data) {
        if (err) {
            // console.log(err, err.stack); // an error occurred
            return res(null, err.stack);
        } else {
            // console.log(data);           // successful response
            return res(null, data);
        }
    });
};