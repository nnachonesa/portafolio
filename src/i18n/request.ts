import { cookies } from "next/headers";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { defaultLocale, locales } from "@/i18n/routing";
import en from "../../messages/en.json";
import es from "../../messages/es.json";
import pt from "../../messages/pt.json";

const messages = { es, en, pt } as const;

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const requested = cookieStore.get("NEXT_LOCALE")?.value;
  const locale =
    requested && hasLocale([...locales], requested) ? requested : defaultLocale;

  return {
    locale,
    messages: messages[locale as keyof typeof messages],
  };
});
