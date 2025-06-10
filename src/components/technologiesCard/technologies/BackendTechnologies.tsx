import IconsWithTitle from "../../iconsWithTitle/IconsWithTitle";

export default function BackendTechnologies() {
  return (
    <div className="flex flex-row justify-around text-center">
      <IconsWithTitle
        src="/icons/ruby.svg"
        width={50}
        height={50}
        alt="Ruby logo icon"
        title="Ruby"
      />

      <IconsWithTitle
        src="/icons/php.svg"
        width={50}
        height={50}
        alt="PHP logo icon"
        title="PHP"
      />

      <IconsWithTitle
        src="/icons/java.svg"
        width={50}
        height={50}
        alt="Java logo icon"
        title="Java"
      />

      <IconsWithTitle
        src="/icons/postgresql.svg"
        width={50}
        height={50}
        alt="PostgreSQL logo icon"
        title="PostgreSQL"
      />

      <IconsWithTitle
        src="/icons/mysql.svg"
        width={50}
        height={50}
        alt="MySQL logo icon"
        title="MySQL"
      />
    </div>
  );
}
