type StudiesCardProps = {
  title: string;
  institution: string;
  dates?: string;
  link?: string;
};

export default function StudiesCard({
  title,
  institution,
  dates = "",
  link = "",
}: StudiesCardProps) {
  return (
    <div className="flex flex-col w-[350px] min-w-[350px] h-[300px] min-h-[300px]: py-6 bg-[var(--background-card-secondary)]">
      <p className="h-[60px] text-center whitespace-pre-line mx-5 my-2">
        {title}
      </p>
      <p className="text-center my-2 whitespace-pre-line">{institution}</p>
      {dates && <p className="text-center my-2">{dates}</p>}
      {link && (
        <a
          href={link}
          className="text-blue-500 underline text-center break-all my-2"
        >
          {link}
        </a>
      )}
    </div>
  );
}
