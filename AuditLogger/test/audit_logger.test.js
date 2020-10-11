const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const AuditLogger = require('../lib/audit_logger-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new AuditLogger.AuditLoggerStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
