const presets = [
  '@vue/app',
  '@babel/preset-env',
  '@babel/preset-react'//,
  // { targets: { node: 'current' } }
]

const plugins = [
  '@babel/plugin-transform-modules-commonjs',
  ['@vue/babel-plugin-jsx', { mergeProps: false, enableObjectSlots: false }],
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-transform-object-assign',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-transform-runtime'//,
  // {
  //   helpers: true
  // }
]

module.exports = {
  presets: presets,
  sourceType: 'unambiguous',
  plugins: [...plugins]
}
