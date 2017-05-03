const loader = require('graphql-tag/loader');

module.exports = {
  process(src) {
    // call directly the webpack loader with a mocked context 
    // as graphql-tag/loader leverages `this.cacheable()`
    return loader.call({ cacheable() {} }, src);
  },
};
