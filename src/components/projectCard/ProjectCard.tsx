import Image from "next/image";
import clsx from "clsx";

type ProjectCardProps = {
  imageUrl: string;
  imageAlt?: string;
  imageClassName?: string;
  blurDataURL?: string;
  textClassName?: string;
  children: React.ReactNode;
};

export default function ProjectCard({
  imageUrl,
  imageAlt = "",
  imageClassName = "",
  blurDataURL = "",
  textClassName = "",
  children,
}: ProjectCardProps) {
  return (
    <>
      <div className={clsx("relative w-full", imageClassName)}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="100vw"
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
          className="object-cover rounded-md"
        />
      </div>
      <div className={clsx("text-center w-full", textClassName)}>
        {children}
      </div>
    </>
  );
}
