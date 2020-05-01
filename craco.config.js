const path = require('path');
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');

module.exports = {
  plugins: [
    {
      plugin: reactHotReloadPlugin,
    },
  ],
  webpack: {
    alias: {
      '@shared': path.resolve(__dirname, 'src', 'shared'),
      '@services': path.resolve(__dirname, 'src', 'services'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@config': path.resolve(__dirname, 'src', 'config'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@(.*)$': '<rootDir>/src$1',
      },
    },
  },
};
