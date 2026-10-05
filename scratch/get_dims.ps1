Add-Type -AssemblyName System.Drawing

@("step_3d_01_hd.png", "step_3d_02_hd.png", "step_3d_03_hd.png") | ForEach-Object {
    $img = [System.Drawing.Bitmap]::FromFile("e:\beworth\beworth\public\$_")
    Write-Host "$_ : $($img.Width) x $($img.Height)"
    $img.Dispose()
}
