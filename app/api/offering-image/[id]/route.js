import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const imagesMap = {
  "1": "bworth_offering_logistics_1791176934835.jpg",
  "2": "bworth_growth_guarantee_1791176956036.jpg",
  "3": "bworth_quality_inspection_1791176975394.jpg",
  "offering_01": "bworth_offering_logistics_1791176934835.jpg",
  "offering_02": "bworth_growth_guarantee_1791176956036.jpg",
  "offering_03": "bworth_quality_inspection_1791176975394.jpg",
};

export async function GET(request, { params }) {
  const { id } = await params;
  const filename = imagesMap[id] || imagesMap["1"];
  const artifactDir = "C:\\Users\\prasa\\.gemini\\antigravity-ide\\brain\\03d73eb7-4436-49bb-b616-f98154f4ffd0";
  const sourcePath = path.join(artifactDir, filename);

  try {
    if (fs.existsSync(sourcePath)) {
      const fileBuffer = fs.readFileSync(sourcePath);

      // Also copy to public directory for static asset fallback
      try {
        const publicTarget = path.join(process.cwd(), "public", `offering_0${id.replace(/\D/g, "") || "1"}.jpg`);
        fs.writeFileSync(publicTarget, fileBuffer);
      } catch (copyErr) {
        console.error("Public sync warning:", copyErr);
      }

      return new NextResponse(fileBuffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }
  } catch (err) {
    console.error("Image serve error:", err);
  }

  return new NextResponse("Image not found", { status: 404 });
}
