import Image from "next/image";
import clsx from "clsx";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  aspectRatio?: string;
  borderRadius?: "none" | "md" | "lg" | "xl" | "2xl" | "full";
};

export default function Card({
  title,
  description,
  imageUrl,
  imageAlt = "",
  imagePosition = "left",
  aspectRatio = "aspect-[4/3]",
  borderRadius = "xl",
}: CardProps) {
  const isImageLeft = imagePosition === "left";

  // Mapeo del valor prop a clase Tailwind
  const borderRadiusClass = {
    none: "rounded-none",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  }[borderRadius];

  return (
    <div className="flex flex-col md:flex-row items-center mt-10 gap-6 px-60 py-20 bg-[var(--background-card)] border border-[var(--border-card)]">
      <div
        className={clsx(
          "relative w-full md:w-1/2",
          aspectRatio,
          isImageLeft ? "order-1" : "order-2"
        )}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className={clsx("object-cover", borderRadiusClass)}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div
        className={clsx("w-full md:w-1/2", isImageLeft ? "order-2" : "order-1")}
      >
        <p className="text-[2.5rem] font-bold mb-2">{title}</p>
        <p className="">{description}</p>
      </div>
    </div>
  );
}
