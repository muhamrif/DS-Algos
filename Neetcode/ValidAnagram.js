//Leetcode 242


function anagram (s,t){

    //nlogn time , 1 space

    // s = s.split('').sort().join('')
    
    // t = t.split('').sort().join('')

    // // return t===s


    //n+m time, n+m space, using a frequency counter.
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



console.log(anagram('anagram', 'nagaram'))// should return true
console.log(anagram('rat', 'car'))//should return false


