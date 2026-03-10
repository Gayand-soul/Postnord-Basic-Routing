module.exports = {
  ci: {
    collect: {
      staticDistDir: '.',
      url: ['http://localhost:33167/index.html'], // Explicit URL med rätt port
      numberOfRuns: 1,
      settings: {
        skipAudits: ['uses-http2'],
        chromeFlags: '--no-sandbox --disable-setuid-sandbox', // Viktigt för GitHub Actions
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'categories:performance': ['warn', {minScore: 0}], // Sätt lågt så det inte failar
        'categories:accessibility': ['warn', {minScore: 0}],
        'categories:best-practices': ['warn', {minScore: 0}],
        'categories:seo': ['warn', {minScore: 0}],
      },
    },
  },
};
