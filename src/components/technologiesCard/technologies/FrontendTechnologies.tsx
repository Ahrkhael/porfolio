import IconsWithTitle from "../../iconsWithTitle/IconsWithTitle";

export default function FrontendTechnologies() {
  return (
    <div className="flex flex-row justify-around text-center">
      <IconsWithTitle
        src="/icons/nextjs.svg"
        width={50}
        height={50}
        alt="Next logo icon"
        title="Next"
      />

      <IconsWithTitle
        src="/icons/react.svg"
        width={50}
        height={50}
        alt="React logo icon"
        title="React"
      />

      <IconsWithTitle
        src="/icons/javascript.svg"
        width={50}
        height={50}
        alt="Javascript logo icon"
        title="Javascript"
      />

      <IconsWithTitle
        src="/icons/html.svg"
        width={50}
        height={50}
        alt="HTML logo icon"
        title="HTML"
      />

      <IconsWithTitle
        src="/icons/css.svg"
        width={50}
        height={50}
        alt="CSS logo icon"
        title="CSS"
      />

      <IconsWithTitle
        src="/icons/tailwind.svg"
        width={50}
        height={50}
        alt="Tailwind logo icon"
        title="Tailwind"
      />

      <IconsWithTitle
        src="/icons/bootstrap.svg"
        width={50}
        height={50}
        alt="Bootstrap logo icon"
        title="Bootstrap"
      />
    </div>
  );
}
