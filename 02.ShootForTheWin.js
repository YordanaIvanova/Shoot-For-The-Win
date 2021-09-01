function solve(input) {
    let fisrtLine = input.shift()
    let target = fisrtLine.split(' ').map(Number)
    let index = input.shift()
    let counter = 0

    while (index !== 'End') {
        index = Number(index)
        let currTar = 0
        if (target.length > index) {
            counter++
            currTar = Number(target[index])
            target[index] = -1
            for (let i = 0; i < target.length; i++) {
                let el = target[i]
                if(el > currTar && el !== -1){
                    target[i] -= currTar
                }else if(el <= currTar && el !== -1){
                    target[i] += currTar
                }
                
            }       
        }

        index = input.shift()
    }

    console.log(`Shot targets: ${counter} -> ${target.join(' ')}`)
}

solve((["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]))

// First we shoot target on index 0. It becomes equal to -1 and we start going through the rest of the targets. Since 50 is more than 24, we reduce it to 26 and 36 to 12 and 70 to 46. The sequence looks like that:
// -1 26 12 46
// The next index is invalid, so we don't do anything. Index 3 is valid and after the operations our sequence should look like that:
// -1 72 58 -1
// Then we take the first index with value 72 and our sequence looks like that:
// -1 -1 130 -1
// Then we print the result after the "End" command.