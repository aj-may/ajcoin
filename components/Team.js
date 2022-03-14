const people = [
  {
    name: 'ajmay.eth',
    role: 'dev',
    imageUrl: '/img/ajmay-eth.jpeg',
  },
  {
    name: 'metalopez.eth',
    role: 'community manager',
    imageUrl: '/img/alej.png',
  },
  {
    name: 'alex',
    role: 'investor',
    imageUrl: '/img/alex.jpg',
  },
  {
    name: 'TheVange.crypto',
    role: 'investor relations',
    imageUrl: '/img/thevange-crypto.png',
  },
];

export default function Team() {
  return (
    <div className="bg-white" id="team">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our team</h2>
            <p className="text-xl text-gray-500">
            The core team are experience professionals, having worked on blockchain-based solutions with clients all
            over the world. But the real team is the broader $AJC community - working together to build a more
            decentralized world.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-6">
                  <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={person.imageUrl} alt="" />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}