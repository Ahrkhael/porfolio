import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <p className="text-center">{t("Description")}</p>
    </div>
  );
}
