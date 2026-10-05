Add-Type -AssemblyName System.Drawing

function Inspect-Colors($imgName) {
    $img = [System.Drawing.Bitmap]::FromFile("e:\beworth\beworth\public\$imgName")
    Write-Host "=== $imgName ==="
    Write-Host "Top-Left (10,10):" ($img.GetPixel(10,10))
    Write-Host "Top-Right (740,10):" ($img.GetPixel(740,10))
    Write-Host "Mid-Left (10,340):" ($img.GetPixel(10,340))
    Write-Host "Bottom-Left (10,660):" ($img.GetPixel(10,660))
    Write-Host "Bottom-Right (740,660):" ($img.GetPixel(740,660))
    $img.Dispose()
}

Inspect-Colors "step_3d_01_hd.png"
Inspect-Colors "step_3d_02_hd.png"
Inspect-Colors "step_3d_03_hd.png"
