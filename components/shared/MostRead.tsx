import React from 'react';
import SharedLine from './SharedLine';
import MostReadtest from '@/public/assets/MostRead.png';

interface Props {
  // Add any props your component needs here, like title, items
  title: string;
  items: string[];
}

const MostRead = ({ title, items }: Props) => {
  return (
    <div className="flex flex-col gap-5 p-2 w-full">
      <SharedLine header={title} LineColor="bg-[#3D185C]" logo={MostReadtest} />
      {/*  */}
      {items?.map((item, index) => (
        <div
        
          key={index}
          className="inline-grid grid-cols-8 bg-white shadow rounded">
          <p className="p-5 col-span-1 border-e-2 border-b-2 text-center font-medium">
            {index + 1}
          </p>
          <p className="p-2 col-span-7 border-b-2 text-center font-medium">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MostRead;
