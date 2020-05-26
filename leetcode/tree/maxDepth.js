function Node(val) {
  this.left = this.right = null
  this.val = val
}
const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)
const n4 = new Node(4)
const n5 = new Node(5)
const n6 = new Node(6)
n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5
n3.right = n6

const maxDepth = (root, n = 0) => {
  if (!root) return 0
  n++
  let n1 = 0, n2 = 0
  if (root.left) n1 = maxDepth(root.left, n)
  if (root.right) n2 = maxDepth(root.right, n)
  return Math.max(n, n1, n2)
}


// var maxDepth = function(root) {
//   if(!root) {
//       return 0
//   }

//   const left = maxDepth(root.left)
//   const right = maxDepth(root.right)
//   console.log(left,right)
//   return Math.max(left, right) + 1
// }

console.log(maxDepth(n1))