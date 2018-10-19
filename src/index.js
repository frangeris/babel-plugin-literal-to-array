function taggedToArray({ types: t }) {
  let attrs = []
  let name = null
  let expression = null
  return {
    visitor: {
      TaggedTemplateExpression(path, state) {
        expression = path
      },
      Identifier(path, state) {
        if (path.node.name === state.opts.keyword) {
          name = path.node.name
        }
      },
      TemplateElement(path, state) {
        if (name === state.opts.keyword) {
          for (let attr of path.node.value.raw.split(' ')) {
            attrs.push(`${name}.${attr}`)
          }
          expression.replaceWithSourceString(`[${attrs.toString()}]`)
        }
      }
    }
  }
}

module.exports = taggedToArray
