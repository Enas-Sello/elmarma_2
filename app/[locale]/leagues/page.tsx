import Advertisements from '@/components/Advertisements';
import LeaguesCard from '@/components/LeaguesCard';
import Card from '@/components/shared/Card';
import MainLayout from '@/components/shared/MainLayout';
import SharedLine from '@/components/shared/SharedLine';
// import SwipeComponents from '@/components/shared/SwipeComponents';
import addN2 from '@/public/assets/add(2).png';

const Leagues = async () => {
  const Local = [{}, {}, {}, {}];
  return (
    <main className="p-5 md:p-10">
      <MainLayout>
        {/* <SwipeComponents /> */}
        <>
          <SharedLine header="Local" />
          <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 w-full">
            <LeaguesCard leagues={Local} />
          </div>
        </>
        <>
          <SharedLine header="Continental" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <LeaguesCard leagues={Local} />
          </div>
        </>
        <>
          <SharedLine header="European" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <LeaguesCard leagues={Local} />
          </div>
        </>
        <>
          <SharedLine header="Arab" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <LeaguesCard leagues={Local} />
          </div>
        </>
        <Advertisements img={addN2} link={'/'} />
        <>
          <MainLayout>
            <SharedLine header="Latest News" tail="more" link="/news" icon />
            {
              // news &&
              <Card
                footer
                data={[
                  { link: 'news' },
                  { link: 'news' },
                  { link: 'news' },
                  { link: 'news' },
                  { link: 'news' }
                ].slice(0, 4)}
              />
            }
          </MainLayout>
        </>
      </MainLayout>
    </main>
  );
};

export default Leagues;
