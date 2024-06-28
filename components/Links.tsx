'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const Links = ({ data }: any) => {
  const navLinks = data || [
    { name: 'Matches', link: '/matches' },
    { name: 'News', link: '/news' },
    { name: 'Leagues', link: '/leagues' },
    { name: 'Elmarma media', link: '/media' },
    { name: 'Latest Transfers', link: '/transfers' }
  ];

  const { t } = useTranslation();
  const pathname = usePathname();
  const path = pathname.split('/');
  const active = `/${path[path.length - 1]}`;
  return (
    <div className=" flex text-nowrap gap-3 lg:gap-10">
      {navLinks.map((item: any) => (
        <Link
          key={item.link}
          className={`${
            active === item.link && 'underline-offset-4 underline'
          } link  text-xs md:text-sm sm:font-normal lg:text-lg hover:underline `}
          href={item.link}>
          {t(item.name)}
        </Link>
      ))}
    </div>
  );
};

export default Links;
