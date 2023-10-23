'use strict'

const DEFAULT_COMMIT_TYPES = Object.freeze([
  { type: '✨feat', section: 'Features' },
  { type: '🐛fix', section: 'Bug Fixes' },
  { type: '🚀perf', section: 'Performance Improvements' },
  { type: '⏪revert', section: 'Reverts' },
  { type: '📚docs', section: 'Documentation', hidden: true },
  { type: '🎨style', section: 'Styles', hidden: true },
  { type: '🔧chore', section: 'Miscellaneous Chores', hidden: true },
  { type: '🦄refactor', section: 'Code Refactoring', hidden: true },
  { type: '✅test', section: 'Tests', hidden: true },
  { type: '📦build', section: 'Build System', hidden: true },
  { type: '👷ci', section: 'Continuous Integration', hidden: true }
].map(Object.freeze))

exports.DEFAULT_COMMIT_TYPES = DEFAULT_COMMIT_TYPES
