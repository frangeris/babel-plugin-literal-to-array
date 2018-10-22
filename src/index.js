function taggedToArray({ types: t }) {
  return {
    visitor: {
      CallExpression(path, state) {
        if (t.isIdentifier(path.node.callee, { name: state.opts.keyword })) {
          if (!state.opts.keyword) {
            return
          }

          let args = path.node.arguments
          if (!args.length) {
            return
          }

          let attrs = []
          for (let attr of args[0].value.split(' ')) {
            attrs.push(`${state.opts.keyword}.${attr}`)
          }
          path.replaceWithSourceString(`[${attrs.toString()}]`)
        }
      }
    }
  }
}

module.exports = taggedToArray
