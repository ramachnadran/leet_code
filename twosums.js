/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create a hash map to store value and its index
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // Check if complement exists in map
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        // Store current number and its index
        map.set(nums[i], i);
    }
    
    // No solution found (though problem guarantees one exists)
    return [];
};
