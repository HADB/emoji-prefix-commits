import createPrest from 'conventional-changelog-conventionalcommits'

export default async function createPreset(config) {
  const preset = await createPrest(config)
  preset.parserOpts.headerPattern = /^(.*?)(?:\(([\w$.\-*/ ]*)\))?: (.*)$/
  return preset
}
