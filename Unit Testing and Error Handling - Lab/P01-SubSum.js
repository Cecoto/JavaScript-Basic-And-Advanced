function solve(arr, startIndex = 0, endIndex = arr.length - 1) {
    if (Array.isArray(arr)) {
        return NaN;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex >= arr.length - 1) {
        endIndex = arr.length - 1;
    }

    let result = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        result += Number(arr[i]);

    }
    return result;
}