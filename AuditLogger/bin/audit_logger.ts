#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AuditLoggerStack } from '../lib/audit_logger-stack';

const app = new cdk.App();
new AuditLoggerStack(app, 'AuditLoggerStack');
