/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const setOfJewels = new Set(jewels);
    let stoneJewelsCount = 0;
    
    for (stone of stones) {
        if (setOfJewels.has(stone)) stoneJewelsCount++;
    }
    
    return stoneJewelsCount;
};