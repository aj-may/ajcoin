const faqs = [
  {
    question: 'When I try to claim my $AJC it says insufficient funds.  What do I do?',
    answer:
      '$AJC lives on the Polygon network which requires MATIC tokens to pay for the transaction fees. To get MATIC on the polygon network, either beg your friends for some (you wont need much), or buy some on MoonPay.',
  },
  {
    question: 'The price of $AJC went down, but I thought it only goes up?',
    answer:
      'Correct. The price of $AJC only ever goes up, what you are seeing may be an issue with the price feed you are looking at - please refresh the chart to verify. If the issue persists, just turn the chart upside down.',
  },
  {
    question: 'What can I do with my $AJC?',
    answer:
      'The better question is what CAN\'T you do with your $AJC? You can redeem your $AJC for exclusive dope merch, use $AJC to provide liquidity to earn those sweet sweet yields, or just HODL because, if you recall, IT ONLY GOES UP.',
  },
]

export default function Faqs() {
  return <div className="bg-white" id="faq">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
          <p className="mt-4 text-lg text-gray-500">
            Can’t find the answer you’re looking for? Reach out to our{' '}
            <a href="mailto:support@ajcoin.xyz" className="font-medium text-indigo-600 hover:text-indigo-500">
              customer support
            </a>{' '}
            team.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-12">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </div>;
}