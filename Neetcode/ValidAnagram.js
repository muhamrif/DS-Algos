//Leetcode 242


function anagram (s,t){
    // s = s.split('').sort().join('')
    // t = t.split('').sort().join('')

    // // return t===s

    let smap = {}
    let tmap = {}


    for (let i = 0;i<s.length;i++){
        if (!smap[s[i]]){
            smap[s[i]]=1
        }else{
            smap[s[i]]++
        }
    }

    for (let i = 0;i<t.length;i++){
        if (!tmap[t[i]]){
            tmap[t[i]]=1
        }else{
            tmap[t[i]]++
        }
    }

    for (let i in smap){
        if (smap[i]!==tmap[i]){
            return false
        }
    }

    return true
}



console.log(anagram('anagram', 'nagaram'))
console.log(anagram('rat', 'car'))