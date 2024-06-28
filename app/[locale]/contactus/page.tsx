import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider';

const ContactUs = async ({
  params: { locale }
}: {
  params: { locale: string };
}) => {
  const i18nNamespaces = ['contact'];

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <h1>{t('header')}</h1>
    </TranslationsProvider>
  );
};

export default ContactUs;
