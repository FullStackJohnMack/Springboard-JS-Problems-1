// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    
    if (msg.length > letters.length) return false;
    if (msg.length === 0 && letters.length > 0) return true;

    let msgFreq = count(msg);
    let lettersFreq = count(letters);


    for (let key in msgFreq) {
        if (!lettersFreq[key] || lettersFreq[key] < msgFreq[key]) return false
    }
    return true
}

function count(str) {
    const counter = {};
    for (let l of str) {
        counter[l] = (counter[l] + 1) || 1;
    }
    return counter;
}

module.exports = { constructNote }
