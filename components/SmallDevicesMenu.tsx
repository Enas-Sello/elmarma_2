import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { MenuLink, NavLink } from './MobileMenu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Button } from './ui/button';
import Social from './Social';
import ThemeSwitch from './ThemeSwitch';
import LanguageChanger from './LanguageChanger';

type PropsType = {
  navLinks: NavLink[];
  menuLinks: MenuLink[];
  toggleSidebar: () => void;
};
type MenuSection = {
  id: string;
  header: string;
  items: (MenuLink | NavLink)[];
};
const SmallDevicesMenu = ({
  navLinks,
  menuLinks,
  toggleSidebar
}: PropsType) => {
  const { t } = useTranslation();

  const menu: MenuSection[] = [
    { id: '1', header: 'main content', items: menuLinks },
    { id: '2', header: 'Leagues', items: navLinks }
  ];

  const isNavLink = (item: MenuLink | NavLink): item is NavLink => {
    return (item as NavLink).header !== undefined;
  };

  const isMenuLink = (item: MenuLink | NavLink): item is MenuLink => {
    return (item as MenuLink).link !== undefined;
  };

  return (
    <div className="md:hidden flex flex-col gap-3 w-full items-end">
      <div className="flex items-center  gap-2 lg:gap-8 mx-5">
        <ThemeSwitch />
        <LanguageChanger />
      </div>
      <div className=" w-full p-2 flex flex-col gap-24 ">
        <Accordion defaultValue="item-0" type="single" collapsible>
          {menu.map((section, i) => (
            <AccordionItem key={section.id} value={`item-${i}`}>
              <AccordionTrigger className="bg-slate-600 bg-opacity-25 mb-3">
                {t(section.header)}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2">
                  {section.items.map((item, i) => {
                    if (isNavLink(item)) {
                      return (
                        <div key={i}>
                          <h3 className="font-semibold  p-3 border-b-2  mb-3">
                            {item.header}
                          </h3>
                          {item.menu.map((subItem, subIndex) => (
                            <Button
                              className="mb-3 !px-0"
                              variant={'ghost'}
                              key={subIndex}>
                              <Link
                                onClick={toggleSidebar}
                                href={{
                                  pathname: subItem.link,
                                  query: { search: subItem.name }
                                }}
                                className="hover:bg-slate-700 hover:bg-opacity-25 hover:text-mainWhite  mb-5 text-wrap p-2 rounded text-sm  font-normal text-mainGray">
                                {t(subItem.name)}
                              </Link>
                            </Button>
                          ))}
                        </div>
                      );
                    } else if (isMenuLink(item)) {
                      return (
                        <Link
                          key={i}
                          onClick={toggleSidebar}
                          href={{
                            pathname: item.link,
                            query: { search: item.name }
                          }}
                          className="hover:bg-slate-700 hover:bg-opacity-25 hover:text-mainWhite  mb-5 text-wrap p-2 rounded text-sm  font-normal text-mainGray">
                          {t(item.name)}
                        </Link>
                      );
                    } else {
                      return null; // Optional: Handle any unexpected cases
                    }
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Social />
      </div>
    </div>
  );
};

export default SmallDevicesMenu;
