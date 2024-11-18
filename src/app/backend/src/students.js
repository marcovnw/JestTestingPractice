class StudentsDatabase {
    constructor() {
        this.students = [ "Rook", "Heather", "Hayden", "Xaynder", "Anthony", "Justin", "Alexiya", "Christian", "Salvador", "Terrance", "Darek", "Yan", "Dylan", "Ernest", "Marco", "Isaac", "Harley"]
    }

    addStudent(name) {
        this.students.push(name)
    }

    removeStudent(name) {
        this.students = this.students.filter((student) => student !== name)
    }
}



module.exports = StudentsDatabase