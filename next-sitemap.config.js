/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://quickconvert.app",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/api/*", "/404", "/500"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};

export default config;
