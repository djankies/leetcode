var maxVowels = function(s, k) {
    let left = 0;
    let vowelCount = 0;
    let n = s.length;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < k; i++) {
        if (vowels.includes(s[i])) vowelCount++;
    }

    let maxVowels = vowelCount;

    for (let right = k; right < n; right++) {
        if (vowels.includes(s[left])) vowelCount--;
        if (vowels.includes(s[right])) vowelCount++;
        maxVowels = Math.max(maxVowels, vowelCount);
        left++;
    }

    return maxVowels;
};