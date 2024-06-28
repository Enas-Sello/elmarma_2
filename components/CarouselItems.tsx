import React from 'react';
import team from '@/public/assets/teamtest.png';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
const CarouselItems = () => {
  return (
    <Link
      href={{
        pathname: `matches/${'123'}`,
        query: {
          search: '123'
        }
      }}
      className="flex flex-col gap-4 items-center justify-center p-2 bg-mainDark text-mainWhite border">
      <p className="font-semibold text-base">team name</p>
      <div className="flex gap-2 justify-between items-center">
        <div className="w-9 h-9">
          <Image
            src={team}
            priority={true}
            alt="team"
            placeholder="blur"
            className=" object-cover w-full h-full "
          />
        </div>
        <p className="font-semibold text-base"> 2 </p>

        <Button
          className="bg-orange-400 rounded-3xl hover:bg-orange-400 text-sm px-2 py-1"
          size={'sm'}>
          {' '}
          play Now
        </Button>
        <p className="font-semibold text-base"> 2 </p>
        <div className="w-11 h-11">
          <Image
            src={team}
            priority={true}
            alt="team"
            placeholder="blur"
            className=" object-cover w-full h-full "
          />
        </div>
      </div>
      <p className="font-bold text-xs ">
        22:00 GMT+ <span className=" text-orange-400">01:25:00</span>
      </p>
    </Link>
  );
};

export default CarouselItems;
