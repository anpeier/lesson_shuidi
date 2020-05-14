// 三数之和
// 给你一个包含 n 个整数的数组 nums，
// 判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
// 示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
function threeSum(arr) {
  arr = arr.sort((a, b) => a - b);
  let res = [];
  for (let i = 0, len = arr.length; i < len - 2; i++) {
    let start = i + 1,
      end = len - 1;
    // 重复元素跳过
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    while (start < end) {
      let sum = arr[i] + arr[start] + arr[end];
      if (sum === 0) {
        res.push([arr[i], arr[start], arr[end]]);
        start++;
        end--;
        // 若左指针元素重复，跳过
        while (start < end && arr[start] === arr[start - 1]) {
          start++;
        }

        // 若右指针元素重复，跳过
        while (start < end && arr[end] === arr[end + 1]) {
          end--;
        }
      } else if (sum < 0) {
        start++;
        while (start < end && arr[start] === arr[start - 1]) {
          start++;
        }
      } else {
        end--;
        while (start < end && arr[end] === arr[end + 1]) {
          end--;
        }
      }
    }
  }
  console.log(res);
  return res;
}
threeSum([-1, 0, 1, 2, -1, -4]);
