import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.webtree.portfolio',
  appName: 'WebTree',
  webDir: 'out',
  server: {
    androidScheme: 'https',
    cleartext: true,
  },
  backgroundColor: '#09090b',
};

export default config;
