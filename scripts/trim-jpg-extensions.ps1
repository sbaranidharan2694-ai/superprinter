# Rename any .jpg.jpeg or .jpeg files to .jpg (trim to "only jpg").
# Run from project root: .\scripts\trim-jpg-extensions.ps1
# When both file.jpg and file.jpg.jpeg exist, file.jpg.jpeg is renamed to file.jpg (overwrites).

$ErrorActionPreference = "Stop"
$imgRoot = "public/images"

if (-not (Test-Path $imgRoot)) {
    Write-Host "Folder $imgRoot not found. Run from project root."
    exit 1
}

$renamed = 0
Get-ChildItem -Path $imgRoot -Recurse -File | Where-Object {
    $_.Name -match '\.(jpg\.jpeg|jpeg)$'
} | ForEach-Object {
    $base = $_.BaseName -replace '\.jpg$', ''   # "co5.jpg.jpeg" -> BaseName "co5.jpg" -> base "co5"
    $dir = $_.DirectoryName
    $newPath = Join-Path $dir "$base.jpg"
    Move-Item -LiteralPath $_.FullName -Destination $newPath -Force
    Write-Host "Renamed: $($_.Name) -> $base.jpg"
    $renamed++
}

if ($renamed -eq 0) {
    Write-Host "No .jpg.jpeg or .jpeg files found to rename."
} else {
    Write-Host "Done. Renamed $renamed file(s) to .jpg"
}
