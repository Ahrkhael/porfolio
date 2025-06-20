import { readFile } from "fs/promises";
import { join } from "path";
import lqip from "lqip-modern";

export async function getBlurDataURL(imagePathRelative: string) {
  const absolutePath = join(process.cwd(), "public", imagePathRelative);
  const imageBuffer = await readFile(absolutePath);
  const { metadata } = await lqip(imageBuffer);
  return metadata.dataURIBase64;
}
