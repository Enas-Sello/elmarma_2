import Logo from './Logo';
import Links from './Links';
import Social from './Social';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <>
      <div className="bg-mainDark text-white md:font-medium rounded p-5">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="w-20 h-20 md:w-32 md:h-32">
            <Logo />
          </div>
          <Links />
          <Separator className=" border  border-mainGray" />
          <Social />
        </div>
      </div>
    </>
  );
};

export default Footer;
