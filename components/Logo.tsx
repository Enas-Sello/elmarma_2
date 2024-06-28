import Image from 'next/image';
import logo from '@/public/assets/logo.png';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'} className="w-full h-full ">
      <Image
        priority={true}
        alt="logo"
        src={logo}
        placeholder="empty"
        className=" object-cover w-full h-full"
      />
    </Link>
  );
};

export default Logo;
