const {fetchStudent} = require('../src/app.js')

describe('Testing Fetch Students', () => {
    it('Fetch a single student by name', () => {
        return fetchStudent('Rook').then((student) => {
            expect(student).toBe('Rook')
        })
    })

    it('Fetches a student by name using async/await', async () => {
        const student = await fetchStudent('Heather')
        expect(student).toBe('Heather')
    })

    it('resturns an error if a student is Not found', async () => {
        await expect(fetchStudent('Alex')).rejects.toThrow('Student not found')
    }) 
})