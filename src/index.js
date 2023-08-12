// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    let counter = 0;
    if (!matrix) {
        return result;
    }
    for (const arr of matrix) {
        if (counter % 2 === 0) {
            result = result.concat(arr);
        } else {
            result = result.concat(arr.reverse());
        }
        counter++;
    }
    return result;
};
