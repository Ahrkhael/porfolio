import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type ProjectCardProps = {
  url: string;
  imageUrl: string;
  imageAlt?: string;
  imagePosition?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
};

export default function ProjectCard({
  url,
  imageUrl,
  imageAlt = "",
  imagePosition = "right",
  children,
}: ProjectCardProps) {
  const isVertical = imagePosition === "top" || imagePosition === "bottom";
  const reverse = imagePosition === "bottom" || imagePosition === "right";

  return (
    <Link
      target="blank"
      href={url}
      className={clsx(
        "flex",
        isVertical ? "flex-col items-center" : "flex-row",
        reverse && "flex-col-reverse md:flex-row-reverse"
      )}
    >
      <div className="relative w-[350px] h-[20px] md:h-[350px]">
        <Image src={imageUrl} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className="text-center w-[30dvw] p-4">{children}</div>
    </Link>
  );
}
