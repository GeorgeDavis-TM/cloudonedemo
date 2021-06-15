// exports.postUpload = function (req, res) {

//     console.log("Data : " + req.body);

//     const BUCKET_NAME = "filestoragesecurity-ingestbucket";

//     const params = {
//         Bucket: BUCKET_NAME,
//         Key: req.body.name,
//         Body: req.body.contents,
//         Tagging: "Project=TrendMicro&BusinessCase=CloudOneDemo"
//     };

//     // console.log(params);

//     const s3 = new AWS.S3({apiVersion: '2006-03-01'});

//     s3.putObject(params, function(err, data) {
//         if (err) {
//             // console.log(err, err.stack); // an error occurred
//             return res(null, err.stack);
//         } else {
//             // console.log(data);           // successful response
//             return res(null, data);
//         }
//     });
// };

// Import required AWS SDK clients and commands for Node.js
const {
    S3Client,
    PutObjectCommand
} = require("@aws-sdk/client-s3");

exports.postUpload = function (req, res) {

    const objectParams = {
        Bucket: req.body.bucketName,
        Key: req.body.name,
        Body: req.body.contents,
        Tagging: "Project=TrendMicro&BusinessCase=CloudOneDemo"
    };

    // Create an S3 client service object
    const s3 = new S3Client({ region: req.body.region });

    const run = async () => {
        try {
            const results = await s3.send(new PutObjectCommand(objectParams));
            console.log("Successfully uploaded data to " + req.body.bucketName + "/" + req.body.name);
            console.log(results);
            return res(null, results);
        } catch (err) {
            console.log("Error", err);
            return res(null, err.stack);
        }
    };
    run();
};