describe('Matchers', () => {
    it('toBe', () => {
        expect(1).toBe(1)
    })

    it('toEqual', () => {
        const obj1 = { a: 1, b: 2 }
        const obj2 = { a: 1, b: 2 }
        expect(obj1).toEqual(obj2)
    })

    it('toBeNull', () => {
        const n = null
        expect(n).toBeNull()
        expect(n).toBeDefined()
        expect(n).not.toBeUndefined()
        // Expect these to fail
        // expect(n).not.toBeTruthy()
        // expect(n).not.toBeFalsy()
    })

    it('toBeUndefined', () => {
        const u = undefined
        expect(u).toBeUndefined()
        expect(u).not.toBeDefined()
         // Expect these to fail
        // expect(u).not.toBeTruthy()
        // expect(u).not.toBeFalsy()
    })

    it('miscellaneous Number tests', () => {
        const answerToTheUniverse = 42
        expect(answerToTheUniverse).toBeGreaterThan(41)
        expect(answerToTheUniverse).toBeGreaterThanOrEqual(41.5)
        expect(answerToTheUniverse).toBeLessThan(52)
        expect(answerToTheUniverse).toBeLessThanOrEqual(42.4)   
    })

    it('String Testing', () => {
        expect("team").not.toMatch(/I/)
    })

    it('Joke #2', () => {
        expect("Kristopher Kolokuosis").toMatch(/Kolokuosis/)
    })
})

