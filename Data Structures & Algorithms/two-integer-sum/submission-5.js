class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const hashmap = new Map();
       for(var i =0; i<nums.length;i++){ 
        var b=0,a = target-nums[i]
      if( hashmap.get(a) !== undefined ){ b = hashmap.get(a); return [i,b] ;}else false;
       hashmap.set(nums[i],i);
    }}
}
