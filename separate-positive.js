// add whatever parameters you deem necessary
function separatePositive(arr) {
    console.log(arr);
    leftIdx = 0;
    rightIdx = arr.length - 1;
    for (let i=0; i<arr.length; i++) {
        console.log(arr[leftIdx],arr[rightIdx]);
        if (arr[leftIdx] < arr[rightIdx] && leftIdx < rightIdx) {

            let temp = arr[rightIdx];
            arr[rightIdx] = arr[leftIdx];
            arr[leftIdx] = temp;
        }

        console.log(arr);

        if (arr[leftIdx] > 0 && arr[rightIdx] < 0) {
            leftIdx++;
            rightIdx--;            
        } else if (arr[leftIdx] > 0) {
            leftIdx++;
        } else if (arr[rightIdx] < 0){
            rightIdx--;
        }
    }
    console.log(arr);
    return arr;
}


module.exports = { separatePositive };
