import BackendTechnologies from "./technologies/BackendTechnologies";
import FrontendTechnologies from "./technologies/FrontendTechnologies";
import OtherTechnologies from "./technologies/OtherTechnologies";

type TechnologiesCardProps = {
  title: string;
  front: string;
  back: string;
  other: string;
};

export default function TechnologiesCard({
  title,
  front,
  back,
  other,
}: TechnologiesCardProps) {
  return (
    <div className="my-6">
      <p className="text-[36px] text-center my-2">{title}</p>
      <div className="flex place-content-between gap-[10dvw] justify-center">
        <div className="flex flex-col w-full px-20 py-6 bg-[var(--background-card)] border border-[var(--border-card)]">
          <p className="text-[36px] text-center my-4">{front}</p>
          <FrontendTechnologies />
          <p className="text-[36px] text-center my-4">{back}</p>
          <BackendTechnologies />
          <p className="text-[36px] text-center my-4">{other}</p>
          <OtherTechnologies />
        </div>
      </div>
    </div>
  );
}
