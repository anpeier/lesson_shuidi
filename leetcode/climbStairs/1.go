func climbStairs(n int) int {
    //方法2
    // var tempMap = make(map[int]int)
    // return climb2(0, n, tempMap)

    //方法1，3，4
    return climb4(n)
}

//dp原理：dp[i] = dp[i-1] + dp[i-2]

//方法1 暴力法
func climb1(i, n int) int {
	if i == n {
		return 1
	}

	if i > n {
		return 0
	}

	return climb1(i+1, n) + climb1(i+2, n)
}

//方法2 记忆
func climb2(i, n int, tempMap map[int]int) int {
	if i == n {
		return 1
	}

	if i > n {
		return 0
	}

    if tempMap[i] == 0 {
        tempMap[i] = climb2(i + 1, n, tempMap) + climb2(i + 2, n, tempMap)
    }

	return tempMap[i]
}

//方法3 动态规划
func climb3(n int) int {
    var tempMap = make(map[int]int)
    tempMap[1] = 1
    tempMap[2] = 2
    for i := 3; i <= n; i++ {
        tempMap[i] = tempMap[i-1] + tempMap[i-2]
    }

    return tempMap[n]
}

//方法4 动态规划 + 优化
func climb4(n int) int {
    if n == 1 {
        return 1
    }
    one, two := 1, 2
    for i := 3; i <= n; i++ {
        one, two = two, one + two
    }

    return two
}
