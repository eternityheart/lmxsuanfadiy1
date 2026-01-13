// 算法面试通关指南 - 题目数据
export type CategoryType = 'hash' | 'two-pointer' | 'sliding-window' | 'substring' | 'backtracking' | 'binary-search' | 'stack' | 'heap' | 'greedy' | 'binary-tree' | 'dp' | 'multi-dp' | 'technique' | 'graph' | 'linked-list' | 'array' | 'matrix' | 'sorting' | 'searching';

export interface CodeStep {
  title: string;
  description: string;
  code: string;
  explanation: string;
}

export interface Problem {
  id: string;
  title: string;
  titleEn: string;
  category: CategoryType;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  examples: { input: string; output: string; explanation?: string }[];
  thinkingGuide: {
    step: number;
    question: string;
    hint: string;
    answer: string;
  }[];
  codeSteps: CodeStep[];
  interview: {
    approach: string;
    timeComplexity: string;
    spaceComplexity: string;
    followUp: { question: string; answer: string }[];
  };
}

export interface Category {
  id: CategoryType;
  name: string;
  nameEn: string;
  icon: string;
  description: string;
  color: string;
  gradient: string;
  problems: string[];
}

export const problems: Problem[] = [
  // ==================== 哈希类题目 ====================
  {
    id: 'two-sum',
    title: '两数之和',
    titleEn: 'Two Sum',
    category: 'hash',
    difficulty: 'easy',
    description: '给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。\n\n你可以假设每种输入只会对应一个答案，并且你不能使用两次同一个元素。',
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: '因为 nums[0] + nums[1] == 9，返回 [0, 1]' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]' }
    ],
    thinkingGuide: [
      { step: 1, question: '看到这道题，你的第一反应是什么？', hint: '最直接的方法是什么？不用考虑效率', answer: '最直接的想法是：用两层循环，外层选第一个数，内层找第二个数，看它们的和是否等于target。这就是"暴力解法"。' },
      { step: 2, question: '暴力解法的问题在哪里？', hint: '想想时间复杂度', answer: '两层循环意味着 O(n²) 的时间复杂度。如果数组有10000个元素，需要执行1亿次比较，太慢了！' },
      { step: 3, question: '我们真正需要做的是什么？', hint: '把问题简化一下', answer: '对于每个数 nums[i]，我们需要找到另一个数 = target - nums[i]。问题变成了：如何快速判断某个数是否存在于数组中？' },
      { step: 4, question: '什么数据结构可以实现 O(1) 的查找？', hint: '想想你学过的数据结构', answer: '哈希表（HashMap）！它可以在 O(1) 时间内判断一个元素是否存在。这就是本题的关键突破口！' },
      { step: 5, question: '哈希表里应该存什么？', hint: '我们需要返回的是下标', answer: 'Key 存数组的值，Value 存对应的下标。这样找到配对的数时，能直接拿到它的下标。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '首先确定输入输出：输入是int数组和目标值，输出是两个下标组成的数组', code: 'public int[] twoSum(int[] nums, int target) {\n    // 待实现\n}', explanation: '返回类型是int[]，因为要返回两个下标' },
      { title: '创建哈希表', description: '用HashMap存储：数字 -> 下标', code: 'public int[] twoSum(int[] nums, int target) {\n    // key: 数字, value: 下标\n    Map<Integer, Integer> map = new HashMap<>();\n}', explanation: 'HashMap<Integer, Integer>: 第一个Integer是数字，第二个是下标' },
      { title: '遍历数组', description: '用for循环遍历每个元素', code: 'public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        // 处理每个元素\n    }\n}', explanation: '需要下标i，所以用传统for循环而不是foreach' },
      { title: '计算目标差值', description: '当前数需要配对的数 = target - 当前数', code: 'public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        int complement = target - nums[i];\n    }\n}', explanation: '如果target是9，当前数是2，那配对数就是7' },
      { title: '查找并返回结果', description: '检查配对数是否已在哈希表中', code: 'public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        int complement = target - nums[i];\n        if (map.containsKey(complement)) {\n            return new int[] { map.get(complement), i };\n        }\n    }\n}', explanation: '找到了就返回两个下标：配对数的下标和当前下标' },
      { title: '存入当前数字', description: '没找到配对，就把当前数字存起来', code: 'public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        int complement = target - nums[i];\n        if (map.containsKey(complement)) {\n            return new int[] { map.get(complement), i };\n        }\n        map.put(nums[i], i);\n    }\n    return new int[] {};\n}', explanation: '先查后存，避免一个数字和自己配对' }
    ],
    interview: {
      approach: '这道题的核心思路是用哈希表优化查找。暴力解法需要O(n²)，因为对每个数都要遍历一次数组找配对。使用哈希表后，查找配对数的时间从O(n)降到O(1)，总体时间复杂度降为O(n)。',
      timeComplexity: 'O(n)，只需要遍历数组一次',
      spaceComplexity: 'O(n)，哈希表最多存储n个元素',
      followUp: [
        { question: '如果数组是有序的，有更好的方法吗？', answer: '可以用双指针！左右指针从两端向中间移动，和大了右指针左移，和小了左指针右移，空间复杂度降为O(1)。' },
        { question: '如果要找所有满足条件的数对呢？', answer: '不能提前return，需要用一个List收集所有结果。注意去重问题。' },
        { question: '为什么先检查再存入，而不是先存入再检查？', answer: '为了避免一个数字和自己配对。比如target=6，数组有个3，如果先存入，3会和自己配对。' }
      ]
    }
  },
  {
    id: 'group-anagrams',
    title: '字母异位词分组',
    titleEn: 'Group Anagrams',
    category: 'hash',
    difficulty: 'medium',
    description: '给你一个字符串数组，请你将字母异位词组合在一起。可以按任意顺序返回结果列表。\n\n字母异位词是由重新排列源单词的所有字母得到的一个新单词。',
    examples: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
      { input: 'strs = [""]', output: '[[""]]' }
    ],
    thinkingGuide: [
      { step: 1, question: '什么是字母异位词？它们有什么共同特点？', hint: '想想 "eat" 和 "tea" 的关系', answer: '字母异位词包含完全相同的字母，只是排列顺序不同。如果把字母排序后，它们会变成完全一样的字符串！' },
      { step: 2, question: '如何判断两个词是否是异位词？', hint: '利用刚才发现的特点', answer: '把两个词的字母都排序，如果排序后相同，就是异位词。比如 "eat" → "aet"，"tea" → "aet"，相同！' },
      { step: 3, question: '如何把异位词分到同一组？', hint: '想想什么数据结构可以把相同的东西放一起', answer: '用哈希表！Key是排序后的字符串，Value是原字符串的列表。所有异位词排序后相同，自然会被放到同一个列表里。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入字符串数组，输出分组后的列表', code: 'public List<List<String>> groupAnagrams(String[] strs) {\n    // 待实现\n}', explanation: '返回List<List<String>>，外层是所有分组，内层是每组的单词' },
      { title: '创建哈希表', description: '用HashMap存储：排序后的字符串 -> 原字符串列表', code: 'public List<List<String>> groupAnagrams(String[] strs) {\n    Map<String, List<String>> map = new HashMap<>();\n}', explanation: 'Key是排序后的字符串，Value是属于这个分组的所有原字符串' },
      { title: '遍历每个字符串', description: '对每个字符串进行处理', code: 'public List<List<String>> groupAnagrams(String[] strs) {\n    Map<String, List<String>> map = new HashMap<>();\n    for (String str : strs) {\n        // 处理每个字符串\n    }\n}', explanation: '用foreach遍历，因为不需要下标' },
      { title: '生成排序后的Key', description: '将字符串排序作为哈希表的Key', code: 'public List<List<String>> groupAnagrams(String[] strs) {\n    Map<String, List<String>> map = new HashMap<>();\n    for (String str : strs) {\n        char[] chars = str.toCharArray();\n        Arrays.sort(chars);\n        String key = new String(chars);\n    }\n}', explanation: '先转char数组，排序后再转回字符串' },
      { title: '添加到对应分组', description: '将原字符串添加到对应Key的列表中', code: 'public List<List<String>> groupAnagrams(String[] strs) {\n    Map<String, List<String>> map = new HashMap<>();\n    for (String str : strs) {\n        char[] chars = str.toCharArray();\n        Arrays.sort(chars);\n        String key = new String(chars);\n        if (!map.containsKey(key)) {\n            map.put(key, new ArrayList<>());\n        }\n        map.get(key).add(str);\n    }\n}', explanation: '如果Key不存在，先创建空列表；然后添加原字符串' },
      { title: '返回结果', description: '将哈希表的所有Value转为List返回', code: 'public List<List<String>> groupAnagrams(String[] strs) {\n    Map<String, List<String>> map = new HashMap<>();\n    for (String str : strs) {\n        char[] chars = str.toCharArray();\n        Arrays.sort(chars);\n        String key = new String(chars);\n        if (!map.containsKey(key)) {\n            map.put(key, new ArrayList<>());\n        }\n        map.get(key).add(str);\n    }\n    return new ArrayList<>(map.values());\n}', explanation: 'map.values()返回所有分组，用ArrayList包装后返回' }
    ],
    interview: {
      approach: '核心思路是找到异位词的"共同标识"。排序后的字符串是最直观的标识，所有异位词排序后都相同。用这个标识作为哈希表的Key，就能把异位词分到同一组。',
      timeComplexity: 'O(n * k * log k)，n是字符串数量，k是最长字符串长度',
      spaceComplexity: 'O(n * k)，存储所有字符串',
      followUp: [
        { question: '有没有O(n*k)的方法？', answer: '可以用字符计数代替排序。统计每个字母出现次数，生成类似"a1b2c3"的Key。' },
        { question: '如果字符串很长，怎么优化？', answer: '字符计数法更优，因为排序是O(k*logk)，计数是O(k)。' }
      ]
    }
  },
  {
    id: 'longest-consecutive-sequence',
    title: '最长连续序列',
    titleEn: 'Longest Consecutive Sequence',
    category: 'hash',
    difficulty: 'medium',
    description: '给定一个未排序的整数数组 nums，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。\n\n请你设计并实现时间复杂度为 O(n) 的算法解决此问题。',
    examples: [
      { input: 'nums = [100,4,200,1,3,2]', output: '4', explanation: '最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。' },
      { input: 'nums = [0,3,7,2,5,8,4,6,0,1]', output: '9' }
    ],
    thinkingGuide: [
      { step: 1, question: '最直接的方法是什么？', hint: '如果可以排序的话', answer: '排序后遍历，统计连续数字的长度。但排序需要O(n*logn)，不满足O(n)的要求。' },
      { step: 2, question: '如何在O(1)时间判断一个数是否存在？', hint: '用什么数据结构', answer: '用HashSet！把所有数字放入Set，就能O(1)判断任意数字是否存在。' },
      { step: 3, question: '如何避免重复计算？', hint: '什么时候开始计数', answer: '只从序列的起点开始计数！如果num-1存在，说明num不是起点，跳过。这样每个数字最多被访问两次。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入数组，输出最长连续序列长度', code: 'public int longestConsecutive(int[] nums) {\n    // 待实现\n}', explanation: '返回int类型的长度' },
      { title: '创建HashSet', description: '将所有数字放入Set中', code: 'public int longestConsecutive(int[] nums) {\n    Set<Integer> set = new HashSet<>();\n    for (int num : nums) {\n        set.add(num);\n    }\n}', explanation: 'HashSet自动去重，且查找是O(1)' },
      { title: '遍历并找起点', description: '只处理序列的起点（前一个数不存在）', code: 'public int longestConsecutive(int[] nums) {\n    Set<Integer> set = new HashSet<>();\n    for (int num : nums) {\n        set.add(num);\n    }\n    int maxLen = 0;\n    for (int num : set) {\n        if (!set.contains(num - 1)) {\n            // num是序列起点\n        }\n    }\n}', explanation: '如果num-1存在，num就不是起点，跳过' },
      { title: '计算序列长度', description: '从起点开始，不断查找下一个数', code: 'public int longestConsecutive(int[] nums) {\n    Set<Integer> set = new HashSet<>();\n    for (int num : nums) {\n        set.add(num);\n    }\n    int maxLen = 0;\n    for (int num : set) {\n        if (!set.contains(num - 1)) {\n            int currentNum = num;\n            int currentLen = 1;\n            while (set.contains(currentNum + 1)) {\n                currentNum++;\n                currentLen++;\n            }\n            maxLen = Math.max(maxLen, currentLen);\n        }\n    }\n    return maxLen;\n}', explanation: '用while循环不断查找num+1，直到断开' }
    ],
    interview: {
      approach: '关键是用HashSet实现O(1)查找，并且只从序列起点开始计数避免重复。判断起点的方法是检查num-1是否存在，不存在则是起点。',
      timeComplexity: 'O(n)，虽然有嵌套循环，但每个数字最多被访问两次',
      spaceComplexity: 'O(n)，HashSet存储所有数字',
      followUp: [
        { question: '为什么时间复杂度是O(n)而不是O(n²)？', answer: '虽然有嵌套循环，但内层while只在起点时执行，每个数字最多被访问两次（一次加入Set，一次在while中）。' },
        { question: '能否用并查集解决？', answer: '可以，把相邻的数字合并到同一个集合，最后找最大集合。但实现更复杂。' }
      ]
    }
  },
  // ==================== 双指针类题目 ====================
  {
    id: 'move-zeroes',
    title: '移动零',
    titleEn: 'Move Zeroes',
    category: 'two-pointer',
    difficulty: 'easy',
    description: '给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。\n\n请注意，必须在不复制数组的情况下原地对数组进行操作。',
    examples: [
      { input: 'nums = [0,1,0,3,12]', output: '[1,3,12,0,0]' },
      { input: 'nums = [0]', output: '[0]' }
    ],
    thinkingGuide: [
      { step: 1, question: '最直接的方法是什么？', hint: '如果可以用额外空间', answer: '创建新数组，先放非零元素，再补零。但题目要求原地操作。' },
      { step: 2, question: '原地操作的关键是什么？', hint: '想想如何区分已处理和未处理的区域', answer: '用双指针！一个指针指向下一个非零元素应该放的位置，另一个遍历数组。' },
      { step: 3, question: '具体怎么移动？', hint: '遇到非零元素怎么办', answer: '遇到非零元素就和slow位置交换，然后slow前进。这样slow左边都是非零元素。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '原地修改数组，无返回值', code: 'public void moveZeroes(int[] nums) {\n    // 待实现\n}', explanation: '返回void，直接修改原数组' },
      { title: '初始化慢指针', description: 'slow指向下一个非零元素应放的位置', code: 'public void moveZeroes(int[] nums) {\n    int slow = 0;\n}', explanation: 'slow从0开始，表示第一个位置' },
      { title: '快指针遍历', description: 'fast遍历整个数组', code: 'public void moveZeroes(int[] nums) {\n    int slow = 0;\n    for (int fast = 0; fast < nums.length; fast++) {\n        // 处理每个元素\n    }\n}', explanation: 'fast负责遍历，slow负责记录位置' },
      { title: '交换非零元素', description: '遇到非零元素就交换到slow位置', code: 'public void moveZeroes(int[] nums) {\n    int slow = 0;\n    for (int fast = 0; fast < nums.length; fast++) {\n        if (nums[fast] != 0) {\n            int temp = nums[slow];\n            nums[slow] = nums[fast];\n            nums[fast] = temp;\n            slow++;\n        }\n    }\n}', explanation: '交换后slow前进，保证slow左边都是非零元素' }
    ],
    interview: {
      approach: '使用快慢双指针，slow维护非零区域的边界，fast遍历数组。遇到非零元素就交换到slow位置，这样所有零自然被移到末尾。',
      timeComplexity: 'O(n)，只遍历一次数组',
      spaceComplexity: 'O(1)，原地操作',
      followUp: [
        { question: '能否减少交换次数？', answer: '可以先统计非零元素个数，然后直接覆盖，最后补零。但交换更直观。' },
        { question: '如果要移动特定值而不是0？', answer: '把条件改成nums[fast] != target即可。' }
      ]
    }
  },
  {
    id: 'container-with-most-water',
    title: '盛最多水的容器',
    titleEn: 'Container With Most Water',
    category: 'two-pointer',
    difficulty: 'medium',
    description: '给定一个长度为 n 的整数数组 height。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i])。\n\n找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。',
    examples: [
      { input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49', explanation: '选择第2条和第9条线，面积 = min(8,7) * 7 = 49' },
      { input: 'height = [1,1]', output: '1' }
    ],
    thinkingGuide: [
      { step: 1, question: '面积怎么计算？', hint: '想想容器的形状', answer: '面积 = 宽度 × 高度 = (right - left) × min(height[left], height[right])' },
      { step: 2, question: '暴力解法是什么？', hint: '枚举所有可能', answer: '两层循环枚举所有线的组合，计算面积取最大值。时间O(n²)。' },
      { step: 3, question: '如何优化？', hint: '从两端开始', answer: '双指针从两端向中间移动。每次移动较短的那条线，因为移动较长的线只会让面积变小或不变。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入高度数组，输出最大面积', code: 'public int maxArea(int[] height) {\n    // 待实现\n}', explanation: '返回int类型的最大面积' },
      { title: '初始化双指针', description: '左右指针分别指向两端', code: 'public int maxArea(int[] height) {\n    int left = 0;\n    int right = height.length - 1;\n    int maxArea = 0;\n}', explanation: '从最宽的容器开始' },
      { title: '循环移动指针', description: '当左右指针未相遇时继续', code: 'public int maxArea(int[] height) {\n    int left = 0;\n    int right = height.length - 1;\n    int maxArea = 0;\n    while (left < right) {\n        // 计算并移动\n    }\n}', explanation: 'left < right保证至少有两条线' },
      { title: '计算面积并更新', description: '计算当前面积，更新最大值', code: 'public int maxArea(int[] height) {\n    int left = 0;\n    int right = height.length - 1;\n    int maxArea = 0;\n    while (left < right) {\n        int area = (right - left) * Math.min(height[left], height[right]);\n        maxArea = Math.max(maxArea, area);\n    }\n}', explanation: '面积 = 宽度 × 较短边' },
      { title: '移动较短的指针', description: '移动高度较小的指针', code: 'public int maxArea(int[] height) {\n    int left = 0;\n    int right = height.length - 1;\n    int maxArea = 0;\n    while (left < right) {\n        int area = (right - left) * Math.min(height[left], height[right]);\n        maxArea = Math.max(maxArea, area);\n        if (height[left] < height[right]) {\n            left++;\n        } else {\n            right--;\n        }\n    }\n    return maxArea;\n}', explanation: '移动较短边才可能找到更大的面积' }
    ],
    interview: {
      approach: '双指针从两端向中间移动，每次移动较短的那条线。因为面积受限于较短边，移动较长边不可能增大面积。',
      timeComplexity: 'O(n)，每个元素最多访问一次',
      spaceComplexity: 'O(1)，只用了几个变量',
      followUp: [
        { question: '为什么移动较短边？', answer: '面积 = 宽 × min(高)。移动后宽度减1，只有增大min(高)才可能增大面积。移动较长边不会增大min(高)。' },
        { question: '如果两边相等怎么办？', answer: '移动哪边都可以，不影响正确性。' }
      ]
    }
  },
  {
    id: 'three-sum',
    title: '三数之和',
    titleEn: '3Sum',
    category: 'two-pointer',
    difficulty: 'medium',
    description: '给你一个整数数组 nums，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k，同时还满足 nums[i] + nums[j] + nums[k] == 0。\n\n请你返回所有和为 0 且不重复的三元组。',
    examples: [
      { input: 'nums = [-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]' },
      { input: 'nums = [0,0,0]', output: '[[0,0,0]]' }
    ],
    thinkingGuide: [
      { step: 1, question: '和两数之和有什么关系？', hint: '固定一个数后', answer: '固定第一个数nums[i]后，问题变成在剩余数组中找两个数，使它们的和等于-nums[i]。' },
      { step: 2, question: '如何避免重复？', hint: '排序有什么好处', answer: '先排序！这样相同的数字会相邻，遇到重复数字就跳过。' },
      { step: 3, question: '内层如何高效查找？', hint: '有序数组用什么方法', answer: '有序数组用双指针！左右指针从两端向中间移动，和大了右移，和小了左移。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入数组，输出所有三元组', code: 'public List<List<Integer>> threeSum(int[] nums) {\n    // 待实现\n}', explanation: '返回List<List<Integer>>，每个内层List是一个三元组' },
      { title: '排序数组', description: '排序便于去重和双指针', code: 'public List<List<Integer>> threeSum(int[] nums) {\n    List<List<Integer>> result = new ArrayList<>();\n    Arrays.sort(nums);\n}', explanation: '排序后相同数字相邻，方便跳过重复' },
      { title: '固定第一个数', description: '外层循环固定第一个数', code: 'public List<List<Integer>> threeSum(int[] nums) {\n    List<List<Integer>> result = new ArrayList<>();\n    Arrays.sort(nums);\n    for (int i = 0; i < nums.length - 2; i++) {\n        if (i > 0 && nums[i] == nums[i-1]) continue;\n        // 双指针找另外两个数\n    }\n}', explanation: '跳过重复的第一个数，避免重复三元组' },
      { title: '初始化双指针', description: '在i后面的区间用双指针', code: 'public List<List<Integer>> threeSum(int[] nums) {\n    List<List<Integer>> result = new ArrayList<>();\n    Arrays.sort(nums);\n    for (int i = 0; i < nums.length - 2; i++) {\n        if (i > 0 && nums[i] == nums[i-1]) continue;\n        int left = i + 1;\n        int right = nums.length - 1;\n        // 双指针查找\n    }\n}', explanation: 'left从i+1开始，right从末尾开始' },
      { title: '双指针查找', description: '根据和的大小移动指针', code: 'public List<List<Integer>> threeSum(int[] nums) {\n    List<List<Integer>> result = new ArrayList<>();\n    Arrays.sort(nums);\n    for (int i = 0; i < nums.length - 2; i++) {\n        if (i > 0 && nums[i] == nums[i-1]) continue;\n        int left = i + 1;\n        int right = nums.length - 1;\n        while (left < right) {\n            int sum = nums[i] + nums[left] + nums[right];\n            if (sum == 0) {\n                result.add(Arrays.asList(nums[i], nums[left], nums[right]));\n                while (left < right && nums[left] == nums[left+1]) left++;\n                while (left < right && nums[right] == nums[right-1]) right--;\n                left++;\n                right--;\n            } else if (sum < 0) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n    }\n    return result;\n}', explanation: '找到答案后跳过重复元素，继续找下一组' }
    ],
    interview: {
      approach: '先排序，然后固定第一个数，用双指针在剩余区间找另外两个数。排序使得去重变得简单，双指针使得查找变成O(n)。',
      timeComplexity: 'O(n²)，排序O(nlogn) + 双重循环O(n²)',
      spaceComplexity: 'O(1)，不算结果数组的话',
      followUp: [
        { question: '能否用哈希表？', answer: '可以，但去重更复杂。双指针更适合这道题。' },
        { question: '如果是四数之和呢？', answer: '再加一层循环，固定两个数后用双指针。时间O(n³)。' }
      ]
    }
  },
  {
    id: 'trapping-rain-water',
    title: '接雨水',
    titleEn: 'Trapping Rain Water',
    category: 'two-pointer',
    difficulty: 'hard',
    description: '给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。',
    examples: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6', explanation: '上面是由数组表示的高度图，在这种情况下，可以接 6 个单位的雨水。' },
      { input: 'height = [4,2,0,3,2,5]', output: '9' }
    ],
    thinkingGuide: [
      { step: 1, question: '每个位置能接多少水？', hint: '取决于什么', answer: '取决于左右两边最高柱子中较矮的那个。water[i] = min(leftMax, rightMax) - height[i]' },
      { step: 2, question: '如何知道每个位置的leftMax和rightMax？', hint: '预处理', answer: '可以预处理两个数组，分别存储每个位置的左边最大值和右边最大值。' },
      { step: 3, question: '能否优化空间？', hint: '双指针', answer: '用双指针！从两端向中间移动，维护leftMax和rightMax。较小的那边决定当前能接的水。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入高度数组，输出总水量', code: 'public int trap(int[] height) {\n    // 待实现\n}', explanation: '返回int类型的总水量' },
      { title: '初始化双指针和最大值', description: '左右指针和对应的最大高度', code: 'public int trap(int[] height) {\n    int left = 0, right = height.length - 1;\n    int leftMax = 0, rightMax = 0;\n    int water = 0;\n}', explanation: 'leftMax记录左边遇到的最大高度，rightMax同理' },
      { title: '双指针移动', description: '根据哪边较小来决定处理哪边', code: 'public int trap(int[] height) {\n    int left = 0, right = height.length - 1;\n    int leftMax = 0, rightMax = 0;\n    int water = 0;\n    while (left < right) {\n        if (height[left] < height[right]) {\n            // 处理左边\n        } else {\n            // 处理右边\n        }\n    }\n}', explanation: '较小的一边可以确定能接的水量' },
      { title: '计算水量', description: '更新最大值并计算当前位置的水量', code: 'public int trap(int[] height) {\n    int left = 0, right = height.length - 1;\n    int leftMax = 0, rightMax = 0;\n    int water = 0;\n    while (left < right) {\n        if (height[left] < height[right]) {\n            if (height[left] >= leftMax) {\n                leftMax = height[left];\n            } else {\n                water += leftMax - height[left];\n            }\n            left++;\n        } else {\n            if (height[right] >= rightMax) {\n                rightMax = height[right];\n            } else {\n                water += rightMax - height[right];\n            }\n            right--;\n        }\n    }\n    return water;\n}', explanation: '如果当前高度大于等于最大值，更新最大值；否则计算水量' }
    ],
    interview: {
      approach: '每个位置能接的水 = min(左边最高, 右边最高) - 当前高度。用双指针从两端向中间移动，较小的一边可以确定能接的水量。',
      timeComplexity: 'O(n)，只遍历一次',
      spaceComplexity: 'O(1)，只用了几个变量',
      followUp: [
        { question: '还有什么方法？', answer: '1. 预处理leftMax和rightMax数组，O(n)空间。2. 单调栈，按层计算。' },
        { question: '为什么双指针有效？', answer: '因为较小的一边决定水量。如果height[left] < height[right]，那么left位置的水量只取决于leftMax。' }
      ]
    }
  },
  // ==================== 滑动窗口类题目 ====================
  {
    id: 'longest-substring-without-repeating',
    title: '无重复字符的最长子串',
    titleEn: 'Longest Substring Without Repeating Characters',
    category: 'sliding-window',
    difficulty: 'medium',
    description: '给定一个字符串 s，请你找出其中不含有重复字符的最长子串的长度。',
    examples: [
      { input: 's = "abcabcbb"', output: '3', explanation: '因为无重复字符的最长子串是 "abc"，所以其长度为 3。' },
      { input: 's = "bbbbb"', output: '1', explanation: '因为无重复字符的最长子串是 "b"，所以其长度为 1。' }
    ],
    thinkingGuide: [
      { step: 1, question: '什么是子串？', hint: '和子序列的区别', answer: '子串是连续的，子序列可以不连续。这道题要找连续的无重复字符序列。' },
      { step: 2, question: '如何判断窗口内是否有重复？', hint: '用什么数据结构', answer: '用HashSet或HashMap记录窗口内的字符。' },
      { step: 3, question: '遇到重复字符怎么办？', hint: '收缩窗口', answer: '从左边收缩窗口，直到没有重复字符为止。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入字符串，输出最长长度', code: 'public int lengthOfLongestSubstring(String s) {\n    // 待实现\n}', explanation: '返回int类型的最大长度' },
      { title: '初始化窗口和Set', description: '用Set记录窗口内的字符', code: 'public int lengthOfLongestSubstring(String s) {\n    Set<Character> set = new HashSet<>();\n    int left = 0;\n    int maxLen = 0;\n}', explanation: 'left是窗口左边界，right通过for循环移动' },
      { title: '扩展窗口', description: '右指针遍历字符串', code: 'public int lengthOfLongestSubstring(String s) {\n    Set<Character> set = new HashSet<>();\n    int left = 0;\n    int maxLen = 0;\n    for (int right = 0; right < s.length(); right++) {\n        char c = s.charAt(right);\n        // 处理当前字符\n    }\n}', explanation: 'right每次向右移动一位' },
      { title: '收缩窗口', description: '如果有重复，从左边收缩', code: 'public int lengthOfLongestSubstring(String s) {\n    Set<Character> set = new HashSet<>();\n    int left = 0;\n    int maxLen = 0;\n    for (int right = 0; right < s.length(); right++) {\n        char c = s.charAt(right);\n        while (set.contains(c)) {\n            set.remove(s.charAt(left));\n            left++;\n        }\n        set.add(c);\n        maxLen = Math.max(maxLen, right - left + 1);\n    }\n    return maxLen;\n}', explanation: '不断移除左边字符直到没有重复' }
    ],
    interview: {
      approach: '滑动窗口 + HashSet。右指针扩展窗口，遇到重复字符时左指针收缩窗口。窗口内始终保持无重复字符。',
      timeComplexity: 'O(n)，每个字符最多被访问两次',
      spaceComplexity: 'O(min(m,n))，m是字符集大小',
      followUp: [
        { question: '能否用HashMap优化？', answer: '可以，HashMap存字符的最新位置，遇到重复时直接跳到重复字符的下一位。' },
        { question: '如果是找最长的有k个重复字符的子串？', answer: '用HashMap统计每个字符的出现次数，当某个字符超过k次时收缩窗口。' }
      ]
    }
  },
  {
    id: 'find-all-anagrams',
    title: '找到字符串中所有字母异位词',
    titleEn: 'Find All Anagrams in a String',
    category: 'sliding-window',
    difficulty: 'medium',
    description: '给定两个字符串 s 和 p，找到 s 中所有 p 的异位词的子串，返回这些子串的起始索引。不考虑答案输出的顺序。',
    examples: [
      { input: 's = "cbaebabacd", p = "abc"', output: '[0,6]', explanation: '起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。' },
      { input: 's = "abab", p = "ab"', output: '[0,1,2]' }
    ],
    thinkingGuide: [
      { step: 1, question: '什么是异位词？', hint: '字母组成相同', answer: '异位词是字母相同但顺序不同的词。判断方法：统计字母频率是否相同。' },
      { step: 2, question: '如何高效比较？', hint: '固定窗口大小', answer: '用固定大小为p.length的滑动窗口，比较窗口内字符频率和p的字符频率。' },
      { step: 3, question: '如何优化比较过程？', hint: '维护一个计数器', answer: '用一个计数器记录还需要匹配的字符数，当计数器为0时说明完全匹配。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入两个字符串，输出起始索引列表', code: 'public List<Integer> findAnagrams(String s, String p) {\n    // 待实现\n}', explanation: '返回所有异位词子串的起始位置' },
      { title: '统计p的字符频率', description: '用数组统计p中每个字符出现次数', code: 'public List<Integer> findAnagrams(String s, String p) {\n    List<Integer> result = new ArrayList<>();\n    int[] count = new int[26];\n    for (char c : p.toCharArray()) {\n        count[c - \'a\']++;\n    }\n    int need = p.length();\n}', explanation: 'count数组记录每个字母还需要多少个，need记录总共还需要多少个' },
      { title: '滑动窗口遍历', description: '固定大小的窗口滑过s', code: 'public List<Integer> findAnagrams(String s, String p) {\n    List<Integer> result = new ArrayList<>();\n    int[] count = new int[26];\n    for (char c : p.toCharArray()) {\n        count[c - \'a\']++;\n    }\n    int need = p.length();\n    for (int right = 0; right < s.length(); right++) {\n        // 处理右边界\n        // 处理左边界\n    }\n}', explanation: 'right遍历s，left = right - p.length() + 1' },
      { title: '完整实现', description: '处理进入和离开窗口的字符', code: 'public List<Integer> findAnagrams(String s, String p) {\n    List<Integer> result = new ArrayList<>();\n    int[] count = new int[26];\n    for (char c : p.toCharArray()) {\n        count[c - \'a\']++;\n    }\n    int need = p.length();\n    for (int right = 0; right < s.length(); right++) {\n        char c = s.charAt(right);\n        if (count[c - \'a\'] > 0) need--;\n        count[c - \'a\']--;\n        \n        if (right >= p.length()) {\n            char left = s.charAt(right - p.length());\n            count[left - \'a\']++;\n            if (count[left - \'a\'] > 0) need++;\n        }\n        \n        if (need == 0) result.add(right - p.length() + 1);\n    }\n    return result;\n}', explanation: '进入窗口时减count和need，离开窗口时加回来' }
    ],
    interview: {
      approach: '固定大小的滑动窗口 + 字符计数。维护一个need计数器，当need为0时说明窗口内是p的异位词。',
      timeComplexity: 'O(n)，只遍历s一次',
      spaceComplexity: 'O(1)，只用了固定大小的数组',
      followUp: [
        { question: '如果字符不只是小写字母？', answer: '用HashMap代替数组，或者用更大的数组（如128大小覆盖ASCII）。' }
      ]
    }
  },
  // ==================== 子串类题目 ====================
  {
    id: 'subarray-sum-equals-k',
    title: '和为K的子数组',
    titleEn: 'Subarray Sum Equals K',
    category: 'substring',
    difficulty: 'medium',
    description: '给你一个整数数组 nums 和一个整数 k，请你统计并返回该数组中和为 k 的子数组的个数。',
    examples: [
      { input: 'nums = [1,1,1], k = 2', output: '2' },
      { input: 'nums = [1,2,3], k = 3', output: '2' }
    ],
    thinkingGuide: [
      { step: 1, question: '暴力解法是什么？', hint: '枚举所有子数组', answer: '两层循环枚举起点和终点，计算每个子数组的和。时间O(n²)或O(n³)。' },
      { step: 2, question: '前缀和有什么用？', hint: '子数组和的计算', answer: 'sum[i..j] = prefixSum[j] - prefixSum[i-1]。如果prefixSum[j] - prefixSum[i-1] = k，说明找到一个和为k的子数组。' },
      { step: 3, question: '如何快速找到满足条件的前缀和？', hint: '变形等式', answer: '找prefixSum[i-1] = prefixSum[j] - k。用哈希表存储前缀和出现的次数！' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入数组和目标值，输出子数组个数', code: 'public int subarraySum(int[] nums, int k) {\n    // 待实现\n}', explanation: '返回和为k的子数组数量' },
      { title: '初始化', description: '哈希表存前缀和出现次数', code: 'public int subarraySum(int[] nums, int k) {\n    Map<Integer, Integer> map = new HashMap<>();\n    map.put(0, 1);  // 前缀和为0出现1次\n    int prefixSum = 0;\n    int count = 0;\n}', explanation: 'map.put(0,1)处理从头开始的子数组' },
      { title: '遍历计算', description: '边遍历边统计', code: 'public int subarraySum(int[] nums, int k) {\n    Map<Integer, Integer> map = new HashMap<>();\n    map.put(0, 1);\n    int prefixSum = 0;\n    int count = 0;\n    for (int num : nums) {\n        prefixSum += num;\n        count += map.getOrDefault(prefixSum - k, 0);\n        map.put(prefixSum, map.getOrDefault(prefixSum, 0) + 1);\n    }\n    return count;\n}', explanation: '查找prefixSum - k出现的次数，然后存入当前前缀和' }
    ],
    interview: {
      approach: '前缀和 + 哈希表。sum[i..j] = prefixSum[j] - prefixSum[i-1] = k，即找prefixSum[i-1] = prefixSum[j] - k。',
      timeComplexity: 'O(n)，只遍历一次',
      spaceComplexity: 'O(n)，哈希表存储前缀和',
      followUp: [
        { question: '为什么不能用滑动窗口？', answer: '因为数组可能有负数，窗口和不是单调的，无法确定收缩方向。' },
        { question: '如果数组都是正数？', answer: '可以用滑动窗口，和大了收缩，和小了扩展。' }
      ]
    }
  },
  {
    id: 'sliding-window-maximum',
    title: '滑动窗口最大值',
    titleEn: 'Sliding Window Maximum',
    category: 'substring',
    difficulty: 'hard',
    description: '给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。\n\n返回滑动窗口中的最大值。',
    examples: [
      { input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', output: '[3,3,5,5,6,7]' },
      { input: 'nums = [1], k = 1', output: '[1]' }
    ],
    thinkingGuide: [
      { step: 1, question: '暴力解法是什么？', hint: '每个窗口都求最大值', answer: '每个窗口遍历k个元素找最大值，时间O(n*k)。' },
      { step: 2, question: '如何优化？', hint: '用什么数据结构', answer: '用单调队列！队列中元素从大到小排列，队首就是最大值。' },
      { step: 3, question: '单调队列如何维护？', hint: '入队和出队的规则', answer: '入队时，把比当前元素小的都移除（它们不可能成为最大值）。出队时，如果队首已经不在窗口内就移除。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入数组和窗口大小，输出最大值数组', code: 'public int[] maxSlidingWindow(int[] nums, int k) {\n    // 待实现\n}', explanation: '返回每个窗口的最大值' },
      { title: '初始化单调队列', description: '用Deque存储下标', code: 'public int[] maxSlidingWindow(int[] nums, int k) {\n    int[] result = new int[nums.length - k + 1];\n    Deque<Integer> deque = new LinkedList<>();\n}', explanation: '存下标而不是值，方便判断是否在窗口内' },
      { title: '遍历数组', description: '维护单调队列并记录结果', code: 'public int[] maxSlidingWindow(int[] nums, int k) {\n    int[] result = new int[nums.length - k + 1];\n    Deque<Integer> deque = new LinkedList<>();\n    for (int i = 0; i < nums.length; i++) {\n        // 移除不在窗口内的元素\n        while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {\n            deque.pollFirst();\n        }\n        // 移除比当前元素小的元素\n        while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {\n            deque.pollLast();\n        }\n        deque.offerLast(i);\n        // 记录结果\n        if (i >= k - 1) {\n            result[i - k + 1] = nums[deque.peekFirst()];\n        }\n    }\n    return result;\n}', explanation: '队首是当前窗口最大值的下标' }
    ],
    interview: {
      approach: '单调队列（递减）。队首是当前窗口最大值。入队时移除比当前小的元素，出队时检查是否在窗口内。',
      timeComplexity: 'O(n)，每个元素最多入队出队各一次',
      spaceComplexity: 'O(k)，队列最多存k个元素',
      followUp: [
        { question: '为什么用单调递减队列？', answer: '因为要找最大值。如果一个元素比后面的元素小，它永远不可能成为最大值。' },
        { question: '能否用堆？', answer: '可以，但需要延迟删除，实现更复杂，时间O(nlogk)。' }
      ]
    }
  },
  {
    id: 'minimum-window-substring',
    title: '最小覆盖子串',
    titleEn: 'Minimum Window Substring',
    category: 'substring',
    difficulty: 'hard',
    description: '给你一个字符串 s、一个字符串 t。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""。',
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"', explanation: '最小覆盖子串 "BANC" 包含来自字符串 t 的 \'A\'、\'B\' 和 \'C\'。' },
      { input: 's = "a", t = "a"', output: '"a"' }
    ],
    thinkingGuide: [
      { step: 1, question: '什么是覆盖子串？', hint: '包含所有字符', answer: '子串中包含t的所有字符（包括重复的）。比如t="AAB"，子串至少要有2个A和1个B。' },
      { step: 2, question: '如何判断是否覆盖？', hint: '统计字符', answer: '用两个计数器：一个统计t中每个字符需要的数量，一个统计窗口中每个字符的数量。' },
      { step: 3, question: '如何找最小？', hint: '滑动窗口', answer: '先扩展右边界直到覆盖，然后收缩左边界找最小，记录结果后继续扩展。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入两个字符串，输出最小覆盖子串', code: 'public String minWindow(String s, String t) {\n    // 待实现\n}', explanation: '返回最小的覆盖子串，不存在返回空串' },
      { title: '统计t的字符需求', description: '用数组统计每个字符需要多少个', code: 'public String minWindow(String s, String t) {\n    int[] need = new int[128];\n    for (char c : t.toCharArray()) {\n        need[c]++;\n    }\n    int required = t.length();\n}', explanation: 'need数组记录每个字符还需要多少个，required是总共还需要多少个' },
      { title: '滑动窗口', description: '扩展和收缩窗口', code: 'public String minWindow(String s, String t) {\n    int[] need = new int[128];\n    for (char c : t.toCharArray()) {\n        need[c]++;\n    }\n    int required = t.length();\n    int left = 0, minLen = Integer.MAX_VALUE, minStart = 0;\n    \n    for (int right = 0; right < s.length(); right++) {\n        char c = s.charAt(right);\n        if (need[c] > 0) required--;\n        need[c]--;\n        \n        while (required == 0) {\n            if (right - left + 1 < minLen) {\n                minLen = right - left + 1;\n                minStart = left;\n            }\n            char leftChar = s.charAt(left);\n            need[leftChar]++;\n            if (need[leftChar] > 0) required++;\n            left++;\n        }\n    }\n    return minLen == Integer.MAX_VALUE ? "" : s.substring(minStart, minStart + minLen);\n}', explanation: '扩展直到覆盖，收缩找最小，记录结果' }
    ],
    interview: {
      approach: '滑动窗口 + 字符计数。扩展右边界直到覆盖t，然后收缩左边界找最小覆盖，记录结果后继续扩展。',
      timeComplexity: 'O(n)，每个字符最多访问两次',
      spaceComplexity: 'O(1)，固定大小的数组',
      followUp: [
        { question: '如果t中有重复字符怎么处理？', answer: '计数器自然处理了重复，need[c]记录的是需要的数量。' },
        { question: '如何优化？', answer: '可以先过滤s中不在t中的字符，减少无效遍历。' }
      ]
    }
  },
  // ==================== 回溯类题目 ====================
  {
    id: 'permutations',
    title: '全排列',
    titleEn: 'Permutations',
    category: 'backtracking',
    difficulty: 'medium',
    description: '给定一个不含重复数字的数组 nums，返回其所有可能的全排列。你可以按任意顺序返回答案。',
    examples: [
      { input: 'nums = [1,2,3]', output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]' },
      { input: 'nums = [0,1]', output: '[[0,1],[1,0]]' }
    ],
    thinkingGuide: [
      {
        step: 1,
        question: '🎯 先理解题目：什么是"排列"？和"组合"有什么区别？',
        hint: '想想[1,2]和[2,1]是一个答案还是两个答案？',
        answer: '排列考虑顺序！[1,2]和[2,1]是两个不同的排列。组合不考虑顺序，它们是同一个。所以这道题要求我们生成所有可能的顺序。'
      },
      {
        step: 2,
        question: '🤔 用最笨的方法怎么做？',
        hint: '如果让你手动列出[1,2,3]的所有排列，你会怎么做？',
        answer: '手动方法：第一个位置可以放1、2或3，确定第一个后，第二个位置从剩下的数里选，第三个位置放最后剩的那个。这就是"逐个位置做选择"的思路！'
      },
      {
        step: 3,
        question: '🌳 能不能画出这个过程？',
        hint: '把每一步的选择画成一棵树',
        answer: '可以画成决策树！根节点是空，第一层选第一个数（3种选择），第二层选第二个数（2种选择），第三层选第三个数（1种选择）。每条从根到叶子的路径就是一个排列！'
      },
      {
        step: 4,
        question: '💡 这种"选择-探索-撤销"的模式叫什么？',
        hint: '往前走走不通就退回来',
        answer: '这就是回溯法！核心思想：做出选择 → 递归探索 → 撤销选择（回溯）。就像走迷宫，走不通就退回来试另一条路。'
      },
      {
        step: 5,
        question: '📝 需要哪些变量来记录状态？',
        hint: '需要知道当前已经选了哪些数，哪些数还没用',
        answer: '需要两个关键变量：① path（路径）：记录当前已选的数字序列；② used（已用标记）：boolean数组，记录每个数字是否已被使用。'
      },
      {
        step: 6,
        question: '🔚 什么时候停止递归？',
        hint: '什么时候说明一个排列已经完成了？',
        answer: '当path的长度等于nums的长度时，说明所有位置都填满了，得到一个完整的排列！此时把path加入结果集。'
      },
      {
        step: 7,
        question: '⚠️ 收集结果时有个常见坑，是什么？',
        hint: 'path是会变的，直接加进去会怎样？',
        answer: '必须用 new ArrayList<>(path) 复制一份！因为path是引用类型，后续会被修改。如果直接加入result.add(path)，最后所有结果都会变成一样的（最后的状态）。'
      },
      {
        step: 8,
        question: '📋 总结一下回溯模板的三个核心步骤？',
        hint: '每次循环里做了什么？',
        answer: '回溯三部曲：① 做选择：path.add(nums[i]); used[i]=true; ② 递归：backtrack(...); ③ 撤销选择：path.remove(...); used[i]=false。这个模板适用于几乎所有回溯题！'
      }
    ],
    codeSteps: [
      {
        title: '第1步：确定方法签名',
        description: '明确输入输出，创建结果容器',
        code: 'public List<List<Integer>> permute(int[] nums) {\n    List<List<Integer>> result = new ArrayList<>();\n    // 调用回溯函数\n    return result;\n}',
        explanation: '🤔 为什么返回List<List<Integer>>？因为有多个排列，每个排列是一个Integer列表。\n💡 result用来收集所有的排列结果。'
      },
      {
        title: '第2步：设计回溯函数参数',
        description: '思考需要传递哪些信息',
        code: 'public List<List<Integer>> permute(int[] nums) {\n    List<List<Integer>> result = new ArrayList<>();\n    boolean[] used = new boolean[nums.length];\n    List<Integer> path = new ArrayList<>();\n    backtrack(nums, path, used, result);\n    return result;\n}\n\nprivate void backtrack(int[] nums, List<Integer> path, \n                       boolean[] used, List<List<Integer>> result) {\n    // 待实现\n}',
        explanation: '🤔 为什么用boolean[] used？用来O(1)时间判断某个数字是否已经被选过。\n🤔 为什么path用List而不是数组？因为需要动态添加和删除元素。\n💡 参数设计原则：传递"需要知道但会变化的信息"。'
      },
      {
        title: '第3步：写终止条件',
        description: '什么时候找到一个完整的排列？',
        code: 'private void backtrack(int[] nums, List<Integer> path, \n                       boolean[] used, List<List<Integer>> result) {\n    // 终止条件：路径长度等于数组长度\n    if (path.size() == nums.length) {\n        result.add(new ArrayList<>(path));  // 必须复制！\n        return;\n    }\n}',
        explanation: '🤔 为什么是 path.size() == nums.length？因为排列要用完所有数字。\n⚠️ 必须 new ArrayList<>(path)！否则所有结果都指向同一个对象。\n💡 return后回溯到上一层继续探索其他分支。'
      },
      {
        title: '第4步：遍历所有选择',
        description: '对于当前位置，可以选择哪些数字？',
        code: 'private void backtrack(int[] nums, List<Integer> path, \n                       boolean[] used, List<List<Integer>> result) {\n    if (path.size() == nums.length) {\n        result.add(new ArrayList<>(path));\n        return;\n    }\n    \n    // 遍历所有可能的选择\n    for (int i = 0; i < nums.length; i++) {\n        if (used[i]) continue;  // 跳过已使用的数字\n        // TODO: 做选择、递归、撤销\n    }\n}',
        explanation: '🤔 为什么遍历整个nums数组？因为排列中每个位置都可能放任何一个未使用的数。\n🤔 为什么用 if(used[i]) continue？跳过已经在path中的数字，避免重复使用。\n💡 这和"子集"问题不同——子集只往后选，排列可以选任何未用过的。'
      },
      {
        title: '第5步：做选择→递归→撤销（核心！）',
        description: '回溯三部曲完整实现',
        code: 'private void backtrack(int[] nums, List<Integer> path, \n                       boolean[] used, List<List<Integer>> result) {\n    if (path.size() == nums.length) {\n        result.add(new ArrayList<>(path));\n        return;\n    }\n    \n    for (int i = 0; i < nums.length; i++) {\n        if (used[i]) continue;\n        \n        // ① 做选择\n        path.add(nums[i]);\n        used[i] = true;\n        \n        // ② 递归探索\n        backtrack(nums, path, used, result);\n        \n        // ③ 撤销选择（回溯）\n        path.remove(path.size() - 1);\n        used[i] = false;\n    }\n}',
        explanation: '🎯 这就是回溯的精髓！\n① 做选择：把nums[i]加入路径，标记为已使用\n② 递归：进入下一层决策\n③ 撤销：恢复现场，让其他分支可以使用这个数\n\n💡 记住这个模板，90%的回溯题都是这个套路！'
      }
    ],
    interview: {
      approach: '【面试回答模板】\n\n这道题我用回溯法来解决。\n\n首先分析问题：排列需要考虑顺序，[1,2]和[2,1]是不同的答案，所以本质是遍历所有可能的排列方式。\n\n核心思路：把问题看成一棵决策树，每个节点选择一个未使用的数字，当路径长度等于数组长度时就得到一个排列。\n\n实现要点：\n1. 用path记录当前选择的路径\n2. 用used数组标记哪些数字已使用\n3. 回溯三部曲：做选择→递归→撤销选择',
      timeComplexity: 'O(n! × n)。一共有n!个排列（n×(n-1)×...×1），每个排列需要O(n)时间复制到结果集。',
      spaceComplexity: 'O(n)。递归调用栈最深n层，used数组O(n)，path最长n个元素。不算结果集的话就是O(n)。',
      followUp: [
        { question: '如果数组有重复数字呢？比如[1,1,2]', answer: '这就是"全排列II"。解法：先排序，然后剪枝。当nums[i]==nums[i-1]且nums[i-1]没被用过时跳过，避免同一层选择重复的数。代码：if(i>0 && nums[i]==nums[i-1] && !used[i-1]) continue;' },
        { question: '还有其他实现方式吗？', answer: '可以用交换法！不需要used数组。思路：固定第i个位置，将nums[i]和后面的元素逐个交换，递归处理i+1位置。代码更简洁但不太直观。' },
        { question: '这道题的时间复杂度怎么分析的？', answer: '决策树分析：第1层n个选择，第2层n-1个选择...所以是n×(n-1)×...×1=n!个叶子节点。每个叶子节点需要O(n)复制，总共O(n!×n)。' }
      ]
    }
  },
  {
    id: 'subsets',
    title: '子集',
    titleEn: 'Subsets',
    category: 'backtracking',
    difficulty: 'medium',
    description: '给你一个整数数组 nums，数组中的元素互不相同。返回该数组所有可能的子集（幂集）。\\n\\n解集不能包含重复的子集。你可以按任意顺序返回解集。',
    examples: [
      { input: 'nums = [1,2,3]', output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]' },
      { input: 'nums = [0]', output: '[[],[0]]' }
    ],
    thinkingGuide: [
      {
        step: 1,
        question: '🎯 什么是子集？和排列有什么本质区别？',
        hint: '[1,2]和[2,1]算一个还是两个？',
        answer: '子集不考虑顺序！[1,2]和[2,1]是同一个子集。而排列考虑顺序，它们是两个不同的排列。子集的本质是：对每个元素决定"选"还是"不选"。'
      },
      {
        step: 2,
        question: '🔢 一个n元素的数组有多少个子集？',
        hint: '每个元素两种选择',
        answer: '2^n个！因为每个元素有"选"和"不选"两种选择，n个元素就是2×2×...×2=2^n。比如[1,2,3]有2³=8个子集。'
      },
      {
        step: 3,
        question: '🤔 怎么避免生成重复的子集？',
        hint: '[1,2]和[2,1]怎么只算一次？',
        answer: '关键技巧：只往后选，不往前选！假设已选了2，下次只能从2后面的数里选。用一个start参数记录"从哪开始选"。'
      },
      {
        step: 4,
        question: '📍 和排列的代码有什么区别？',
        hint: '看递归参数',
        answer: '排列：for循环遍历所有未用过的元素（可以选前面的）。子集：for循环从start开始遍历（只能选后面的）。递归时传i+1，保证不回头。'
      },
      {
        step: 5,
        question: '⭐ 什么时候收集结果？这是和排列最大的不同！',
        hint: '空集也是子集',
        answer: '进入函数就立刻收集！因为每个节点（包括中间节点）都代表一个有效子集。排列要等路径长度等于n才收集，子集是走过的每一步都收集。'
      },
      {
        step: 6,
        question: '🌳 画一下决策树？',
        hint: '对比排列的树',
        answer: '根=[]，选1得[1]，再选2得[1,2]，再选3得[1,2,3]。回溯到[1]，选3得[1,3]...每个节点都是一个子集！不需要走到叶子节点才算数。'
      },
      {
        step: 7,
        question: '❓子集需要used数组吗？',
        hint: '想想start参数的作用',
        answer: '不需要！因为start保证只往后选，天然不会重复选同一个元素。排列需要used是因为可以选前面的元素。'
      }
    ],
    codeSteps: [
      {
        title: '第1步：主方法框架',
        description: '初始化结果集，调用回溯函数',
        code: 'public List<List<Integer>> subsets(int[] nums) {\n    List<List<Integer>> result = new ArrayList<>();\n    backtrack(nums, 0, new ArrayList<>(), result);\n    return result;\n}',
        explanation: '💡 start从0开始，表示可以选择nums[0]及之后的元素。\n🤔 为什么没有used数组？因为start参数保证只往后选，不需要额外标记。'
      },
      {
        title: '第2步：先收集结果！',
        description: '每个节点都是一个有效子集',
        code: 'private void backtrack(int[] nums, int start, \n                       List<Integer> path, List<List<Integer>> result) {\n    // 关键：每个节点都是有效子集，包括空集！\n    result.add(new ArrayList<>(path));\n    \n    // TODO: 遍历并递归\n}',
        explanation: '⭐ 这是和排列最大的区别！\n排列：if(path.size()==n) 才收集\n子集：一进函数就收集\n\n💡 第一次进入时path为空，正好收集到空集[]'
      },
      {
        title: '第3步：遍历选择（只往后选）',
        description: 'for循环从start开始，保证不回头',
        code: 'private void backtrack(int[] nums, int start, \n                       List<Integer> path, List<List<Integer>> result) {\n    result.add(new ArrayList<>(path));\n    \n    for (int i = start; i < nums.length; i++) {\n        path.add(nums[i]);\n        backtrack(nums, i + 1, path, result);  // i+1保证只往后选\n        path.remove(path.size() - 1);\n    }\n}',
        explanation: '🎯 核心：for从start开始，递归传i+1\n\n对比排列：for从0开始，需要used数组判重\n\n💡 这个"只往后选"的模式是组合类问题的通用技巧！'
      }
    ],
    interview: {
      approach: '【面试回答模板】\\n\\n这道题我用回溯法。\\n\\n关键点1：子集不考虑顺序，[1,2]和[2,1]是同一个子集。\\n\\n关键点2：用start参数控制"只往后选"，避免重复。\\n\\n关键点3：每个递归节点都是一个有效子集，进入函数就立刻收集结果。\\n\\nn个元素共有2^n个子集，因为每个元素都有选/不选两种状态。',
      timeComplexity: 'O(n × 2^n)。共2^n个子集，每个子集复制到结果集需要O(n)时间。',
      spaceComplexity: 'O(n)。递归深度最多n层。不算结果集的话就是O(n)。',
      followUp: [
        { question: '如果数组有重复元素呢？比如[1,2,2]', answer: '这是"子集II"。解法：先排序，然后在同一层跳过重复元素。if(i>start && nums[i]==nums[i-1]) continue; 注意是i>start不是i>0。' },
        { question: '能否用位运算实现？', answer: '可以！用0到2^n-1的每个数的二进制表示一个子集。二进制第i位为1表示选nums[i]。代码更简洁但不太直观。' },
        { question: '子集和组合有什么区别？', answer: '子集是所有大小的组合的并集。"组合"通常指固定大小k的子集，子集则包含所有大小（0到n）。' }
      ]
    }
  },
  {
    id: 'letter-combinations',
    title: '电话号码的字母组合',
    titleEn: 'Letter Combinations of a Phone Number',
    category: 'backtracking',
    difficulty: 'medium',
    description: '给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按任意顺序返回。\\n\\n给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。',
    examples: [
      { input: 'digits = "23"', output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]' },
      { input: 'digits = ""', output: '[]' }
    ],
    thinkingGuide: [
      {
        step: 1,
        question: '🎯 先理解题意：输入"23"代表什么？',
        hint: '想想老式手机键盘',
        answer: '2对应abc，3对应def。输入"23"意味着第一个字母从abc中选，第二个字母从def中选。所以答案是所有可能的组合。'
      },
      {
        step: 2,
        question: '📊 "23"有多少种组合？',
        hint: '每个数字的选择数相乘',
        answer: '3×3=9种。一般地，如果每个数字有m个字母，n位数字就有m^n种组合。'
      },
      {
        step: 3,
        question: '🌳 如何画出决策树？',
        hint: '第一层是第一个数字的选择',
        answer: '根节点是空。第一层：选a/b/c。第二层：每个分支下再选d/e/f。每条从根到叶子的路径就是一个组合！'
      },
      {
        step: 4,
        question: '💡 这和全排列/子集有什么区别？',
        hint: '每一层的选择范围不同',
        answer: '区别很大！全排列/子集是在同一个数组里选择。这里每一层的选择范围不同（由当前数字决定）。但本质还是回溯遍历决策树。'
      },
      {
        step: 5,
        question: '🔧 需要什么预处理？',
        hint: '怎么根据数字快速找到对应字母',
        answer: '需要一个数字到字母的映射！可以用String数组：mapping[2]="abc"，mapping[3]="def"...下标0和1没有对应字母。'
      },
      {
        step: 6,
        question: '📝 回溯函数需要哪些参数？',
        hint: '需要知道"当前处理到第几个数字"',
        answer: '核心参数：index（当前处理的数字下标）。每层根据index获取对应字母列表，遍历选择，递归处理index+1。'
      },
      {
        step: 7,
        question: '⚠️ 边界情况是什么？',
        hint: '输入为空字符串',
        answer: '如果digits为空，直接返回空列表！不需要进入回溯。这是常见的边界处理。'
      }
    ],
    codeSteps: [
      {
        title: '第1步：建立数字到字母的映射',
        description: '使用数组存储映射关系',
        code: 'private String[] mapping = {\n    "",     // 0\n    "",     // 1\n    "abc",  // 2\n    "def",  // 3\n    "ghi",  // 4\n    "jkl",  // 5\n    "mno",  // 6\n    "pqrs", // 7\n    "tuv",  // 8\n    "wxyz"  // 9\n};',
        explanation: '💡 用数组比HashMap更快！下标就是数字，值就是对应的字母串。\\n🤔 为什么0和1是空串？因为它们不对应任何字母。'
      },
      {
        title: '第2步：主方法处理边界',
        description: '空输入直接返回',
        code: 'public List<String> letterCombinations(String digits) {\n    List<String> result = new ArrayList<>();\n    if (digits.isEmpty()) return result;  // 边界！\n    backtrack(digits, 0, new StringBuilder(), result);\n    return result;\n}',
        explanation: '⚠️ 必须先判断空输入！否则会进入回溯返回[""]而不是[]。\\n💡 用StringBuilder而不是String拼接，效率更高。'
      },
      {
        title: '第3步：回溯函数——终止条件',
        description: '处理完所有数字时收集结果',
        code: 'private void backtrack(String digits, int index, \n                       StringBuilder path, List<String> result) {\n    if (index == digits.length()) {\n        result.add(path.toString());\n        return;\n    }\n    // TODO: 遍历并选择\n}',
        explanation: '🤔 为什么是 index == digits.length()？\\n因为下标从0开始，处理完最后一个数字后index变成length。\\n这时path里已经存了完整的组合。'
      },
      {
        title: '第4步：遍历当前数字对应的字母',
        description: '获取映射，逐个尝试',
        code: 'private void backtrack(String digits, int index, \n                       StringBuilder path, List<String> result) {\n    if (index == digits.length()) {\n        result.add(path.toString());\n        return;\n    }\n    \n    // 获取当前数字对应的字母\n    char digit = digits.charAt(index);\n    String letters = mapping[digit - \\'0\\'];\n    \n    // 遍历每个字母\n    for (char c : letters.toCharArray()) {\n        path.append(c);                    // 做选择\n        backtrack(digits, index + 1, path, result);  // 递归\n        path.deleteCharAt(path.length() - 1);        // 撤销\n    }\n}',
        explanation: '🎯 关键点：\\n1. digit - \\'0\\' 将字符转为数字\\n2. 每层的选择范围由当前数字决定\\n3. StringBuilder的append/deleteCharAt比String的+效率高' 
      }
    ],
    interview: {
      approach: '【面试回答模板】\\n\\n这道题用回溯法遍历所有可能的字母组合。\\n\\n首先建立数字到字母的映射（用数组，下标是数字）。\\n\\n回溯思路：用index表示当前处理到第几个数字，每层获取该数字对应的字母，遍历选择。\\n\\n终止条件：index等于digits长度时，说明选完了所有数字对应的字母，收集结果。\\n\\n注意边界：空字符串直接返回空列表。',
      timeComplexity: 'O(4^n × n)。最坏情况每个数字对应4个字母（如7、9），共4^n种组合，每个组合需要O(n)时间复制。',
      spaceComplexity: 'O(n)。递归深度为n（数字个数）。',
      followUp: [
        { question: '能否用迭代实现？', answer: '可以！用队列。初始放入空串，每次取出所有字符串，追加当前数字的每个字母后放回。类似BFS的层序遍历。' },
        { question: '这道题需要used数组或start参数吗？', answer: '不需要！因为每层选择的范围不同（由不同数字决定），天然不会重复。' },
        { question: '时间复杂度为什么不是3^n？', answer: '因为7和9对应4个字母。最坏情况全是7或9，所以是4^n。平均情况介于3^n和4^n之间。' }
      ]
    }
  },
  {
    id: 'combination-sum',
    title: '组合总和',
    titleEn: 'Combination Sum',
    category: 'backtracking',
    difficulty: 'medium',
    description: '给你一个无重复元素的整数数组 candidates 和一个目标整数 target，找出 candidates 中可以使数字和为目标数 target 的所有不同组合，并以列表形式返回。你可以按任意顺序返回这些组合。\\n\\ncandidates 中的同一个数字可以无限制重复被选取。',
    examples: [
      { input: 'candidates = [2,3,6,7], target = 7', output: '[[2,2,3],[7]]' },
      { input: 'candidates = [2,3,5], target = 8', output: '[[2,2,2,2],[2,3,3],[3,5]]' }
    ],
    thinkingGuide: [
      {
        step: 1,
        question: '🎯 这道题的核心目标是什么？',
        hint: '找什么样的组合',
        answer: '找出所有加起来等于target的数字组合。比如target=7，可以是[7]或[2,2,3]。'
      },
      {
        step: 2,
        question: '💡 和"子集"问题有什么关键区别？',
        hint: '元素能用几次',
        answer: '子集问题每个元素最多用一次。这道题元素可以重复使用！比如2可以选多次变成[2,2,3]。'
      },
      {
        step: 3,
        question: '🔧 代码上怎么实现"可重复"？',
        hint: '递归时start参数怎么传',
        answer: '关键：递归时传i而不是i+1！子集传i+1表示"不能再选当前元素"，这里传i表示"还可以继续选当前元素"。'
      },
      {
        step: 4,
        question: '📐 什么时候停止递归？有两种情况',
        hint: '想想remain的值',
        answer: '情况1：remain==0（凑够了target），收集结果。情况2：remain<0（超过了），剪枝返回。'
      },
      {
        step: 5,
        question: '✂️ 能否进一步优化剪枝？',
        hint: '排序有什么好处',
        answer: '先排序！如果当前数字已经大于remain，后面更大的数字肯定不行，直接break。这样可以跳过很多无效尝试。'
      },
      {
        step: 6,
        question: '🤔 需要避免重复组合吗？',
        hint: '[2,3]和[3,2]算一个还是两个',
        answer: '是的！[2,3]和[3,2]是同一个组合。用start参数保证只往后选（或选自己）就能避免。'
      }
    ],
    codeSteps: [
      {
        title: '第1步：主方法框架',
        description: '初始化并调用回溯',
        code: 'public List<List<Integer>> combinationSum(int[] candidates, int target) {\\n    List<List<Integer>> result = new ArrayList<>();\\n    // 可选优化：Arrays.sort(candidates);\\n    backtrack(candidates, target, 0, new ArrayList<>(), result);\\n    return result;\\n}',
        explanation: '💡 排序是可选的优化，可以让剪枝更高效。\\n🤔 初始remain就是target（还需要凑的数）。'
      },
      {
        title: '第2步：回溯函数——两个终止条件',
        description: '凑够了或超了都要停止',
        code: 'private void backtrack(int[] candidates, int remain, int start,\\n                       List<Integer> path, List<List<Integer>> result) {\\n    if (remain < 0) return;  // 剪枝：超过target了\\n    if (remain == 0) {       // 正好凑够\\n        result.add(new ArrayList<>(path));\\n        return;\\n    }\\n    // TODO: 遍历选择\\n}',
        explanation: '⭐ 用remain（剩余值）比用sum（当前和）更直观。\\n🤔 remain=0说明path里的数加起来正好等于target。'
      },
      {
        title: '第3步：遍历选择（可重复选自己）',
        description: '从start开始，递归传i不是i+1',
        code: 'private void backtrack(int[] candidates, int remain, int start,\\n                       List<Integer> path, List<List<Integer>> result) {\\n    if (remain < 0) return;\\n    if (remain == 0) {\\n        result.add(new ArrayList<>(path));\\n        return;\\n    }\\n    \\n    for (int i = start; i < candidates.length; i++) {\\n        path.add(candidates[i]);\\n        // 关键：传i不是i+1，允许重复使用\\n        backtrack(candidates, remain - candidates[i], i, path, result);\\n        path.remove(path.size() - 1);\\n    }\\n}',
        explanation: '🎯 核心区别就在这里！\\n子集/排列：backtrack(..., i+1, ...)\\n组合总和：backtrack(..., i, ...)\\n\\n传i意味着下次还可以选candidates[i]。'
      }
    ],
    interview: {
      approach: '【面试回答模板】\\n\\n这道题用回溯法解决。\\n\\n核心特点：元素可以重复使用。所以递归时传i而不是i+1。\\n\\n用remain记录还需要凑多少。remain==0时收集结果，remain<0时剪枝。\\n\\n用start参数保证只往后或往自己选，避免重复组合。\\n\\n可选优化：先排序，当candidates[i]>remain时直接break。',
      timeComplexity: 'O(n^(target/min))。最坏情况用最小的数凑target，递归深度是target/min。',
      spaceComplexity: 'O(target/min)。递归栈深度。',
      followUp: [
        { question: '如果每个数字只能用一次？', answer: '这是"组合总和II"。递归时传i+1，同时先排序后跳过相邻重复元素。' },
        { question: '如何进一步优化？', answer: '先排序。在for循环中加if(candidates[i]>remain) break; 因为后面的数更大，肯定不行。' },
        { question: '这道题和"零钱兑换"有什么关系？', answer: '本质相同！零钱兑换是求最少硬币数（DP或BFS），这道题是列出所有组合（回溯）。' }
      ]
    }
  },
  {
    id: 'generate-parentheses',
    title: '括号生成',
    titleEn: 'Generate Parentheses',
    category: 'backtracking',
    difficulty: 'medium',
    description: '数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且有效的括号组合。',
    examples: [
      { input: 'n = 3', output: '["((()))","(()())","(())()","()(())","()()()"]' },
      { input: 'n = 1', output: '["()"]' }
    ],
    thinkingGuide: [
      {
        step: 1,
        question: '🎯 什么才是"有效"的括号？',
        hint: '左右括号的数量关系',
        answer: '两个关键规则：① 最终生成时，左括号总数 == 右括号总数 == n。② 在生成过程中的【任何时刻】，已放入的右括号数量不能超过左括号数量（否则无法闭合）。'
      },
      {
        step: 2,
        question: '🌲 这个决策树长什么样？',
        hint: '每一步有两个选择',
        answer: '从空串开始，每一步尝试放一个"("或者")"。如果不加限制，这是一棵二叉树。'
      },
      {
        step: 3,
        question: '✂️ 什么时候可以放左括号？',
        hint: '有限额吗',
        answer: '只要左括号的总数还没达到n，就可以放"("。'
      },
      {
        step: 4,
        question: '✂️ 什么时候可以放右括号？',
        hint: '能随便放吗',
        answer: '只有当【目前已有左括号 > 目前已有右括号】时，才能放")"。这保证了规则②。'
      },
      {
        step: 5,
        question: '🏁 什么时候是个头？',
        hint: '长度',
        answer: '当生成的字符串长度等于 2*n 时，说明放满了，加入结果集。'
      },
      {
        step: 6,
        question: '📝 需要哪些参数记录状态？',
        hint: '不仅仅是path',
        answer: '需要：left（已用左括号数）、right（已用右括号数）。不用传path里具体是什么，只关心数量。'
      }
    ],
    codeSteps: [
      {
        title: '第1步：主方法框架',
        description: '初始化',
        code: 'public List<String> generateParenthesis(int n) {\\n    List<String> result = new ArrayList<>();\\n    // 从0个左括号、0个右括号开始\\n    backtrack(n, 0, 0, new StringBuilder(), result);\\n    return result;\\n}',
        explanation: '💡 使用StringBuilder因为需要频繁修改字符串。'
      },
      {
        title: '第2步：回溯函数——终止条件',
        description: '找够了就返回',
        code: 'private void backtrack(int n, int left, int right,\\n                       StringBuilder path, List<String> result) {\\n    // 终止条件：总长度达到2n\\n    if (path.length() == 2 * n) {\\n        result.add(path.toString());\\n        return;\\n    }\\n    // TODO: 尝试放左括号或右括号\\n}',
        explanation: '🤔 为什么是2*n？因为n对括号意味着总共2n个字符。'
      },
      {
        title: '第3步：尝试放左括号',
        description: '只要没超限额就能放',
        code: 'private void backtrack(int n, int left, int right,\\n                       StringBuilder path, List<String> result) {\\n    if (path.length() == 2 * n) {\\n        result.add(path.toString());\\n        return;\\n    }\\n    \\n    // 只要左括号不够n个，就可以放\\n    if (left < n) {\\n        path.append(\\\'(\\\');\\n        backtrack(n, left + 1, right, path, result);\\n        path.deleteCharAt(path.length() - 1); // 撤销\\n    }\\n    \\n    // TODO: 尝试放右括号\\n}',
        explanation: '💡 left + 1 表示又用掉了一个左括号额度。'
      },
      {
        title: '第4步：尝试放右括号',
        description: '必须有未闭合的左括号才能放',
        code: 'private void backtrack(int n, int left, int right,\\n                       StringBuilder path, List<String> result) {\\n    // ...前文省略...\\n    \\n    if (left < n) { ... }\\n    \\n    // 只有右括号少于左括号时，才能放\\n    if (right < left) {\\n        path.append(\\\')\\\');\\n        backtrack(n, left, right + 1, path, result);\\n        path.deleteCharAt(path.length() - 1);\\n    }\\n}',
        explanation: '🎯 核心剪枝：right < left 保证了括号的有效性。如果right==left，再放右括号就变成")..."，非法！'
      }
    ],
    interview: {
      approach: '【面试回答模板】\\n\\n这道题用回溯法生成。\\n\\n核心在于维护两个计数器：left（已放左括号数）和right（已放右括号数）。\\n\\n每次递归有两个选择：\\n1. 如果left < n，可以放左括号。\\n2. 如果right < left，可以放右括号（保证有效闭合）。\\n\\n当path长度等于2n时，收集结果。\\n\\n这种方法通过剪枝保证了生成的每一步都是合法的，不需要最后再验证。',
      timeComplexity: 'O(4^n / √n)。这是第n个卡特兰数，渐近复杂度如此。简单说就是指数级。',
      spaceComplexity: 'O(n)。递归深度最大为2n。',
      followUp: [
        { question: '不用backtrack，用暴力法怎么做？', answer: '生成所有2^2n种由(和)组成的序列，然后验证每个是否有效。效率非常低。' },
        { question: '如何验证一个括号字符串是否有效？', answer: '维护一个balance变量，初始0。遇到(加1，遇到)减1。过程中如果balance<0则非法，最后必须balance==0。' }
      ]
    }
  },
  {
    id: 'word-search',
    title: '单词搜索',
    titleEn: 'Word Search',
    category: 'backtracking',
    difficulty: 'medium',
    description: '给定一个 m x n 二维字符网格 board 和一个字符串单词 word。如果 word 存在于网格中，返回 true；否则，返回 false。\\n\\n单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中"相邻"单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。',
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: 'true' },
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"', output: 'true' }
    ],
    thinkingGuide: [
      {
        step: 1,
        question: '🎯 这道题的本质是什么？',
        hint: '在迷宫里找路',
        answer: '这是一个典型的图/网格搜索问题。我们需要在网格中找到一条路径，使得路径上的字符连起来等于目标单词。'
      },
      {
        step: 2,
        question: '🚀 从哪里开始搜索？',
        hint: '起点确定吗',
        answer: '起点不确定！所以需要遍历网格中的【每一个格子】。如果某个格子字符等于单词的第一个字母，就从这里开始DFS搜索。'
      },
      {
        step: 3,
        question: '🚶 DFS搜索的规则是什么？',
        hint: '四个方向',
        answer: '从当前格子出发，可以向上下左右四个方向走。如果邻居格子等于单词的下一个字母，就继续走下去。'
      },
      {
        step: 4,
        question: '🚫 如何避免走"回头路"？',
        hint: '同一个单元格不能重复使用',
        answer: '需要标记已访问！可以用一个visited数组，或者更省空间的办法：临时修改board中的字符（比如改成"#"），递归回来后再改回去（回溯）。'
      },
      {
        step: 5,
        question: '🛑 什么时候返回true，什么时候返回false？',
        hint: '找到最后一个字符',
        answer: '成功：当索引index等于word长度时，说明全都匹配上了。失败：越界、字符不匹配、或者已访问过。'
      }
    ],
    codeSteps: [
      {
        title: '第1步：主方法遍历起点',
        description: '尝试以每个格子为起点',
        code: 'public boolean exist(char[][] board, String word) {\\n    for (int i = 0; i < board.length; i++) {\\n        for (int j = 0; j < board[0].length; j++) {\\n            // 从(i,j)开始搜索，匹配word的第0个字符\\n            if (backtrack(board, word, i, j, 0)) {\\n                return true;\\n            }\\n        }\\n    }\\n    return false;\\n}',
        explanation: '💡 只要有一个起点成功找到路径，就返回true。'
      },
      {
        title: '第2步：回溯函数——失败条件',
        description: '越界或不匹配',
        code: 'private boolean backtrack(char[][] board, String word, int i, int j, int index) {\\n    // 成功找到所有字符\\n    if (index == word.length()) return true;\\n    \\n    // 越界检查 或 字符不匹配 或 已访问(#)\\n    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || \\n        board[i][j] != word.charAt(index)) {\\n        return false;\\n    }\\n    \\n    // TODO: 标记访问并递归\\n}',
        explanation: '⚠️ 边界检查很重要！一定要先检查越界，再访问数组。'
      },
      {
        title: '第3步：标记、递归、回溯',
        description: '核心搜索逻辑',
        code: 'private boolean backtrack(char[][] board, String word, int i, int j, int index) {\\n    // ...前文省略...\\n    \\n    // 1. 标记已访问（暂存原字符）\\n    char temp = board[i][j];\\n    board[i][j] = \\\'#\\\';\\n    \\n    // 2. 递归搜索四个方向\\n    boolean found = backtrack(board, word, i + 1, j, index + 1) ||\\n                    backtrack(board, word, i - 1, j, index + 1) ||\\n                    backtrack(board, word, i, j + 1, index + 1) ||\\n                    backtrack(board, word, i, j - 1, index + 1);\\n    \\n    // 3. 回溯（恢复原字符）\\n    board[i][j] = temp;\\n    \\n    return found;\\n}',
        explanation: '💡 技巧：直接修改board[i][j]=\'#\'来标记已访问，省去了O(mn)的visited数组空间。\\n⚠️ 别忘了最后要把board[i][j]改回temp，否则会影响其他起点的搜索。'
      }
    ],
    interview: {
      approach: '【面试回答模板】\\n\\n这道题是典型的网格DFS搜索。\\n\\n思路：\\n1. 遍历网格中的每个格子，如果它和单词首字母匹配，就从它开始DFS。\\n\\n2. DFS函数接收坐标(i, j)和当前匹配到的单词索引index。\\n\\n3. 在DFS中，先判断是否越界、是否匹配、是否已访问。\\n\\n4. 关键点：为了不重复使用格子，我会在进入递归前把board[i][j]改成特殊字符（如\'#\'），递归结束后再改回去（回溯）。\\n\\n5. 只要四个方向中有一个返回true，就说明找到了。',
      timeComplexity: 'O(M×N×3^L)。M,N是网格大小，L是单词长度。每次递归有3个方向可走（除去回头的方向）。',
      spaceComplexity: 'O(L)。递归深度最大为单词长度。如果不修改原数组用visited数组，则是O(M×N)。',
      followUp: [
        { question: '如果要搜索多个单词怎么办？', answer: '如果是给一个字典列表（如Word Search II），应该用Trie树（字典树）构建前缀树，然后只遍历一次网格。' },
        { question: '为什么时间复杂度是3^L不是4^L？', answer: '因为除了第一步看似有4个方向，后续每步都不会走回头路（已标记），所以只有3个方向可选。' }
      ]
    }
  },
  {
    id: 'palindrome-partitioning',
    title: '分割回文串',
    titleEn: 'Palindrome Partitioning',
    category: 'backtracking',
    difficulty: 'medium',
    description: '给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文串。返回 s 所有可能的分割方案。',
    examples: [
      { input: 's = "aab"', output: '[["a","a","b"],["aa","b"]]' },
      { input: 's = "a"', output: '[["a"]]' }
    ],
    thinkingGuide: [
      {
        step: 1,
        question: '🎯 题目要求什么？',
        hint: '切西瓜',
        answer: '把一个字符串切成好几段，每一段都必须是回文串。比如"aab"可以切成["a","a","b"]或["aa","b"]。'
      },
      {
        step: 2,
        question: '🤔 如何用回溯模拟切割过程？',
        hint: '第一刀切在哪',
        answer: '我们可以枚举第一刀的位置。比如"aab"，第一刀可以切在"a"后面，也可以切在"aa"后面。切完第一刀（如果第一段是回文），就对剩下的部分分别继续递归。'
      },
      {
        step: 3,
        question: '🌲 决策树是怎样的？',
        hint: 'for循环尝试切分点',
        answer: '横向扩展：尝试截取长度为1, 2, ..., n的前缀。纵向深入：对剩余的后缀字符串继续切割。'
      },
      {
        step: 4,
        question: '🛑 什么时候停止？',
        hint: '切完了',
        answer: '当切割线start到达字符串末尾时，说明已经切完且全都合格，收集当前切分方案。'
      },
      {
        step: 5,
        question: '🚀 如何优化回文判断？',
        hint: '每次都判断O(n)有点慢',
        answer: '可以用动态规划预处理！dp[i][j]表示s[i..j]是否回文。这样回溯时的判断就从O(n)变成了O(1)。'
      }
    ],
    codeSteps: [
      {
        title: '第1步：主方法框架',
        description: '初始化',
        code: 'public List<List<String>> partition(String s) {\\n    List<List<String>> result = new ArrayList<>();\\n    backtrack(s, 0, new ArrayList<>(), result);\\n    return result;\\n}',
        explanation: 'start从0开始，表示当前的切割起始位置。'
      },
      {
        title: '第2步：回溯函数——遍历切割点',
        description: '尝试每一个可能的切割位置',
        code: 'private void backtrack(String s, int start, \\n                       List<String> path, List<List<String>> result) {\\n    // 终止条件：切到了最后\\n    if (start == s.length()) {\\n        result.add(new ArrayList<>(path));\\n        return;\\n    }\\n    \\n    // 从start处开始截取，长度至少为1\\n    for (int end = start + 1; end <= s.length(); end++) {\\n        // 截取 [start, end) 的子串\\n        String sub = s.substring(start, end);\\n        \\n        // TODO: 判断回文并递归\\n    }\\n}',
        explanation: '💡 substring是左闭右开区间，所以end从start+1开始，直到s.length()。'
      },
      {
        title: '第3步：判断回文并处理',
        description: '只有回文串才切割',
        code: 'private void backtrack(String s, int start, \\n                       List<String> path, List<List<String>> result) {\\n    // ...前文省略...\\n    for (int end = start + 1; end <= s.length(); end++) {\\n        String sub = s.substring(start, end);\\n        \\n        // 只有当前截取的是回文，才继续切剩下的\\n        if (isPalindrome(sub)) {\\n            path.add(sub);\\n            backtrack(s, end, path, result);  // 新的start变成end\\n            path.remove(path.size() - 1);\\n        }\\n    }\\n}',
        explanation: '🎯 核心逻辑：如果前缀sub不是回文，就直接跳过（剪枝），尝试更长的sub。'
      },
      {
        title: '第4步：回文验证辅助函数',
        description: '双指针法',
        code: 'private boolean isPalindrome(String s) {\\n    int left = 0, right = s.length() - 1;\\n    while (left < right) {\\n        if (s.charAt(left++) != s.charAt(right--)) {\\n            return false;\\n        }\\n    }\\n    return true;\\n}',
        explanation: '也可以用DP预处理优化，但在面试中先写出双指针法通常足够且更简单。'
      }
    ],
    interview: {
      approach: '【面试回答模板】\\n\\n这道题用回溯法解决。\\n\\n思路是将问题分解为：\\n1. 在当前位置切一刀，如果切下来的前缀是回文串，就放入path。\\n2. 对剩余的后缀字符串递归继续切。\\n\\n终止条件是切到了字符串末尾。\\n\\n回文判断可以用双指针法，时间复杂度O(n)。如果字符串很长，可以用动态规划预处理一个boolean[][] dp表，把判断降低到O(1)。',
      timeComplexity: 'O(n × 2^n)。在最坏情况下（如全是一样的字符），有2^n种分割方案（每两个字符间切或不切），每种方案需要O(n)时间构造结果。',
      spaceComplexity: 'O(n)。递归深度最大为n。',
      followUp: [
        { question: '如何优化时间复杂度？', answer: '使用DP预处理回文判断。dp[i][j] = (s[i]==s[j] && dp[i+1][j-1])。' },
        { question: '分割有多少种可能性？', answer: '这实际上对应着在n-1个空隙中放隔板，每个空隙放或不放，共2^(n-1)种可能。' }
      ]
    }
  },
  {
    id: 'n-queens',
    title: 'N皇后',
    titleEn: 'N-Queens',
    category: 'backtracking',
    difficulty: 'hard',
    description: '按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。\\n\\nn 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。\\n\\n给你一个整数 n，返回所有不同的 n 皇后问题的解决方案。',
    examples: [
      { input: 'n = 4', output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]' },
      { input: 'n = 1', output: '[["Q"]]' }
    ],
    thinkingGuide: [
      {
        step: 1,
        question: '🎯 每一行能放几个皇后？',
        hint: '想想行冲突',
        answer: '每一行只能放一个！因为同一行如果有两个，它们就能互相攻击。所以我们可以一行一行地尝试放置。'
      },
      {
        step: 2,
        question: '🤔 放置时需要检查哪些冲突？',
        hint: '列、斜线',
        answer: '1. 垂直方向（同一列）。2. 左上到右下斜线。3. 右上到左下斜线。不需要检查水平方向，因为我们是逐行放置的，天然保证一行一个。'
      },
      {
        step: 3,
        question: '📐 斜线上的坐标有什么规律？',
        hint: '坐标(r, c)',
        answer: '左上到右下斜线（╲）：row - col 是常数。右上到左下斜线（╱）：row + col 是常数。利用这个规律可以快速判断斜线冲突。'
      },
      {
        step: 4,
        question: '🌲 回溯的流程是？',
        hint: 'DFS',
        answer: '从第0行开始，尝试在第0行的每一列放皇后。如果位置合法，就放下去，然后递归去放第1行...如果某一行没地方放，就回溯。'
      },
      {
        step: 5,
        question: '🛑 何时收集结果？',
        hint: '行数',
        answer: '当成功放置完第 n-1 行（即 row == n）时，说明找到了一个合法解，把它加入结果集。'
      }
    ],
    codeSteps: [
      {
        title: '第1步：主方法与初始化',
        description: '初始化棋盘',
        code: 'public List<List<String>> solveNQueens(int n) {\\n    List<List<String>> result = new ArrayList<>();\\n    char[][] board = new char[n][n];\\n    // 初始化填充 \'.\'\\n    for (char[] row : board) Arrays.fill(row, \'.\');\\n    \\n    backtrack(board, 0, result);\\n    return result;\\n}',
        explanation: 'board数组用于回溯过程中记录状态，最后再转成List<String>。'
      },
      {
        title: '第2步：回溯函数',
        description: '逐行尝试',
        code: 'private void backtrack(char[][] board, int row, List<List<String>> result) {\\n    // 终止条件：所有行都放好了\\n    if (row == board.length) {\\n        result.add(construct(board));\\n        return;\\n    }\\n    \\n    // 尝试当前行的每一列\\n    for (int col = 0; col < board.length; col++) {\\n        if (isValid(board, row, col)) {\\n            board[row][col] = \'Q\';     // 放置\\n            backtrack(board, row + 1, result); // 递归下一行\\n            board[row][col] = \'.\';     // 撤销（回溯）\\n        }\\n    }\\n}',
        explanation: 'row表示当前正在处理哪一行。'
      },
      {
        title: '第3步：验证函数（检查冲突）',
        description: '检查列和两个对角线',
        code: 'private boolean isValid(char[][] board, int row, int col) {\\n    // 1. 检查列（上方是否有皇后）\\n    for (int i = 0; i < row; i++) {\\n        if (board[i][col] == \'Q\') return false;\\n    }\\n    \\n    // 2. 检查左上对角线\\n    for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {\\n        if (board[i][j] == \'Q\') return false;\\n    }\\n    \\n    // 3. 检查右上对角线\\n    for (int i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {\\n        if (board[i][j] == \'Q\') return false;\\n    }\\n    \\n    return true;\\n}',
        explanation: '🤔 为什么不用检查行？因为我们是backtrack(row+1)，一行只放一个。\\n🤔 为什么只检查上方？因为下方的还没放。'
      },
      {
        title: '第4步：构造结果',
        description: '将char[][]转为List<String>',
        code: 'private List<String> construct(char[][] board) {\\n    List<String> list = new ArrayList<>();\\n    for (char[] row : board) {\\n        list.add(new String(row));\\n    }\\n    return list;\\n}',
        explanation: '简单的数据类型转换。'
      }
    ],
    interview: {
      approach: '【面试回答模板】\\n\\nN皇后是经典的回溯题。\\n\\n策略：逐行放置。每一行尝试在每一列在该位置放置皇后。\\n\\n判断合法性：\\n1. 列方向不能有皇后。\\n2. 两个对角线方向不能有皇后。\\n（行方向天然合法，因为我们一行只放一个）\\n\\n为了验证合法性，可以直接扫描上方区域（代码里写的isValid方法），时间复杂度每步O(n)。\\n\\n优化：可以用三个boolean数组（或哈希集）分别记录：\\n- cols[]：列是否被占\\n- diag1[]：左上-右下对角线是否被占（对于(r,c)，index = r - c + n）\\n- diag2[]：右上-左下对角线是否被占（对于(r,c)，index = r + c）\\n这样判断合法性就是O(1)了。',
      timeComplexity: 'O(N!)。第一行有N种选法，第二行N-1种...虽然有剪枝，但上界是N!。',
      spaceComplexity: 'O(N)。递归栈深度为N，棋盘空间为N^2。',
      followUp: [
        { question: '如何用位运算优化空间？', answer: '用三个整数（bitmask）分别表示列、左斜、右斜的占用情况。位运算能极大地提高效率，常用于N皇后求解个数问题（N-Queens II）。' },
        { question: 'N=1到N=10的解的个数？', answer: '1对应1个，2和3无解，4对应2个...8对应92个。面试时记住8皇后有92个解是加分项。' }
      ]
    }
  },
  // ==================== 二分查找类题目 ====================
  {
    id: 'search-insert-position',
    title: '搜索插入位置',
    titleEn: 'Search Insert Position',
    category: 'binary-search',
    difficulty: 'easy',
    description: '给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。\n\n请必须使用时间复杂度为 O(log n) 的算法。',
    examples: [
      { input: 'nums = [1,3,5,6], target = 5', output: '2' },
      { input: 'nums = [1,3,5,6], target = 2', output: '1' },
      { input: 'nums = [1,3,5,6], target = 7', output: '4' }
    ],
    thinkingGuide: [
      { step: 1, question: '为什么用二分查找？', hint: '有序数组', answer: '数组有序，要求O(logn)，自然想到二分查找。' },
      { step: 2, question: '找不到时返回什么？', hint: '插入位置', answer: '返回第一个大于等于target的位置，即left指针最终的位置。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入有序数组和目标值，输出位置', code: 'public int searchInsert(int[] nums, int target) {\n    // 待实现\n}', explanation: '返回目标值的位置或应插入的位置' },
      { title: '初始化边界', description: '左右指针', code: 'public int searchInsert(int[] nums, int target) {\n    int left = 0, right = nums.length - 1;\n}', explanation: '左闭右闭区间' },
      { title: '二分查找', description: '循环缩小范围', code: 'public int searchInsert(int[] nums, int target) {\n    int left = 0, right = nums.length - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (nums[mid] == target) {\n            return mid;\n        } else if (nums[mid] < target) {\n            left = mid + 1;\n        } else {\n            right = mid - 1;\n        }\n    }\n    return left;\n}', explanation: '找到返回mid，找不到返回left（插入位置）' }
    ],
    interview: {
      approach: '标准二分查找。找到返回位置，找不到时left指向第一个大于target的位置，即插入位置。',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '为什么返回left？', answer: '循环结束时，left指向第一个大于等于target的位置，正好是插入位置。' }
      ]
    }
  },
  {
    id: 'search-2d-matrix',
    title: '搜索二维矩阵',
    titleEn: 'Search a 2D Matrix',
    category: 'binary-search',
    difficulty: 'medium',
    description: '给你一个满足下述两条属性的 m x n 整数矩阵：\n\n每行中的整数从左到右按非严格递增顺序排列。\n每行的第一个整数大于前一行的最后一个整数。\n\n给你一个整数 target，如果 target 在矩阵中，返回 true；否则，返回 false。',
    examples: [
      { input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3', output: 'true' },
      { input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13', output: 'false' }
    ],
    thinkingGuide: [
      { step: 1, question: '矩阵有什么特点？', hint: '展开后', answer: '如果把矩阵按行展开，就是一个有序数组！' },
      { step: 2, question: '如何映射下标？', hint: '一维到二维', answer: '一维下标i对应二维下标(i/n, i%n)，n是列数。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入矩阵和目标值，输出是否存在', code: 'public boolean searchMatrix(int[][] matrix, int target) {\n    // 待实现\n}', explanation: '返回true或false' },
      { title: '初始化', description: '把矩阵看作一维数组', code: 'public boolean searchMatrix(int[][] matrix, int target) {\n    int m = matrix.length, n = matrix[0].length;\n    int left = 0, right = m * n - 1;\n}', explanation: '总共m*n个元素' },
      { title: '二分查找', description: '用下标映射访问元素', code: 'public boolean searchMatrix(int[][] matrix, int target) {\n    int m = matrix.length, n = matrix[0].length;\n    int left = 0, right = m * n - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        int val = matrix[mid / n][mid % n];\n        if (val == target) return true;\n        else if (val < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return false;\n}', explanation: 'mid/n是行号，mid%n是列号' }
    ],
    interview: {
      approach: '把二维矩阵看作一维有序数组，用二分查找。一维下标i映射到二维(i/n, i%n)。',
      timeComplexity: 'O(log(m*n))',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '如果每行有序但行之间无序？', answer: '从右上角或左下角开始搜索，每次排除一行或一列。' }
      ]
    }
  },
  {
    id: 'find-first-and-last',
    title: '在排序数组中查找元素的第一个和最后一个位置',
    titleEn: 'Find First and Last Position of Element in Sorted Array',
    category: 'binary-search',
    difficulty: 'medium',
    description: '给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。\n\n如果数组中不存在目标值 target，返回 [-1, -1]。\n\n你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。',
    examples: [
      { input: 'nums = [5,7,7,8,8,10], target = 8', output: '[3,4]' },
      { input: 'nums = [5,7,7,8,8,10], target = 6', output: '[-1,-1]' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何找第一个位置？', hint: '找到后继续往左', answer: '二分查找，找到target后不停止，继续往左搜索，直到找到第一个。' },
      { step: 2, question: '如何找最后一个位置？', hint: '找到后继续往右', answer: '类似地，找到后继续往右搜索。' }
    ],
    codeSteps: [
      { title: '主方法', description: '分别找左右边界', code: 'public int[] searchRange(int[] nums, int target) {\n    int left = findFirst(nums, target);\n    int right = findLast(nums, target);\n    return new int[] {left, right};\n}', explanation: '调用两个辅助函数' },
      { title: '找第一个位置', description: '找到后继续往左', code: 'private int findFirst(int[] nums, int target) {\n    int left = 0, right = nums.length - 1;\n    int result = -1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (nums[mid] == target) {\n            result = mid;\n            right = mid - 1;  // 继续往左找\n        } else if (nums[mid] < target) {\n            left = mid + 1;\n        } else {\n            right = mid - 1;\n        }\n    }\n    return result;\n}', explanation: '找到后记录并继续往左' },
      { title: '找最后一个位置', description: '找到后继续往右', code: 'private int findLast(int[] nums, int target) {\n    int left = 0, right = nums.length - 1;\n    int result = -1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (nums[mid] == target) {\n            result = mid;\n            left = mid + 1;  // 继续往右找\n        } else if (nums[mid] < target) {\n            left = mid + 1;\n        } else {\n            right = mid - 1;\n        }\n    }\n    return result;\n}', explanation: '找到后记录并继续往右' }
    ],
    interview: {
      approach: '两次二分查找，分别找左边界和右边界。找到target后不停止，继续往一边搜索。',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '能否一次二分？', answer: '可以，但代码更复杂。两次二分更清晰。' }
      ]
    }
  },
  {
    id: 'search-rotated-sorted-array',
    title: '搜索旋转排序数组',
    titleEn: 'Search in Rotated Sorted Array',
    category: 'binary-search',
    difficulty: 'medium',
    description: '整数数组 nums 按升序排列，数组中的值互不相同。\n\n在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]。\n\n给你旋转后的数组 nums 和一个整数 target，如果 nums 中存在这个目标值 target，则返回它的下标，否则返回 -1。',
    examples: [
      { input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4' },
      { input: 'nums = [4,5,6,7,0,1,2], target = 3', output: '-1' }
    ],
    thinkingGuide: [
      { step: 1, question: '旋转数组有什么特点？', hint: '分成两段', answer: '旋转后分成两段有序数组，一段在前一段在后。' },
      { step: 2, question: '如何判断mid在哪段？', hint: '和边界比较', answer: '如果nums[mid] >= nums[left]，mid在左段；否则在右段。' },
      { step: 3, question: '如何决定搜索方向？', hint: '判断target在有序的那段', answer: '确定mid在哪段后，判断target是否在有序的那半边，决定搜索方向。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入旋转数组和目标值，输出下标', code: 'public int search(int[] nums, int target) {\n    // 待实现\n}', explanation: '返回下标或-1' },
      { title: '二分查找', description: '判断有序区间并搜索', code: 'public int search(int[] nums, int target) {\n    int left = 0, right = nums.length - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (nums[mid] == target) return mid;\n        \n        if (nums[mid] >= nums[left]) {\n            // 左半段有序\n            if (target >= nums[left] && target < nums[mid]) {\n                right = mid - 1;\n            } else {\n                left = mid + 1;\n            }\n        } else {\n            // 右半段有序\n            if (target > nums[mid] && target <= nums[right]) {\n                left = mid + 1;\n            } else {\n                right = mid - 1;\n            }\n        }\n    }\n    return -1;\n}', explanation: '先判断哪半段有序，再判断target在不在有序段' }
    ],
    interview: {
      approach: '二分查找。每次先判断mid在左段还是右段（通过和left比较），然后判断target是否在有序的那半边，决定搜索方向。',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '如果有重复元素？', answer: '当nums[mid] == nums[left]时，无法判断在哪段，只能left++跳过。最坏O(n)。' }
      ]
    }
  },
  {
    id: 'find-minimum-rotated',
    title: '寻找旋转排序数组中的最小值',
    titleEn: 'Find Minimum in Rotated Sorted Array',
    category: 'binary-search',
    difficulty: 'medium',
    description: '已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次旋转后，得到输入数组。\n\n给你一个元素值互不相同的数组 nums，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的最小元素。',
    examples: [
      { input: 'nums = [3,4,5,1,2]', output: '1' },
      { input: 'nums = [4,5,6,7,0,1,2]', output: '0' }
    ],
    thinkingGuide: [
      { step: 1, question: '最小值在哪里？', hint: '旋转点', answer: '最小值在旋转点，即从大变小的位置。' },
      { step: 2, question: '如何用二分找旋转点？', hint: '和右边界比较', answer: '如果nums[mid] > nums[right]，最小值在右半边；否则在左半边（包括mid）。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入旋转数组，输出最小值', code: 'public int findMin(int[] nums) {\n    // 待实现\n}', explanation: '返回最小值' },
      { title: '二分查找', description: '找旋转点', code: 'public int findMin(int[] nums) {\n    int left = 0, right = nums.length - 1;\n    while (left < right) {\n        int mid = left + (right - left) / 2;\n        if (nums[mid] > nums[right]) {\n            left = mid + 1;\n        } else {\n            right = mid;\n        }\n    }\n    return nums[left];\n}', explanation: '注意是left < right，不是<=；right = mid不是mid-1' }
    ],
    interview: {
      approach: '二分查找找旋转点。和右边界比较：如果nums[mid] > nums[right]，最小值在右边；否则在左边（包括mid）。',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '为什么和右边界比较？', answer: '和左边界比较无法区分是否旋转过。' },
        { question: '如果有重复元素？', answer: '当nums[mid] == nums[right]时，right--跳过。最坏O(n)。' }
      ]
    }
  },
  {
    id: 'median-two-sorted-arrays',
    title: '寻找两个正序数组的中位数',
    titleEn: 'Median of Two Sorted Arrays',
    category: 'binary-search',
    difficulty: 'hard',
    description: '给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。\n\n算法的时间复杂度应该为 O(log (m+n))。',
    examples: [
      { input: 'nums1 = [1,3], nums2 = [2]', output: '2.00000', explanation: '合并数组 = [1,2,3]，中位数 2' },
      { input: 'nums1 = [1,2], nums2 = [3,4]', output: '2.50000', explanation: '合并数组 = [1,2,3,4]，中位数 (2 + 3) / 2 = 2.5' }
    ],
    thinkingGuide: [
      { step: 1, question: '中位数的本质是什么？', hint: '分割', answer: '把所有元素分成两半，左半边最大值 <= 右半边最小值，中位数就是分割点的值。' },
      { step: 2, question: '如何二分？', hint: '在较短数组上二分', answer: '在较短数组上二分找分割点，另一个数组的分割点可以计算出来。' }
    ],
    codeSteps: [
      { title: '确保nums1较短', description: '在较短数组上二分', code: 'public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n    if (nums1.length > nums2.length) {\n        return findMedianSortedArrays(nums2, nums1);\n    }\n    int m = nums1.length, n = nums2.length;\n}', explanation: '交换保证nums1较短' },
      { title: '二分查找分割点', description: '找到正确的分割位置', code: 'public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n    if (nums1.length > nums2.length) {\n        return findMedianSortedArrays(nums2, nums1);\n    }\n    int m = nums1.length, n = nums2.length;\n    int left = 0, right = m;\n    while (left <= right) {\n        int i = (left + right) / 2;\n        int j = (m + n + 1) / 2 - i;\n        \n        int maxLeft1 = (i == 0) ? Integer.MIN_VALUE : nums1[i-1];\n        int minRight1 = (i == m) ? Integer.MAX_VALUE : nums1[i];\n        int maxLeft2 = (j == 0) ? Integer.MIN_VALUE : nums2[j-1];\n        int minRight2 = (j == n) ? Integer.MAX_VALUE : nums2[j];\n        \n        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {\n            if ((m + n) % 2 == 0) {\n                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2.0;\n            } else {\n                return Math.max(maxLeft1, maxLeft2);\n            }\n        } else if (maxLeft1 > minRight2) {\n            right = i - 1;\n        } else {\n            left = i + 1;\n        }\n    }\n    return 0;\n}', explanation: 'i是nums1的分割点，j是nums2的分割点，满足i+j=(m+n+1)/2' }
    ],
    interview: {
      approach: '在较短数组上二分找分割点。分割点把两个数组分成左右两半，使得左半边最大值 <= 右半边最小值。',
      timeComplexity: 'O(log(min(m,n)))',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '为什么在较短数组上二分？', answer: '保证j不会越界，且减少二分次数。' }
      ]
    }
  },
  // ==================== 栈类题目 ====================
  {
    id: 'valid-parentheses',
    title: '有效的括号',
    titleEn: 'Valid Parentheses',
    category: 'stack',
    difficulty: 'easy',
    description: '给定一个只包括 \'(\'，\')\'，\'{\'，\'}\'，\'[\'，\']\' 的字符串 s，判断字符串是否有效。\n\n有效字符串需满足：\n1. 左括号必须用相同类型的右括号闭合。\n2. 左括号必须以正确的顺序闭合。\n3. 每个右括号都有一个对应的相同类型的左括号。',
    examples: [
      { input: 's = "()"', output: 'true' },
      { input: 's = "()[]{}"', output: 'true' },
      { input: 's = "(]"', output: 'false' }
    ],
    thinkingGuide: [
      { step: 1, question: '为什么用栈？', hint: '后进先出', answer: '括号匹配是后进先出的：最后出现的左括号要最先匹配。' },
      { step: 2, question: '遇到右括号怎么办？', hint: '和栈顶比较', answer: '检查栈顶是否是对应的左括号，是则出栈，否则无效。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入字符串，输出是否有效', code: 'public boolean isValid(String s) {\n    // 待实现\n}', explanation: '返回true或false' },
      { title: '使用栈', description: '遍历字符串处理括号', code: 'public boolean isValid(String s) {\n    Stack<Character> stack = new Stack<>();\n    for (char c : s.toCharArray()) {\n        if (c == \'(\' || c == \'[\' || c == \'{\') {\n            stack.push(c);\n        } else {\n            if (stack.isEmpty()) return false;\n            char top = stack.pop();\n            if (c == \')\' && top != \'(\') return false;\n            if (c == \']\' && top != \'[\') return false;\n            if (c == \'}\' && top != \'{\') return false;\n        }\n    }\n    return stack.isEmpty();\n}', explanation: '左括号入栈，右括号检查匹配' }
    ],
    interview: {
      approach: '用栈。遇到左括号入栈，遇到右括号检查栈顶是否匹配。最后栈为空则有效。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      followUp: [
        { question: '如何优化？', answer: '可以用HashMap存储括号对应关系，代码更简洁。' }
      ]
    }
  },
  {
    id: 'min-stack',
    title: '最小栈',
    titleEn: 'Min Stack',
    category: 'stack',
    difficulty: 'medium',
    description: '设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。\n\n实现 MinStack 类：\n- MinStack() 初始化堆栈对象。\n- void push(int val) 将元素val推入堆栈。\n- void pop() 删除堆栈顶部的元素。\n- int top() 获取堆栈顶部的元素。\n- int getMin() 获取堆栈中的最小元素。',
    examples: [
      { input: '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]', output: '[null,null,null,null,-3,null,0,-2]' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何O(1)获取最小值？', hint: '额外存储', answer: '用辅助栈存储每个状态下的最小值。' },
      { step: 2, question: '辅助栈如何维护？', hint: '和主栈同步', answer: 'push时，辅助栈压入当前最小值；pop时，辅助栈也弹出。' }
    ],
    codeSteps: [
      { title: '定义数据结构', description: '两个栈', code: 'class MinStack {\n    private Stack<Integer> stack;\n    private Stack<Integer> minStack;\n    \n    public MinStack() {\n        stack = new Stack<>();\n        minStack = new Stack<>();\n    }\n}', explanation: 'stack存数据，minStack存最小值' },
      { title: '实现push', description: '同时更新最小值栈', code: 'public void push(int val) {\n    stack.push(val);\n    if (minStack.isEmpty() || val <= minStack.peek()) {\n        minStack.push(val);\n    } else {\n        minStack.push(minStack.peek());\n    }\n}', explanation: '压入当前最小值' },
      { title: '实现其他方法', description: 'pop, top, getMin', code: 'public void pop() {\n    stack.pop();\n    minStack.pop();\n}\n\npublic int top() {\n    return stack.peek();\n}\n\npublic int getMin() {\n    return minStack.peek();\n}', explanation: 'getMin直接返回minStack栈顶' }
    ],
    interview: {
      approach: '用辅助栈存储每个状态下的最小值。push时压入当前最小值，pop时同步弹出。',
      timeComplexity: 'O(1)，所有操作都是O(1)',
      spaceComplexity: 'O(n)，辅助栈',
      followUp: [
        { question: '能否只用一个栈？', answer: '可以，存储差值或者存储(val, min)对。' }
      ]
    }
  },
  {
    id: 'decode-string',
    title: '字符串解码',
    titleEn: 'Decode String',
    category: 'stack',
    difficulty: 'medium',
    description: '给定一个经过编码的字符串，返回它解码后的字符串。\n\n编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。',
    examples: [
      { input: 's = "3[a]2[bc]"', output: '"aaabcbc"' },
      { input: 's = "3[a2[c]]"', output: '"accaccacc"' }
    ],
    thinkingGuide: [
      { step: 1, question: '为什么用栈？', hint: '嵌套结构', answer: '括号可能嵌套，需要从内到外处理，符合栈的后进先出。' },
      { step: 2, question: '栈里存什么？', hint: '遇到[时保存状态', answer: '存储当前的字符串和重复次数，遇到]时恢复并拼接。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入编码字符串，输出解码结果', code: 'public String decodeString(String s) {\n    // 待实现\n}', explanation: '返回解码后的字符串' },
      { title: '使用栈处理', description: '遍历字符分类处理', code: 'public String decodeString(String s) {\n    Stack<Integer> countStack = new Stack<>();\n    Stack<StringBuilder> stringStack = new Stack<>();\n    StringBuilder current = new StringBuilder();\n    int k = 0;\n    \n    for (char c : s.toCharArray()) {\n        if (Character.isDigit(c)) {\n            k = k * 10 + (c - \'0\');\n        } else if (c == \'[\') {\n            countStack.push(k);\n            stringStack.push(current);\n            current = new StringBuilder();\n            k = 0;\n        } else if (c == \']\') {\n            int count = countStack.pop();\n            StringBuilder prev = stringStack.pop();\n            for (int i = 0; i < count; i++) {\n                prev.append(current);\n            }\n            current = prev;\n        } else {\n            current.append(c);\n        }\n    }\n    return current.toString();\n}', explanation: '遇到[保存状态，遇到]恢复并重复' }
    ],
    interview: {
      approach: '用两个栈，一个存重复次数，一个存字符串。遇到[保存当前状态，遇到]恢复并重复拼接。',
      timeComplexity: 'O(n)，n是解码后的长度',
      spaceComplexity: 'O(n)',
      followUp: [
        { question: '能否用递归？', answer: '可以，遇到[递归处理，遇到]返回。' }
      ]
    }
  },
  {
    id: 'daily-temperatures',
    title: '每日温度',
    titleEn: 'Daily Temperatures',
    category: 'stack',
    difficulty: 'medium',
    description: '给定一个整数数组 temperatures，表示每天的温度，返回一个数组 answer，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。',
    examples: [
      { input: 'temperatures = [73,74,75,71,69,72,76,73]', output: '[1,1,4,2,1,1,0,0]' },
      { input: 'temperatures = [30,40,50,60]', output: '[1,1,1,0]' }
    ],
    thinkingGuide: [
      { step: 1, question: '暴力解法是什么？', hint: '对每天向后找', answer: '对每天向后遍历找第一个更高的温度，时间O(n²)。' },
      { step: 2, question: '如何优化？', hint: '单调栈', answer: '用单调递减栈，栈里存下标。遇到更高温度时，弹出所有比它低的，计算天数差。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入温度数组，输出等待天数数组', code: 'public int[] dailyTemperatures(int[] temperatures) {\n    // 待实现\n}', explanation: '返回每天需要等待的天数' },
      { title: '单调栈', description: '维护递减栈', code: 'public int[] dailyTemperatures(int[] temperatures) {\n    int n = temperatures.length;\n    int[] result = new int[n];\n    Stack<Integer> stack = new Stack<>();\n    \n    for (int i = 0; i < n; i++) {\n        while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {\n            int idx = stack.pop();\n            result[idx] = i - idx;\n        }\n        stack.push(i);\n    }\n    return result;\n}', explanation: '栈里存下标，遇到更高温度时计算天数差' }
    ],
    interview: {
      approach: '单调递减栈。栈里存下标，遇到更高温度时弹出所有比它低的，计算天数差。',
      timeComplexity: 'O(n)，每个元素最多入栈出栈各一次',
      spaceComplexity: 'O(n)',
      followUp: [
        { question: '为什么用递减栈？', answer: '因为要找下一个更大的元素，递减栈保证栈顶是最近的未找到答案的元素。' }
      ]
    }
  },
  {
    id: 'largest-rectangle-histogram',
    title: '柱状图中最大的矩形',
    titleEn: 'Largest Rectangle in Histogram',
    category: 'stack',
    difficulty: 'hard',
    description: '给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1。\n\n求在该柱状图中，能够勾勒出来的矩形的最大面积。',
    examples: [
      { input: 'heights = [2,1,5,6,2,3]', output: '10', explanation: '最大的矩形为图中红色区域，面积为 10' },
      { input: 'heights = [2,4]', output: '4' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何计算以某个柱子为高的矩形面积？', hint: '向两边扩展', answer: '找到左边第一个比它矮的和右边第一个比它矮的，宽度就是它们之间的距离。' },
      { step: 2, question: '如何高效找左右边界？', hint: '单调栈', answer: '用单调递增栈，栈里存下标。弹出时，栈顶就是左边界，当前元素就是右边界。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入高度数组，输出最大面积', code: 'public int largestRectangleArea(int[] heights) {\n    // 待实现\n}', explanation: '返回最大矩形面积' },
      { title: '单调栈', description: '维护递增栈', code: 'public int largestRectangleArea(int[] heights) {\n    int n = heights.length;\n    Stack<Integer> stack = new Stack<>();\n    int maxArea = 0;\n    \n    for (int i = 0; i <= n; i++) {\n        int h = (i == n) ? 0 : heights[i];\n        while (!stack.isEmpty() && h < heights[stack.peek()]) {\n            int height = heights[stack.pop()];\n            int width = stack.isEmpty() ? i : i - stack.peek() - 1;\n            maxArea = Math.max(maxArea, height * width);\n        }\n        stack.push(i);\n    }\n    return maxArea;\n}', explanation: '末尾加0确保所有柱子都被处理' }
    ],
    interview: {
      approach: '单调递增栈。弹出时计算以该柱子为高的矩形面积：高度是柱子高度，宽度是左右边界之间的距离。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      followUp: [
        { question: '为什么末尾加0？', answer: '确保所有柱子都被弹出处理。' },
        { question: '这道题和接雨水有什么关系？', answer: '接雨水可以用类似的单调栈方法，按层计算。' }
      ]
    }
  },
  // ==================== 堆类题目 ====================
  {
    id: 'kth-largest-element',
    title: '数组中的第K个最大元素',
    titleEn: 'Kth Largest Element in an Array',
    category: 'heap',
    difficulty: 'medium',
    description: '给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。\n\n请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。',
    examples: [
      { input: 'nums = [3,2,1,5,6,4], k = 2', output: '5' },
      { input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4', output: '4' }
    ],
    thinkingGuide: [
      { step: 1, question: '最直接的方法？', hint: '排序', answer: '排序后取第k大，时间O(nlogn)。' },
      { step: 2, question: '如何优化？', hint: '不需要完全排序', answer: '用小顶堆维护k个最大元素，堆顶就是第k大。或者用快速选择算法。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入数组和k，输出第k大元素', code: 'public int findKthLargest(int[] nums, int k) {\n    // 待实现\n}', explanation: '返回第k大的元素' },
      { title: '使用小顶堆', description: '维护k个最大元素', code: 'public int findKthLargest(int[] nums, int k) {\n    PriorityQueue<Integer> heap = new PriorityQueue<>();\n    for (int num : nums) {\n        heap.offer(num);\n        if (heap.size() > k) {\n            heap.poll();\n        }\n    }\n    return heap.peek();\n}', explanation: '小顶堆大小为k，堆顶是第k大' }
    ],
    interview: {
      approach: '用小顶堆维护k个最大元素。遍历数组，堆大小超过k就弹出最小的。最后堆顶就是第k大。',
      timeComplexity: 'O(nlogk)',
      spaceComplexity: 'O(k)',
      followUp: [
        { question: '还有什么方法？', answer: '快速选择算法，平均O(n)，最坏O(n²)。' },
        { question: '为什么用小顶堆而不是大顶堆？', answer: '小顶堆维护k个最大元素，堆顶是其中最小的，即第k大。大顶堆需要维护n-k+1个元素。' }
      ]
    }
  },
  {
    id: 'top-k-frequent',
    title: '前K个高频元素',
    titleEn: 'Top K Frequent Elements',
    category: 'heap',
    difficulty: 'medium',
    description: '给你一个整数数组 nums 和一个整数 k，请你返回其中出现频率前 k 高的元素。你可以按任意顺序返回答案。',
    examples: [
      { input: 'nums = [1,1,1,2,2,3], k = 2', output: '[1,2]' },
      { input: 'nums = [1], k = 1', output: '[1]' }
    ],
    thinkingGuide: [
      { step: 1, question: '第一步做什么？', hint: '统计频率', answer: '用HashMap统计每个元素的出现次数。' },
      { step: 2, question: '如何找前k高频？', hint: '堆', answer: '用小顶堆（按频率排序）维护k个元素，堆顶是频率最低的。' }
    ],
    codeSteps: [
      { title: '统计频率', description: '用HashMap统计', code: 'public int[] topKFrequent(int[] nums, int k) {\n    Map<Integer, Integer> count = new HashMap<>();\n    for (int num : nums) {\n        count.put(num, count.getOrDefault(num, 0) + 1);\n    }\n}', explanation: '统计每个元素出现次数' },
      { title: '使用小顶堆', description: '按频率排序的堆', code: 'public int[] topKFrequent(int[] nums, int k) {\n    Map<Integer, Integer> count = new HashMap<>();\n    for (int num : nums) {\n        count.put(num, count.getOrDefault(num, 0) + 1);\n    }\n    \n    PriorityQueue<Integer> heap = new PriorityQueue<>((a, b) -> count.get(a) - count.get(b));\n    for (int num : count.keySet()) {\n        heap.offer(num);\n        if (heap.size() > k) {\n            heap.poll();\n        }\n    }\n    \n    int[] result = new int[k];\n    for (int i = 0; i < k; i++) {\n        result[i] = heap.poll();\n    }\n    return result;\n}', explanation: '小顶堆按频率排序，维护k个高频元素' }
    ],
    interview: {
      approach: '先用HashMap统计频率，再用小顶堆（按频率排序）维护k个高频元素。',
      timeComplexity: 'O(nlogk)',
      spaceComplexity: 'O(n)',
      followUp: [
        { question: '还有什么方法？', answer: '桶排序，O(n)时间。按频率分桶，从高频桶开始取k个。' }
      ]
    }
  },
  {
    id: 'find-median-data-stream',
    title: '数据流的中位数',
    titleEn: 'Find Median from Data Stream',
    category: 'heap',
    difficulty: 'hard',
    description: '中位数是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。\n\n实现 MedianFinder 类：\n- MedianFinder() 初始化 MedianFinder 对象。\n- void addNum(int num) 将数据流中的整数 num 添加到数据结构中。\n- double findMedian() 返回到目前为止所有元素的中位数。',
    examples: [
      { input: '["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]\n[[], [1], [2], [], [3], []]', output: '[null, null, null, 1.5, null, 2.0]' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何快速获取中位数？', hint: '分成两半', answer: '把数据分成两半，左半边用大顶堆（存较小的一半），右半边用小顶堆（存较大的一半）。' },
      { step: 2, question: '如何维护平衡？', hint: '大小差不超过1', answer: '保持两个堆大小差不超过1，中位数就是堆顶元素。' }
    ],
    codeSteps: [
      { title: '定义数据结构', description: '两个堆', code: 'class MedianFinder {\n    private PriorityQueue<Integer> maxHeap;  // 左半边，大顶堆\n    private PriorityQueue<Integer> minHeap;  // 右半边，小顶堆\n    \n    public MedianFinder() {\n        maxHeap = new PriorityQueue<>((a, b) -> b - a);\n        minHeap = new PriorityQueue<>();\n    }\n}', explanation: '大顶堆存较小的一半，小顶堆存较大的一半' },
      { title: '实现addNum', description: '添加并平衡', code: 'public void addNum(int num) {\n    maxHeap.offer(num);\n    minHeap.offer(maxHeap.poll());\n    if (minHeap.size() > maxHeap.size()) {\n        maxHeap.offer(minHeap.poll());\n    }\n}', explanation: '先加入大顶堆，再平衡到小顶堆，最后调整大小' },
      { title: '实现findMedian', description: '返回中位数', code: 'public double findMedian() {\n    if (maxHeap.size() > minHeap.size()) {\n        return maxHeap.peek();\n    } else {\n        return (maxHeap.peek() + minHeap.peek()) / 2.0;\n    }\n}', explanation: '奇数个返回大顶堆顶，偶数个返回两堆顶平均' }
    ],
    interview: {
      approach: '用两个堆：大顶堆存较小的一半，小顶堆存较大的一半。保持大小差不超过1，中位数就是堆顶。',
      timeComplexity: 'addNum: O(logn), findMedian: O(1)',
      spaceComplexity: 'O(n)',
      followUp: [
        { question: '如果数据有大量重复？', answer: '可以用TreeMap存(值, 计数)，但实现更复杂。' }
      ]
    }
  },
  // ==================== 贪心类题目 ====================
  {
    id: 'best-time-buy-sell-stock',
    title: '买卖股票的最佳时机',
    titleEn: 'Best Time to Buy and Sell Stock',
    category: 'greedy',
    difficulty: 'easy',
    description: '给定一个数组 prices，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。\n\n你只能选择某一天买入这只股票，并选择在未来的某一个不同的日子卖出该股票。设计一个算法来计算你所能获取的最大利润。\n\n返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0。',
    examples: [
      { input: 'prices = [7,1,5,3,6,4]', output: '5', explanation: '在第 2 天买入，在第 5 天卖出，利润 = 6-1 = 5' },
      { input: 'prices = [7,6,4,3,1]', output: '0', explanation: '没有交易完成，最大利润为 0' }
    ],
    thinkingGuide: [
      { step: 1, question: '暴力解法是什么？', hint: '枚举买卖日', answer: '两层循环枚举买入日和卖出日，计算最大利润。时间O(n²)。' },
      { step: 2, question: '如何优化？', hint: '一次遍历', answer: '遍历时记录到目前为止的最低价格，计算当天卖出的利润。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入价格数组，输出最大利润', code: 'public int maxProfit(int[] prices) {\n    // 待实现\n}', explanation: '返回最大利润' },
      { title: '一次遍历', description: '记录最低价并计算利润', code: 'public int maxProfit(int[] prices) {\n    int minPrice = Integer.MAX_VALUE;\n    int maxProfit = 0;\n    for (int price : prices) {\n        minPrice = Math.min(minPrice, price);\n        maxProfit = Math.max(maxProfit, price - minPrice);\n    }\n    return maxProfit;\n}', explanation: '每天更新最低价和最大利润' }
    ],
    interview: {
      approach: '贪心。遍历时维护到目前为止的最低价格，计算当天卖出的利润，取最大值。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '如果可以多次交易？', answer: '累加所有上涨的差价。' },
        { question: '如果最多交易k次？', answer: '用动态规划，dp[i][j]表示第i天完成j次交易的最大利润。' }
      ]
    }
  },
  {
    id: 'jump-game',
    title: '跳跃游戏',
    titleEn: 'Jump Game',
    category: 'greedy',
    difficulty: 'medium',
    description: '给你一个非负整数数组 nums，你最初位于数组的第一个下标。数组中的每个元素代表你在该位置可以跳跃的最大长度。\n\n判断你是否能够到达最后一个下标。',
    examples: [
      { input: 'nums = [2,3,1,1,4]', output: 'true', explanation: '可以先跳 1 步到下标 1，然后跳 3 步到达最后一个下标' },
      { input: 'nums = [3,2,1,0,4]', output: 'false', explanation: '无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0' }
    ],
    thinkingGuide: [
      { step: 1, question: '核心问题是什么？', hint: '能到达的最远位置', answer: '维护能到达的最远位置，如果最远位置 >= 最后一个下标，就能到达。' },
      { step: 2, question: '如何更新最远位置？', hint: '贪心', answer: '遍历每个位置，更新最远位置 = max(最远位置, 当前位置 + 跳跃长度)。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入数组，输出是否能到达', code: 'public boolean canJump(int[] nums) {\n    // 待实现\n}', explanation: '返回true或false' },
      { title: '贪心遍历', description: '维护最远可达位置', code: 'public boolean canJump(int[] nums) {\n    int maxReach = 0;\n    for (int i = 0; i < nums.length; i++) {\n        if (i > maxReach) return false;\n        maxReach = Math.max(maxReach, i + nums[i]);\n    }\n    return true;\n}', explanation: '如果当前位置超过最远可达，说明到不了' }
    ],
    interview: {
      approach: '贪心。维护能到达的最远位置，遍历更新。如果某个位置超过最远可达位置，返回false。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '如果要求最少跳跃次数？', answer: '贪心，每次跳到能使下一步跳得最远的位置。' }
      ]
    }
  },
  {
    id: 'jump-game-ii',
    title: '跳跃游戏 II',
    titleEn: 'Jump Game II',
    category: 'greedy',
    difficulty: 'medium',
    description: '给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。\n\n每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:\n\n0 <= j <= nums[i]\ni + j < n\n\n返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。',
    examples: [
      { input: 'nums = [2,3,1,1,4]', output: '2', explanation: '跳到下标 1，然后跳到最后一个下标' },
      { input: 'nums = [2,3,0,1,4]', output: '2' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何贪心？', hint: '每一跳的范围', answer: '在当前跳跃范围内，找到能跳得最远的位置作为下一跳的起点。' },
      { step: 2, question: '什么时候增加跳跃次数？', hint: '到达边界时', answer: '当到达当前跳跃的边界时，必须跳一次，更新边界为最远可达位置。' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入数组，输出最少跳跃次数', code: 'public int jump(int[] nums) {\n    // 待实现\n}', explanation: '返回最少跳跃次数' },
      { title: '贪心遍历', description: '维护边界和最远可达', code: 'public int jump(int[] nums) {\n    int jumps = 0;\n    int end = 0;      // 当前跳跃的边界\n    int farthest = 0; // 最远可达位置\n    \n    for (int i = 0; i < nums.length - 1; i++) {\n        farthest = Math.max(farthest, i + nums[i]);\n        if (i == end) {\n            jumps++;\n            end = farthest;\n        }\n    }\n    return jumps;\n}', explanation: '到达边界时跳一次，更新边界' }
    ],
    interview: {
      approach: '贪心。维护当前跳跃的边界和最远可达位置。到达边界时必须跳一次，更新边界为最远可达。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '为什么遍历到n-1而不是n？', answer: '到达最后一个位置时不需要再跳，避免多算一次。' }
      ]
    }
  },
  {
    id: 'partition-labels',
    title: '划分字母区间',
    titleEn: 'Partition Labels',
    category: 'greedy',
    difficulty: 'medium',
    description: '给你一个字符串 s。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。\n\n注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s。\n\n返回一个表示每个字符串片段的长度的列表。',
    examples: [
      { input: 's = "ababcbacadefegdehijhklij"', output: '[9,7,8]', explanation: '划分结果为 "ababcbaca"、"defegde"、"hijhklij"' },
      { input: 's = "eccbbbbdec"', output: '[10]' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何确定片段边界？', hint: '每个字母的最后出现位置', answer: '片段必须包含某个字母的所有出现，所以边界至少要到该字母最后出现的位置。' },
      { step: 2, question: '如何贪心？', hint: '不断扩展边界', answer: '遍历时不断更新当前片段的边界为所有字母最后出现位置的最大值，到达边界时切分。' }
    ],
    codeSteps: [
      { title: '记录最后出现位置', description: '预处理每个字母的最后位置', code: 'public List<Integer> partitionLabels(String s) {\n    int[] last = new int[26];\n    for (int i = 0; i < s.length(); i++) {\n        last[s.charAt(i) - \'a\'] = i;\n    }\n}', explanation: 'last[c]记录字母c最后出现的位置' },
      { title: '贪心划分', description: '遍历并切分', code: 'public List<Integer> partitionLabels(String s) {\n    int[] last = new int[26];\n    for (int i = 0; i < s.length(); i++) {\n        last[s.charAt(i) - \'a\'] = i;\n    }\n    \n    List<Integer> result = new ArrayList<>();\n    int start = 0, end = 0;\n    for (int i = 0; i < s.length(); i++) {\n        end = Math.max(end, last[s.charAt(i) - \'a\']);\n        if (i == end) {\n            result.add(end - start + 1);\n            start = end + 1;\n        }\n    }\n    return result;\n}', explanation: '不断扩展边界，到达边界时切分' }
    ],
    interview: {
      approach: '贪心。先记录每个字母最后出现的位置，然后遍历，不断扩展当前片段的边界，到达边界时切分。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)，只用了26大小的数组',
      followUp: [
        { question: '为什么这样划分是最优的？', answer: '每次到达边界就切分，保证了片段数最多。' }
      ]
    }
  }
];

// 导入新题目
import { newProblems } from './newProblems';
import { moreProblems } from './moreProblems';
import { dpProblems } from './dpProblems';
import { sortingProblems } from './sortingProblems';
import { searchingProblems } from './searchingProblems';

// 合并所有题目
export const allProblems: Problem[] = [...problems, ...newProblems, ...moreProblems, ...dpProblems, ...sortingProblems, ...searchingProblems];

// 分类定义
export const categories: Category[] = [
  { id: 'hash', name: '哈希', nameEn: 'Hash Table', icon: '{ }', description: '用空间换时间，O(1)查找', color: '#10b981', gradient: 'from-emerald-500/20 to-emerald-600/10', problems: ['two-sum', 'group-anagrams', 'longest-consecutive-sequence'] },
  { id: 'two-pointer', name: '双指针', nameEn: 'Two Pointers', icon: '⇄', description: '左右指针/快慢指针', color: '#f59e0b', gradient: 'from-amber-500/20 to-amber-600/10', problems: ['move-zeroes', 'container-with-most-water', 'three-sum', 'trapping-rain-water'] },
  { id: 'sliding-window', name: '滑动窗口', nameEn: 'Sliding Window', icon: '▭', description: '动态维护区间', color: '#8b5cf6', gradient: 'from-violet-500/20 to-violet-600/10', problems: ['longest-substring-without-repeating', 'find-all-anagrams'] },
  { id: 'substring', name: '子串', nameEn: 'Substring', icon: '[ ]', description: '前缀和/单调队列', color: '#ec4899', gradient: 'from-pink-500/20 to-pink-600/10', problems: ['subarray-sum-equals-k', 'sliding-window-maximum', 'minimum-window-substring'] },
  { id: 'backtracking', name: '回溯', nameEn: 'Backtracking', icon: '↺', description: '穷举搜索', color: '#ef4444', gradient: 'from-red-500/20 to-red-600/10', problems: ['permutations', 'subsets', 'letter-combinations', 'combination-sum', 'generate-parentheses', 'word-search', 'palindrome-partitioning', 'n-queens'] },
  { id: 'binary-search', name: '二分查找', nameEn: 'Binary Search', icon: '⌖', description: '有序数组O(logn)查找', color: '#06b6d4', gradient: 'from-cyan-500/20 to-cyan-600/10', problems: ['search-insert-position', 'search-2d-matrix', 'find-first-and-last', 'search-rotated-sorted-array', 'find-minimum-rotated', 'median-two-sorted-arrays'] },
  { id: 'stack', name: '栈', nameEn: 'Stack', icon: '▤', description: '后进先出/单调栈', color: '#3b82f6', gradient: 'from-blue-500/20 to-blue-600/10', problems: ['valid-parentheses', 'min-stack', 'decode-string', 'daily-temperatures', 'largest-rectangle-histogram'] },
  { id: 'heap', name: '堆', nameEn: 'Heap', icon: '△', description: '优先队列/TopK', color: '#a855f7', gradient: 'from-purple-500/20 to-purple-600/10', problems: ['kth-largest-element', 'top-k-frequent', 'find-median-data-stream'] },
  { id: 'greedy', name: '贪心算法', nameEn: 'Greedy', icon: '✓', description: '局部最优到全局最优', color: '#22c55e', gradient: 'from-green-500/20 to-green-600/10', problems: ['best-time-buy-sell-stock', 'jump-game', 'jump-game-ii', 'partition-labels'] },
  { id: 'binary-tree', name: '二叉树', nameEn: 'Binary Tree', icon: '🌳', description: '递归/遍历/构造', color: '#14b8a6', gradient: 'from-teal-500/20 to-teal-600/10', problems: ['binary-tree-inorder', 'max-depth', 'invert-tree', 'symmetric-tree', 'diameter-binary-tree', 'level-order', 'sorted-array-to-bst', 'validate-bst', 'kth-smallest-bst', 'right-side-view', 'flatten-binary-tree', 'construct-tree', 'path-sum-iii', 'lowest-common-ancestor', 'max-path-sum'] },
  { id: 'dp', name: '动态规划', nameEn: 'Dynamic Programming', icon: '📊', description: '状态转移/最优子结构', color: '#f97316', gradient: 'from-orange-500/20 to-orange-600/10', problems: ['climbing-stairs', 'pascals-triangle', 'house-robber', 'perfect-squares', 'coin-change', 'word-break', 'longest-increasing-subsequence', 'max-product-subarray', 'partition-equal-subset', 'longest-valid-parentheses'] },
  { id: 'multi-dp', name: '多维DP', nameEn: 'Multi-dimensional DP', icon: '🧮', description: '二维状态转移', color: '#6366f1', gradient: 'from-indigo-500/20 to-indigo-600/10', problems: ['unique-paths', 'min-path-sum', 'longest-palindrome-substring', 'longest-common-subsequence', 'edit-distance'] },
  { id: 'technique', name: '技巧', nameEn: 'Techniques', icon: '💡', description: '位运算/数学技巧', color: '#eab308', gradient: 'from-yellow-500/20 to-yellow-600/10', problems: ['single-number', 'majority-element', 'sort-colors', 'next-permutation', 'find-duplicate'] },
  { id: 'graph', name: '图论', nameEn: 'Graph', icon: '🔗', description: 'BFS/DFS/拓扑排序', color: '#ec4899', gradient: 'from-pink-500/20 to-pink-600/10', problems: ['number-of-islands', 'rotting-oranges', 'course-schedule', 'implement-trie'] },
  { id: 'linked-list', name: '链表', nameEn: 'Linked List', icon: '🔗', description: '指针操作/快慢指针', color: '#84cc16', gradient: 'from-lime-500/20 to-lime-600/10', problems: ['intersection-list', 'reverse-list', 'palindrome-list', 'linked-list-cycle', 'linked-list-cycle-ii', 'merge-two-lists', 'add-two-numbers', 'remove-nth-node', 'swap-pairs', 'reverse-k-group', 'copy-random-list', 'sort-list', 'merge-k-lists', 'lru-cache'] },
  { id: 'array', name: '普通数组', nameEn: 'Array', icon: '📋', description: '遍历/原地操作', color: '#0ea5e9', gradient: 'from-sky-500/20 to-sky-600/10', problems: ['max-subarray', 'merge-intervals', 'rotate-array', 'product-except-self', 'first-missing-positive'] },
  { id: 'matrix', name: '矩阵', nameEn: 'Matrix', icon: '⊞', description: '二维数组操作', color: '#d946ef', gradient: 'from-fuchsia-500/20 to-fuchsia-600/10', problems: ['set-matrix-zeroes', 'spiral-matrix', 'rotate-image', 'search-matrix-ii'] },
  { id: 'sorting', name: '排序算法', nameEn: 'Sorting', icon: '↕', description: '冒泡/选择/快排/归并', color: '#f43f5e', gradient: 'from-rose-500/20 to-rose-600/10', problems: ['bubble-sort', 'selection-sort', 'insertion-sort', 'merge-sort', 'quick-sort', 'heap-sort', 'counting-sort', 'radix-sort', 'bucket-sort', 'shell-sort', 'tim-sort', 'sort-colors-algo'] },
  { id: 'searching', name: '查找算法', nameEn: 'Searching', icon: '🔍', description: '线性/二分/哈希查找', color: '#0891b2', gradient: 'from-cyan-600/20 to-cyan-700/10', problems: ['linear-search', 'binary-search-basic', 'binary-search-first', 'binary-search-last', 'binary-search-rotated', 'binary-search-sqrt'] }
];

// 辅助函数
export const getProblemById = (id: string): Problem | undefined => {
  return allProblems.find(p => p.id === id);
};

export const getProblemsByCategory = (categoryId: CategoryType): Problem[] => {
  return allProblems.filter(p => p.category === categoryId);
};

export const getCategoryById = (id: CategoryType): Category | undefined => {
  return categories.find(c => c.id === id);
};
