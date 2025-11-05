import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
    './src/lib/i18n/i18n.js'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static Export
    output: 'export',
};

export default withNextIntl(nextConfig);
