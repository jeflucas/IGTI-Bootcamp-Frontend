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
        console.log(`${s} não implementado`)
    }
}