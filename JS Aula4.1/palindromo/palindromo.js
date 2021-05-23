palindromo('aba') // true
palindromo('radar') // true
palindromo('xyzzyx') // true
palindromo('xyzzyx') // true
palindromo('bola') // false
palindromo('abcddcb') // false
palindromo('') // true
palindromo('x') // true


function palindromo(s) {
    if (s.length <= 1) {
        console.log(`${s} é Palíndromo`)
    } else {
        for (let i = 0, j = s.length - 1; i < j; i++, j--) {
            if (s.charAt(i) != s.charAt(j)) {
                console.log(`${s} não é palíndromo`)
                return
            }
        }
    }
    console.log(`${s} é palíndromo`)
}