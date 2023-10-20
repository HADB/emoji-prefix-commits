const createPrest = require('conventional-changelog-conventionalcommits')
const breakingHeaderPattern = /^(\w*)(?:\((.*)\))?!: (.*)$/

function addBangNotes(commit) {
  const match = commit.header.match(breakingHeaderPattern)
  if (match && commit.notes.length === 0) {
    const noteText = match[3] // the description of the change.
    commit.notes.push({
      text: noteText,
    })
  }
}

function createConventionalRecommendedBumpOpts(config, parserOpts) {
  return {
    parserOpts,

    whatBump(commits) {
      let level = 2
      let breakings = 0
      let features = 0

      commits.forEach((commit) => {
        // adds additional breaking change notes
        // for the special case, test(system)!: hello world, where there is
        // a '!' but no 'BREAKING CHANGE' in body:
        addBangNotes(commit)
        if (commit.notes.length > 0) {
          breakings += commit.notes.length
          level = 0
        } else if (commit.type === 'feat' || commit.type === 'feature') {
          features += 1
          if (level === 2) {
            level = 1
          }
        }
      })

      if (config?.preMajor && level < 2) {
        level++
      }

      return {
        level,
        reason:
          breakings === 1
            ? `There is ${breakings} BREAKING CHANGE and ${features} features`
            : `There are ${breakings} BREAKING CHANGES and ${features} features`,
      }
    },
  }
}

module.exports = async function createPreset(config) {
  const preset = await createPrest(config)
  preset.parserOpts.headerPattern = /^(.*?)(?:\(([\w$.\-*/ ]*)\))?: (.*)$/
  preset.recommendedBumpOpts = createConventionalRecommendedBumpOpts(config, preset.parserOptspreset.parserOpts)
  return preset
}
