Add-Type -AssemblyName System.Drawing

function Clean-Image($filename, $outname, $pillRect, $iconRect) {
    $srcPath = "e:\beworth\beworth\public\$filename"
    $outPath = "e:\beworth\beworth\public\$outname"
    
    $bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
    $w = $bmp.Width
    $h = $bmp.Height
    Write-Output "Processing $filename ($w x $h)"
    
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    
    # Fill pillRect with ambient background color
    if ($pillRect) {
        $bgPixel = $bmp.GetPixel(10, 10)
        $brush = New-Object System.Drawing.SolidBrush($bgPixel)
        $g.FillRectangle($brush, $pillRect.X, $pillRect.Y, $pillRect.Width, $pillRect.Height)
        $brush.Dispose()
    }
    
    # Fill iconRect with ambient background color
    if ($iconRect) {
        $bgPixel2 = $bmp.GetPixel($w - 10, 10)
        $brush2 = New-Object System.Drawing.SolidBrush($bgPixel2)
        $g.FillRectangle($brush2, $iconRect.X, $iconRect.Y, $iconRect.Width, $iconRect.Height)
        $brush2.Dispose()
    }
    
    $g.Dispose()
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "Saved $outPath"
}

# Image 1 (Phone): pill is around top-left (e.g. 5% to 35% width, 5% to 25% height)
# Image 2 (Box): pill is around top-left
# Image 3 (Courier): pill is top-left, icon is top-right
