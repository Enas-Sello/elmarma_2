import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
const Advertisements = ({ link, img }: { link: any; img: any }) => {
  return (
    <section>
      <Link href={link} className="w-full h-full relative ">
        <div className="absolute top-2 right-2">
          <Badge variant={'secondary'}>{`>`}</Badge>
        </div>
        <Image
          src={img}
          priority={true}
          alt="addN1"
          placeholder="blur"
          className=" object-cover w-full h-full"
        />
      </Link>
    </section>
  );
};

export default Advertisements;
