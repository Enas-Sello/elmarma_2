'use client';

import { useTranslation } from 'react-i18next';
import fire from '@/public/assets/fire.png';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SharedLine = ({
  LineColor,
  header,
  tail,
  link,
  icon,
  logo,
  data
}: {
  LineColor?: string | 'bg-mainDark';
  header: string;
  link?: string;
  tail?: string;
  logo?: any;
  icon?: boolean;
  data?: string;
}) => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <div
      className={`flex justify-between items-center py-2 px-4 rounded text-mainWhite font-bold w-full
       ${LineColor ? `${LineColor} ` : 'bg-mainDark '}`}>
      <div className="flex items-center justify-center gap-2">
        {logo && (
          <Image
            src={logo}
            alt="fire"
            width={25}
            height={25}
            priority={true}
            className=" object-contain p-0 m-0"
          />
        )}
        <p>{t(header)}</p>
        {icon && (
          <Image
            src={fire}
            alt="fire"
            width={25}
            height={25}
            priority={true}
            className=" object-contain"
          />
        )}
      </div>
      {tail && link && (
        <Link
          href={{
            pathname: link,
            query: {
              search: data
            }
          }}
          className="flex items-center justify-center gap-3">
          {t(tail)}
          {currentLocale === 'en' ? <IoIosArrowForward /> : <IoIosArrowBack />}
        </Link>
      )}
    </div>
  );
};

export default SharedLine;
