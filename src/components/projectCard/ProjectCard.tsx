import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type ProjectCardProps = {
  url: string;
  imageUrl: string;
  imageAlt?: string;
  blurDataURL?: string;
  imagePosition?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
};

export default function ProjectCard({
  url,
  imageUrl,
  imageAlt = "",
  blurDataURL = "",
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
        "flex align-middle ",
        isVertical ? "flex-col items-center" : "flex-row",
        reverse && (isVertical ? "flex-col-reverse" : "md:flex-row-reverse"),
        "w-full h-full max-w-[500px]"
      )}
    >
      <div className="relative w-full max-w-[350px] aspect-square">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
          className="object-cover rounded-md"
        />
      </div>
      <div className="text-center w-full max-w-[400px] p-4">{children}</div>
    </Link>
  );
}
