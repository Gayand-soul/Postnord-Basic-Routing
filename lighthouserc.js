module.exports = {
  ci: {
    collect: {
      staticDistDir: './',  // Detta säger "mina HTML-filer finns i roten"
      numberOfRuns: 1,       // Kör bara en gång (snabbare)
    },
    upload: {
      target: 'temporary-public-storage',  // Ladda upp rapporter så du kan se dem
    },
  },
};
