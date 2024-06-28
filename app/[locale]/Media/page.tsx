'use client';
import Advertisements from '@/components/Advertisements';
import AllTeamsCarousel from '@/components/shared/AllTeamsCarousel';
import Card from '@/components/shared/Card';
import MainLayout from '@/components/shared/MainLayout';
import News from '@/components/shared/News';
import SharedLine from '@/components/shared/SharedLine';
import SwipeComponent from '@/components/shared/SwipeComponent';
import addN2 from '@/public/assets/add(2).png';

const Media = () => {
  return (
    <main className=" p-5 md:p-10">
      <MainLayout>
        <SwipeComponent />
        <AllTeamsCarousel />
        <SharedLine tail="More" link="/more" header="Videos" data={'videos'} />
        {
          // media &&
          <Card
            video
            footer
            bgColor="bg-mainDark"
            data={[
              { link: 'news' },
              { link: 'news' },
              { link: 'news' },
              { link: 'news' },
              { link: 'news' }
            ]}
          />
        }
        <SharedLine
          tail="More"
          link="/more"
          data={'photo'}
          header="Photos and albums"
        />
        {
          // media &&
          <Card
            footer
            bgColor="bg-mainDark"
            data={[
              { link: 'news' },
              { link: 'news' },
              { link: 'news' },
              { link: 'news' },
              { link: 'news' }
            ].slice(0, 4)}
          />
        }
        <Advertisements img={addN2} link={'/'} />
        <News />
      </MainLayout>
    </main>
  );
};

export default Media;
