// components/Card.tsx
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
    <div className="flex flex-col md:flex-row items-center gap-6 py-20 px-80 rounded-2xl shadow-md">
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
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="">{description}</p>
      </div>
    </div>
  );
}
