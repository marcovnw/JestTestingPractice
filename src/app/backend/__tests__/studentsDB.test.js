const StudentsDatabase = require('../src/students.js')

let studentDB 

beforeAll(() =>{
    studentDB = new StudentsDatabase()
})

describe("What ever Miscellaneuous Tests I could come up with...",() => {
    it("1+1 = 2", () => {
        expect(1+1).toBe(2)
    })
})

afterAll(() => {
    studentDB = null
    console.log("Students Database Destroyed");
    
})