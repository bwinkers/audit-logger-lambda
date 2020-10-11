#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { AuditLoggerStack } = require('../lib/audit_logger-stack');

const app = new cdk.App();
new AuditLoggerStack(app, 'AuditLoggerStack');
