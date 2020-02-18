function TreeNode (val) {
    this.val = val
    this.left = this.right = null
}

var a1 = new TreeNode(1); //root 根结点
var a2 = new TreeNode(2);
var a3 = new TreeNode(3);   //一棵小树
a1.left = a2;
a1.right = a3;
// 2 它的子树？  形成是不是可以用递归的思想去形成?
var a4 = new TreeNode(4);
var a5 = new TreeNode(5);
a2.left = a4;
a2.right = a5;
var a6 = new TreeNode(6);
var a7 = new TreeNode(7);
a3.left = a6;
a3.right = a7;
// 一个结点， 左右指向另外两个结点   简单的事情, 
// 递归执行， 每个子结点 （左边， 右边）变成新的根结点， 
// 开叶散叶, 退出条件是 叶子结点

// 如何打印我们的这棵树？ 1 2 4 5 3  6  7
// 面试里使用 递归的方法来写树的遍历做法 中序遍历
// var inorderTraversal = function(root) {
//   //
//   let arr = []; //放结点结果的数组  树-> 数组
//   const inorder = root  => {
//     //  写什么
//     if (root === null) return null; //退出条件
//     inorder(root.left);
//     arr.push(root.val); //先进去了
//      //左子树一直递归
//     inorder(root.right);//右子树一直递归
//   }
//   inorder(root);
//   return arr; 
// }


// var inorderTraversal = function(root) {
//   var stack = [],  //栈
//     result = [], //数组
//     cur;
//     // 栈 只有它的左子树，右子树都己解决了，
//   //  它就可以出栈

//   cur = root;
//   // 循环一次 栈里还有结点
//   while(stack.length > 0 || cur != null) {
//     if (cur != null) {
//       // 什么时候发生
//       stack.push(cur); //入栈   向右
//       cur = cur.left; //向左？  一直往左找，
//     } else { // 为空
//       cur = stack.pop(); //出栈 4
//       result.push(cur.val); //进入结果数组
//       if (cur.val == 4) {
//         console.log(cur,cur.right); 
//       }
//       cur  = cur.right; // ?
//       // console.log(cur);
//     }
//   }
//   return result;
// }


// var inorderTraversal = function (root) {
//     let res = [];
//     const preNode = root => {
//       if (root == null) return null
//       res.push(root.val)
//       preNode(root.left)
//       preNode(root.right)
//     }
//     preNode(root)
//     return res
// }

// var inorderTraversal = function (root) {
//     var res = []
//     var stack = []
//     stack.push(root)
//     while (stack.length > 0) {
//     //     let cur = stack.pop()
//     //     res.push(cur.val)
//     //     if (cur.right != null) {
//     //         stack.push(cur.right)
//     //     }
//     //     if (cur.left != null) {
//     //         stack.push(cur.left)
//     //     }
//         let cur = arr.pop()
//         res.push(cur.val)

//         cur.right && arr.push(cur.right)
//         cur.left && arr.push(cur.left)

//     }
    
//     return res
// }


var postorderTraversal = function(root) {
    // if (root === null) return []
    // let res = []
    // const postorder = root => {
    //     if (root == null) return
    //     postorder(root.left)
    //     postorder(root.right)
    //     res.push(root.val)
    // }
    // postorder(root)
    // return res

    let stack = [],
        res = []
    stack.push(root)
    while (stack.length > 0) {
        let cur = stack.pop()
        res.unshift(cur.val)
        if (cur.left != null) {
            stack.push(cur.left)
        }
        if (cur.right != null) {
            stack.push(cur.right)
        }
    }
    return res
};


//中左右
// console.log(inorderTraversal(a1));
console.log(postorderTraversal(a1))