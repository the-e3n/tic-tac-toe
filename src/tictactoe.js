const TicTacToe = (arr,turn)=>{
    let text = turn?'X':'O'
    let horizonatalCheck = [[0,1,2],[3,4,5],[6,7,8]]
    let verticalCheck = [[0,3,6],[1,4,7],[2,5,8]]
    let diagonalCheck = [[0,4,8],[2,4,6]]
    for(let item of horizonatalCheck){
        let count = 0
        for(let idx of item){
            if(arr[idx]===text){
                count++
            }
        }
        if(count===3){
            return true
        }
    }
    for(let item of verticalCheck){
        let count = 0
        for(let idx of item){
            if(arr[idx]===text){
                count++
            }
        }

        if(count===3){
            return true
        }
    }
    for(let item of diagonalCheck){
        let count = 0
        for(let idx of item){
            if(arr[idx]===text){
                count++
            }
        }

        if(count===3){
            return true
        }
    }
    return false
}
export default TicTacToe