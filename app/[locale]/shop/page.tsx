import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider';

const Shop = async ({ params: { locale } }: { params: { locale: string } }) => {
  const i18nNamespaces = ['shop'];

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <h1>{t('header')}</h1>{' '}
    </TranslationsProvider>
  );
};

export default Shop;
