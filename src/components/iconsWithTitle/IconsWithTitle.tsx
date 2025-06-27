import Image from "next/image";

type IconsWithTitleProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
};

export default function IconsWithTitle({
  src,
  width,
  height,
  alt,
  title,
}: IconsWithTitleProps) {
  return (
    <div className="flex-col w-[100px] h-[150px] place-content-center">
      <div className="relative flex justify-center items-center">
        <Image src={src} width={width} height={height} alt={alt} />
      </div>
      <p className="text-center py-2">{title}</p>
    </div>
  );
}
