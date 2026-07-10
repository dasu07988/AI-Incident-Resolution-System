# Incident Classification Test Cases

## Purpose

This document defines the evaluation strategy used to validate the Incident Classification Agent.

The objective is to measure classification accuracy, robustness, consistency, and structured output quality before integrating the agent into the enterprise workflow.

---

# Test Case 1 – Exact Match

## Objective

Verify that the AI correctly classifies a straightforward incident.

### Example

Input

Payment API returns HTTP 500 errors.

Expected Category

API

Expected Result

PASS

---

# Test Case 2 – Semantic Match

## Objective

Verify semantic understanding.

### Example

Input

Customers cannot complete checkout because payment requests fail.

Expected Category

Payment

Expected Result

PASS

---

# Test Case 3 – Synonyms

## Objective

Verify synonym recognition.

### Example

Input

Database server is unreachable.

Expected Category

Database

Expected Result

PASS

---

# Test Case 4 – Misspellings

## Objective

Verify robustness against typing mistakes.

### Example

Input

Databse conection timeout.

Expected Category

Database

Expected Result

PASS

---

# Test Case 5 – Multi-Intent Incident

## Objective

Verify classification when multiple issues are present.

### Example

Input

Authentication fails and payment service returns HTTP 500.

Expected Category

Authentication

Expected Result

PASS

---

# Test Case 6 – Ambiguous Incident

## Objective

Verify AI behaviour when insufficient information is available.

### Example

Input

Application is not working.

Expected Category

Unknown

Expected Result

PASS

---

# Test Case 7 – Unknown Category

## Objective

Verify handling of unsupported incidents.

### Example

Input

Coffee machine in the office is broken.

Expected Category

Unknown

Expected Result

PASS

---

# Test Case 8 – JSON Validation

## Objective

Verify that the AI always returns valid structured JSON.

Validation Rules

- Required fields must exist.
- Confidence must be between 0.0 and 1.0.
- Incident category must belong to the allowed categories.
- No additional properties are allowed.

Expected Result

PASS

---

# Success Criteria

The Incident Classification Agent should:

- Correctly classify enterprise incidents.
- Return valid JSON.
- Produce consistent outputs.
- Avoid hallucinated categories.
- Handle ambiguous incidents safely.
