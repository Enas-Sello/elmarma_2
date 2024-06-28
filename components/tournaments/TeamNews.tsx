import React from 'react';
import SideData from '../shared/SideData';
import MainLayout from '../shared/MainLayout';
import { useTranslation } from 'react-i18next';
import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import TeamNewstest from '@/public/assets/TeamNewstest.png';
const TeamNews = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <main className="">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="col-span-4 md:col-span-3 flex flex-col gap-5">
            <div className="p-5 bg-[#3D185C] flex flex-col gap-4 rounded text-mainWhite">
              <div className="flex flex-col gap-2">
                <p className="text-lg">
                  {t('Greatest match between Liverpool and Manchester United')}
                </p>
                <p className="text-sm text-mainGray">
                  {t('Fri 27 MAY 2024 | 12:05 pm')}
                </p>
                <Separator className=" border border-mainGray border-opacity-60 w-full rotate-180 md:rotate-0  md:h-full" />
              </div>
              <div className="flex flex-col gap-3  items-center">
                <div className=" mb-10">
                  <Image
                    priority={true}
                    alt="logo"
                    src={TeamNewstest}
                    placeholder="empty"
                    className=" object-cover w-full h-full"
                  />
                </div>
                <p className="text-lg">
                  {t('Greatest match between Liverpool and Manchester United')}
                </p>
                <p className="text-sm text-mainGray">
                  {t(
                    'Mohamed Salah scored two goals and made the same for his teammates Cody Jacobo and Roberto Firmino, so the Egyptian star won the Man of the Year award.The match is well deserved.The Egyptian Pharaoh also became the all-time top scorer for Liverpool in the English Premier League.Surpassing the previous record recorded by retired star Robbie Fowler.'
                  )}
                </p>
              </div>
              {/* related */}
              <p className="text-lg">{t('Related topics')}</p>
              <Separator className=" border border-mainGray border-opacity-60 w-full rotate-180 md:rotate-0  md:h-full" />
              {/*  */}
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <p className="text-sm text-mainGray">
                  {t(
                    'Mohamed Salah scored two goals and made the same for his teammates Cody Jacobo and Roberto Firmino, so the Egyptian star won the Man of the Year award.The match is well deserved.The Egyptian Pharaoh also became the all-time top scorer for Liverpool in the English Premier League.Surpassing the previous record recorded by retired star Robbie Fowler.'
                  )}
                </p>
                <div className="">
                  <Image
                    priority={true}
                    alt="logo"
                    src={TeamNewstest}
                    placeholder="empty"
                    className=" object-cover w-full h-full"
                  />
                </div>
              </div>
              <Separator className=" border border-mainGray border-opacity-60 w-full rotate-180 md:rotate-0  md:h-full" />
              {/*  */}
              {/*  */}
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <p className="text-sm text-mainGray">
                  {t(
                    'Mohamed Salah scored two goals and made the same for his teammates Cody Jacobo and Roberto Firmino, so the Egyptian star won the Man of the Year award.The match is well deserved.The Egyptian Pharaoh also became the all-time top scorer for Liverpool in the English Premier League.Surpassing the previous record recorded by retired star Robbie Fowler.'
                  )}
                </p>
                <div className="">
                  <Image
                    priority={true}
                    alt="logo"
                    src={TeamNewstest}
                    placeholder="empty"
                    className=" object-cover w-full h-full"
                  />
                </div>
              </div>
              <Separator className=" border border-mainGray border-opacity-60 w-full rotate-180 md:rotate-0  md:h-full" />
              {/*  */}
              <p className="text-sm text-mainGray">
                {t(
                  'Mohamed Salah scored two goals and made the same for his teammates Cody Jacobo and Roberto Firmino, so the Egyptian star won the Man of the Year award.The match is well deserved.The Egyptian Pharaoh also became the all-time top scorer for Liverpool in the English Premier League.Surpassing the previous record recorded by retired star Robbie Fowler.'
                )}
              </p>
            </div>
          </div>
          <SideData />
        </div>
      </main>
    </MainLayout>
  );
};

export default TeamNews;
