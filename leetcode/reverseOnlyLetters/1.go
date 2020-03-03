func reverseOnlyLetters(S string) string {
	sb := []byte(S)
	i := 0
	ln := len(S)
	j := ln-1
	for j>i{
		iv := sb[i]
		jv := sb[j]
		if !unicode.IsLetter(rune(iv)){
			i++
			continue
		}
		if !unicode.IsLetter(rune(jv)){
			j--
			continue
		}
		sb[i] = jv
		sb[j] = iv
		i++
		j--
	}
	return string(sb)
}
