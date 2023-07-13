import { describe } from "node:test";
import { maxx  } from "../src/index"

describe ("text maxx", () => {

    test ("empty array should thow error", () => {
        expect (() => {
            maxx([])
        }).toThrow()
        expect (maxx([])).toThrow("numbers was empty")
    })

    test ("array with single element should return that element", () => {
        expect(maxx([1])).toEqual(1)
    })

    test ("should return max in array", () => {
        const tests: [number[],number][] = [
        [[1, 2, 3], 3],
      [[-1, -2], -1],
      [[7, 8, 1], 8],
    ] 
    tests.forEach((test) => {
        const [input, expected] = test
        expect(maxx(input)).toEqual(expected)
    })
    })
})

