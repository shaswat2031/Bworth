$svg = Get-Content -Path "public/bworth logo.svg" -Raw
Copy-Item "public/bworth logo.svg" "public/bworth-logo.svg"
Copy-Item "public/bworth logo.svg" "public/logo.svg"

$lines = $svg -split "`r?`n"
$markLines = $lines | Where-Object { 
    $_ -match '<path' -and 
    $_ -notmatch 'fill="#010101"' -and 
    $_ -notmatch 'fill="#020202"' -and 
    $_ -notmatch 'fill="#030303"' -and 
    $_ -notmatch 'fill="#040404"' -and 
    $_ -notmatch 'fill="#050505"' -and 
    $_ -notmatch 'fill="#000000"'
}

$header = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="350 35 175 175" width="175" height="175">'
$footer = '</svg>'
$body = $markLines -join "`n"
$iconSvg = "$header`n$body`n$footer"

Set-Content -Path "public/icon.svg" -Value $iconSvg
Set-Content -Path "app/icon.svg" -Value $iconSvg
Write-Host "Success generating icon.svg with $($markLines.Count) paths"
