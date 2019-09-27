const providerGithub = require('@koopjs/provider-github');
const outputs = [];
const auths = [];
const caches = [];
const plugins = [{
  instance: providerGithub
}];
module.exports = [...outputs, ...auths, ...caches, ...plugins];