class Solution {
    groupAnagrams(strs) {
        const groups = {}; 

        for (let i = 0; i < strs.length; i++) {
            let signature = strs[i].split('').sort().join('');
            if (groups[signature] === undefined) {
                groups[signature] = [];
            }
            groups[signature].push(strs[i]);
        }
        return Object.values(groups); 
    }
}
