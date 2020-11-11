const poeppelmanResolver = require('./poeppelman');
const testResolver = require('./test');

const rootResolver = {
  ...poeppelmanResolver,
  ...testResolver
};

module.exports = rootResolver;
