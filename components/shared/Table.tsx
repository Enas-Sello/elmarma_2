// components/Table.tsx
import Image from 'next/image';
import React from 'react';
import Premier from '@/public/assets/Premier.png';
import Manchester from '@/public/assets/Manchester.png';
import { useTranslation } from 'react-i18next';
interface TableProps {
  title: string;
  stats: { label: string; teamTwoScore: string; teamOneScore: string }[];
  items: {
    label: string;
    date: string;
    team: { name: string; score: string }[];
  }[];
}

const Table: React.FC<TableProps> = ({ title, stats, items }) => {
  const { t } = useTranslation();
  return (
    <div className=" mx-auto mt-4 overflow-hidden">
      <h2 className="bg-mainDark text-sm  md:text-lg text-white lg:text-2xl font-normal p-2 rounded lg:font-bold text-center mb-4">
        {t(title)}
      </h2>
      <table className="table-auto w-full border border-collapse md:font-bold">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="md:px-4 py-2">
              <Image
                priority={true}
                src={Manchester}
                alt="Manchester City"
                className="h-7 w-7 md:h-10 md:w-10"
              />
            </th>
            <th className="md:px-4 py-2 text-sm md:text-base text-center">{t('Statistics')}</th>
            <th className="md:px-4 py-2">
              <Image
                priority={true}
                src={Premier}
                alt="Manchester City"
                className="h-7 w-7 md:h-10 md:w-10"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {stats.map(stat => (
            <tr key={stat.label} className="border-b ">
              <td className="md:px-4 px-2 py-2 ">{t(stat.teamOneScore)}</td>
              <td className="md:px-4 py-2 text-center">{t(stat.label)}</td>
              <td className="md:px-4 px-2 py-2">{t(stat.teamTwoScore)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          {items.map(item => (
            <tr
              key={item.label}
              className="hidden md:block text-nowrap border-b text-xs md:text-base ">
              <td className="md:px-4 py-2  text-mainGray font-normal">
                {t(item.label)}
              </td>
              <td className="md:px-4  py-2 flex justify-center items-center gap-3">
                {item.team.map(team => (
                  <p key={team.name} className="  flex md:gap-3  ">
                    <span className=" md:text-base font-normal">
                      {t(team.score)} /
                    </span>
                    {t(team.name)}
                  </p>
                ))}
              </td>
              <td className=" px-4 py-2">{t(item.date)}</td>
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
