import BackendTechnologies from "./technologies/BackendTechnologies";
import FrontendTechnologies from "./technologies/FrontendTechnologies";
import OtherTechnologies from "./technologies/OtherTechnologies";

type TechnologiesCardProps = {
  front: string;
  back: string;
  other: string;
};

export default function TechnologiesCard({
  front,
  back,
  other,
}: TechnologiesCardProps) {
  return (
    <>
      <p className="text-[36px] text-center my-4">{front}</p>
      <FrontendTechnologies />
      <p className="text-[36px] text-center my-4">{back}</p>
      <BackendTechnologies />
      <p className="text-[36px] text-center my-4">{other}</p>
      <OtherTechnologies />
    </>
  );
}
