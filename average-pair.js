// add whatever parameters you deem necessary
function averagePair(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let avg = (arr[left] + arr[right]) / 2;
        if (avg === val) return true;
        if (avg < val) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

module.exports = { averagePair }
