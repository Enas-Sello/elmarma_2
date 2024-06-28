'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@radix-ui/react-separator';
import { useState } from 'react';

const MobileMenu = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const navLinks = [
    {
      header: 'Arab',
      menu: [
        {
          link: '/',
          name: 'Saudi Pro League'
        }
      ]
    },
    {
      header: 'Local',
      menu: [
        {
          link: '/',
          name: 'Egyptian Premier League'
        }
      ]
    },
    {
      header: 'Continental',
      menu: [
        {
          link: '/',
          name: 'UEFA European Qualifiers'
        }
      ]
    },
    {
      header: 'European',
      menu: [
        {
          link: '/',
          name: 'Premier League'
        }
      ]
    }
  ];

  const menuLinks = [
    { name: 'Matches', link: 'matches' },
    { name: 'News', link: 'news' },
    { name: 'Leagues', link: 'leagues' },
    { name: 'Elmarma Media', link: 'media' },
    { name: 'Latest Transfers', link: 'transfers' }
  ];

  return (
    <Sheet>
      <SheetTrigger className=" align-middle bg-primary h-full w-[3.7rem] flex justify-center items-center">
        <FaBars onClick={toggleSidebar} className="w-5 h-5 md:w-7 md:h-7 " />
      </SheetTrigger>
      <SheetContent className="flex bg-primary ">
        <div className="flex flex-col gap-5 mt-10">
          {menuLinks.map(item => (
            <>
              <div className="text-sm font-normal md:font-medium md:text-lg text-white">
                <Link href={item.link}>{t(item.name)}</Link>
              </div>
              <Separator className="border  border-mainWhite border-opacity-45" />
            </>
          ))}
        </div>
        {/*  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5 p-10 bg-mainWhite">
          {navLinks.map((link, i) => (
            <div key={i}>
              <div className="text-mainDark  text-lg col-span-1">
                <h3 className="font-semibold text-base md:text-2xl pb-3 border-b-2  mb-3">
                  {link.header}
                </h3>
                {link.menu.map((item, i) => (
                  <div key={i}>
                    <Link href={item.link} className=" text-mainGray mb-3">
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
              <Separator className="border  border-mainWhite border-opacity-45" />
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
