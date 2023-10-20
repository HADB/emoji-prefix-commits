import createPrest from 'conventional-changelog-conventionalcommits'

export default function createPreset(config) {
  const preset = createPrest(config)
  preset.parserOpts.headerPattern = /^(.*?)(?:\(([\w$.\-*/ ]*)\))?: (.*)$/
  return preset
}
