'use client';
import React from 'react';
// import { useQuery } from '@tanstack/react-query';
import BackButton from '../../../components/BackButton';
import Link from 'next/link';
import { useFetch } from '@/lib/hooks/useQuery';
import { useTranslation } from 'react-i18next';

const TodoPage = () => {
  const { t } = useTranslation();

  const { data, isError, isLoading, error } = useFetch<any>({
    endpoint: 'todos',
    queryKey: ['todos']
  });
  return (
    <>
      {isLoading && <p>looding</p>}
      {isError && <p>{error?.message}</p>}
      {data &&
        data.map((item: { id: React.Key; title: string }) => (
          <div key={item.id} className=" m-5">
            <Link href={`todos/${item.id}`}>{item.title}</Link>{' '}
          </div>
        ))}
      <p>{t('home')}</p>
      <BackButton />
    </>
  );
};

export default TodoPage;
