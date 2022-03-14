import Link from 'next/link'

export default function Hero() {
  return <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
    <div className="text-center" id="about">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">It</span>{' '}
        <span className="block text-indigo-600 xl:inline">only</span>{' '}
        <span className="block xl:inline">goes up</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
      $AJC is the future of finance. Backed by sick memes and dope merch, its value only goes up.
      Using the power of the Polygon network, $AJC is projected to flip the US Dollar in under a year.
      Still using the dollar to buy things? Get with the times, buy some $AJC.
      </p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <Link href="/app">
            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              Get started
            </a>
          </Link>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <a
            href="/whitepaper.pdf"
            target="_blank"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
          >
            Read the whitepaper
          </a>
        </div>
      </div>
    </div>
  </main>;
}