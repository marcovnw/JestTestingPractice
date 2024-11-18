const students = [ "Rook", "Heather", "Hayden", "Xaynder", "Anthony", "Justin", "Alexiya", "Christian", "Salvador", "Terrance", "Darek", "Yan", "Dylan", "Ernest", "Marco", "Isaac", "Harley"]

function fetchStudent(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const student = students.find((student) => student === name)
            if (student) {
                resolve(student)
            } else {
                reject(new Error("Student not found"))
            }
        }, 1000)
    })
}

module.exports = { fetchStudent }