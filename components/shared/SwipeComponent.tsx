'use client';
import moment from 'moment';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

import CarouselItems from '@/components/CarouselItems';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const SwipeComponent = () => {
  const [active, setActive] = useState(0);
  const [formateValue, setFormateValue] = useState('');

  const getDay = (day: any) => {
    setActive(day);

    const today = new Date();
    const yesterday = new Date(today);
    const currentDate = moment(yesterday.setDate(yesterday.getDate() + day));
    const formattedDate = currentDate.format('MM/DD/YYYY');
    setFormateValue(formattedDate);
  };
  console.log('formateValue', formateValue);
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  useEffect(() => {
    document.body.dir = currentLocale === 'ar' ? 'rtl' : 'ltr';
  }, [currentLocale]);
  return (
    <div className="p-10 ">
      <div className="flex justify-center items-center">
        <div className="flex justify-between w-full items-center">
          <div className=" flex justify-center items-center gap-1 align-middle w-full ">
            <Button
              onClick={() => getDay(-1)}
              className={` ${
                active === -1 ? 'bg-primary text-white' : 'bg-white'
              } rounded hover:text-white text-base `}>
              {t('Yesterday')}
            </Button>
            <Button
              onClick={() => getDay(0)}
              className={` ${
                active === 0 ? 'bg-primary text-white' : 'bg-white'
              } rounded hover:text-white text-base`}>
              {t('Today')}
            </Button>
            <Button
              onClick={() => getDay(1)}
              className={` ${
                active === 1 ? 'bg-primary text-white' : 'bg-white'
              } rounded hover:text-white text-base`}>
              {t('Tomorrow')}
            </Button>
          </div>
          <div className="hidden md:flex text-sm text-center text-nowrap md:font-semibold hover:bg-primary/90 bg-primary rounded-t-md  gap-4 items-center p-2 px-4 text-mainWhite -mb-1">
            <Link href={'/matches'}>
              <p className="text-white m-0 ">{t('All Matches')}</p>
            </Link>
            {currentLocale === 'en' ? (
              <IoIosArrowForward />
            ) : (
              <IoIosArrowBack />
            )}
          </div>
        </div>
      </div>
      <Carousel
        opts={{
          align: 'start',
          direction: 'rtl'
        }}
        className="">
        <CarouselContent className="">
          {Array.from({ length: 6 }).map((_, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/4 p-0">
              <CarouselItems />
            </CarouselItem>
          ))}
        </CarouselContent>
        {currentLocale === 'ar' ? (
          <>
            <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 -left-10">
              <IoIosArrowForward />
            </CarouselPrevious>
            <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 -right-10">
              <IoIosArrowBack />
            </CarouselNext>
          </>
        ) : (
          <>
            <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 -left-10">
              <IoIosArrowBack />
            </CarouselPrevious>
            <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 -right-10">
              <IoIosArrowForward />
            </CarouselNext>
          </>
        )}
      </Carousel>
      <div className="flex md:hidden gap-4 items-center  text-base justify-center text-center text-nowrap md:font-semibold hover:bg-primary/90 bg-primary rounded-b-md   p-2 px-4 text-mainWhite -mb-1">
        <Link href={'/matches'}>
          <p className="text-white text-center m-0 ">{t('All Matches')}</p>
        </Link>
        {currentLocale === 'en' ? <IoIosArrowForward /> : <IoIosArrowBack />}
      </div>
    </div>
  );
};

export default SwipeComponent;
