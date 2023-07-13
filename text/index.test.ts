import { describe } from "node:test";
import { minn , maxx , avg } from "../src/index"

describe ("text maxx", () => {

    test ("empty array should thow error", () => {
        console.log("test max 1")
        expect (() => {
            maxx([])
        }).toThrow()
        expect (maxx([])).toThrow("numbers was empty")
    })

    test ("array with single element should return that element", () => {
        console.log("text 1")
    })

    test ("should return max in array", () => {
        console.log("text 2")
    })

})

