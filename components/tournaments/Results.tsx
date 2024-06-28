import React from 'react';
import MainLayout from '../shared/MainLayout';
import SharedLine from '../shared/SharedLine';
import LeaguesMatches from '../LeaguesMatches';
import logotest from '@/public/assets/logotest.png';
import SerieA from '@/public/assets/SerieA.png';
import SideData from '../shared/SideData';



const matches = [
  {
    team: { name: 'La Liga', logo: logotest },
    match: [{ id: '123' }, { id: '1234' }]
  },
  {
    team: { name: 'Serie A', logo: SerieA },
    match: [{ id: '12346' }, { id: '12345' }]
  }
];
const Results = () => {

  return (
    <MainLayout>
      <main className="">
        <div className="grid grid-cols-5 gap-10 ">
          <div className="col-span-5 md:col-span-3 flex flex-col gap-5">
            <SharedLine header="Results" LineColor="bg-[#3D185C]" />
            {matches.map(item => (
              <>
                <SharedLine header={item.team.name} LineColor="bg-[#3D185C]" />
                <LeaguesMatches data={item.match} />
              </>
            ))}
          </div>
          <SideData />
        </div>
      </main>
    </MainLayout>
  );
};

export default Results;
