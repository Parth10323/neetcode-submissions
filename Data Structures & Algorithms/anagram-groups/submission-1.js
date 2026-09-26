class Solution {
    groupAnagrams(strs) {
        // 1. Create a hash map to hold our groups
        const groups = {}; 

        for (let i = 0; i < strs.length; i++) {
            // 2. Safely sort the string to create a unique signature
            // Example: "tea" -> ['t','e','a'] -> ['a','e','t'] -> "aet"
            let signature = strs[i].split('').sort().join('');

            // 3. If the signature isn't in our map yet, create an empty bucket
            if (groups[signature] === undefined) {
                groups[signature] = [];
            }

            // 4. Push the original word into its matching anagram bucket
            groups[signature].push(strs[i]);
        }

        // 5. Object.values() automatically extracts all our grouped arrays
        return Object.values(groups); 
    }
}
