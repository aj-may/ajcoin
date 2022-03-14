import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const isApp = pathname.startsWith('/app');

  return <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <Link href="/">
        <a>
          <img
            className="h-10 w-auto sm:h-12"
            src="/img/aj-coin.png"
            alt="AJ Coin"
          />
        </a>
      </Link>
    </div>

    {isHome && <nav className="hidden md:flex space-x-10">
      <a href="#about" className="text-base font-medium text-gray-500 hover:text-gray-900">
        About
      </a>
      <a href="#faq" className="text-base font-medium text-gray-500 hover:text-gray-900">
        FAQ
      </a>
      <a href="#team" className="text-base font-medium text-gray-500 hover:text-gray-900">
        Team
      </a>
    </nav>}

    {isApp && <nav className="hidden md:flex space-x-10"></nav>}

    <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
      {isHome && <Link href="/app">
        <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Launch App
        </a>
      </Link>}
    </div>
  </div>;
}