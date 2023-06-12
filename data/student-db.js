const students = [
    {student: 'Kyle', ID: '192835'},
    {student: 'Carol', ID: '739275'},
    {student: 'Megan', ID: '882635'},
    {student: 'Chris', ID: '192777'}
];

module.exports = {
    getAll: function() {
        return students;
    }
};