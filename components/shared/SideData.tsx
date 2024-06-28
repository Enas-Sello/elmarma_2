import Advertisements from '../Advertisements';
import Manchester from '@/public/assets/Manchester.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import addN1 from '@/public/assets/add(1).png';
import MostRead from './MostRead';
type rankingType = {
  rank: string;
  team: { img: any; name: string };
  w: string;
  l: string;
  d: string;
  points: string;
};

const ranking: rankingType[] = [
  {
    rank: '1',
    team: { img: Manchester, name: 'Manchester City' },
    w: '2',
    d: '1',
    l: '5',
    points: '50%'
  },
  {
    rank: '1',
    team: { img: Manchester, name: 'Manchester City' },
    w: '2',
    d: '1',
    l: '5',
    points: '50%'
  }
];
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

const SideData = () => {
  const { t } = useTranslation();

  return (
    <div className="col-span-5 md:col-span-2 flex flex-col gap-5 ">
      {/*  */}
      <MostRead title={mostReadData.title} items={mostReadData.items} />
      <Advertisements img={addN1} link={'/'} />
      <div>
        <table className="table-auto w-full border border-collapse md:font-bold ">
          <thead>
            <tr className="bg-[#3D185C]  text-base  text-white lg:text-lg font-normal p-2 rounded xl:font-bold text-center mb-4">
              <th className="md:px-4 py-2 text-sm md:text-base text-center">
                {t('NO.')}
              </th>
              <th className="md:px-4 py-2 text-sm md:text-base text-center">
                {t('Name')}
              </th>
              <th className="md:px-4 py-2 text-sm md:text-base text-center">
                {t('Position')}
              </th>
              <th className="md:px-4 py-2 text-sm md:text-base text-center">
                {t('Nationality')}
              </th>
            </tr>
          </thead>
          <tbody>
            {ranking.map(rank => (
              <tr
                key={rank.rank}
                className="border-b text-center font-medium bg-white shadow">
                <td className="md:px-4 py-2 text-sm md:text-base text-center">
                  {t(rank.rank)}
                </td>
                <td className="md:px-4 py-2 text-sm md:text-base text-center  flex  justify-center items-center gap-2">
                  <Image
                    priority={true}
                    className="h-7 w-7 md:h-10 md:w-10"
                    src={rank.team.img}
                    alt={rank.team.name}
                  />
                  {t(rank.team.name)}
                </td>
                <td className="md:px-4 py-2 text-sm md:text-base text-center">{t(rank.points)}</td>
                <td className="md:px-4 py-2 text-sm md:text-base text-center">{t(rank.d)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SideData;
