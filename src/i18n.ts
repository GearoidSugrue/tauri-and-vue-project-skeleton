/* eslint-disable @typescript-eslint/no-explicit-any */
import { createI18n, LocaleMessages, I18n } from 'vue-i18n';

function loadLocale(): LocaleMessages {
  const locales = require.context(
    './locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const localeMessages: LocaleMessages = {};

  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);

    if (matched && matched.length > 1) {
      const locale = matched[1];
      localeMessages[locale] = locales(key);
    }
  });
  return localeMessages;
}

export function initI18n(): I18n<any, any, any, any> {
  return createI18n({
    legacy: false,
    messages: loadLocale() as any,
    locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  });
}
