import IconsWithTitle from "../../iconsWithTitle/IconsWithTitle";

export default function OtherTechnologies() {
  return (
    <div className="flex flex-wrap justify-around text-center">
      <IconsWithTitle
        src="/icons/csharp.svg"
        width={50}
        height={50}
        alt="C sharp logo icon"
        title="C#"
      />

      <IconsWithTitle
        src="/icons/python.svg"
        width={50}
        height={50}
        alt="Python logo icon"
        title="Python"
      />

      <IconsWithTitle
        src="/icons/git.svg"
        width={50}
        height={50}
        alt="Git logo icon"
        title="Git"
      />

      <IconsWithTitle
        src="/icons/linux.svg"
        width={50}
        height={50}
        alt="Linux logo icon"
        title="Linux"
      />

      <IconsWithTitle
        src="/icons/api-logo.svg"
        width={50}
        height={50}
        alt="Api logo icon"
        title="API"
      />

      <IconsWithTitle
        src="/icons/postman.svg"
        width={50}
        height={50}
        alt="Postman logo icon"
        title="Postman"
      />
    </div>
  );
}
