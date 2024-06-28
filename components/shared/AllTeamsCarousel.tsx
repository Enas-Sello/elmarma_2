import teamTest from '@/public/assets/teamtest.png';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Link from 'next/link';
type allTeamsTP = { name: string; link: string; img: string };

const allTeams: allTeamsTP[] = [
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  },
  {
    link: '/tournaments',
    name: '',
    img: ''
  }
];

const AllTeamsCarousel = () => {
  return (
    <Carousel
      className="bg-primary bg-opacity-10 shadow-inner p-3 rounded"
      opts={{
        align: 'start',
        direction: 'rtl'
      }}
      plugins={[
        Autoplay({
          delay: 1000
        })
      ]}>
      <CarouselContent className="gap-4 flex">
        {allTeams.map((team, i) => (
          <CarouselItem key={i} className="basis-12">
            <div className="w-11 h-11">
              <Link
                href={{
                  pathname: team.link,
                  query: {
                    search: team.name
                  }
                }}>
                <Image
                  src={team.img || teamTest}
                  priority={true}
                  alt="team"
                  placeholder="blur"
                  className=" object-cover w-full h-full "
                />
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
};

export default AllTeamsCarousel;
