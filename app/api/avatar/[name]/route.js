import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const rootImg = path.join(process.cwd(), "image.png");
  const targetPublic = path.join(process.cwd(), "public", "venkatesh.png");

  try {
    if (fs.existsSync(rootImg)) {
      const buffer = fs.readFileSync(rootImg);
      try {
        fs.writeFileSync(targetPublic, buffer);
      } catch (e) {
        console.error("Public sync warning:", e);
      }

      return new NextResponse(buffer, {
        headers: {
          "Content-Type": "image/png",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }
  } catch (err) {
    console.error("Avatar serve error:", err);
  }

  return new NextResponse("Not found", { status: 404 });
}
