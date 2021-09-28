function duplicateCount(text){
    const tracker = {};
    const dupes = [];

    for (const char of text.toLowerCase()) {
        if (tracker.hasOwnProperty(char)) {
            tracker[char]++;
        } else {
            tracker[char] = 1;
        }
    }

    for (const prop in tracker) {
        if (tracker[prop] > 1) {dupes.push(prop)};
    }

    return dupes.length;
}

console.log(duplicateCount('abbjeldjaee'))