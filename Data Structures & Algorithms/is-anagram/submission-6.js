class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s_array = [...s]; const t_array =[...t];
        if (s.length !== t.length) {return false;}
        s_array.sort();
        t_array.sort();
        for(let i=0; i<s_array.length && i<t_array.length;i++)
            {
                if(s_array[i] !== t_array[i])
                    {return false}
            }return true 
    }
}
