import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  const fileName = "cv.pdf";
  const filePath = path.join(process.cwd(), "public", "files", fileName);

  console.log(filePath);

  if (!fs.existsSync(filePath)) {
    return new NextResponse("File not found", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  const headers = new Headers({
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment; filename="${fileName}"`,
  });

  return new NextResponse(fileBuffer, { status: 200, headers });
}
