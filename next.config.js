/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/aj-coin.tokenlist.json',
        headers: [
          {
            key: 'access-control-allow-origin',
            value: '*',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
