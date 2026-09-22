class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let sum = 0;
        for(let i =0; i<nums.length;i++){
            sum = target-nums[i]
            if(nums.indexOf(sum,i+1)>=0){return [i,nums.indexOf(sum,i+1)]}
        }
    }
}
