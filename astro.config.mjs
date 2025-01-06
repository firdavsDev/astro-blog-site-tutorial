import { defineConfig } from 'astro/config';

export default defineConfig({
    redirects: {
        '/old-page': {
            status: 302,
            destination: '/new-page'
        }
    }
});
