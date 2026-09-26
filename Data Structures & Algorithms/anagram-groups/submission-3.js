class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            // Sort the string alphabetically to create a standard key
            const sortedKey = str.split('').sort().join('');
            
            // If the key doesn't exist, initialize it with an empty array
            if (!map.has(sortedKey)) {
                map.set(sortedKey, []);
            }
            
            // Push the original string into its corresponding anagram group
            map.get(sortedKey).push(str);
        }
        return Array.from(map.values());
    }
}
