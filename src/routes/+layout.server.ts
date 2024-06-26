import type { LayoutServerLoad } from './$types';
import { locales, loadTranslations, translations, defaultLocale } from '$UITools/Translations';

export const load: LayoutServerLoad = async (event) => {
  const { url, cookies, request, locals } = event;
  const { pathname } = url;

  const session = await locals.getSession();

  let locale = (cookies.get('lang') || '').toLowerCase();

  if (!locale) {
    const acceptLanguageHeader = request.headers.get('accept-language') || '';
    locale = (acceptLanguageHeader.match(/[a-zA-Z]+?(?=-|_|,|;)/) || [defaultLocale])[0].toLowerCase();
  }

  const supportedLocales = locales.get().map((l) => l.toLowerCase());

  if (!supportedLocales.includes(locale)) {
    locale = defaultLocale;
  }

  await loadTranslations(locale, pathname);

  return {
    session,
    i18n: { locale, route: pathname },
    translations: translations.get(),
  };
};
