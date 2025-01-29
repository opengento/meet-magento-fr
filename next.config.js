// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
      defaultLocale: 'fr',
      locales: ['fr', 'en'],
      localeDetection: true,
    },
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });
        return config;
    }
}

module.exports = nextConfig;
