const gql = require('graphql-tag');

module.exports = {
  process(src, _filename, _config, _options) {
    return 'module.exports = ' + JSON.stringify(gql`${src}`) + ';';
  },
};
