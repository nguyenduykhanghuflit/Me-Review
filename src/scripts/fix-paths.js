const tsConfigPaths = require('tsconfig-paths');

const baseUrl = './dist';
const { paths } = require('../tsconfig.json').compilerOptions;

tsConfigPaths.register({
   baseUrl,
   paths,
});
