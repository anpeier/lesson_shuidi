type point struct {
    x int
    y int
}

func maxDistance(grid [][]int) int {
    if len(grid) == 0 {
        return 0
    }
    var (
        count int
        group = []*point{}
    )
    for i := 0; i < len(grid); i ++ {
        for j := 0; j < len(grid[0]); j ++ {
            if grid[i][j] == 1 {
                group = append(group,&point{x:i,y:j})
            }
        }
    }
    if len(group) == 0 || len(group) == len(grid)*len(grid[0]){
        return -1
    }
    for len(group) != 0 {
        count ++
        temp := group
        group = []*point{}
        for _,val := range temp {
            i := val.x
            j := val.y
            if i-1 >= 0 && grid[i-1][j] == 0 {
                grid[i-1][j] = 1
                group = append(group,&point{x:i-1,y:j})
            }
            if i+1<len(grid) && grid[i+1][j] == 0 {
                grid[i+1][j] = 1
                group = append(group,&point{x:i+1,y:j})
            }
            if j-1>=0 && grid[i][j-1] == 0 {
                grid[i][j-1] = 1
                group = append(group,&point{x:i,y:j-1})
            }
            if j+1<len(grid[0]) && grid[i][j+1] == 0 {
                grid[i][j+1] = 1
                group = append(group,&point{x:i,y:j+1})
            }
        }
    }
    return count-1
}
