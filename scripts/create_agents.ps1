$basePath = "v2\agents"

$agents = @(
    "knowledge-retrieval",
    "root-cause-analysis",
    "resolution-recommendation",
    "human-approval",
    "notification",
    "memory",
    "audit-logging"
)

foreach ($agent in $agents) {

    $agentPath = Join-Path $basePath $agent

    $folders = @(
        "prompts",
        "schemas",
        "examples",
        "test-cases",
        "workflows"
    )

    foreach ($folder in $folders) {
        New-Item -ItemType Directory -Force -Path (Join-Path $agentPath $folder) | Out-Null
    }

    New-Item -ItemType File -Force -Path (Join-Path $agentPath "prompts\$($agent)_prompt.md") | Out-Null
    New-Item -ItemType File -Force -Path (Join-Path $agentPath "schemas\$($agent)_output_schema.json") | Out-Null
    New-Item -ItemType File -Force -Path (Join-Path $agentPath "examples\sample_$($agent)_cases.json") | Out-Null
    New-Item -ItemType File -Force -Path (Join-Path $agentPath "test-cases\$($agent)_test_cases.md") | Out-Null
    New-Item -ItemType File -Force -Path (Join-Path $agentPath "workflows\$($agent)_workflow.json") | Out-Null
}

Write-Host ""
Write-Host "=============================================" -ForegroundColor Green
Write-Host " Version 2 Agent Structure Created Successfully " -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green