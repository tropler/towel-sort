
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let sortedMatrix = [];

    if (!Array.isArray(matrix)) {
        return sortedMatrix;
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            i % 2 === 0 ? sortedMatrix.push(matrix[i][j]) : sortedMatrix.push(matrix[i][matrix[i].length - 1 - j]);
        }
    }

    return sortedMatrix;
}
