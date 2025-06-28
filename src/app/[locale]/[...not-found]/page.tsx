import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
        <p className="text-xl text-gray-600 mb-4">{t("description")}</p>
        <Link href="/" className="">
          <Button
            size="lg"
            variant="outline"
            className="bg-black text-white hover:bg-gray-800 hover:text-white"
          >
            {t("returnHome")}
          </Button>
        </Link>
      </div>
    </div>
  );
}
