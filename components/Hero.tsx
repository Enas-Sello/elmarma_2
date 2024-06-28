'use client';
import Link from 'next/link';
import addN1 from '@/public/assets/test1.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        {/* main */}
        <Link
          href={`/${'news' + '/123' || '/'}`}
          className="relative col-span-1 md:col-span-2 h-64 md:h-auto">
          <Image
            src={addN1}
            alt="Real Madrid"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-15 p-4 text-white">
            <h2 className="text-xl font-bold">
              Real Madrid is champion of the Spanish League for the 36th time in
              its history.
            </h2>
          </div>
        </Link>
        {/* 3 col */}
        <div className="grid grid-cols-1 gap-4  ">
          <Link
            href={`/${'news' + '/123' || '/'}`}
            className="relative h-40 md:h-32">
            <Image
              src={addN1}
              alt="Real Madrid"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-15 p-2 text-white">
              <h2 className="">
                Real Madrid is champion of the Spanish League for the 36th time
                in its history.
              </h2>
            </div>
          </Link>
          {/*  */}
          <Link
            href={`/${'news' + '/123' || '/'}`}
            className="relative h-40 md:h-32">
            <Image
              src={addN1}
              alt="Real Madrid"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-15 p-2 text-white">
              <h2 className="">
                Real Madrid is champion of the Spanish League for the 36th time
                in its history.
              </h2>
            </div>
          </Link>
          {/*  */}
          <Link
            href={`/${'news' + '/123' || '/'}`}
            className="relative h-40 md:h-32">
            <Image
              src={addN1}
              alt="Real Madrid"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-15 p-2 text-white">
              <h2 className="">
                Real Madrid is champion of the Spanish League for the 36th time
                in its history.
              </h2>
            </div>
          </Link>
          {/*  */}
        </div>
        {/* 2 col */}
        <div className="grid grid-cols-1 gap-4">
          <Link
            href={`/${'news' + '/123' || '/'}`}
            className="relative h-40 md:h-auto">
            <Image
              src={addN1}
              alt="Real Madrid"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-15 p-4 text-white">
              <h2 className="">
                Real Madrid is champion of the Spanish League for the 36th time
                in its history.
              </h2>
            </div>
          </Link>
          {/*  */}
          <Link
            href={`/${'news' + '/123' || '/'}`}
            className="relative h-40 md:h-auto">
            <Image
              src={addN1}
              alt="Real Madrid"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-15 p-4 text-white">
              <h2 className="">
                Real Madrid is champion of the Spanish League for the 36th time
                in its history.
              </h2>
            </div>
          </Link>

          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
