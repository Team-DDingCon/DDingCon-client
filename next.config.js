/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(mp4|ogg)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/media/[name].[ext]?[hash]',
          },
        },
      },
    );

    return config;
  },
};

module.exports = nextConfig;
