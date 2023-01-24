//Leetcode 242


function anagram (s,t){

    //nlogn time , 1 space
    // s = s.split('').sort().join('')
    // t = t.split('').sort().join('')

    // // return t===s


    //n+m time, n+m space
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



// function perfectHand(string){
// let map={}
// for (let i=0;i<string.length;i++){
//     if (!map[string[i]]){
//     map[string[i]]=1
//     }else{
//     map[string[i]]++
//     }
//     }

//     let triples = 0
//     let pair = 0

//     for (let i in map){
//         if (map[i]===3){
//             triples++
//         }if (map[i]===2){
//             pair ++
//         }
//     }
//     if (triples>=0&&pair===1) return true
//     return false

// }