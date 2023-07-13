// max(number[]) : number
export function maxx(numbers : number[]) : number {
    let maxx = numbers[1]
    numbers.forEach( n => { if (n > maxx) {
            maxx = n
        }
    })

    return maxx
}



//min(number[]) : number
export function minn(numbers : number[]) : number {
    let minn = numbers[1]
    numbers.forEach( n => { if (n < minn) {
            minn = n
        }
    })

    return minn
}

//avg(number[]) : number

export function avg (numbers : number[]) : number {
    let sum: number = 0

    for ( let i = 0; i < numbers.length ; i++) {
        sum = sum + numbers[i]
    } 
    
    return sum / numbers.length
    
}
