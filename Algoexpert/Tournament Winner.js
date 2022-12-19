//Time Comlexity - O(N), Space Complexity - O(M) // M = number of winners

function tournamentWinner(competitions, results) {
    // Write your code here.
    let teams = {} //O(M) space (winners only)
    let winningT = 'hamza'
    let currentscore = 0
    for (let i =0 ;i<competitions.length;i++){ //O(N) time
        let current = competitions[i]
        let winner = results[i]===0 ? current[1] : current[0]
      if (!teams[winner]){
        teams[winner]=1
      }else{
        teams[winner]++
      }
  
      if (teams[winner]> currentscore){
        winningT = winner 
        currentscore =  teams[winner]
      }
    }
    // return Object.keys(teams).reduce((a,b) => teams[a]>teams[b] ? a : b )  //O(N) time
  
    return winningT
    
  }
  
  
  //O(M) space || O(N) runtime