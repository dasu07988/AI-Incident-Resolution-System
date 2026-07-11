# Severity Assessment Agent - Test Cases

## Purpose

This document defines the validation test cases for the Enterprise Severity Assessment Agent.

The objective is to verify that the AI agent consistently assigns the correct severity, priority, business impact, SLA response time, and human approval requirement according to enterprise incident management rules.

---

# Test Case 01

## Incident

Payment API returns HTTP 500.

Customers cannot complete online payments.

## Expected Output

Severity: Critical

Priority: P1

Business Impact: High

SLA Response: 30 Minutes

Human Approval: Yes

---

# Test Case 02

## Incident

Primary production database is unavailable.

## Expected Output

Severity: Critical

Priority: P1

Business Impact: High

SLA Response: 30 Minutes

Human Approval: Yes

---

# Test Case 03

## Incident

Employees cannot access the Single Sign-On service.

## Expected Output

Severity: High

Priority: P2

Business Impact: High

SLA Response: 120 Minutes

Human Approval: Yes

---

# Test Case 04

## Incident

Corporate VPN is unavailable for remote employees.

## Expected Output

Severity: High

Priority: P2

Business Impact: High

SLA Response: 120 Minutes

Human Approval: Yes

---

# Test Case 05

## Incident

Application cannot access cloud storage.

## Expected Output

Severity: Medium

Priority: P3

Business Impact: Medium

SLA Response: 480 Minutes

Human Approval: No

---

# Test Case 06

## Incident

Application server CPU utilization remains above 95%.

## Expected Output

Severity: Medium

Priority: P3

Business Impact: Medium

SLA Response: 480 Minutes

Human Approval: No

---

# Test Case 07

## Incident

Order confirmation emails are delayed.

## Expected Output

Severity: Low

Priority: P4

Business Impact: Low

SLA Response: 1440 Minutes

Human Approval: No

---

# Test Case 08

## Incident

Incorrect configuration prevents a feature from loading.

## Expected Output

Severity: Low

Priority: P4

Business Impact: Low

SLA Response: 1440 Minutes

Human Approval: No

---

# Test Case 09

## Incident

Multiple suspicious login attempts detected.

## Expected Output

Severity: Critical

Priority: P1

Business Impact: High

SLA Response: 30 Minutes

Human Approval: Yes

---

# Test Case 10

## Incident

Inventory updates are delayed.

## Expected Output

Severity: Medium

Priority: P3

Business Impact: Medium

SLA Response: 480 Minutes

Human Approval: No

---

# Validation Checklist

The AI agent must correctly determine:

- Severity Level
- Priority
- Business Impact
- SLA Response Time
- Human Approval Requirement
- Confidence Score

---

# Success Criteria

The agent is considered successful when:

- Severity is correctly classified.
- Priority matches enterprise rules.
- Business impact is correctly identified.
- SLA response time follows policy.
- Human approval is correctly assigned.
- Valid JSON output is generated for every incident.