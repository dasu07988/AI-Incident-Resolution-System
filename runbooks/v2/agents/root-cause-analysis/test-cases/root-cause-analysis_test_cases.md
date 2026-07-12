# Agent 04 - Root Cause Analysis

## Test Cases

This document describes the manual validation scenarios for the Root Cause Analysis Agent.

---

# Objective

Validate that the Root Cause Analysis Agent correctly identifies the most probable technical root cause using:

- Incident description
- Classification result
- Severity assessment
- Retrieved enterprise knowledge

---

# Test Environment

Model

- Google Gemini

Vector Database

- Pinecone

Knowledge Base

- 26 Enterprise Runbooks

Output Format

- Structured JSON

---

# Test Case 01

### ID

RCA-001

### Scenario

Payment API returns HTTP 500 errors after deployment.

### Expected Root Cause

Database connection pool exhaustion

### Expected Confidence

>= 0.90

### Expected Result

PASS if the primary root cause matches.

---

# Test Case 02

### ID

RCA-002

### Scenario

Users cannot establish VPN connections.

### Expected Root Cause

VPN gateway outage

### Expected Confidence

>= 0.90

### Expected Result

PASS if VPN gateway outage is identified.

---

# Test Case 03

### ID

RCA-003

### Scenario

Primary database server is unreachable.

### Expected Root Cause

Database server outage

### Expected Confidence

>= 0.90

### Expected Result

PASS if database outage is identified.

---

# Test Case 04

### ID

RCA-004

### Scenario

CPU utilization exceeds 98% after Kubernetes deployment.

### Expected Root Cause

Resource exhaustion following deployment

### Expected Confidence

>= 0.85

### Expected Result

PASS if resource exhaustion is identified.

---

# Test Case 05

### ID

RCA-005

### Scenario

Users cannot authenticate after identity provider maintenance.

### Expected Root Cause

Identity provider service failure

### Expected Confidence

>= 0.90

### Expected Result

PASS if identity provider failure is identified.

---

# Acceptance Criteria

The agent must:

- Identify the correct primary root cause.
- Use retrieved enterprise knowledge.
- Produce valid JSON.
- Include supporting evidence.
- Return a confidence score.
- Avoid unsupported assumptions.

---

# Success Criteria

Minimum pass rate:

80%

Recommended production pass rate:

95%+