type ExperienceCardProps = {
  job: string;
  company: string;
  description: string;
  dates?: string;
  link?: string;
};

export default function ExperienceCard({
  job,
  company,
  description,
  dates = "",
  link = "",
}: ExperienceCardProps) {
  return (
    <>
      <p className="text-center text-2xl whitespace-pre-line mx-5 my-2">
        {job}
      </p>
      <p className="text-center text-2xl my-2 whitespace-pre-line">{company}</p>
      {dates && <p className="text-center my-2">{dates}</p>}
      <p className="text-center mx-auto hidden md:block md:w-[40dvw] my-2 whitespace-pre-line">
        {description}
      </p>

      {link && (
        <a href={link} className="text-blue-500 underline text-center my-2">
          {link}
        </a>
      )}
    </>
  );
}
