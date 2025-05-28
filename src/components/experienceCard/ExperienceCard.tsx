type StudiesCardProps = {
  title: string;
  company: string;
  description: string;
  dates?: string;
  link?: string;
};

export default function ExperienceCard({
  title,
  company,
  description,
  dates = "",
  link = "",
}: StudiesCardProps) {
  return (
    <div className="flex flex-col w-[80dvw] px-20 py-6 bg-[var(--background-card)] border border-[var(--border-card)]">
      <p className="text-center whitespace-pre-line mx-5 my-2">{title}</p>
      <p className="text-center my-2 whitespace-pre-line">{company}</p>
      {dates && <p className="text-center my-2">{dates}</p>}
      <p className="text-center my-2 whitespace-pre-line">{description}</p>

      {link && (
        <a href={link} className="text-blue-500 underline text-center my-2">
          {link}
        </a>
      )}
    </div>
  );
}
