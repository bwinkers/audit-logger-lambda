import * as lambda from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import { CfnOutput } from "@aws-cdk/core";

export class AuditLoggerStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Defines an AWS Lambda resource
    const logger = new lambda.Function(this, 'LoggerHandler', {
      runtime: lambda.Runtime.NODEJS_12_X,    // execution environment
      code: lambda.Code.fromAsset('lambda'),  // code loaded from "lambda" directory
      handler: 'logger.handler'                // file is "logger", function is "handler"
    });

    // Defines our DynamoDB Resource
    const table = new dynamodb.Table(this, 'Table', {
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST, // Use on-demand billing mode
      partitionKey: { name: 'PK', type: dynamodb.AttributeType.STRING },
      sortKey: { name: "SK", type: dynamodb.AttributeType.STRING },
    });

    // Output values
    new CfnOutput(this, "TableName", {
      value: table.tableName,
      exportName: 'AuditLogTableName',
    });
    new CfnOutput(this, "TableArn", {
      value: table.tableArn,
      exportName: 'AuditLogTableArn',
    });
  }
}
