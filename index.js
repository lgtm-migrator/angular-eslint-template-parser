// @ts-check

/**
 * @typedef {import('eslint').Linter.ESLintParseResult} ESLintParseResult
 * @typedef {{ filePath: string }} Options
 */

const _ =
  /** @type {{parseForESLint: (code: string, options: any) => ESLintParseResult}} */ (
    require('@angular-eslint/template-parser')
  )

/**
 * @param {string} code
 * @param {Options} options
 * @returns {ESLintParseResult} parse result with AST
 */
const parseForESLint = (code, options) => {
  const result = _.parseForESLint(code, options)
  result.ast.body = result.ast.body || []
  return result
}

module.exports = {
  parseForESLint,
  /**
   * @param {string} code
   * @param {Options} options
   * @returns {ESLintParseResult['ast']} parsed AST result
   */
  parse: (code, options) => parseForESLint(code, options).ast,
}
