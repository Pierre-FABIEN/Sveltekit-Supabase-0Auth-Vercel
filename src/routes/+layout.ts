import type { LayoutLoad } from "./$types";
import { addTranslations, setLocale, setRoute } from '$UITools/Translations';
import {supabase} from '$lib/supabase/supabaseClient';

export const load: LayoutLoad = async ({ data, depends }) => { // Retirer fetch
  const { i18n, translations } = data;
  const { locale, route } = i18n;

  depends("supabase:auth");

  const {
    data: { session },
  } = await supabase.auth.getSession();

  addTranslations(translations);
  await setRoute(route);
  await setLocale(locale);

  return { ...i18n, session, supabase };
};
