'use client';
// import { useFetch } from '@/lib/hooks/useQuery';
import { useTranslation } from 'react-i18next';

function About({ params: { locale } }: { params: { locale: string } }) {
  console.log('locale', locale);
  const { t } = useTranslation();
  // const { data, isError, isLoading, error } = useFetch<any>({
  //   endpoint: 'setting',
  //   queryKey: ['aboutUs']
  // });
  return (
    <main>
      <h1>{t('home')}</h1>
    </main>
  );
}

export default About;
