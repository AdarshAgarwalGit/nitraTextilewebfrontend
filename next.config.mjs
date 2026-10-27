/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 90],
  },
  async rewrites() {
    return [
      {
        source: "/Commercialization%20of%20NITRA%20Developments",
        destination: "/commercialization-of-nitra-developments",
      },
      {
        source: "/Instruments-20Developed",
        destination: "/instruments-developed",
      },
      {
        source: "/Instruments%20Developed",
        destination: "/instruments-developed",
      },
    ];
  },
};

export default nextConfig;
