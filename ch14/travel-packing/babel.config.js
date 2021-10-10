// Listing 12.1 Babel configuration in babel.config.js

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
	targets: {
	  node: 'current'
	}
      }
    ]
  ]
};
