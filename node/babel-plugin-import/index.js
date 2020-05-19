// babel-types 强大处理AST的节点的工具
module.exports = function (babelTypes) {
  const { types } = babelTypes;
  return {
    visitor: {
      ImportDeclaration(path, { opts }) {
        // path：该节点的所有信息
        // console.log(path,opts)
        // 增删改查
        if (!path.node.specifiers[0].imported) return;
        const imported = path.node.specifiers[0].imported.name;
        const local = path.node.specifiers[0].local;
        const source = path.node.source.value;
        // 用Button antd 这个信息构造
        // 构造import Button from 'antd/Button'对应的节点
        // source：字符串
        let stringLiteral = types.stringLiteral(`antd/${imported}`);
        let specifiers = types.importDefaultSpecifier(local);
        const node = types.importDeclaration([specifiers], stringLiteral);
        console.log(imported, source);
        // 原来的节点 替换掉
        path.replaceWith(node);
      },
      VariableDeclaration(path) {
        console.log(path);
      },
    },
  };
};
