import React from 'react';

interface TimelineProps {
  markers: {
    position: number;
    label: string;
  }[];
}

const Timeline: React.FC<TimelineProps> = ({ markers }) => {
  return (
    <div className="flex  relative justify-between w-full h-10 bg-gray-200 rounded-full">
      {markers.map(marker => (
        <div
          key={marker.label}
          className={`w-px h-full bg-red-800 rounded-full absolute left-${marker.position}%`}></div>
      ))}
      <div className="flex items-center space-x-2">
        {markers.map(marker => (
          <span
            key={marker.label}
            className={`text-xs px-2 font-bold bg-white rounded-full shadow-md ${
              marker.position === 50 ? 'text-gray-800' : 'text-gray-500'
            }`}>
            {marker.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
