'use strict';

module.exports = {
  write: true,
  prefix: '^',
   test: [
     'test',
     'benchmark',
   ],
  devdep: [
    'egg-ci',
    'egg-bin',
    'autod',
    'eslint',
    'eslint-config-egg',
    'power-assert',
    'intelli-espower-loader',
  ],
  exclude: [
    './test/fixtures',
  ],
};
