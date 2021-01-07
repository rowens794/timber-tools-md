// next.config.js
module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/best-wood-router-reviews-spring-2017",
        destination: "/best-wood-router-reviews",
        permanent: true,
      },
    ];
  },
};
