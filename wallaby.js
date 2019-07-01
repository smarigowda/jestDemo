module.exports = function (wallaby) {

    return {
      files: [
        'src/**/*.js',
        'package.json', // <--
        '!src/**/*.test.js'
        ],
 
      tests: ['src/**/*.test.js'],
 
      env: {
        type: 'node',
        runner: 'node'
      },
 
      testFramework: 'jest',

      compilers: {
        '**/*.js': wallaby.compilers.babel()
      },
 
      setup: function (wallaby) {
        var jestConfig = require('./package.json').jest;
        /* for example:    
         * jestConfig.globals = { "__DEV__": true }; */
        wallaby.testFramework.configure(jestConfig);
      }
    };
  };