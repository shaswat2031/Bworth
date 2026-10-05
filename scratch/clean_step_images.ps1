Add-Type -AssemblyName System.Drawing

function Remove-Badge($filename, $outname, $rects) {
    $src = [System.Drawing.Bitmap]::FromFile("e:\beworth\beworth\public\$filename")
    $bmp = New-Object System.Drawing.Bitmap($src.Width, $src.Height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.DrawImage($src, 0, 0, $src.Width, $src.Height)
    $src.Dispose()
    
    foreach ($r in $rects) {
        # Sample clean background color just outside the rect
        $sampleX = [Math]::Min($bmp.Width - 1, $r.X + $r.Width + 10)
        $sampleY = [Math]::Min($bmp.Height - 1, $r.Y + $r.Height + 10)
        $c = $bmp.GetPixel($sampleX, $sampleY)
        $brush = New-Object System.Drawing.SolidBrush($c)
        $g.FillRectangle($brush, $r.X, $r.Y, $r.Width, $r.Height)
        $brush.Dispose()
    }
    
    # Also clean any outer border artifacts by slightly cropping and scaling or soft framing
    $g.Dispose()
    $bmp.Save("e:\beworth\beworth\public\$outname", [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "Cleaned $filename -> $outname"
}

# Image 1 (Phone):
# "STEP 01" pill is roughly from X: 40 to 220, Y: 30 to 110
# Outer gray card frame on left/top: X: 0 to 60, Y: 0 to 60
$r1 = @(
    New-Object System.Drawing.Rectangle(0, 0, 240, 120),
    New-Object System.Drawing.Rectangle(600, 0, 150, 120)
)
Remove-Badge "step_3d_01_hd.png" "step_clean_01.png" $r1

# Image 2 (Box):
# "STEP 02" pill is from X: 40 to 240, Y: 30 to 120
# Top-right icon is from X: 600 to 740, Y: 20 to 120
$r2 = @(
    New-Object System.Drawing.Rectangle(0, 0, 260, 130),
    New-Object System.Drawing.Rectangle(580, 0, 170, 130)
)
Remove-Badge "step_3d_02_hd.png" "step_clean_02.png" $r2

# Image 3 (Courier):
# "STEP 03" pill is from X: 40 to 240, Y: 30 to 120
# Top-right icon is from X: 600 to 740, Y: 20 to 120
$r3 = @(
    New-Object System.Drawing.Rectangle(0, 0, 260, 130),
    New-Object System.Drawing.Rectangle(580, 0, 170, 130)
)
Remove-Badge "step_3d_03_hd.png" "step_clean_03.png" $r3
