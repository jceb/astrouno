import yaml from '@rollup/plugin-yaml';

// apparently, the plugin configuration isn't complete during the pre-analysis that vite performs, so register it here
export default {
  plugins: [yaml()],
};
