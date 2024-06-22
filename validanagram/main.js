var validAnagram = function(s, t){
    return s.split('').sort().join('') === t.split('').sort().join('')
}


console.log(validAnagram("anagram", "nagaram"))




