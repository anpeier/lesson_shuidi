// 466. 统计重复个数
// 由 n 个连接的字符串 s 组成字符串 S，记作 S = [s,n]。
// 例如，["abc",3]=“abcabcabc”。
// 如果我们可以从 s2 中删除某些字符使其变为 s1，则称字符串 s1 可以从字符串 s2 获得。
// 例如，根据定义，"abc" 可以从 “abdbec” 获得，但不能从 “acbbe” 获得。
// 现在给你两个非空字符串 s1 和 s2（每个最多 100 个字符长）
// 和两个整数 0 ≤ n1 ≤ 106 和 1 ≤ n2 ≤ 106。
// 现在考虑字符串 S1 和 S2，其中 S1=[s1,n1] 、S2=[s2,n2] 。
// 请你找出一个可以满足使[S2,M] 从 S1 获得的最大整数 M 。
// 示例：
// 输入：
// s1 ="acb",n1 = 4
// s2 ="ab",n2 = 2
// 返回：
// 2

// var getMaxRepetitions = function (s1, n1, s2, n2) {
//   if (!s1.length || n1 == 0) return 0;
//   let count = 0;
//   s1 = s1.repeat(n1);
//   s2 = s2.repeat(n2);
//   console.log(s1, s2);
//   while (s1.length >= s2.length) {
//     for (let i = 0; i < s2.length; i++) {
//       if (s1.indexOf(s2[i]) != -1) {
//         s1 = s1.slice(s1.indexOf(s2[i]) + 1);
//       } else {
//         return count;
//       }
//     }
//     count++;
//   }
//   return count;
// };

var getMaxRepetitions = function (s1, n1, s2, n2) {
  let counts1 = 0; //s1计数
  let counts2 = 0; //s2计数
  let s2p = 0; //s2指针
  //当s1的数量没有超过总个数，就可以继续读取s1
  while (counts1 < n1) {
    //遍历s1中每一个字符
    for (let i = 0; i < s1.length; i++) {
      //如果相等指针后移
      if (s1[i] === s2[s2p]) s2p++;
      //如果到最后一个，指针指回开头，s2计数加一
      if (s2p === s2.length) {
        counts2++;
        s2p = 0;
      }
    }
    // 用了一个s1，计数
    counts1++;
    //如果s2的指针指到了开头，说明正好找到了循环的点
    // 是否循环
    if (s2p === 0) {
      // 此时count1和count2就是循环了
      let times = Math.floor(n1 / counts1);
      counts1 *= times;
      counts2 *= times;
      //这里计数乘循环的次数，然后继续循环，因为counts1还可能是小于n1的，就是不能整除的时候
    }
  }
  //返回结果。
  return Math.floor(counts2 / n2);
};

console.log(getMaxRepetitions("aaa", 3, "aa", 1));
