'use client';

import MainLayout from '@/components/shared/MainLayout';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import transfer from '@/public/assets/transfers.png';
import MostRead from '@/components/shared/MostRead';
import Advertisements from '@/components/Advertisements';
import addN2 from '@/public/assets/Ad.png';

const mostReadData = {
  title: 'Most Read',
  items: [
    'SpaceX Launches Falcon Heavy Rocket with Classified Military Payload',
    'US Economy Grew at a Solid Pace in Q1, But Inflation Looms Large',
    'Scientists Discover New Species of Deep-Sea Glowing Fish',
    'AI Artworks Fetch High Prices at Auction, Raising Questions About Creativity',
    'Global Chip Shortage Continues to Impact Tech Industry'
  ]
};

const NewsDetails = () => {
  const { t } = useTranslation('');

  return (
    <MainLayout>
      <main className="p-5 md:p-10">
        <div className=" flex flex-col gap-4 items-center bg-white rounded p-5">
          <h3 className=" font-bold text-lg">
            {t(
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, illum.'
            )}
          </h3>
          <Image
            priority={true}
            alt="transfer"
            src={transfer}
            placeholder="empty"
            className=" object-cover w-full h-full"
          />
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10">
                <Image
                  priority={true}
                  alt="transfer"
                  src={transfer}
                  placeholder="empty"
                  className=" object-cover w-full h-full  rounded-xl"
                />
              </div>
              <p className=" text-sm text-mainGray">
                {t(' Lorem, ipsum dolor.')}
              </p>
            </div>
            <p className="text-mainGray text-sm font-normal text-end mt-2">
              5/19/2024, 8:11:04 PM
            </p>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            distinctio ipsam impedit odit repudiandae dicta eveniet! Beatae
            suscipit ipsam reiciendis quasi porro iste, deserunt necessitatibus
            eaque aut neque asperiores voluptas. Deleniti accusamus perspiciatis
            unde ad?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            distinctio ipsam impedit odit repudiandae dicta eveniet! Beatae
            suscipit ipsam reiciendis quasi porro iste, deserunt necessitatibus
            eaque aut neque asperiores voluptas. Deleniti accusamus perspiciatis
            unde ad?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            distinctio ipsam impedit odit repudiandae dicta eveniet! Beatae
            suscipit ipsam reiciendis quasi porro iste, deserunt necessitatibus
            eaque aut neque asperiores voluptas. Deleniti accusamus perspiciatis
            unde ad?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            distinctio ipsam impedit odit repudiandae dicta eveniet! Beatae
            suscipit ipsam reiciendis quasi porro iste, deserunt necessitatibus
            eaque aut neque asperiores voluptas. Deleniti accusamus perspiciatis
            unde ad?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            distinctio ipsam impedit odit repudiandae dicta eveniet! Beatae
            suscipit ipsam reiciendis quasi porro iste, deserunt necessitatibus
            eaque aut neque asperiores voluptas. Deleniti accusamus perspiciatis
            unde ad?
          </p>

          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-6 md:col-span-4">
              <MostRead title={mostReadData.title} items={mostReadData.items} />
            </div>
            <div className="col-span-6 md:col-span-2 ">
              <Advertisements img={addN2} link={'/'} />
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default NewsDetails;
