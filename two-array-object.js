// add whatever parameters you deem necessary
function twoArrayObject(arr1,arr2) {
    let obj = {};

    for (let i=0; i<arr1.length; i++) {
        let temp = arr2[i] || null;
        obj[arr1[i]] = temp;
    }

    return obj;
}

module.exports = { twoArrayObject }
