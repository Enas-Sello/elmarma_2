'use client';

import { SetStateAction, useState, Suspense } from 'react';
import MainLayout from '@/components/shared/MainLayout';
import SwipeComponent from '@/components/shared/SwipeComponent';
import AllTeamsCarousel from '@/components/shared/AllTeamsCarousel';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Premier from '@/public/assets/PremierLeague.png';
import Multimedia from '@/components/tournaments/Multimedia';
import Statistics from '@/components/tournaments/Statistics';
import Scorers from '@/components/tournaments/Scorers';
import Team from '@/components/tournaments/Team';
import Results from '@/components/tournaments/Results';
import AstonVilla from '@/public/assets/AstonVilla.png';
import tournamentstest from '@/public/assets/tournamentstest.png';
import SharedLine from '@/components/shared/SharedLine';
import News from '@/components/shared/News';
import TeamNews from '@/components/tournaments/TeamNews';
import Main from '@/components/tournaments/Main';

const TournamentsComponent = ({ searchParams }: any) => {
  const { t } = useTranslation();
  const [component, setComponent] = useState('Home');

  console.log('=======>', component);
  console.log('=======>', searchParams);

  const renderData = [
    { name: 'Home', link: 'home' },
    { name: 'News', link: 'news' },
    { name: 'Results', link: 'results' },
    { name: 'Team', link: 'team' },
    { name: 'statistics', link: 'statistics' },
    { name: 'Multimedia', link: 'multimedia' },
    { name: 'Scorers', link: 'scorers' }
  ];

  const renderComponent = (name: SetStateAction<string>) => {
    setComponent(name);
  };

  return (
    <main className="p-5 md:p-10 flex flex-col gap-8">
      <SwipeComponent />
      <div className="relative my-10 rounded bg-[#3D185C]">
        <div className="flex gap-10 items-center p-3 rounded bg-[#3D185C]">
          <div className="hidden lg:block absolute -bottom-5 -right-5 w-36 h-36">
            <Image
              priority={true}
              alt="AstonVilla"
              src={Premier}
              placeholder="empty"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex lg:mx-20 items-center text-mainWhite font-medium text-lg">
            <p className="text-mainWhite lg:mx-16 font-medium text-lg me-5 md:me-0">
              {t('Arsenal')}
            </p>
            <div className="flex flex-wrap gap-5 md:flex-nowrap">
              {renderData.map(item => (
                <div key={item.name}>
                  <div
                    onClick={() => renderComponent(item.name)}
                    className={`${
                      component === item.name && 'underline-offset-4 underline'
                    } text-sm  md:text-base sm:font-normal hover:underline`}>
                    {t(item.name)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AllTeamsCarousel />
      {component === 'Home' && <Main />}
      {component === 'statistics' && <Statistics />}
      {component === 'News' && <TeamNews />}
      {component === 'Multimedia' && <Multimedia />}
      {component === 'Team' && <Team />}
      {component === 'Results' && <Results />}
      {component === 'Scorers' && <Scorers />}
      <SharedLine
        header="statistics"
        tail="All statistics"
        link="/"
        LineColor="bg-[#3D185C]"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <div className="bg-[#3D185C] text-white p-5 md:h-72 w-[320px] md:w-auto rounded flex flex-col gap-6  font-semibold">
          <p className="text-xl md:text-5xl">{t('Matches')}</p>
          <p className="text-xl md:text-9xl text-end">337</p>
        </div>
        <div className="bg-[#3D185C] text-white p-5 w-[320px] md:h-72 md:w-auto rounded flex flex-col gap-6  font-semibold">
          <p className="text-xl md:text-4xl">{t('Goals scored')}</p>
          <p className="text-xl md:text-9xl text-end">337</p>
        </div>
        <div className="bg-[#3D185C] text-white p-5 md:h-72 w-[320px] md:w-auto rounded flex flex-col  font-semibold">
          <p className="text-xl md:text-5xl">{t('Assists')}</p>
          <div className="flex items-center justify-between gap-3">
            <p className="text-7xl">12</p>
            <div className="flex items-center gap-1">
              <p className="text-sm font-normal w-[85px]">
                {t('Ollie Watkins')}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10">
                  <Image
                    priority={true}
                    alt="AstonVilla"
                    src={AstonVilla}
                    placeholder="empty"
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-mainWhite"></span>
              </div>
            </div>
            <div className="w-22 h-22">
              <Image
                priority={true}
                alt="AstonVilla"
                src={tournamentstest}
                placeholder="empty"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#3D185C] text-white p-5 md:h-72 w-[320px] md:w-auto rounded flex flex-col  font-semibold">
          <p className="text-4xl">{t('Assists')}</p>
          <div className="flex items-center justify-between gap-3">
            <p className="text-7xl">12</p>
            <div className="flex items-center gap-1">
              <p className="text-sm font-normal w-[85px]">
                {t('Ollie Watkins')}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10">
                  <Image
                    priority={true}
                    alt="AstonVilla"
                    src={AstonVilla}
                    placeholder="empty"
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-mainWhite"></span>
              </div>
            </div>
            <div className="w-22 h-22">
              <Image
                priority={true}
                alt="AstonVilla"
                src={tournamentstest}
                placeholder="empty"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <News />
    </main>
  );
};

const Tournaments = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainLayout>
        <TournamentsComponent />
      </MainLayout>
    </Suspense>
  );
};

export default Tournaments;
