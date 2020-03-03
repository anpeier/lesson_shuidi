func merge(nums1 []int, m int, nums2 []int, n int)  {
    ind1, ind2, ind3 := m - 1, n - 1, n + m - 1
    for ind1 >= 0  || ind2 >= 0 {
        if ind2 < 0 || ind1 >= 0 && nums1[ind1] > nums2[ind2] {
            nums1[ind3] = nums1[ind1]
            ind1--
        } else {
            nums1[ind3] = nums2[ind2]
            ind2--
        }
        ind3--
    }
    return
}

func merge(nums1 []int, m int, nums2 []int, n int)  {
    var ans = make([]int, m + n)
    copy(ans, nums1)
    ind1, ind2, ind3 := 0, 0, 0
    for ind1 < m || ind2 < n {
        if ind2 >= n || ind1 < m && ans[ind1] < nums2[ind2] {
            nums1[ind3] = ans[ind1]
            ind1++
        } else {
            nums1[ind3] = nums2[ind2]
            ind2++
        }
        ind3++
    }
    return
}
