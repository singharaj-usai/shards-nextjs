'use strict'

const path = require('path')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const { babel } = require('@rollup/plugin-babel')
const terser = require('@rollup/plugin-terser')
const postcss = require('rollup-plugin-postcss')
const { name, version, dependencies, peerDependencies } = require('../package.json')

const PATHS = {
  INPUT: path.resolve(__dirname, '..', 'components', 'index.js'),
  DIST: path.resolve(__dirname, '..', 'dist')
}

// Converts strings into camelCase
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) {
            return '';
        }
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

const year = new Date().getFullYear()
const banner = `/*
* Shards React v${version} (https://designrevision.com/downloads/shards-react/)
* Based on: Bootstrap ${dependencies.bootstrap} (https://getbootstrap.com)
* Based on: Shards ${dependencies['shards-ui']} (https://designrevision.com/downloads/shards/)
* Copyright 2017-${year} DesignRevision (https://designrevision.com)
* Copyright 2017-${year} Catalin Vasile (http://catalin.me)
*/`

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react-transition-group': 'ReactTransitionGroup',
  'react-popper': 'ReactPopper',
  'prop-types': 'PropTypes',
  'classnames': 'classNames'
}

function createBaseConfig(callback) {
  const baseConfig = {
    input: PATHS.INPUT,
    plugins: [
      nodeResolve({
        extensions: ['.js', '.jsx']
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      postcss({
        extract: false,
        modules: false,
        use: ['sass', 'less', 'stylus'],
        inject: false
      }),
      babel({
        babelHelpers: 'bundled',
        presets: [
          "@babel/preset-env",
          "@babel/preset-react"
        ],
        exclude: 'node_modules/**'
      })
    ],
    external: Object.keys(Object.assign({}, peerDependencies, dependencies))
  }

  return callback(baseConfig)
}

const CommonJSConfig = createBaseConfig(function(config) {
  return Object.assign({}, config, {
    output: {
      banner,
      name: camelize(name),
      sourcemap: true,
      format: 'cjs',
      file: path.resolve(PATHS.DIST, `${name}.common.js`)
    }
  })
})

const ESModulesConfig = createBaseConfig(function(config) {
  return Object.assign({}, config, {
    output: {
      banner,
      name: camelize(name),
      sourcemap: true,
      format: 'es',
      file: path.resolve(PATHS.DIST, `${name}.es.js`)
    }
  })
})

const UMDConfig = createBaseConfig(function(config) {
  return Object.assign({}, config, {
    output: {
      banner,
      name: camelize(name),
      sourcemap: true,
      globals: globals,
      format: 'umd',
      file: path.resolve(PATHS.DIST, `${name}.umd.js`)
    }
  })
})

const MinifiedUMDConfig = createBaseConfig(function(config) {
  config.plugins.push(terser({ format: { comments: false } }))

  return Object.assign({}, config, {
    output: {
      banner,
      name: camelize(name),
      sourcemap: true,
      globals: globals,
      format: 'umd',
      file: path.resolve(PATHS.DIST, `${name}.umd.min.js`)
    }
  })
})

module.exports = [
  CommonJSConfig,
  ESModulesConfig,
  UMDConfig,
  MinifiedUMDConfig
]
