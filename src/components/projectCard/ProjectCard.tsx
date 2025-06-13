import Image from "next/image";
import clsx from "clsx";

type ProjectCardProps = {
  imageUrl: string;
  imageAlt?: string;
  imagePosition?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
};

export function ProjectCard({
  imageUrl,
  imageAlt = "",
  imagePosition = "right",
  children,
}: ProjectCardProps) {
  const isVertical = imagePosition === "top" || imagePosition === "bottom";
  const reverse = imagePosition === "bottom" || imagePosition === "right";

  return (
    <div
      className={clsx(
        "flex",
        isVertical ? "flex-col items-center" : "flex-row",
        reverse && "flex-col-reverse md:flex-row-reverse"
      )}
    >
      <div className="relative w-[350px] h-[20px] md:h-[350px]">
        <Image src={imageUrl} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
