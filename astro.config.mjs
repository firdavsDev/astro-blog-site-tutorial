import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

export default defineConfig({
  redirects: {
      '/old-page': {
          status: 302,
          destination: '/new-page'
      }
  },

  site: "https://example.com",
  integrations: [preact()]
});