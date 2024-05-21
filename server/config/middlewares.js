module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'default-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://worthy-bloom-f4d3aff7df.strapiapp.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://worthy-bloom-f4d3aff7df.strapiapp.com'],
          'script-src': ["'self'", 'https://worthy-bloom-f4d3aff7df.strapiapp.com'],
          'style-src': ["'self'", 'https://worthy-bloom-f4d3aff7df.strapiapp.com'],
          'connect-src': ["'self'", 'https://worthy-bloom-f4d3aff7df.strapiapp.com'],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://worthy-bloom-f4d3aff7df.strapiapp.com', 'https://worthy-bloom-f4d3aff7df.strapiapp.com'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      credentials: true,
      keepHeadersOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
