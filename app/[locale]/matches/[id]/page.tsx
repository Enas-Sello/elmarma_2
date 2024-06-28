'use client';
import MainLayout from '@/components/shared/MainLayout';
import SharedLine from '@/components/shared/SharedLine';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Card from '@/components/shared/Card';
import Scoreboard from '@/components/Scoreboard';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Table from '@/components/shared/Table';
import matchDetale from '@/public/assets/matchDetale.png';
import libeUP from '@/public/assets/libeUP.png';
import Manchester from '@/public/assets/Manchester.png';
import Premier from '@/public/assets/Premier.png';
import Timeline from '@/public/assets/Timeline.png';
// import Timeline from '@/components/Timeline';

type DataType = 'videos' | 'details' | 'overview';
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
  }
];
const MatchDetails = ({ searchParams }: { searchParams: { search: string } }) => {
  console.log('=======>12', searchParams);

  const { t } = useTranslation('');
  const [dataType, SetDateType] = useState<DataType>('overview');
  console.log(dataType);
  const showMatchDetail = (type: DataType) => {
    SetDateType(type);
  };
  return (
    <MainLayout>
      <main className="p-5 md:p-10">
        <Scoreboard />
        <div className=" w-full bg-white shadow-2xl mt-1 rounded flex justify-center items-center mb-10">
          <Button onClick={() => showMatchDetail('overview')} variant={'link'}>
            {t('Overview')}
          </Button>
          <Button onClick={() => showMatchDetail('details')} variant={'link'}>
            {t('Details')}
          </Button>
          <Button onClick={() => showMatchDetail('videos')} variant={'link'}>
            {t('Videos')}
          </Button>
        </div>
        {dataType === 'overview' && (
          <>
            <Table
              title={
                'History of confrontations between the two teams (last 6 matches)'
              }
              stats={[
                { label: 'win', teamTwoScore: '3', teamOneScore: '1' },
                { label: 'loss', teamTwoScore: '2', teamOneScore: '3' }
              ]}
              items={[
                {
                  label: 'Premier League',
                  date: '11 NOV . 2023',
                  team: [
                    { name: 'Arsenal', score: '3' },
                    { name: 'Manchester City', score: '2' }
                  ]
                }
              ]}
            />
            <div className="mt-10">
              <SharedLine header="Ranking" />
              <div className=" mx-auto mt-4">
                <table className="table-auto w-full border border-collapse md:font-bold ">
                  <thead>
                    <tr className="bg-mainDark text-sm  md:text-lg text-white lg:text-2xl  p-2 rounded lg:font-bold text-center mb-4">
                      <th className="px-1 md:px-4 py-2">{t('Points')}</th>
                      <th className="px-1 md:px-4 py-2">{t('D')}</th>
                      <th className="px-1 md:px-4 py-2">{t('L')}</th>
                      <th className="px-1 md:px-4 py-2">{t('W')}</th>
                      <th className="px-1 md:px-4 py-2 text-center">
                        {t('Team')}
                      </th>
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
            </div>
          </>
        )}
        {/* details  */}
        {dataType === 'details' && (
          <div className="flex flex-col gap-8 justify-center items-center">
            <div className="lg:w-[60rem]">
              <Image
                priority={true}
                alt="logo"
                src={Timeline}
                placeholder="empty"
                className=" object-cover w-full h-full"
              />{' '}
            </div>
            {/* <div className="container mx-auto p-4 ">
              <Timeline
                markers={[
                  { position: 20, label: '89' },
                  { position: 40, label: '59' },
                  { position: 50, label: 'Half-Time' }, // Centered label
                  { position: 60, label: '55' },
                  { position: 80, label: '30' }
                ]}
              />
            </div> */}
            <div className="lg:w-[600px]">
              <Image
                priority={true}
                alt="logo"
                src={matchDetale}
                placeholder="empty"
                className=" object-cover w-full h-full"
              />
            </div>
            <Button variant={'outline'}>line UP</Button>
            <div className="lg:w-[600px]">
              <Image
                priority={true}
                alt="logo"
                src={libeUP}
                placeholder="empty"
                className=" object-cover w-full h-full"
              />
            </div>
          </div>
        )}
        {/* video */}
        {dataType === 'videos' && (
          <>
            <Card
              data={[
                { link: 'news' },
                { link: 'news' },
                { link: 'news' },
                { link: 'news' },
                { link: 'news' }
              ]}
              video
            />
          </>
        )}
        <div className="flex flex-col gap-5 mt-10">
          <SharedLine header="Stats" />
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-mainGray">{t('Premier League')}</p>
            <div className="flex flex-col md:flex-row w-full px-5 md:px-10">
              <div className="flex justify-evenly text-mainWhite w-full gap-3  bg-gradient-to-br md:bg-gradient-to-l   from-[#4B4FAC] to-mainWhite rounded-s  items-center p-3">
                <Image
                  src={Manchester}
                  alt="Manchester City Logo"
                  width={80}
                  height={80}
                />
                <p className="text-xl font-bold">{t('Manchester City')}</p>
                <p className="text-lg">{14}</p>
              </div>
              <div className="flex flex-row-reverse justify-evenly text-mainWhite w-full gap-3 items-center bg-gradient-to-bl md:bg-gradient-to-r  from-[#CA0538] to-mainWhite rounded-e p-3">
                <Image
                  src={Premier}
                  alt="Arsenal Logo"
                  width={80}
                  height={80}
                />
                <p className="text-xl font-bold">{t('Arsenal')}</p>
                <p className="text-lg">{2}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default MatchDetails;
