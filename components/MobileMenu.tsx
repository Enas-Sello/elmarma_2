'use client';
import { Separator } from '@radix-ui/react-separator';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { Button } from './ui/button';
import SmallDevicesMenu from './SmallDevicesMenu';
type MenuItem = {
  link: string;
  name: string;
};

export type NavLink = {
  header: string;
  menu: MenuItem[];
};
export type MenuLink = {
  name: string;
  link: string;
};

const navLinks: NavLink[] = [
  {
    header: 'Arab',
    menu: [
      {
        link: '/tournaments',
        name: 'Saudi Pro League'
      },
      {
        link: '/tournaments',
        name: 'Moroccan League'
      },
      {
        link: '/tournaments',
        name: "King's Cup"
      },
      {
        link: '/tournaments',
        name: 'Tunisian Ligue Professionnelle 1'
      },
      {
        link: '/tournaments',
        name: 'Qatar Stars League'
      },
      {
        link: '/tournaments',
        name: 'UAE Pro League'
      }
    ]
  },
  {
    header: 'Local',
    menu: [
      {
        link: '/tournaments',
        name: 'Egyptian Premier League'
      },
      {
        link: '/tournaments',
        name: 'Professional League Cup'
      },
      {
        link: '/tournaments',
        name: 'Second Division League - A'
      }
    ]
  },
  {
    header: 'Continental',
    menu: [
      {
        link: '/tournaments',
        name: 'UEFA European Qualifiers'
      },
      {
        link: '/tournaments',
        name: 'CAF Confederation Cup'
      },
      {
        link: '/tournaments',
        name: 'CAF Champions League'
      },
      {
        link: '/tournaments',
        name: 'Champions League'
      },
      {
        link: '/tournaments',
        name: 'UEFA European Championship'
      },
      {
        link: '/tournaments',
        name: 'UEFA Europa league'
      },
      {
        link: '/tournaments',
        name: 'BAL'
      },
      {
        link: '/tournaments',
        name: 'The AFC'
      },
      {
        link: '/tournaments',
        name: 'UEFA Europa Conference League'
      },
      {
        link: '/tournaments',
        name: 'World Cup qualifiers'
      }
    ]
  },
  {
    header: 'European',
    menu: [
      {
        link: '/tournaments',
        name: 'Premier League'
      },
      {
        link: '/tournaments',
        name: 'FA cup'
      },
      {
        link: '/tournaments',
        name: 'La Liga'
      },
      {
        link: '/tournaments',
        name: 'Copa Del Ray'
      },
      {
        link: '/tournaments',
        name: 'Serie A'
      },
      {
        link: '/tournaments',
        name: 'Bundesliga'
      },
      {
        link: '/tournaments',
        name: 'Ligue 1'
      },
      {
        link: '/tournaments',
        name: 'Coppa Italia'
      },
      {
        link: '/tournaments',
        name: ' coupe de france'
      },
      {
        link: '/tournaments',
        name: 'DFB-Pokal'
      }
    ]
  }
];

const menuLinks: MenuLink[] = [
  { name: 'Matches', link: '/matches' },
  { name: 'News', link: '/news' },
  { name: 'Leagues', link: '/leagues' },
  { name: 'Elmarma media', link: '/media' },
  { name: 'Latest Transfers', link: '/transfers' }
];
export default function Sidebar({
  isOpen,
  toggleSidebar
}: {
  toggleSidebar: () => void;
  isOpen: boolean;
}) {
  const { t } = useTranslation();

  return (
    <div
      className={`fixed  top-0 left-0 h-screen w-full z-50  bg-mainDark overflow-hidden  ${
        isOpen ? 'block' : 'hidden'
      }`}>
      <div className="flex items-center justify-between px-4 py-2">
        {isOpen ? (
          <IoCloseSharp
            onClick={toggleSidebar}
            className="w-5 h-5 md:w-10 md:h-10"
          />
        ) : (
          <FaBars onClick={toggleSidebar} className="w-5 h-5 md:w-7 md:h-7 " />
        )}
      </div>
      <nav className="flex w-full h-full">
        <ul className="hidden md:flex  flex-col gap-8  mt-2  ">
          {menuLinks.map(item => (
            <Link key={item.link} onClick={toggleSidebar} href={item.link}>
              <li className={` text-nowrap md:px-3 lg:px-6 md:py-3`}>
                <p
                  className={`font-normal text-lg text-white mb-3 text-center ${
                    item.name === 'Leagues'
                      ? 'text-sm lg:text-base text-mainWhite text-glow font-semibold bg-slate-600 bg-opacity-25 py-2 px-1 mb-0 rounded'
                      : ''
                  } `}>
                  {t(item.name)}
                </p>
                <Separator className="border  border-mainWhite border-opacity-45" />
              </li>
            </Link>
          ))}
        </ul>
        <ul className="hidden md:grid grid-cols-4 gap-5 p-10  bg-mainWhite ">
          {navLinks.map((link, i) => (
            <div key={i}>
              <div className="text-mainDark col-span-1">
                <h3 className="font-semibold text-base lg:text-2xl pb-3 border-b-2  mb-3">
                  {t(link.header)}
                </h3>
                {link.menu.map((item, i) => (
                  <Button className="mb-3 !px-0" variant={'ghost'} key={i}>
                    <Link
                      onClick={toggleSidebar}
                      href={{
                        pathname: item.link,
                        query: {
                          search: item.name
                        }
                      }}
                      className="hover:bg-primary mb-5 text-wrap lg:text-nowrap hover:bg-opacity-20 hover:text-mainDark p-2 rounded text-sm  lg:text-2xl font-normal lg:font-semibold text-mainGray  ">
                      {t(item.name)}
                    </Link>
                  </Button>
                ))}
              </div>
              <Separator className="border  border-mainWhite border-opacity-45" />
            </div>
          ))}
        </ul>
        <SmallDevicesMenu
          menuLinks={menuLinks}
          navLinks={navLinks}
          toggleSidebar={toggleSidebar}
        />
      </nav>
    </div>
  );
}
