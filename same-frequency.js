// add whatever parameters you deem necessary
function sameFrequency(int1,int2) {
    const freq1 = freq(int1);
    const freq2 = freq(int2);

    if (freq1.size !== freq2.size) return false;

    for (let key of freq1.keys()) {
        if (freq2.has(key) === false) {
            return false
        }

        if (freq2.get(key) !== freq1.get(key)) {
            return false;
        }
    }

    return true;

}

function freq(int) {
    let map = new Map();
    let string = int.toString();

    for (let digit of string) {
        let count = map.get(digit) || 0;
        map.set(digit, count + 1);
    }
    return map;
}

module.exports = { sameFrequency }
