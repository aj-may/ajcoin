import { HeartIcon, ShoppingCartIcon, TrendingUpIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Prefered token of Elon Musk',
    description:
      'Elon Musk has agreed to tweet controversial comments about AJ Coin on a weekly bases. This will lead to wild volatility and fluctuations in valuation while still only going up!',
    icon: HeartIcon,
  },
  {
    name: '$AJC Yield',
    description:
      `Dont just HODL, let your AJC earn yield for you!  Simply provide an equivalent value of MATIC
      and AJC and watch the fees roll in 😎`,
    icon: TrendingUpIcon,
  },
  {
    name: 'Exclusive Marketplace',
    description:
      'Coming Soon: Exchange $AJC for exclusive digital and physical goods that can only be purchased with $AJC.',
    icon: ShoppingCartIcon,
  },
];

export default function Features() {
  return <div className="py-12 bg-white mt-16 sm:mt-24">
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">A better way to send money.</h2>
      <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
        {features.map((feature) => (
          <div key={feature.name}>
            <dt>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
            </dt>
            <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>;
}