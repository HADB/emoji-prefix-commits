const createPrest = require('conventional-changelog-conventionalcommits')
const { createConventionalRecommendedBumpOpts } = require('./conventionalRecommendedBump.js')

module.exports = async function createPreset(config) {
  const preset = await createPrest(config)
  preset.parserOpts.headerPattern = /^(.*?)(?:\(([\w$.\-*/ ]*)\))?: (.*)$/
  preset.recommendedBumpOpts = createConventionalRecommendedBumpOpts(config, preset.parserOptspreset.parserOpts)
  return preset
}
