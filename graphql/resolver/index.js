const gameFrameResolver = require('./gameFrame');
const testResolver = require('./test');

const rootResolver = {
  ...gameFrameResolver,
  ...testResolver

};

module.exports = rootResolver;
