// class Solution {
   
//     hasDuplicate(nums) {
//         const a = nums.sort(((a, b) => a - b));
//         for(let i=0; i<a.length;i++){if(a[i]===a[i+1]) {return true}}return false
//     }
// }
class Solution {
   
    hasDuplicate(nums) {
        const set_nums = new Set(nums);
        if(nums.length > set_nums.size){return true}else return false;
    }
}
