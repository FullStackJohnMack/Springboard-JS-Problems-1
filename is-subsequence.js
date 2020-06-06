// add whatever parameters you deem necessary
function isSubsequence(str1,str2) {
    if (str2.length < str1.length) return false;
    
    const arr1 = str1.split("");
    const arr2 = str2.split("");
    let matching = false;
    let i1 = 0;

    for (let i=0; i<arr2.length; i++) {

        if (arr1[i1] === arr2[i]) {
            i1++;
            matching = true;
        } else {
            matching = false;
        }

        if (matching && i1 > arr1.length - 1) {
            console.log("matching loop:",matching,i1,i, arr1.length-1);
            return true;
        }

        if (!matching && ((i1 + i) >= arr2.length - 1)) {
            return false;
        }
    }
    return false;
}

module.exports = { isSubsequence };