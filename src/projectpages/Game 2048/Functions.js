import cloneDeep from "lodash.clonedeep";
import { useEffect } from "react"

export const useEvent = (event, handler, passive=false) => {
    useEffect(() => {
        window.addEventListener(event, handler, passive);

        // This function will clean up the event listener every time the component is re-rendered
        return function cleanup(){
            window.removeEventListener(event, handler);
        };
    })
};

export function reset(setData, setGameOver) {
    let newGrid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    insertNumber(newGrid);
    insertNumber(newGrid);
    console.table(newGrid);
    setData(newGrid);
    setGameOver(false);
}

export function insertNumber(Grid){
    let gridFull = false; 
    let inserted = false;
    let attempts = 0

    while(!inserted){
        if(gridFull) break;

        let row = Math.floor(Math.random() * 4);
        let col = Math.floor(Math.random() * 4);
        attempts++;

        if(Grid[row][col] === 0){
            Grid[row][col] = Math.random() > 0.5 ? 2 : 4;
            inserted = true;
        }
        if(attempts > 50){
            gridFull = true
            let GameOver = gameOver(Grid)
            console.log(GameOver)
            if(GameOver){
                alert("Game Over!!")
                // setGameOver(true);
            }
        }
    }
    // console.table(Grid)

}

export function SwipeLeft(data, setData, checking=false){
    let newGrid = cloneDeep(data);
    for(let i = 0; i<4; i++){
        let row = newGrid[i];
        let slow = 0; 
        let fast = 1;
        while(slow < 4){
            if(fast === 4){
                slow++;
                fast = slow + 1;
                continue;
            }
            if(row[fast] === 0){
                fast++;
            } else {
                if(row[slow] === 0){
                    row[slow] = row[fast]
                    row[fast] = 0
                    fast++;
                } else if(row[slow] === row[fast]){
                    row[slow] = 2 * row[slow]
                    row[fast] = 0
                    slow++;
                    fast = slow + 1;
                } else {
                    slow++;
                    fast = slow + 1;
                }
            }
        }
    }

    if(JSON.stringify(data) !== JSON.stringify(newGrid)){
        insertNumber(newGrid)
        if(!checking){
            setData(newGrid)
        } else {
            return true;
        }
    }

    return checking ? false : null;
}

export function SwipeRight(data, setData, checking=false){
    let newGrid = cloneDeep(data);
    let row, slow, fast;
    for(let i = 0; i<4; i++){
        row = newGrid[i];
        slow = row.length - 1; 
        fast = slow - 1;
        while(slow > 0){
            if(fast === -1){
                slow--;
                fast = slow - 1;
                continue;
            }
            if(row[fast] === 0){
                fast--;
            } else {
                if(row[slow] === 0){
                    row[slow] = row[fast]
                    row[fast] = 0
                    fast--;
                } else if(row[slow] === row[fast]){
                    row[slow] = 2 * row[slow]
                    row[fast] = 0
                    slow--;
                    fast = slow - 1;
                } else {
                    slow--;
                    fast = slow - 1;
                }
            }
        }
    }

    if(JSON.stringify(data) !== JSON.stringify(newGrid)){
        insertNumber(newGrid)
        if(!checking){
            setData(newGrid)
        } else {
            return true;
        }
    }

    return checking ? false : null;
}

export function SwipeUp(data, setData, checking=false){
    let newGrid = cloneDeep(data);
    let slow, fast;
    for(let i = 0; i<4; i++){
        slow = 0; fast = 1;
        while(slow < 4){
            if(fast === 4){
                slow++;
                fast = slow + 1;
                continue;
            }
            if(newGrid[fast][i] === 0){
                fast++;
            } else {
                if(newGrid[slow][i] === 0){
                    newGrid[slow][i] = newGrid[fast][i]
                    newGrid[fast][i] = 0
                    fast++;
                } else if(newGrid[slow][i] === newGrid[fast][i]){
                    newGrid[slow][i] = 2 * newGrid[slow][i]
                    newGrid[fast][i] = 0
                    slow++;
                    fast = slow + 1;
                } else {
                    slow++;
                    fast = slow + 1;
                }
            }
        }
    }

    if(JSON.stringify(data) !== JSON.stringify(newGrid)){
        insertNumber(newGrid)
        if(!checking){
            setData(newGrid)
        } else {
            return true;
        }
    }

    return checking ? false : null;
}

export function SwipeDown(data, setData, checking=false){
    let newGrid = cloneDeep(data);
    let slow, fast;
    for(let i = 0; i<4; i++){
        slow = newGrid.length - 1; 
        fast = slow - 1;
        while(slow > 0){
            if(fast === -1){
                slow--;
                fast = slow - 1;
                continue;
            }
            if(newGrid[fast][i] === 0){
                fast--;
            } else {
                if(newGrid[slow][i] === 0){
                    newGrid[slow][i] = newGrid[fast][i]
                    newGrid[fast][i] = 0
                    fast--;
                } else if(newGrid[slow][i] === newGrid[fast][i]){
                    newGrid[slow][i] = 2 * newGrid[slow][i]
                    newGrid[fast][i] = 0
                    slow--;
                    fast = slow - 1;
                } else {
                    slow--;
                    fast = slow - 1;
                }
            }
        }
    }

    if(JSON.stringify(data) !== JSON.stringify(newGrid)){
        insertNumber(newGrid)
        if(!checking){
            setData(newGrid)
        } else {
            return true;
        }
    }

    return checking ? false : null;
}

export function gameOver(data){
    let checkLeft = SwipeLeft(data, null, true)
    if(checkLeft) return false;
    let checkRight = SwipeRight(data, null, true)
    if(checkRight) return false;
    let checkUp = SwipeUp(data, null, true)
    if(checkUp) return false;
    let checkDown = SwipeDown(data, null, true)
    if(checkDown) return false;
    return true;
}

export function getColors(num){
    switch (num) {
        case 2:
          return "#EBDCD0";
        case 4:
          return "#E9DBBA";
        case 8:
          return "#E9A067";
        case 16:
          return "#F08151";
        case 32:
          return "#F2654F";
        case 64:
          return "#F1462C";
        case 128:
          return "#E7C65E";
        case 256:
          return "#E8C350";
        case 512:
          return "#E8BE40";
        case 1024:
          return "#E8BB31";
        case 2048:
          return "#E7B723";
        default:
          return "#C2B3A3";
    }
}