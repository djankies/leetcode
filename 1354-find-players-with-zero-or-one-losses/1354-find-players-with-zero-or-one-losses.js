/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const count = new Map();
    
    for (const match of matches) {
        count.set(match[0], (count.get(match[0]) ?? 0));
        count.set(match[1], (count.get(match[1]) ?? 0) + 1);
    }
    
    const noLosses = [];
    const oneLoss = [];
    for (const [key, val] of count) {
        if (val === 0) noLosses.push(key);
        else if (val === 1) oneLoss.push(key);
    }

    return [noLosses.sort((a, b) => a - b), oneLoss.sort((a, b) => a - b)];
};