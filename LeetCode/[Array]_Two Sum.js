<div>
  Given an array of integers nums and an integer target, return indices of the
  two numbers such that they add up to target. You may assume that each input
  would have exactly one solution, and you may not use the same element twice.
  You can return the anser in any order
</div>;

function twoSum(nums, target) {
  const numToIndex = {}; // make hash map

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in numToIndex) {
      return [numToIndex[complement], i];
    }
    numToIndex[nums[i]] = i;
  }
}

// Hash Map: Key-value쌍으로 데이터를 저장하는 자료구조
//Key로 값을 빠르게 찾을 수 있다.

// 이중 반복문으로 모든 경우를 다 비교할 수도 있다

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      return [i, j];
    }
  }
}
