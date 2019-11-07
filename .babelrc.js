module.exports = api => {
  // Check if it's jest running
  return api.env('test')
    ? { presets: [['@babel/preset-env', { targets: { node: 'current' } }]] }
    : {};
};
