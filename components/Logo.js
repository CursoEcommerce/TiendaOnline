import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <Link href="/">
    <a className="flex items-center space-x-2">
      <Image src="/logo.svg" alt="Logo" width={32} height={32} />
      <span className="hidden sm:inline-block font-extrabold text-3xl text-gray-700">
        ZapatillasNike
      </span>
    </a>
  </Link>
);

export default Logo;
