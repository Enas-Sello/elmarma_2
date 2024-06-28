'use client';

import Card from '@/components/shared/Card';
import MainLayout from '@/components/shared/MainLayout';
import { Separator } from '@radix-ui/react-separator';
import React from 'react';

const Page = ({ searchParams }: { searchParams: { search: string } }) => {
  const data = searchParams.search;

  return (
    <main className=" p-5 md:p-10">
      <MainLayout>
        <h2 className=" font-semibold text-lg">header test</h2>
        <Separator className=" border  border-mainGray" />
        {
          <Card
            video={data === 'videos' && true}
            footer
            bgColor="bg-mainDark"
            data={[{}, {}, {}, {}, {}]}
          />
        }
      </MainLayout>
    </main>
  );
};

export default Page;
