# ============================================
# Enterprise Knowledge Base Generator
# AI Incident Resolution System
# ============================================

$basePath = "knowledge-base"

$folders = @{
    "application" = @(
        "payment_api_http500.md",
        "checkout_timeout.md",
        "authentication_failure.md",
        "application_crash.md",
        "service_unavailable.md"
    )

    "database" = @(
        "database_down.md",
        "database_replication_failure.md",
        "database_deadlock.md",
        "slow_queries.md"
    )

    "network" = @(
        "dns_failure.md",
        "vpn_connection_failure.md",
        "load_balancer_failure.md",
        "packet_loss.md"
    )

    "cloud" = @(
        "aws_ec2_unreachable.md",
        "iam_permission_error.md",
        "s3_access_denied.md",
        "cloud_storage_failure.md"
    )

    "security" = @(
        "suspicious_login.md",
        "ddos_attack.md",
        "malware_detection.md"
    )

    "infrastructure" = @(
        "high_cpu_usage.md",
        "disk_space_full.md",
        "memory_leak.md"
    )

    "operations" = @(
        "incident_escalation.md",
        "incident_management_process.md"
    )
}

foreach ($folder in $folders.Keys) {

    $folderPath = Join-Path $basePath $folder

    New-Item -ItemType Directory -Force -Path $folderPath | Out-Null

    foreach ($file in $folders[$folder]) {

        $filePath = Join-Path $folderPath $file

        if (!(Test-Path $filePath)) {

@"
# Incident

## Overview

## Symptoms

## Possible Causes

## Verification Steps

## Resolution Steps

## Rollback Procedure

## Monitoring

## Escalation

## References

"@ | Set-Content $filePath

        }

    }

}

Write-Host ""
Write-Host "==============================================" -ForegroundColor Green
Write-Host " Enterprise Knowledge Base Generated" -ForegroundColor Green
Write-Host "==============================================" -ForegroundColor Green
Write-Host ""
Write-Host "Folders Created:" -ForegroundColor Yellow
Write-Host "  application"
Write-Host "  database"
Write-Host "  network"
Write-Host "  cloud"
Write-Host "  security"
Write-Host "  infrastructure"
Write-Host "  operations"
Write-Host ""
Write-Host "Total Runbooks: 25" -ForegroundColor Cyan