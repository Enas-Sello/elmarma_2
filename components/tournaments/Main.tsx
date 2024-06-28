'use client';

import Ad from '@/public/assets/Ad.png';
import transfer from '@/public/assets/transfers.png';
import Manchester from '@/public/assets/Manchester.png';
import logotest from '@/public/assets/logotest.png';
import SerieA from '@/public/assets/SerieA.png';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import SharedLine from '../shared/SharedLine';
import Advertisements from '../Advertisements';
import LeaguesMatches from '../LeaguesMatches';
import MostRead from '../shared/MostRead';

type rankingType = {
  rank: string;
  team: { img: any; name: string };
  w: string;
  l: string;
  d: string;
  points: string;
};
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
const matches = [
  {
    team: { name: 'La Liga', logo: logotest },
    match: [{ id: '12347' }, { id: '12341' }]
  },
  {
    team: { name: 'Serie A', logo: SerieA },
    match: [{ id: '1234' }, { id: '12346' }]
  }
];
const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Link href={'/'} className="w-full h-full relative">
          <Image
            priority={true}
            alt="transfer"
            src={transfer}
            placeholder="empty"
            className=" object-cover w-full h-full"
          />
          <p className=" absolute bottom-0 w-full bg-mainDark bg-opacity-75  text-center text-lg font-bold text-white ">
            {t("Sport: Nunez's agent offers him to Barcelona")}
          </p>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href={'/'} className=" h-64  relative">
            <Image
              priority={true}
              alt="transfer"
              src={transfer}
              placeholder="empty"
              className=" object-cover w-full h-full"
            />
            <p className=" absolute bottom-0 text-center w-full  bg-mainDark bg-opacity-75 text-white ">
              {t("Sport: Nunez's agent offers him to Barcelona")}
            </p>
          </Link>
          <Link href={'/'} className=" h-64  relative">
            <Image
              priority={true}
              alt="transfer"
              src={transfer}
              placeholder="empty"
              className=" object-cover w-full h-full"
            />
            <p className=" absolute bottom-0 text-center w-full  bg-mainDark bg-opacity-75 text-white ">
              {t("Sport: Nunez's agent offers him to Barcelona")}
            </p>
          </Link>
          <Link href={'/'} className=" h-64  relative">
            <Image
              priority={true}
              alt="transfer"
              src={transfer}
              placeholder="empty"
              className=" object-cover w-full h-full"
            />
            <p className=" absolute bottom-0 text-center w-full  bg-mainDark bg-opacity-75 text-white ">
              {t("Sport: Nunez's agent offers him to Barcelona")}
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap gap-12">
        <div className="flex flex-col gap-3 items-center flex-1">
          <SharedLine
            header=" Premier League standings"
            LineColor="bg-[#3D185C]"
          />
          <div className="container mx-auto mt-4">
            <table className="table-auto w-full border border-collapse md:font-bold ">
              <thead>
                <tr className="bg-mainDark text-sm  md:text-lg text-white lg:text-2xl  p-2 rounded lg:font-bold text-center mb-4">
                  <th className="px-1 md:px-4 py-2">{t('Points')}</th>
                  <th className="px-1 md:px-4 py-2">{t('D')}</th>
                  <th className="px-1 md:px-4 py-2">{t('L')}</th>
                  <th className="px-1 md:px-4 py-2">{t('W')}</th>
                  <th className="px-1 md:px-4 py-2 text-center">{t('Team')}</th>
                  <th className="px-1 md:px-4 py-2">{t('Ranking')}</th>
                </tr>
              </thead>
              <tbody>
                {ranking.map(rank => (
                  <tr key={rank.rank} className="border-b text-center">
                    <td className="px-1 md:px-4 py-2">{t(rank.rank)}</td>
                    <td className="px-1 md:px-4 py-2">{t(rank.points)}</td>
                    <td className="px-1 md:px-4 py-2">{t(rank.d)}</td>
                    <td className="px-1 md:px-4 py-2">{t(rank.l)}</td>
                    <td className="px-1 md:px-4 py-2">{t(rank.w)}</td>
                    <td className="px-1 md:px-4 py-2 flex justify-center text-sm md:text-base items-center gap-2">
                      {t(rank.team.name)}
                      <Image
                        priority={true}
                        className="h-7 w-7 md:h-10 md:w-10"
                        src={rank.team.img}
                        alt={rank.team.name}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <MostRead title={mostReadData.title} items={mostReadData.items} />
        </div>
        <Advertisements link={'/'} img={Ad} />
      </div>
      <SharedLine header="Matches" LineColor="bg-[#3D185C]" />
      {matches.map(item => (
        <>
          <LeaguesMatches data={item.match} />
        </>
      ))}
    </div>
  );
};

export default Main;
