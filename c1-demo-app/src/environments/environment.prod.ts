export const environment = {
  production: true,
  serviceUrl: "http://3.129.164.225/api",
  c1AppSecApiKey: "d6df33c2dd6a40e781764329b5034d383ed5beae9c13473f951aedffcdfac04d",
  c1AppSecApiEndpointUrl: "https://api.app-protect.trendmicro.com",
  c1AppSecCloudWatchLogGroupName: "",
  c1AppSecCloudWatchLogQuery: "",
  c1WorkloadSecApiKey: "0C0F6851-AB41-04C6-D6A8-5479A257E932:9281026D-7A73-7628-AA40-8ED41784A52F:afZikNkBGQsnqwCuLs38h+b1U2FpzFAnVtFbthMf7Vs=",
  c1WorkloadSecApiEndpointUrl: "app.deepsecurity.trendmicro.com/api",
  c1WorkloadSecCloudWatchLogGroupName: "",
  c1WorkloadSecCloudWatchLogQuery: "",
  c1FileStorageSecCloudWatchLogGroupName: "/aws/lambda/AIO-TM-FileStorageSecurity-Demo-Scan-ScannerLambda-BRRBF3F7AXCS",
  c1FileStorageSecCloudWatchLogQuery: "fields @timestamp, @message, ispresent(scanning_result.Findings.0.malware) as infected, scanning_result.Findings.0.malware as malware, file_url | filter @message like 'scanner result' | sort @timestamp desc | display @timestamp, scanner_status_message, infected, malware, file_url",
  c1FileStorageSecS3BucketName: "filestoragesecurity-ingestbucket",
  c1DemoHostedAwsRegion: "us-east-2"
};
