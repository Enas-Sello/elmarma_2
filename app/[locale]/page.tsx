'use client';
import Spinner from '@/components/Spinner';
import MainLayout from '@/components/shared/MainLayout';
import { useFetch } from '@/lib/hooks/useQuery';
import Hero from '@/components/Hero';
import Advertisements from '@/components/Advertisements';
import addN1 from '@/public/assets/add(1).png';

import AllTeamsCarousel from '@/components/shared/AllTeamsCarousel';
import SwipeComponent from '@/components/shared/SwipeComponent';
import Trending from '@/components/shared/Trending';
import Media from '@/components/Media';
import News from '@/components/shared/News';

const Home = () => {
  // news
  const {
    data,
    isError: isNewsError,
    isLoading: isNewLoading,
    error: newsError
  } = useFetch<any>({
    endpoint: 'match-videos',
    queryKey: ['news']
  });

  {
    isNewsError && <p>{newsError?.message}</p>;
  }
  {
    isNewLoading && <Spinner />;
  }
  {
    data && <></>;
  }

  return (
    <main className="p-5 md:p-10 ">
      <MainLayout>
        <SwipeComponent />
        <Hero />
        <Advertisements img={addN1} link={'/'} />
        {/* trending */}
        <Trending />
        {/* Photos and Videos */}
        <Media />
        <AllTeamsCarousel />
        {/* news */}
        <News />
      </MainLayout>
    </main>
  );
};
export default Home;
