function literalToArray ({ types: t }) {
    return {
      visitor: {
        Identifier (path, state) {
          console.log(path.node.name)
        },
        TemplateElement (path, state) {
          console.log(path.node.value)
        }
/*         StringLiteral (path, state) {
          const patterns = state.opts.patterns
          const value = path.node.value
          if (!has(patterns, value)) return
          const result = get(patterns, value)
          path.replaceWith(output(t, result))
        } */
      }
    }
  }

  module.exports = literalToArray
