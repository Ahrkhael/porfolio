import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

// IP map -> timestamps[]
const downloadAttempts = new Map<string, number[]>();

const MAX_REQUESTS = 2;
const WINDOW_MS = 60 * 10000; // 10 minutes

export async function GET(req: NextRequest) {
  // IP client from 'x-forwarded-for'
  const forwardedFor = req.headers.get("x-forwarded-for") || "";
  const ip = forwardedFor.split(",")[0]?.trim() || "unknown";

  const now = Date.now();
  const attempts = downloadAttempts.get(ip) || [];

  const recentAttempts = attempts.filter(
    (timestamp) => now - timestamp < WINDOW_MS
  );

  if (recentAttempts.length >= MAX_REQUESTS) {
    return new NextResponse(
      "Too many download attempts. Please, try again later",
      {
        status: 429,
      }
    );
  }

  downloadAttempts.set(ip, [...recentAttempts, now]);

  const fileName = "cv.pdf";
  const filePath = path.join(process.cwd(), "public", "files", fileName);

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
