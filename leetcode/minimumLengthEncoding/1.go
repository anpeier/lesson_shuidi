func reverse(s string) string {
	runes := []rune(s)
	for from, to := 0, len(runes)-1; from < to; from, to = from+1, to-1 {
		runes[from], runes[to] = runes[to], runes[from]
	}
	return string(runes)
}

func minimumLengthEncoding(words []string) int {
	var setWord []string
	tmpMap := make(map[string]int, 0)
	for _, val := range words {
		if _, ok := tmpMap[val]; !ok {
			setWord = append(setWord, reverse(val))
			tmpMap[val] = 1
		}
	}
	sort.Strings(setWord)
	count := 0
	for i := 0; i < len(setWord)-1; i++ {
		if !strings.HasPrefix(setWord[i+1], setWord[i]) {
			count += len(setWord[i]) + 1
		}
	}
	count += len(setWord[len(setWord)-1]) + 1
	return count
}
