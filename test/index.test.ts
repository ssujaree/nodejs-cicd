import { describe } from "node:test";
import { maxx, minn , avg } from "../src/index"

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

describe ("text minn", () => {

    test ("empty array should thow error", () => {
        expect (() => {
            minn([])
        }).toThrow()
        expect (minn([])).toThrow("numbers was empty")
    })

    test ("array with single element should return that element", () => {
        expect(minn([1])).toEqual(1)
    })

    test ("should return min in array", () => {
        const tests: [number[],number][] = [
      [[1, 2, 3], 1],
      [[-1, -2], -1],
      [[7, 8, 1], 1],
    ] 
    tests.forEach((test) => {
        const [input, expected] = test
        expect(minn(input)).toEqual(expected)
    })
    })
})

describe ("text avg", () => {

    test ("empty array should thow error", () => {
        expect (() => {
            avg([])
        }).toThrow()
        expect (avg([])).toThrow("numbers was empty")
    })

    test ("array with single element should return that element", () => {
        expect(avg([1])).toEqual(1)
    })

    test ("should return max in array", () => {
        const tests: [number[],number][] = [
        [[1, 2, 3], 2],
      [[-1, -2], -1.5],
      [[10, 0, -10], 0],
    ] 
    tests.forEach((test) => {
        const [input, expected] = test
        expect(avg(input)).toEqual(expected)
    })
    })
})

