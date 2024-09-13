/*
    Description: use the X logic to validate if a string is to similar to other
*/
export function similarStrings(base, compare) {
    s1 = base.toLowerCase();
    s2 = compare.toLowerCase();

    let costs = new Array();
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i == 0) costs[j] = j;
            else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue =
                            Math.min(Math.min(newValue, lastValue), costs[j]) +
                            1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

/*
    Description: validate if the text given is spam
*/
export function isSpam(text) {

}

/*
    Description: validate if the text has invalid words
*/
export function badWords(text) {

}

/*
    Description: remove bad words or replace this words for others
*/
export function clearString(text) {

}