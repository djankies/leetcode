/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {

    const sortedNums = [...nums].sort((a, b) => a - b);

    for (let i = 1; i < sortedNums.length; i++) sortedNums[i] += sortedNums[i - 1];

    const findInsertion = (target) => {
        let left = 0;
        let right = sortedNums.length - 1;
        let result = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (sortedNums[mid] <= target) {
                result = mid;
                left = mid + 1;
            } else right = mid - 1;
        }

        return result + 1;
    }

    return queries.map(query => findInsertion(query));
};