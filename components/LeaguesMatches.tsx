'use client';
import { Separator } from '@radix-ui/react-separator';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { HiComputerDesktop } from 'react-icons/hi2';
import Image from 'next/image';
import team from '@/public/assets/teamtest.png';
import { Key } from 'react';
const LeaguesMatches = ({ data, locale }: any) => {
  const { t } = useTranslation();
  console.log('locale', locale);

  return (
    <>
      {data &&
        data.map((item: any, i: Key) => (
          <div
            key={i}
            className="flex flex-col md:flex-row bg-white shadow-lg rounded justify-between  md:h-52 p-3 lg:px-10">
            <Link
              href={`matches/${item.id || '123'}`}
              className="hidden md:flex  justify-center items-center gap-10 h-full">
              <Button variant={'outline'}>{t('Details')}</Button>
              <Separator className=" border border-mainGray border-opacity-85 w-full rotate-180 md:rotate-0  md:h-full" />
            </Link>
            <div className="flex-1 flex flex-col gap-5 justify-center items-center p-2 ">
              <div className="flex justify-between items-center w-full px-3 lg:px-10">
                <div className="flex gap-3 items-center text-darkGray">
                  <HiComputerDesktop />
                  <p className="">{t('bein sport 2')}</p>
                </div>
                <p className="p-1 px-3 border border-mainGray  rounded">
                  {t('start')}
                </p>
                <p className=" text-darkGray font-semibold  lg:text-lg ">
                  {t('Week 36')}
                </p>
              </div>
              <div className="flex justify-center gap-5 lg:gap-10 items-center w-full px-3 lg:px-10 md:font-semibold">
                <div className="flex items-center justify-center gap-2 text-mainDark">
                  <p>{t('Athletic Bilbao')}</p>
                  <div className="w-10 h-10 lg:w-16 lg:h-16">
                    <Image
                      priority={true}
                      alt="logo"
                      src={team}
                      placeholder="empty"
                      className=" object-cover w-full h-full"
                    />
                  </div>
                  <p>_</p>
                </div>
                <p>:</p>
                <div className="flex items-center justify-center gap-2 text-mainDark">
                  <p>_</p>
                  <div className="w-10 h-10 lg:w-16 lg:h-16">
                    <Image
                      priority={true}
                      alt="logo"
                      src={team}
                      placeholder="empty"
                      className=" object-cover w-full h-full"
                    />
                  </div>
                  <p>{t('Athletic Bilbao')}</p>
                </div>{' '}
              </div>
              <div className="flex justify-center items-center w-full px-3 lg:px-10 text-darkGray font-bold">
                <p>22:00</p>
              </div>
            </div>
            <div className="md:hidden">
              <Separator className=" border border-mainGray border-opacity-85 w-full rotate-180 md:rotate-0  md:h-full" />
              <Link
                href={`matches/${item.id || '123'}`}
                className="flex  flex-col mt-3 justify-center items-center gap-5  h-full">
                <Button variant={'outline'}>{t('Details')}</Button>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default LeaguesMatches;
