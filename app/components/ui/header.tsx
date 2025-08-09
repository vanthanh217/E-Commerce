import { CircleUserRound, Globe, Search, ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';

import { HOME } from '@/constants/routes';
import { cn } from '@/lib/utils';
import { Link } from 'react-router';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-4 z-100 bg-white/30 px-7 py-3 backdrop-blur-md transition-all duration-300 ease-linear',
        isScrolled
          ? 'top-0 right-0 left-0 w-full shadow-lg'
          : 'top-4 left-1/2 w-3/4 -translate-x-1/2 rounded-full shadow-md',
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to={HOME}
          className="font-pacifico text-primary text-3xl select-none"
        >
          SuStore
        </Link>

        <ul className="flex items-center gap-3.5 font-semibold uppercase">
          <li className="after:bg-primary hover:text-primary relative transition-all duration-300 ease-linear after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:transition-all after:duration-300 after:ease-linear hover:after:w-full">
            <Link to={'#'}>Home</Link>
          </li>
          <li className="after:bg-primary hover:text-primary relative transition-all duration-300 ease-linear after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:transition-all after:duration-300 after:ease-linear hover:after:w-full">
            <Link to={'#'}>Product</Link>
            {/* <ul className="absolute left-0 z-101 w-48 rounded-sm bg-white p-4 shadow"></ul> */}
          </li>
          <li className="after:bg-primary hover:text-primary relative transition-all duration-300 ease-linear after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:transition-all after:duration-300 after:ease-linear hover:after:w-full">
            <Link to={'#'}>Contact</Link>
          </li>
          <li className="after:bg-primary hover:text-primary relative transition-all duration-300 ease-linear after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:transition-all after:duration-300 after:ease-linear hover:after:w-full">
            <Link to={'#'}>About us</Link>
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <button className="hover:text-primary cursor-pointer">
            <Search className="size-5" strokeWidth={1.75} />
          </button>
          <button className="hover:text-primary cursor-pointer">
            <Globe className="size-5" strokeWidth={1.75} />
          </button>
          <button className="hover:text-primary cursor-pointer">
            <ShoppingCart className="size-5" strokeWidth={1.75} />
          </button>
          <button className="hover:text-primary cursor-pointer">
            <CircleUserRound className="size-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
