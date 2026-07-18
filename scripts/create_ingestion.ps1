$basePath = "ingestion"

New-Item -ItemType Directory -Force -Path $basePath | Out-Null

$files = @(
    "upload_to_pinecone.py",
    "requirements.txt",
    "config.py",
    "README.md"
)

foreach ($file in $files) {
    New-Item -ItemType File -Force -Path (Join-Path $basePath $file) | Out-Null
}

Write-Host ""
Write-Host "==========================================" -ForegroundColor Green
Write-Host " Ingestion Pipeline Created Successfully " -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green