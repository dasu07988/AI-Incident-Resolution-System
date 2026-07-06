# 🚀 AI-Powered Enterprise Incident Resolution System

> An Enterprise AI-powered Incident Resolution platform built using **n8n**, **Google Gemini**, **Pinecone Vector Database**, and **Retrieval-Augmented Generation (RAG)** to provide intelligent, context-aware support using internal company documentation.

![Status](https://img.shields.io/badge/Status-Completed-success)
![n8n](https://img.shields.io/badge/n8n-AI%20Workflow-orange)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-blue)
![Pinecone](https://img.shields.io/badge/Pinecone-Vector%20Database-green)
![RAG](https://img.shields.io/badge/RAG-Retrieval%20Augmented%20Generation-purple)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

# 📖 Project Overview

Enterprise support teams often spend valuable time searching through internal documentation, runbooks, troubleshooting guides, and knowledge bases to resolve incidents.

This project demonstrates how **Retrieval-Augmented Generation (RAG)** can be used to build an AI assistant capable of retrieving relevant enterprise documentation before generating accurate responses.

Instead of relying solely on Large Language Models, the system combines **semantic search**, **vector databases**, and **enterprise documentation** to produce context-aware answers.

---

# 🏢 Business Scenario

This project simulates an enterprise payment company called **ApexPay FinTech Solutions**.

The organization maintains internal documentation covering:

- Company Overview
- API Authentication
- Database Troubleshooting
- Payment Processing Errors
- Monitoring Procedures
- Escalation Guidelines
- Incident Resolution Runbooks

Employees can ask technical questions in natural language and receive AI-generated answers based only on the company's internal knowledge.

---

# ✨ Features

- 🤖 AI-powered Enterprise Assistant
- 📚 Retrieval-Augmented Generation (RAG)
- 🔍 Semantic Search
- 🧠 Google Gemini Integration
- 🗂 Pinecone Vector Database
- 📄 Enterprise Knowledge Base
- 💬 Natural Language Question Answering
- 🔄 Automated n8n Workflow
- ⚡ Context-aware Incident Resolution

---

# 🛠 Technology Stack

| Technology | Purpose |
|------------|---------|
| n8n | Workflow Automation |
| Google Gemini 2.5 Flash | Large Language Model |
| Google Gemini Embeddings | Vector Embeddings |
| Pinecone | Vector Database |
| Google Drive | Knowledge Base Storage |
| Docker | Local Deployment |
| Markdown | Enterprise Documentation |

---

# 🏗 System Architecture

```
Employee Question
        │
        ▼
AI Agent (n8n)
        │
        ▼
Vector Store Tool
        │
        ▼
Pinecone Semantic Search
        │
        ▼
Relevant Enterprise Documents
        │
        ▼
Google Gemini
        │
        ▼
Context-Aware Response
```

---

# 🔄 Workflow

## Knowledge Ingestion Pipeline

Google Drive

↓

Read Documents

↓

Text Chunking

↓

Generate Embeddings

↓

Store in Pinecone Vector Database

---

## AI Query Pipeline

Employee Question

↓

AI Agent

↓

Retrieve Relevant Documents

↓

Generate AI Response

↓

Return Final Answer

---

# 📂 Repository Structure

```
AI-Incident-Resolution-System

├── documentation
│   ├── architecture
│   └── research-notes
│
├── knowledge-base
│
├── runbooks
│   └── v1
│
├── sample-incidents
│
├── screenshots
│
├── workflows
│
├── README.md
│
└── .gitignore
```

---

# 💬 Example Questions

- What is ApexPay?
- How do I fix a 401 Unauthorized error?
- How do I resolve a database connection timeout?
- How should payment failures be handled?
- When should incidents be escalated?
- What causes API authentication failures?

---

# 📚 Knowledge Base

The knowledge base currently includes:

- Company Overview
- Payment Platform
- Incident Severity
- API Authentication
- Payment Errors
- Database Errors
- Queue Errors
- Webhook Errors
- Monitoring Checklist
- Escalation Procedure

---

# 🎯 Skills Demonstrated

- Retrieval-Augmented Generation (RAG)
- Semantic Search
- Vector Databases
- AI Workflow Automation
- Prompt Engineering
- Enterprise Documentation
- Google Gemini API
- Pinecone Integration
- AI Agents
- n8n Automation

---

# 🚀 Future Improvements

- Multi-Agent Architecture
- Automatic Incident Classification
- Incident Priority Detection
- Jira Integration
- ServiceNow Integration
- Slack Notifications
- Email Alerts
- Root Cause Analysis
- Incident Dashboard

---

# 👩‍💻 Author

**Yashadhi Jayasundara**



