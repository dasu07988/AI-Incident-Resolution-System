# 8. Webhook Errors

## Overview

The Webhook Service is responsible for delivering real-time payment notifications from the ApexPay Payment Gateway to merchant applications.

Webhook failures may prevent merchants from receiving payment status updates, leading to transaction inconsistencies, delayed order processing, and customer support issues.

The following error codes describe the most common webhook-related incidents and their recommended troubleshooting procedures.

---

# Error Code: ERR_WEBHOOK_TIMEOUT

## Description

The webhook endpoint did not respond within the configured timeout period.

## Affected Component

Webhook Delivery Service

## Possible Causes

- Merchant server is overloaded.
- Slow network connection.
- Webhook endpoint is unavailable.
- Server processing delay.

## Symptoms

- Webhook delivery timeout.
- Payment status not updated.
- Retry attempts initiated.

## Sample Log

2026-07-06 17:05:12 ERROR Webhook request timed out (ERR_WEBHOOK_TIMEOUT)

## Resolution Steps

1. Verify the merchant server status.
2. Check network connectivity.
3. Confirm endpoint availability.
4. Retry webhook delivery.
5. Monitor response time.

## Prevention

- Optimize endpoint performance.
- Configure automatic retries.
- Monitor webhook response times.

## Severity

High

---

# Error Code: ERR_WEBHOOK_SIGNATURE

## Description

Webhook signature validation failed.

## Affected Component

Webhook Security Service

## Possible Causes

- Invalid signing secret.
- Modified request payload.
- Incorrect signature generation.
- Secret key mismatch.

## Symptoms

- Incoming webhook rejected.
- Signature validation error.
- Authentication failure.

## Sample Log

2026-07-06 17:18:40 ERROR Invalid webhook signature (ERR_WEBHOOK_SIGNATURE)

## Resolution Steps

1. Verify the webhook signing secret.
2. Compare generated signatures.
3. Update incorrect secret keys.
4. Perform a webhook validation test.

## Prevention

- Store secrets securely.
- Rotate signing secrets periodically.
- Validate signatures before processing.

## Severity

High

---

# Error Code: ERR_WEBHOOK_SSL

## Description

Secure webhook delivery failed because of an SSL/TLS certificate validation error.

## Affected Component

Webhook Security Service

## Possible Causes

- Expired SSL certificate.
- Invalid certificate chain.
- Self-signed certificate.
- Certificate hostname mismatch.

## Symptoms

- HTTPS connection failed.
- Secure webhook delivery rejected.
- SSL verification errors.

## Sample Log

2026-07-06 17:42:08 ERROR SSL certificate validation failed (ERR_WEBHOOK_SSL)

## Resolution Steps

1. Verify SSL certificate validity.
2. Replace expired certificates.
3. Confirm certificate chain.
4. Retry webhook delivery.

## Prevention

- Monitor certificate expiration.
- Renew certificates before expiry.
- Use trusted Certificate Authorities.

## Severity

High

---

# Error Code: ERR_WEBHOOK_PAYLOAD

## Description

The webhook payload format is invalid or incomplete.

## Affected Component

Webhook Payload Validation Service

## Possible Causes

- Missing required fields.
- Incorrect JSON structure.
- Invalid data types.
- Corrupted request payload.

## Symptoms

- Payload validation failure.
- Merchant application rejects webhook.
- HTTP 400 Bad Request.

## Sample Log

2026-07-06 18:04:51 ERROR Invalid webhook payload (ERR_WEBHOOK_PAYLOAD)

## Resolution Steps

1. Validate the JSON payload.
2. Check required fields.
3. Correct invalid data.
4. Resend the webhook request.

## Prevention

- Validate payload before sending.
- Follow API schema specifications.
- Implement automated payload validation.

## Severity

Medium

---

# Error Code: ERR_WEBHOOK_RETRY

## Description

Maximum webhook retry attempts exceeded without successful delivery.

## Affected Component

Webhook Retry Service

## Possible Causes

- Merchant endpoint continuously unavailable.
- Persistent network failures.
- Incorrect webhook URL.
- Server downtime.

## Symptoms

- Webhook permanently failed.
- Retry limit exceeded.
- Merchant not notified.

## Sample Log

2026-07-06 18:26:33 ERROR Maximum webhook retries exceeded (ERR_WEBHOOK_RETRY)

## Resolution Steps

1. Verify merchant endpoint availability.
2. Confirm webhook URL configuration.
3. Resolve network issues.
4. Manually resend webhook if required.

## Prevention

- Monitor webhook success rates.
- Configure endpoint health monitoring.
- Notify merchants of repeated failures.

## Severity

Medium