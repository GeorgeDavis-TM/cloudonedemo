const {
    CloudWatchLogsClient,
    StartQueryCommand,
    GetQueryResultsCommand
} = require("@aws-sdk/client-cloudwatch-logs");

exports.getFssTicks = function (req, res) {

    console.log("Data : " + JSON.stringify(req.query));

    const queryParams = {
        logGroupName: req.query.logGroupName,
        startTime: parseInt(req.query.startTime),
        endTime: parseInt(req.query.endTime),
        queryString: req.query.logQuery,
        limit: parseInt(req.query.limit)
    }

    const cwLogsInsights = new CloudWatchLogsClient({ region: req.query.region });

    // this.queryId = ""
    // this.queryResult = {}

    const startQueryCommand = async () => {
        try {
            const queryData = await cwLogsInsights.send(new StartQueryCommand(queryParams));
            console.log("Success - ", queryData);

            // this.queryId = queryData["queryId"]
            return queryData["queryId"]

            // setTimeout(() => {
            //     const commandParams = {
            //         queryId: queryData["queryId"]
            //     }
            //     const commandData = await cwLogsInsights.send(new GetQueryResultsCommand(commandParams));
            //     console.log("Success", commandData);
            //     return res(null, commandData)
            // },3000);

            // setInterval(() => { 
            // const commandParams = {
            //     queryId: queryData["queryId"]
            // }
            // const commandData = await cwLogsInsights.send(new GetQueryResultsCommand(commandParams));
            // console.log("Success", commandData);
            // return res(null, commandData)
            // }, 3000);
            
        } catch (err) {
            console.log("Error", err);
            return res(null, err.stack)
        }
    };

    const getQueryResultsCommand = async (queryId) => {
        const commandParams = {
            queryId: queryId
        }
        try {
            const commandData = await cwLogsInsights.send(new GetQueryResultsCommand(commandParams));
            console.log("Success - ", commandData);            
            return commandData;
        } catch (err) {
            console.log("Error", err);
            return res(null, err.stack)
        }
    };
    
    startQueryCommand().then((data) => {        
        console.log(data)
        // function checkResults() {
        //     getQueryResultsResponse = getQueryResultsCommand(this.queryId)
        //     if (getQueryResultsResponse["status"] == "Complete") {
        //         console.log(JSON.stringify(getQueryResultsResponse["results"]));                            
        //         this.queryResult = getQueryResultsResponse["results"]
        //         clearInterval(timer);
        //     }
        // }
        var timer = setInterval(() => {
            getQueryResultsCommand(data).then((data) => {
                // console.log(data["results"]);
                if (data["status"] == "Complete") {                           
                    // this.queryResult = data["results"]                    
                    clearInterval(timer);
                    return res(null, JSON.stringify(data["results"]));
                }
            })            
        }, 3000);        
    })

    // console.dir(JSON.stringify(this.queryResult));
    // return res(null, JSON.stringify(this.queryResult))

    // {
    //     'results': [
    //         [
    //             {
    //                 'field': 'string',
    //                 'value': 'string'
    //             },
    //         ],
    //     ],
    //     'statistics': {
    //         'recordsMatched': 123.0,
    //         'recordsScanned': 123.0,
    //         'bytesScanned': 123.0
    //     },
    //     'status': 'Scheduled'|'Running'|'Complete'|'Failed'|'Cancelled'
    // }
};

exports.getAppSecTicks = function (req, res) {

    console.log("Data : " + JSON.stringify(req.query));

    const cwLogsInsights = new AWS.CloudWatchLogsClient({ region: req.query.region });

    const logGroupName = "filestoragesecurity-ingestbucket";
};

exports.getWorkloadSecTicks = function (req, res) {

    console.log("Data : " + JSON.stringify(req.query));

    const cwLogsInsights = new AWS.CloudWatchLogsClient({ region: req.query.region });

    const logGroupName = "filestoragesecurity-ingestbucket";
};