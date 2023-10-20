const createPrest = require('conventional-changelog-conventionalcommits')

module.exports = async function createPreset(config) {
  const preset = await createPrest(config)
  preset.parserOpts.headerPattern = /^(.*?)(?:\(([\w$.\-*/ ]*)\))?: (.*)$/
  return preset
}
