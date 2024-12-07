/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    let shortest = Infinity;
    const hashMap = new Map();

    for (let i = 0; i < cards.length; i++) {
        if (hashMap.has(cards[i])) {
            shortest = Math.min(shortest, i - hashMap.get(cards[i]) + 1);
        }
        hashMap.set(cards[i], i);

    }

    return shortest === Infinity ? -1 : shortest;

};