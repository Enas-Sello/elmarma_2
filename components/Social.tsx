'use client';
import { useFetch } from '@/lib/hooks/useQuery';
import React from 'react';

// import Spiner from './Spinner';
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Social = () => {
  const { t } = useTranslation();
  const { data } = useFetch<any>({
    queryKey: [`social`],
    endpoint: 'setting'
  });

  const socialMedia = [
    {
      icon: <FaYoutube size={24} className=" hover:text-red-500" />,
      link: data?.skype_link || '/'
    },
    {
      icon: <FaLinkedin size={24} className=" hover:text-blue-600" />,
      link: data?.linkedin_link || '/'
    },
    {
      icon: <FaInstagram size={24} className=" hover:text-violet-500" />,
      link: data?.inst_link || '/'
    },
    {
      icon: <FaFacebook size={24} className=" hover:text-blue-800" />,
      link: data?.fb_link || '/'
    },
    {
      icon: <FaTwitter size={24} className=" hover:text-sky-600" />,
      link: data?.tw_link || '/'
    }
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center w-full">
        <div className=" flex gap-4">
          <Link className="link" href={''}>
            {t('policies')}
          </Link>
          <Link className="link" href={data ? data?.whatsapp_link : ''}>
            {t('call us')}
          </Link>
        </div>
        <div className="flex  gap-4 lg:gap-10">
          {/* {isLoading && <Spiner />} */}
          {/* {/isError && <p>{error?.message}</p>} */}
          {/* {data && ( */}
          <>
            {socialMedia?.map((item, i) => (
              <Link target="_blank" key={i} className="link " href={item.link}>
                {item.icon}
              </Link>
            ))}
          </>
          {/* )} */}
        </div>
        <div className=" flex gap-2">
          <p className="text-mainGray">{t('All rights reserved © 2024')}</p>
        </div>
      </div>
    </>
  );
};

export default Social;
