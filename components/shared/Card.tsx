'use client';

import Image from 'next/image';
import { Key } from 'react';
import { Badge } from '../ui/badge';
import test1 from '@/public/assets/test1.png';
import Link from 'next/link';

interface CardProps {
  data: any[];
  bgColor?: string;
  badge?: boolean;
  header?: boolean;
  footer?: boolean;
  video?: boolean;
}

const Card = ({ data, bgColor, badge, header, footer, video }: CardProps) => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 w-full">
      {data?.map((item, index: Key) => (
        <Link
          href={`/${item.link + '/123' || '/'}`}
          key={index}
          className={` col-span-1 rounded flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-100 font-semibold ${
            bgColor ? `${bgColor} text-mainWhite` : 'text-mainDark shadow-2xl'
          }`}>
          {video ? (
            <div className="relative">
              <video width="600" controls className="object-cover h-40">
                <source src="/videos/sample-video.mp4" type="video/mp4" />
              </video>
              {badge && (
                <div className="absolute top-2 left-2">
                  <Badge>new</Badge>
                </div>
              )}
            </div>
          ) : (
            <div className="relative">
              <Image
                width="600"
                priority={true}
                alt="test1"
                src={test1}
                placeholder="empty"
                className="object-cover h-40"
              />
              {badge && (
                <div className="absolute top-2 left-2">
                  <Badge>new</Badge>
                </div>
              )}
            </div>
          )}
          <div className="p-3 flex flex-col gap-3">
            {header && (
              <p className="text-primary">Lorem ipsum dolor sit amet.</p>
            )}
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              assumenda modi voluptate hic magnam adipisci.
            </p>
            {footer && (
              <p className="text-mainGray text-sm font-normal text-end mt-2">
                {/* {new Date().toLocaleString()} */}
                5/19/2024, 8:11:04 PM
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
