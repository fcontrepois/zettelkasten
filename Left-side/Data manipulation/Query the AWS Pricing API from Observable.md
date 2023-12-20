---
publish: true
tags: data
created: 2022-03-19
updated: 2022-03-19
---

This, like the [[Reading from an S3 stream in Observable|S3]] article is very rough. It would be better to create a new class like the amazing [Athena Client class](https://observablehq.com/@chriszs/aws-athena-client)

```js
AwsPricingSDK = import("https://cdn.skypack.dev/@aws-sdk/client-pricing")
```

```js
AwsPricingClient = {
  try {
    return new AwsPricingSDK.PricingClient({
      region,
      credentials: {
        accessKeyId: Secret("AWS_ACCESS_KEY_ID"),
        secretAccessKey: Secret("AWS_SECRET_ACCESS_KEY")
      }
    })
  } catch {
    return false;
  }
}
```

```js
params = ({
  FormatVersion: "aws_v1", 
  MaxResults: 1, 
  ServiceCode: "AmazonEC2"
 })
```

```js
await AwsPricingClient.send(
      new AwsPricingSDK.DescribeServicesCommand(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
 }))
```