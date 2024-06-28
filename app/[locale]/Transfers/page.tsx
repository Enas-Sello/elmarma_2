'use client';
import AllTeamsCarousel from '@/components/shared/AllTeamsCarousel';
import MainLayout from '@/components/shared/MainLayout';
import SharedLine from '@/components/shared/SharedLine';
import SwipeComponent from '@/components/shared/SwipeComponent';
import PlayerTable from '@/components/shared/PlayerTable';
import Image from 'next/image';
import transfer from '@/public/assets/transfers.png';
import { useTranslation } from 'react-i18next';
import News from '@/components/shared/News';
import Link from 'next/link';

const Transfers = () => {
  const { t } = useTranslation();
  return (
    <main className="p-5 md:p-10">
      <MainLayout>
        <SwipeComponent />
        <AllTeamsCarousel />
        <SharedLine header="Transfers News" tail="" link="/news" />
        <div className="flex flex-col gap-4">
          <Link href={'/'} className="w-full h-full relative">
            <Image
              priority={true}
              alt="transfer"
              src={transfer}
              placeholder="empty"
              className=" object-cover w-full h-full"
            />
            <p className=" absolute bottom-0 w-full bg-mainDark bg-opacity-75  text-center text-lg font-bold text-white ">
              {t("Sport: Nunez's agent offers him to Barcelona")}
            </p>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href={'/'} className=" h-64  relative">
              <Image
                priority={true}
                alt="transfer"
                src={transfer}
                placeholder="empty"
                className=" object-cover w-full h-full"
              />
              <p className=" absolute bottom-0 text-center w-full  bg-mainDark bg-opacity-75 text-white ">
                {t("Sport: Nunez's agent offers him to Barcelona")}
              </p>
            </Link>
            <Link href={'/'} className=" h-64  relative">
              <Image
                priority={true}
                alt="transfer"
                src={transfer}
                placeholder="empty"
                className=" object-cover w-full h-full"
              />
              <p className=" absolute bottom-0 text-center w-full  bg-mainDark bg-opacity-75 text-white ">
                {t("Sport: Nunez's agent offers him to Barcelona")}
              </p>
            </Link>
            <Link href={'/'} className=" h-64  relative">
              <Image
                priority={true}
                alt="transfer"
                src={transfer}
                placeholder="empty"
                className=" object-cover w-full h-full"
              />
              <p className=" absolute bottom-0 text-center w-full  bg-mainDark bg-opacity-75 text-white ">
                {t("Sport: Nunez's agent offers him to Barcelona")}
              </p>
            </Link>
          </div>
        </div>
        <SharedLine header="Recent Transfers" tail="" link="/news" />

        <div className="p-5 bg-white shadow-2xl rounded flex flex-col gap-5">
          <div className="flex w-full justify-between">
            <p className="font-semibold">{t('All Transfers')}</p>
          </div>
          <PlayerTable />
        </div>
        <News />
      </MainLayout>
    </main>
  );
};

export default Transfers;
