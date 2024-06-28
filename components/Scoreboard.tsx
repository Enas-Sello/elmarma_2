'use client';
import Image from 'next/image';
import React from 'react';
import Premier from '@/public/assets/Premier.png';
import Manchester from '@/public/assets/Manchester.png';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
const Scoreboard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col lg:flex-row  shadow-2xl  justify-between bg-mainWhite rounded p-2  lg:h-52">
      <div className=" lg:w-2/5  flex flex-col md:flex-row  justify-center gap-5 md:gap-20 items-center bg-gradient-to-l from-[#4B4FAC] rounded p-3">
        <Image
          priority={true}
          src={Manchester}
          alt="Manchester City"
          className="h-20 w-20"
        />
        <span className="text-white text-xl font-semibold">
          {t(' Manchester City')}
        </span>
      </div>
      {/* timing */}
      <div className="lg:w-1/5 text-mainDark flex flex-col justify-center gap-2 items-center  bg-white lg:rounded-full shadow-inner">
        <p className="  font-medium">{t('Premier League')}</p>
        <span className=" text-sm text-mainGray">{t('Week 11')}</span>
        <Button className="text-white rounded-full" variant={'secondary'}>
          {t("Didn't start")}
        </Button>
        <p className="  font-medium">12 .{t('December')}. 2023</p>
        <span className="text-mainGray text-sm">{t('07:00 PM')}</span>
      </div>
      <div className=" lg:w-2/5  flex  flex-col md:flex-row justify-center gap-5 md:gap-20 items-center bg-gradient-to-r   from-[#CA0538] rounded p-3">
        <span className="text-white text-xl font-semibold">{t('Arsenal')}</span>
        <Image
          priority={true}
          src={Premier}
          alt="Manchester City"
          className="h-20 w-20"
        />
      </div>{' '}
    </div>
  );
};

export default Scoreboard;
