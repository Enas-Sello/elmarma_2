import React from 'react';
import MainLayout from '../shared/MainLayout';
import SharedLine from '../shared/SharedLine';
import SideData from '../shared/SideData';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import statics from '@/public/assets/static.png';
const Statistics = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <main className="">
        <div className="grid grid-cols-5 gap-10 ">
          <div className="col-span-5 md:col-span-3 flex flex-col gap-5">
            <SharedLine header="Statistics" LineColor="bg-[#3D185C]" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
              {/* card */}
              <div className="flex flex-col gap-4 shadow bg-white">
                <p className="p-3 text-center font-medium border-b">
                  {t('Scorers')}
                </p>
                <div className="flex justify-between w-full items-center font-medium bg-mainGray p-2">
                  <p>1</p>
                  <div className="w-16 h-16 rounded-full">
                    <Image
                      priority={true}
                      alt="logo"
                      src={statics}
                      placeholder="empty"
                      className=" object-cover w-full h-full"
                    />
                  </div>
                  <p>{t('Bukayo Saka')}</p>
                  <div className="flex flex-col items-center gap-1">
                    <p>8</p>
                    <p>{t('assists')}</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex justify-between w-full items-center font-medium  p-2">
                  <p>2</p>
                  <div className="w-16 h-16 rounded-full">
                    <Image
                      priority={true}
                      alt="logo"
                      src={statics}
                      placeholder="empty"
                      className=" object-cover w-full h-full"
                    />
                  </div>
                  <p>{t('Bukayo Saka')}</p>
                  <div className="flex flex-col items-center gap-1">
                    <p>8</p>
                    <p>{t('assists')}</p>
                  </div>
                </div>
                <div className="flex justify-between w-full items-center font-medium  p-2">
                  <p>3</p>
                  <div className="w-16 h-16 rounded-full">
                    <Image
                      priority={true}
                      alt="logo"
                      src={statics}
                      placeholder="empty"
                      className=" object-cover w-full h-full"
                    />
                  </div>
                  <p>{t('Bukayo Saka')}</p>
                  <div className="flex flex-col items-center gap-1">
                    <p>8</p>
                    <p>{t('assists')}</p>
                  </div>
                </div>
                {/*  */}
              </div>
              {/* card */}
              {/* card */}
              <div className="flex flex-col gap-4 shadow bg-white">
                <p className="p-3 text-center font-medium border-b">
                  {t('Scorers')}
                </p>
                <div className="flex justify-between w-full items-center font-medium bg-mainGray p-2">
                  <p>1</p>
                  <div className="w-16 h-16 rounded-full">
                    <Image
                      priority={true}
                      alt="logo"
                      src={statics}
                      placeholder="empty"
                      className=" object-cover w-full h-full"
                    />
                  </div>
                  <p>{t('Bukayo Saka')}</p>
                  <div className="flex flex-col items-center gap-1">
                    <p>8</p>
                    <p>{t('assists')}</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex justify-between w-full items-center font-medium  p-2">
                  <p>2</p>
                  <div className="w-16 h-16 rounded-full">
                    <Image
                      priority={true}
                      alt="logo"
                      src={statics}
                      placeholder="empty"
                      className=" object-cover w-full h-full"
                    />
                  </div>
                  <p>{t('Bukayo Saka')}</p>
                  <div className="flex flex-col items-center gap-1">
                    <p>8</p>
                    <p>{t('assists')}</p>
                  </div>
                </div>
                <div className="flex justify-between w-full items-center font-medium  p-2">
                  <p>3</p>
                  <div className="w-16 h-16 rounded-full">
                    <Image
                      priority={true}
                      alt="logo"
                      src={statics}
                      placeholder="empty"
                      className=" object-cover w-full h-full"
                    />
                  </div>
                  <p>{t('Bukayo Saka')}</p>
                  <div className="flex flex-col items-center gap-1">
                    <p>8</p>
                    <p>{t('assists')}</p>
                  </div>
                </div>
                {/*  */}
              </div>
              {/* card */}
              {/* card */}
              <div className="flex flex-col gap-4 shadow bg-white">
                <p className="p-3 text-center font-medium border-b">
                  {t('Scorers')}
                </p>
                <div className="flex justify-between w-full items-center font-medium bg-mainGray p-2">
                  <p>1</p>
                  <div className="w-16 h-16 rounded-full">
                    <Image
                      priority={true}
                      alt="logo"
                      src={statics}
                      placeholder="empty"
                      className=" object-cover w-full h-full"
                    />
                  </div>
                  <p>{t('Bukayo Saka')}</p>
                  <div className="flex flex-col items-center gap-1">
                    <p>8</p>
                    <p>{t('assists')}</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex justify-between w-full items-center font-medium  p-2">
                  <p>2</p>
                  <div className="w-16 h-16 rounded-full">
                    <Image
                      priority={true}
                      alt="logo"
                      src={statics}
                      placeholder="empty"
                      className=" object-cover w-full h-full"
                    />
                  </div>
                  <p>{t('Bukayo Saka')}</p>
                  <div className="flex flex-col items-center gap-1">
                    <p>8</p>
                    <p>{t('assists')}</p>
                  </div>
                </div>
                <div className="flex justify-between w-full items-center font-medium  p-2">
                  <p>3</p>
                  <div className="w-16 h-16 rounded-full">
                    <Image
                      priority={true}
                      alt="logo"
                      src={statics}
                      placeholder="empty"
                      className=" object-cover w-full h-full"
                    />
                  </div>
                  <p>{t('Bukayo Saka')}</p>
                  <div className="flex flex-col items-center gap-1">
                    <p>8</p>
                    <p>{t('assists')}</p>
                  </div>
                </div>
                {/*  */}
              </div>
              {/* card */}
            </div>
          </div>
          <SideData />
        </div>
      </main>
    </MainLayout>
  );
};

export default Statistics;
