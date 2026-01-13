// 更多题目数据 - 多维DP、技巧、图论、链表、普通数组、矩阵
import { Problem } from './problems';

export const moreProblems: Problem[] = [
  // ==================== 多维动态规划 (5道) ====================
  {
    id: 'unique-paths',
    title: '不同路径',
    titleEn: 'Unique Paths',
    category: 'multi-dp',
    difficulty: 'medium',
    description: '一个机器人位于一个 m x n 网格的左上角。机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角。问总共有多少条不同的路径？',
    examples: [
      { input: 'm = 3, n = 7', output: '28' },
      { input: 'm = 3, n = 2', output: '3' }
    ],
    thinkingGuide: [
      { step: 1, question: '到达(i,j)有几种方式？', hint: '从哪里来', answer: '只能从上方(i-1,j)或左方(i,j-1)来。' },
      { step: 2, question: '状态转移方程？', hint: '加法原理', answer: 'dp[i][j] = dp[i-1][j] + dp[i][j-1]' }
    ],
    codeSteps: [
      { title: '动态规划', description: '从上方或左方到达', code: 'public int uniquePaths(int m, int n) {\n    int[] dp = new int[n];\n    Arrays.fill(dp, 1);  // 第一行全为1\n    \n    for (int i = 1; i < m; i++) {\n        for (int j = 1; j < n; j++) {\n            dp[j] = dp[j] + dp[j - 1];\n        }\n    }\n    return dp[n - 1];\n}', explanation: '空间优化到一维，dp[j] += dp[j-1]' }
    ],
    interview: {
      approach: '动态规划。dp[i][j] = dp[i-1][j] + dp[i][j-1]，可以空间优化到一维。',
      timeComplexity: 'O(m×n)',
      spaceComplexity: 'O(n)',
      followUp: [
        { question: '如果有障碍物呢？', answer: '障碍物位置dp值为0。' }
      ]
    }
  },
  {
    id: 'min-path-sum',
    title: '最小路径和',
    titleEn: 'Minimum Path Sum',
    category: 'multi-dp',
    difficulty: 'medium',
    description: '给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。',
    examples: [
      { input: 'grid = [[1,3,1],[1,5,1],[4,2,1]]', output: '7', explanation: '路径 1→3→1→1→1' },
      { input: 'grid = [[1,2,3],[4,5,6]]', output: '12' }
    ],
    thinkingGuide: [
      { step: 1, question: '到达(i,j)的最小路径和？', hint: '取最小', answer: 'dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]' },
      { step: 2, question: '边界条件？', hint: '第一行和第一列', answer: '第一行只能从左边来，第一列只能从上边来。' }
    ],
    codeSteps: [
      { title: '动态规划', description: '取上方和左方的最小值', code: 'public int minPathSum(int[][] grid) {\n    int m = grid.length, n = grid[0].length;\n    int[] dp = new int[n];\n    dp[0] = grid[0][0];\n    \n    // 初始化第一行\n    for (int j = 1; j < n; j++) {\n        dp[j] = dp[j - 1] + grid[0][j];\n    }\n    \n    for (int i = 1; i < m; i++) {\n        dp[0] += grid[i][0];  // 第一列\n        for (int j = 1; j < n; j++) {\n            dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];\n        }\n    }\n    return dp[n - 1];\n}', explanation: '空间优化到一维' }
    ],
    interview: {
      approach: '动态规划。dp[i][j] = min(上方, 左方) + grid[i][j]。',
      timeComplexity: 'O(m×n)',
      spaceComplexity: 'O(n)',
      followUp: [
        { question: '能否原地修改？', answer: '可以直接在grid上修改，空间O(1)。' }
      ]
    }
  },
  {
    id: 'longest-palindrome-substring',
    title: '最长回文子串',
    titleEn: 'Longest Palindromic Substring',
    category: 'multi-dp',
    difficulty: 'medium',
    description: '给你一个字符串 s，找到 s 中最长的回文子串。',
    examples: [
      { input: 's = "babad"', output: '"bab" 或 "aba"' },
      { input: 's = "cbbd"', output: '"bb"' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何判断回文？', hint: '首尾相等且中间是回文', answer: 's[i]==s[j] 且 s[i+1:j-1]是回文。' },
      { step: 2, question: '另一种方法？', hint: '中心扩展', answer: '从每个位置向两边扩展，找最长回文。' }
    ],
    codeSteps: [
      { title: '中心扩展法', description: '从每个中心向两边扩展', code: 'public String longestPalindrome(String s) {\n    int start = 0, maxLen = 1;\n    \n    for (int i = 0; i < s.length(); i++) {\n        int len1 = expand(s, i, i);      // 奇数长度\n        int len2 = expand(s, i, i + 1);  // 偶数长度\n        int len = Math.max(len1, len2);\n        if (len > maxLen) {\n            maxLen = len;\n            start = i - (len - 1) / 2;\n        }\n    }\n    return s.substring(start, start + maxLen);\n}\n\nprivate int expand(String s, int left, int right) {\n    while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {\n        left--;\n        right++;\n    }\n    return right - left - 1;\n}', explanation: '每个位置作为中心，向两边扩展' }
    ],
    interview: {
      approach: '中心扩展法。枚举每个位置作为中心，向两边扩展找最长回文。注意奇偶长度。',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: 'Manacher算法？', answer: '利用已知回文信息，可以做到O(n)。' }
      ]
    }
  },
  {
    id: 'longest-common-subsequence',
    title: '最长公共子序列',
    titleEn: 'Longest Common Subsequence',
    category: 'multi-dp',
    difficulty: 'medium',
    description: '给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。如果不存在公共子序列，返回 0。',
    examples: [
      { input: 'text1 = "abcde", text2 = "ace"', output: '3', explanation: 'LCS是"ace"' },
      { input: 'text1 = "abc", text2 = "def"', output: '0' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何定义状态？', hint: '两个字符串的前缀', answer: 'dp[i][j]表示text1前i个字符和text2前j个字符的LCS长度。' },
      { step: 2, question: '状态转移方程？', hint: '最后一个字符是否相等', answer: '相等则dp[i][j]=dp[i-1][j-1]+1，否则取max(dp[i-1][j], dp[i][j-1])' }
    ],
    codeSteps: [
      { title: '动态规划', description: '比较最后一个字符', code: 'public int longestCommonSubsequence(String text1, String text2) {\n    int m = text1.length(), n = text2.length();\n    int[][] dp = new int[m + 1][n + 1];\n    \n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (text1.charAt(i - 1) == text2.charAt(j - 1)) {\n                dp[i][j] = dp[i - 1][j - 1] + 1;\n            } else {\n                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n            }\n        }\n    }\n    return dp[m][n];\n}', explanation: '字符相等+1，否则取上方或左方的最大值' }
    ],
    interview: {
      approach: '动态规划。dp[i][j]表示两个前缀的LCS长度，根据最后一个字符是否相等转移。',
      timeComplexity: 'O(m×n)',
      spaceComplexity: 'O(m×n)，可优化到O(n)',
      followUp: [
        { question: '如何输出LCS本身？', answer: '从dp[m][n]回溯，相等时加入结果。' }
      ]
    }
  },
  {
    id: 'edit-distance',
    title: '编辑距离',
    titleEn: 'Edit Distance',
    category: 'multi-dp',
    difficulty: 'medium',
    description: '给你两个单词 word1 和 word2，请返回将 word1 转换成 word2 所使用的最少操作数。你可以对一个单词进行如下三种操作：插入一个字符、删除一个字符、替换一个字符。',
    examples: [
      { input: 'word1 = "horse", word2 = "ros"', output: '3' },
      { input: 'word1 = "intention", word2 = "execution"', output: '5' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何定义状态？', hint: '两个前缀', answer: 'dp[i][j]表示word1前i个字符转换为word2前j个字符的最少操作数。' },
      { step: 2, question: '有哪些操作？', hint: '插入、删除、替换', answer: '插入对应dp[i][j-1]+1，删除对应dp[i-1][j]+1，替换对应dp[i-1][j-1]+1。' }
    ],
    codeSteps: [
      { title: '动态规划', description: '三种操作取最小', code: 'public int minDistance(String word1, String word2) {\n    int m = word1.length(), n = word2.length();\n    int[][] dp = new int[m + 1][n + 1];\n    \n    // 初始化边界\n    for (int i = 0; i <= m; i++) dp[i][0] = i;\n    for (int j = 0; j <= n; j++) dp[0][j] = j;\n    \n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {\n                dp[i][j] = dp[i - 1][j - 1];\n            } else {\n                dp[i][j] = Math.min(dp[i - 1][j - 1],\n                           Math.min(dp[i - 1][j], dp[i][j - 1])) + 1;\n            }\n        }\n    }\n    return dp[m][n];\n}', explanation: '字符相等不需要操作，否则三种操作取最小' }
    ],
    interview: {
      approach: '动态规划。dp[i][j]表示编辑距离，三种操作对应三个方向的转移。',
      timeComplexity: 'O(m×n)',
      spaceComplexity: 'O(m×n)',
      followUp: [
        { question: '如何输出操作序列？', answer: '记录每个状态的来源，回溯输出。' }
      ]
    }
  },

  // ==================== 技巧 (5道) ====================
  {
    id: 'single-number',
    title: '只出现一次的数字',
    titleEn: 'Single Number',
    category: 'technique',
    difficulty: 'easy',
    description: '给你一个非空整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。',
    examples: [
      { input: 'nums = [2,2,1]', output: '1' },
      { input: 'nums = [4,1,2,1,2]', output: '4' }
    ],
    thinkingGuide: [
      { step: 1, question: '什么运算可以消除成对的数？', hint: '异或', answer: 'a ^ a = 0，a ^ 0 = a，异或可以消除成对出现的数。' },
      { step: 2, question: '异或有什么性质？', hint: '交换律和结合律', answer: '异或满足交换律和结合律，顺序不影响结果。' }
    ],
    codeSteps: [
      { title: '异或运算', description: '所有数异或', code: 'public int singleNumber(int[] nums) {\n    int result = 0;\n    for (int num : nums) {\n        result ^= num;\n    }\n    return result;\n}', explanation: '成对的数异或为0，最后剩下只出现一次的数' }
    ],
    interview: {
      approach: '异或运算。a^a=0，a^0=a，所有数异或后成对的数消除，剩下只出现一次的数。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '如果有两个数只出现一次？', answer: '先全部异或得到a^b，找到不同的位，分组异或。' }
      ]
    }
  },
  {
    id: 'majority-element',
    title: '多数元素',
    titleEn: 'Majority Element',
    category: 'technique',
    difficulty: 'easy',
    description: '给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数大于 ⌊n/2⌋ 的元素。',
    examples: [
      { input: 'nums = [3,2,3]', output: '3' },
      { input: 'nums = [2,2,1,1,1,2,2]', output: '2' }
    ],
    thinkingGuide: [
      { step: 1, question: '有什么巧妙的算法？', hint: '投票', answer: 'Boyer-Moore投票算法：多数元素的票数一定能抵消其他所有元素。' },
      { step: 2, question: '如何实现？', hint: '计数器', answer: '维护候选人和计数器，相同+1，不同-1，为0时换候选人。' }
    ],
    codeSteps: [
      { title: 'Boyer-Moore投票', description: '抵消法', code: 'public int majorityElement(int[] nums) {\n    int candidate = nums[0];\n    int count = 1;\n    \n    for (int i = 1; i < nums.length; i++) {\n        if (count == 0) {\n            candidate = nums[i];\n            count = 1;\n        } else if (nums[i] == candidate) {\n            count++;\n        } else {\n            count--;\n        }\n    }\n    return candidate;\n}', explanation: '多数元素的票数一定能抵消其他所有元素' }
    ],
    interview: {
      approach: 'Boyer-Moore投票算法。多数元素出现次数超过一半，其票数一定能抵消其他所有元素。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '如果要找出现次数超过n/3的元素？', answer: '最多两个，维护两个候选人。' }
      ]
    }
  },
  {
    id: 'sort-colors',
    title: '颜色分类',
    titleEn: 'Sort Colors',
    category: 'technique',
    difficulty: 'medium',
    description: '给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。我们使用整数 0、1 和 2 分别表示红色、白色和蓝色。',
    examples: [
      { input: 'nums = [2,0,2,1,1,0]', output: '[0,0,1,1,2,2]' },
      { input: 'nums = [2,0,1]', output: '[0,1,2]' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何一次遍历完成？', hint: '三指针', answer: '用三个指针：p0指向0的右边界，p2指向2的左边界，curr遍历数组。' },
      { step: 2, question: '如何交换？', hint: '分情况讨论', answer: '遇到0和p0交换，遇到2和p2交换，遇到1跳过。' }
    ],
    codeSteps: [
      { title: '荷兰国旗问题', description: '三指针分区', code: 'public void sortColors(int[] nums) {\n    int p0 = 0, p2 = nums.length - 1;\n    int curr = 0;\n    \n    while (curr <= p2) {\n        if (nums[curr] == 0) {\n            swap(nums, curr, p0);\n            p0++;\n            curr++;\n        } else if (nums[curr] == 2) {\n            swap(nums, curr, p2);\n            p2--;\n            // curr不动，因为交换来的数还没检查\n        } else {\n            curr++;\n        }\n    }\n}\n\nprivate void swap(int[] nums, int i, int j) {\n    int temp = nums[i];\n    nums[i] = nums[j];\n    nums[j] = temp;\n}', explanation: '0放左边，2放右边，1自然在中间' }
    ],
    interview: {
      approach: '荷兰国旗问题。三指针：p0指向0的右边界，p2指向2的左边界，curr遍历。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '为什么和p2交换后curr不动？', answer: '交换来的数还没检查，可能是0或2。' }
      ]
    }
  },
  {
    id: 'next-permutation',
    title: '下一个排列',
    titleEn: 'Next Permutation',
    category: 'technique',
    difficulty: 'medium',
    description: '整数数组的一个排列就是将其所有成员以序列或线性顺序排列。实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。',
    examples: [
      { input: 'nums = [1,2,3]', output: '[1,3,2]' },
      { input: 'nums = [3,2,1]', output: '[1,2,3]' }
    ],
    thinkingGuide: [
      { step: 1, question: '下一个排列的规律是什么？', hint: '从后往前找', answer: '从后往前找第一个下降的位置i，然后找i后面比nums[i]大的最小数交换，最后反转i后面的部分。' },
      { step: 2, question: '为什么要反转？', hint: '变成最小', answer: '交换后i后面仍然是降序，反转变成升序即最小。' }
    ],
    codeSteps: [
      { title: '找下一个排列', description: '三步走', code: 'public void nextPermutation(int[] nums) {\n    int n = nums.length;\n    int i = n - 2;\n    \n    // 1. 从后往前找第一个下降的位置\n    while (i >= 0 && nums[i] >= nums[i + 1]) {\n        i--;\n    }\n    \n    if (i >= 0) {\n        // 2. 找i后面比nums[i]大的最小数\n        int j = n - 1;\n        while (nums[j] <= nums[i]) {\n            j--;\n        }\n        swap(nums, i, j);\n    }\n    \n    // 3. 反转i后面的部分\n    reverse(nums, i + 1, n - 1);\n}', explanation: '找下降点，交换，反转' }
    ],
    interview: {
      approach: '三步走：从后往前找第一个下降的位置i，找i后面比nums[i]大的最小数交换，反转i后面的部分。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '如果要找上一个排列？', answer: '反过来：找第一个上升的位置，找比它小的最大数交换，反转。' }
      ]
    }
  },
  {
    id: 'find-duplicate',
    title: '寻找重复数',
    titleEn: 'Find the Duplicate Number',
    category: 'technique',
    difficulty: 'medium',
    description: '给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。假设 nums 只有一个重复的整数，返回这个重复的数。你设计的解决方案必须不修改数组 nums 且只用常量级 O(1) 的额外空间。',
    examples: [
      { input: 'nums = [1,3,4,2,2]', output: '2' },
      { input: 'nums = [3,1,3,4,2]', output: '3' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何不修改数组且O(1)空间？', hint: '快慢指针', answer: '把数组看成链表，nums[i]是下一个节点的索引，重复数就是环的入口。' },
      { step: 2, question: '为什么会有环？', hint: '鸽巢原理', answer: 'n+1个数在[1,n]范围内，必有重复，重复的数会被多个索引指向，形成环。' }
    ],
    codeSteps: [
      { title: '快慢指针', description: '找环的入口', code: 'public int findDuplicate(int[] nums) {\n    int slow = nums[0];\n    int fast = nums[0];\n    \n    // 找相遇点\n    do {\n        slow = nums[slow];\n        fast = nums[nums[fast]];\n    } while (slow != fast);\n    \n    // 找环入口\n    slow = nums[0];\n    while (slow != fast) {\n        slow = nums[slow];\n        fast = nums[fast];\n    }\n    return slow;\n}', explanation: '把数组看成链表，重复数是环的入口' }
    ],
    interview: {
      approach: '快慢指针找环。把数组看成链表，nums[i]指向下一个节点，重复数是环的入口。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '还有其他方法吗？', answer: '二分查找：统计<=mid的数的个数，判断重复数在哪半边。' }
      ]
    }
  },

  // ==================== 图论 (4道) ====================
  {
    id: 'number-of-islands',
    title: '岛屿数量',
    titleEn: 'Number of Islands',
    category: 'graph',
    difficulty: 'medium',
    description: '给你一个由 \'1\'（陆地）和 \'0\'（水）组成的的二维网格，请你计算网格中岛屿的数量。岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。',
    examples: [
      { input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', output: '1' },
      { input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', output: '3' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何统计岛屿数量？', hint: 'DFS/BFS', answer: '遍历网格，遇到陆地就DFS/BFS标记整个岛屿，岛屿数+1。' },
      { step: 2, question: '如何避免重复访问？', hint: '标记', answer: '访问过的陆地标记为\'0\'或用visited数组。' }
    ],
    codeSteps: [
      { title: 'DFS遍历', description: '标记整个岛屿', code: 'public int numIslands(char[][] grid) {\n    int count = 0;\n    for (int i = 0; i < grid.length; i++) {\n        for (int j = 0; j < grid[0].length; j++) {\n            if (grid[i][j] == \'1\') {\n                dfs(grid, i, j);\n                count++;\n            }\n        }\n    }\n    return count;\n}\n\nprivate void dfs(char[][] grid, int i, int j) {\n    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == \'0\') {\n        return;\n    }\n    grid[i][j] = \'0\';  // 标记已访问\n    dfs(grid, i + 1, j);\n    dfs(grid, i - 1, j);\n    dfs(grid, i, j + 1);\n    dfs(grid, i, j - 1);\n}', explanation: '遇到陆地就DFS标记整个岛屿' }
    ],
    interview: {
      approach: 'DFS/BFS。遍历网格，遇到陆地就DFS标记整个岛屿，计数+1。',
      timeComplexity: 'O(m×n)',
      spaceComplexity: 'O(m×n)，递归栈',
      followUp: [
        { question: '如何用并查集解决？', answer: '将相邻陆地合并，最后统计集合数。' }
      ]
    }
  },
  {
    id: 'rotting-oranges',
    title: '腐烂的橘子',
    titleEn: 'Rotting Oranges',
    category: 'graph',
    difficulty: 'medium',
    description: '在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：0 代表空单元格；1 代表新鲜橘子；2 代表腐烂的橘子。每分钟，腐烂的橘子周围 4 个方向上相邻的新鲜橘子都会腐烂。返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。',
    examples: [
      { input: 'grid = [[2,1,1],[1,1,0],[0,1,1]]', output: '4' },
      { input: 'grid = [[2,1,1],[0,1,1],[1,0,1]]', output: '-1' }
    ],
    thinkingGuide: [
      { step: 1, question: '这是什么类型的问题？', hint: '多源BFS', answer: '多源BFS，所有腐烂橘子同时开始扩散。' },
      { step: 2, question: '如何统计时间？', hint: '层数', answer: 'BFS的层数就是时间。' }
    ],
    codeSteps: [
      { title: '多源BFS', description: '所有腐烂橘子同时扩散', code: 'public int orangesRotting(int[][] grid) {\n    int m = grid.length, n = grid[0].length;\n    Queue<int[]> queue = new LinkedList<>();\n    int fresh = 0;\n    \n    // 初始化：所有腐烂橘子入队，统计新鲜橘子\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < n; j++) {\n            if (grid[i][j] == 2) queue.offer(new int[]{i, j});\n            else if (grid[i][j] == 1) fresh++;\n        }\n    }\n    \n    int minutes = 0;\n    int[][] dirs = {{1,0},{-1,0},{0,1},{0,-1}};\n    \n    while (!queue.isEmpty() && fresh > 0) {\n        int size = queue.size();\n        for (int i = 0; i < size; i++) {\n            int[] pos = queue.poll();\n            for (int[] dir : dirs) {\n                int ni = pos[0] + dir[0];\n                int nj = pos[1] + dir[1];\n                if (ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] == 1) {\n                    grid[ni][nj] = 2;\n                    fresh--;\n                    queue.offer(new int[]{ni, nj});\n                }\n            }\n        }\n        minutes++;\n    }\n    return fresh == 0 ? minutes : -1;\n}', explanation: '多源BFS，层数就是时间' }
    ],
    interview: {
      approach: '多源BFS。所有腐烂橘子同时入队，逐层扩散，层数就是时间。',
      timeComplexity: 'O(m×n)',
      spaceComplexity: 'O(m×n)',
      followUp: [
        { question: '为什么用BFS而不是DFS？', answer: 'BFS可以保证最短时间，DFS不行。' }
      ]
    }
  },
  {
    id: 'course-schedule',
    title: '课程表',
    titleEn: 'Course Schedule',
    category: 'graph',
    difficulty: 'medium',
    description: '你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。在选修某些课程之前需要一些先修课程。先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则必须先学习课程 bi 。请你判断是否可能完成所有课程的学习？',
    examples: [
      { input: 'numCourses = 2, prerequisites = [[1,0]]', output: 'true' },
      { input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]', output: 'false', explanation: '存在循环依赖' }
    ],
    thinkingGuide: [
      { step: 1, question: '这是什么问题？', hint: '拓扑排序', answer: '判断有向图是否有环，即能否进行拓扑排序。' },
      { step: 2, question: '如何检测环？', hint: '入度', answer: 'BFS拓扑排序：从入度为0的节点开始，每次删除一个节点并更新入度，最后检查是否所有节点都被删除。' }
    ],
    codeSteps: [
      { title: 'BFS拓扑排序', description: '检测有向图是否有环', code: 'public boolean canFinish(int numCourses, int[][] prerequisites) {\n    int[] indegree = new int[numCourses];\n    List<List<Integer>> graph = new ArrayList<>();\n    for (int i = 0; i < numCourses; i++) graph.add(new ArrayList<>());\n    \n    // 建图并计算入度\n    for (int[] pre : prerequisites) {\n        graph.get(pre[1]).add(pre[0]);\n        indegree[pre[0]]++;\n    }\n    \n    // 入度为0的节点入队\n    Queue<Integer> queue = new LinkedList<>();\n    for (int i = 0; i < numCourses; i++) {\n        if (indegree[i] == 0) queue.offer(i);\n    }\n    \n    int count = 0;\n    while (!queue.isEmpty()) {\n        int course = queue.poll();\n        count++;\n        for (int next : graph.get(course)) {\n            if (--indegree[next] == 0) {\n                queue.offer(next);\n            }\n        }\n    }\n    return count == numCourses;\n}', explanation: '拓扑排序，如果所有节点都能被删除则无环' }
    ],
    interview: {
      approach: 'BFS拓扑排序。从入度为0的节点开始，每次删除一个节点并更新入度，最后检查是否所有节点都被删除。',
      timeComplexity: 'O(V+E)',
      spaceComplexity: 'O(V+E)',
      followUp: [
        { question: '如何输出一个可行的学习顺序？', answer: '记录BFS的访问顺序。' }
      ]
    }
  },
  {
    id: 'implement-trie',
    title: '实现 Trie (前缀树)',
    titleEn: 'Implement Trie (Prefix Tree)',
    category: 'graph',
    difficulty: 'medium',
    description: 'Trie（发音类似 "try"）或者说前缀树是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。请你实现 Trie 类。',
    examples: [
      { input: '["Trie", "insert", "search", "search", "startsWith", "insert", "search"]\n[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]', output: '[null, null, true, false, true, null, true]' }
    ],
    thinkingGuide: [
      { step: 1, question: 'Trie的结构是什么？', hint: '节点和子节点', answer: '每个节点包含子节点数组（26个字母）和是否是单词结尾的标记。' },
      { step: 2, question: '如何实现插入和查找？', hint: '逐字符遍历', answer: '插入时逐字符创建节点，查找时逐字符遍历。' }
    ],
    codeSteps: [
      { title: '定义Trie节点', description: '子节点数组和结尾标记', code: 'class Trie {\n    private Trie[] children;\n    private boolean isEnd;\n    \n    public Trie() {\n        children = new Trie[26];\n        isEnd = false;\n    }\n}', explanation: '26个子节点对应26个字母' },
      { title: '实现插入和查找', description: '逐字符操作', code: 'public void insert(String word) {\n    Trie node = this;\n    for (char c : word.toCharArray()) {\n        int index = c - \'a\';\n        if (node.children[index] == null) {\n            node.children[index] = new Trie();\n        }\n        node = node.children[index];\n    }\n    node.isEnd = true;\n}\n\npublic boolean search(String word) {\n    Trie node = searchPrefix(word);\n    return node != null && node.isEnd;\n}\n\npublic boolean startsWith(String prefix) {\n    return searchPrefix(prefix) != null;\n}\n\nprivate Trie searchPrefix(String prefix) {\n    Trie node = this;\n    for (char c : prefix.toCharArray()) {\n        int index = c - \'a\';\n        if (node.children[index] == null) return null;\n        node = node.children[index];\n    }\n    return node;\n}', explanation: '插入时创建节点，查找时遍历节点' }
    ],
    interview: {
      approach: 'Trie树。每个节点包含26个子节点和结尾标记，插入和查找都是O(m)，m是字符串长度。',
      timeComplexity: 'O(m)，m是字符串长度',
      spaceComplexity: 'O(字符串总长度)',
      followUp: [
        { question: '如何支持通配符？', answer: 'DFS遍历所有可能的子节点。' }
      ]
    }
  },

  // ==================== 链表 (14道) ====================
  {
    id: 'intersection-of-two-linked-lists',
    title: '相交链表',
    titleEn: 'Intersection of Two Linked Lists',
    category: 'linked-list',
    difficulty: 'easy',
    description: '给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。',
    examples: [
      { input: 'listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], 相交节点值为 8', output: '8' },
      { input: 'listA = [2,6,4], listB = [1,5], 不相交', output: 'null' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何让两个指针同时到达相交点？', hint: '走过的路程相同', answer: '让两个指针分别走完两条链表，这样走过的总路程相同。' },
      { step: 2, question: '具体怎么走？', hint: '切换链表', answer: 'A走完走B，B走完走A，如果相交则会在交点相遇。' }
    ],
    codeSteps: [
      { title: '双指针', description: '走过的路程相同', code: 'public ListNode getIntersectionNode(ListNode headA, ListNode headB) {\n    ListNode pA = headA, pB = headB;\n    while (pA != pB) {\n        pA = (pA == null) ? headB : pA.next;\n        pB = (pB == null) ? headA : pB.next;\n    }\n    return pA;\n}', explanation: 'A走完走B，B走完走A，相交则在交点相遇，不相交则同时为null' }
    ],
    interview: {
      approach: '双指针。A走完走B，B走完走A，走过的总路程相同，相交则在交点相遇。',
      timeComplexity: 'O(m+n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '为什么这样能找到交点？', answer: 'a+c+b = b+c+a，c是公共部分，所以会在交点相遇。' }
      ]
    }
  },
  {
    id: 'reverse-linked-list',
    title: '反转链表',
    titleEn: 'Reverse Linked List',
    category: 'linked-list',
    difficulty: 'easy',
    description: '给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。',
    examples: [
      { input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]' },
      { input: 'head = [1,2]', output: '[2,1]' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何反转指针？', hint: '保存下一个节点', answer: '遍历时保存下一个节点，然后将当前节点指向前一个节点。' },
      { step: 2, question: '需要几个指针？', hint: '前中后', answer: '需要prev、curr、next三个指针。' }
    ],
    codeSteps: [
      { title: '迭代反转', description: '三指针', code: 'public ListNode reverseList(ListNode head) {\n    ListNode prev = null;\n    ListNode curr = head;\n    \n    while (curr != null) {\n        ListNode next = curr.next;  // 保存下一个\n        curr.next = prev;           // 反转指针\n        prev = curr;                // 移动prev\n        curr = next;                // 移动curr\n    }\n    return prev;\n}', explanation: '保存下一个，反转指针，移动指针' }
    ],
    interview: {
      approach: '迭代。用三个指针prev、curr、next，遍历时反转指针方向。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '如何递归实现？', answer: 'reverseList(head.next)返回新头，head.next.next = head, head.next = null。' }
      ]
    }
  },
  {
    id: 'palindrome-linked-list',
    title: '回文链表',
    titleEn: 'Palindrome Linked List',
    category: 'linked-list',
    difficulty: 'easy',
    description: '给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。',
    examples: [
      { input: 'head = [1,2,2,1]', output: 'true' },
      { input: 'head = [1,2]', output: 'false' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何O(1)空间判断？', hint: '反转后半部分', answer: '找到中点，反转后半部分，然后比较。' },
      { step: 2, question: '如何找中点？', hint: '快慢指针', answer: '快指针走两步，慢指针走一步，快指针到末尾时慢指针在中点。' }
    ],
    codeSteps: [
      { title: '快慢指针+反转', description: '找中点，反转后半部分，比较', code: 'public boolean isPalindrome(ListNode head) {\n    // 找中点\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n    }\n    \n    // 反转后半部分\n    ListNode prev = null;\n    while (slow != null) {\n        ListNode next = slow.next;\n        slow.next = prev;\n        prev = slow;\n        slow = next;\n    }\n    \n    // 比较\n    ListNode left = head, right = prev;\n    while (right != null) {\n        if (left.val != right.val) return false;\n        left = left.next;\n        right = right.next;\n    }\n    return true;\n}', explanation: '找中点，反转后半部分，比较两半' }
    ],
    interview: {
      approach: '快慢指针找中点，反转后半部分，然后比较。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '如何恢复链表？', answer: '比较完后再反转一次后半部分。' }
      ]
    }
  },
  {
    id: 'linked-list-cycle',
    title: '环形链表',
    titleEn: 'Linked List Cycle',
    category: 'linked-list',
    difficulty: 'easy',
    description: '给你一个链表的头节点 head ，判断链表中是否有环。',
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: 'true' },
      { input: 'head = [1], pos = -1', output: 'false' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何检测环？', hint: '快慢指针', answer: '快指针走两步，慢指针走一步，如果有环则一定会相遇。' },
      { step: 2, question: '为什么一定会相遇？', hint: '追及问题', answer: '快指针每次比慢指针多走一步，在环中一定会追上。' }
    ],
    codeSteps: [
      { title: '快慢指针', description: '检测是否有环', code: 'public boolean hasCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) return true;\n    }\n    return false;\n}', explanation: '快慢指针，有环则相遇' }
    ],
    interview: {
      approach: '快慢指针。快指针走两步，慢指针走一步，有环则一定会相遇。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '如何找到环的入口？', answer: '相遇后，一个指针从头开始，两个指针同速前进，再次相遇点就是入口。' }
      ]
    }
  },
  {
    id: 'linked-list-cycle-ii',
    title: '环形链表 II',
    titleEn: 'Linked List Cycle II',
    category: 'linked-list',
    difficulty: 'medium',
    description: '给定一个链表的头节点 head ，返回链表开始入环的第一个节点。如果链表无环，则返回 null。',
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: '返回索引为 1 的链表节点' },
      { input: 'head = [1], pos = -1', output: 'null' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何找环的入口？', hint: '数学推导', answer: '设头到入口距离a，入口到相遇点距离b，相遇点到入口距离c。快指针走a+b+c+b，慢指针走a+b，2(a+b)=a+b+c+b，所以a=c。' },
      { step: 2, question: '如何利用这个结论？', hint: '两个指针同速前进', answer: '相遇后，一个指针从头开始，两个指针同速前进，再次相遇点就是入口。' }
    ],
    codeSteps: [
      { title: '快慢指针找入口', description: '数学推导', code: 'public ListNode detectCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    \n    // 找相遇点\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) {\n            // 找入口\n            ListNode ptr = head;\n            while (ptr != slow) {\n                ptr = ptr.next;\n                slow = slow.next;\n            }\n            return ptr;\n        }\n    }\n    return null;\n}', explanation: '相遇后，从头和相遇点同速前进，再次相遇就是入口' }
    ],
    interview: {
      approach: '快慢指针。相遇后，从头和相遇点同速前进，再次相遇就是入口。数学推导：a=c。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '为什么a=c？', answer: '快指针走2(a+b)，慢指针走a+b，快指针多走的是环的长度b+c，所以a+b+b+c=2(a+b)，即a=c。' }
      ]
    }
  },
  {
    id: 'merge-two-sorted-lists',
    title: '合并两个有序链表',
    titleEn: 'Merge Two Sorted Lists',
    category: 'linked-list',
    difficulty: 'easy',
    description: '将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。',
    examples: [
      { input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]' },
      { input: 'list1 = [], list2 = [0]', output: '[0]' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何合并？', hint: '比较头节点', answer: '每次比较两个链表的头节点，取较小的接到结果链表后面。' },
      { step: 2, question: '如何简化边界处理？', hint: '哨兵节点', answer: '使用哨兵节点作为结果链表的头，避免处理空链表的特殊情况。' }
    ],
    codeSteps: [
      { title: '迭代合并', description: '比较头节点', code: 'public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n    ListNode dummy = new ListNode(0);\n    ListNode curr = dummy;\n    \n    while (list1 != null && list2 != null) {\n        if (list1.val <= list2.val) {\n            curr.next = list1;\n            list1 = list1.next;\n        } else {\n            curr.next = list2;\n            list2 = list2.next;\n        }\n        curr = curr.next;\n    }\n    curr.next = (list1 != null) ? list1 : list2;\n    return dummy.next;\n}', explanation: '每次取较小的节点，最后接上剩余部分' }
    ],
    interview: {
      approach: '迭代。使用哨兵节点，每次比较两个链表头节点，取较小的接到结果后面。',
      timeComplexity: 'O(m+n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '如何递归实现？', answer: 'return list1.val < list2.val ? (list1.next = merge(list1.next, list2), list1) : ...' }
      ]
    }
  },
  {
    id: 'add-two-numbers',
    title: '两数相加',
    titleEn: 'Add Two Numbers',
    category: 'linked-list',
    difficulty: 'medium',
    description: '给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。请你将两个数相加，并以相同形式返回一个表示和的链表。',
    examples: [
      { input: 'l1 = [2,4,3], l2 = [5,6,4]', output: '[7,0,8]', explanation: '342 + 465 = 807' },
      { input: 'l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]', output: '[8,9,9,9,0,0,0,1]' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何处理进位？', hint: '保存进位', answer: '用变量保存进位，每次计算当前位时加上进位。' },
      { step: 2, question: '如何处理长度不同？', hint: '补0', answer: '较短的链表结束后，当作0继续计算。' }
    ],
    codeSteps: [
      { title: '模拟加法', description: '处理进位', code: 'public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0);\n    ListNode curr = dummy;\n    int carry = 0;\n    \n    while (l1 != null || l2 != null || carry != 0) {\n        int sum = carry;\n        if (l1 != null) {\n            sum += l1.val;\n            l1 = l1.next;\n        }\n        if (l2 != null) {\n            sum += l2.val;\n            l2 = l2.next;\n        }\n        carry = sum / 10;\n        curr.next = new ListNode(sum % 10);\n        curr = curr.next;\n    }\n    return dummy.next;\n}', explanation: '模拟加法，处理进位' }
    ],
    interview: {
      approach: '模拟加法。遍历两个链表，逐位相加，处理进位。',
      timeComplexity: 'O(max(m,n))',
      spaceComplexity: 'O(max(m,n))',
      followUp: [
        { question: '如果数字是正序存储的？', answer: '先反转链表，或者用栈。' }
      ]
    }
  },
  {
    id: 'remove-nth-from-end',
    title: '删除链表的倒数第 N 个结点',
    titleEn: 'Remove Nth Node From End of List',
    category: 'linked-list',
    difficulty: 'medium',
    description: '给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。',
    examples: [
      { input: 'head = [1,2,3,4,5], n = 2', output: '[1,2,3,5]' },
      { input: 'head = [1], n = 1', output: '[]' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何一次遍历找到倒数第n个？', hint: '快慢指针', answer: '快指针先走n步，然后快慢指针同时走，快指针到末尾时慢指针在倒数第n个的前一个。' },
      { step: 2, question: '如何处理删除头节点？', hint: '哨兵节点', answer: '使用哨兵节点，统一处理。' }
    ],
    codeSteps: [
      { title: '快慢指针', description: '一次遍历', code: 'public ListNode removeNthFromEnd(ListNode head, int n) {\n    ListNode dummy = new ListNode(0, head);\n    ListNode fast = dummy, slow = dummy;\n    \n    // 快指针先走n+1步\n    for (int i = 0; i <= n; i++) {\n        fast = fast.next;\n    }\n    \n    // 同时走\n    while (fast != null) {\n        fast = fast.next;\n        slow = slow.next;\n    }\n    \n    // 删除\n    slow.next = slow.next.next;\n    return dummy.next;\n}', explanation: '快指针先走n+1步，然后同时走，慢指针停在要删除节点的前一个' }
    ],
    interview: {
      approach: '快慢指针。快指针先走n+1步，然后同时走，快指针到末尾时慢指针在要删除节点的前一个。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '为什么先走n+1步？', answer: '为了让慢指针停在要删除节点的前一个，方便删除。' }
      ]
    }
  },
  {
    id: 'swap-nodes-in-pairs',
    title: '两两交换链表中的节点',
    titleEn: 'Swap Nodes in Pairs',
    category: 'linked-list',
    difficulty: 'medium',
    description: '给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。',
    examples: [
      { input: 'head = [1,2,3,4]', output: '[2,1,4,3]' },
      { input: 'head = [1]', output: '[1]' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何交换两个节点？', hint: '修改指针', answer: '需要修改三个指针：前一个节点指向第二个，第一个指向第三个，第二个指向第一个。' },
      { step: 2, question: '如何处理边界？', hint: '哨兵节点', answer: '使用哨兵节点，统一处理头节点的交换。' }
    ],
    codeSteps: [
      { title: '迭代交换', description: '修改指针', code: 'public ListNode swapPairs(ListNode head) {\n    ListNode dummy = new ListNode(0, head);\n    ListNode prev = dummy;\n    \n    while (prev.next != null && prev.next.next != null) {\n        ListNode first = prev.next;\n        ListNode second = prev.next.next;\n        \n        // 交换\n        prev.next = second;\n        first.next = second.next;\n        second.next = first;\n        \n        prev = first;\n    }\n    return dummy.next;\n}', explanation: '修改三个指针完成交换' }
    ],
    interview: {
      approach: '迭代。使用哨兵节点，每次交换两个节点，修改三个指针。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '如何递归实现？', answer: 'swapPairs(head.next.next)返回后续结果，然后交换head和head.next。' }
      ]
    }
  },
  {
    id: 'reverse-nodes-in-k-group',
    title: 'K 个一组翻转链表',
    titleEn: 'Reverse Nodes in k-Group',
    category: 'linked-list',
    difficulty: 'hard',
    description: '给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。',
    examples: [
      { input: 'head = [1,2,3,4,5], k = 2', output: '[2,1,4,3,5]' },
      { input: 'head = [1,2,3,4,5], k = 3', output: '[3,2,1,4,5]' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何翻转一组？', hint: '反转链表', answer: '先检查是否有k个节点，然后反转这k个节点。' },
      { step: 2, question: '如何连接各组？', hint: '记录头尾', answer: '记录每组翻转前的头（翻转后的尾）和翻转后的头，正确连接。' }
    ],
    codeSteps: [
      { title: 'K个一组翻转', description: '分组反转', code: 'public ListNode reverseKGroup(ListNode head, int k) {\n    ListNode dummy = new ListNode(0, head);\n    ListNode prevGroupEnd = dummy;\n    \n    while (true) {\n        // 检查是否有k个节点\n        ListNode kth = prevGroupEnd;\n        for (int i = 0; i < k; i++) {\n            kth = kth.next;\n            if (kth == null) return dummy.next;\n        }\n        \n        ListNode groupStart = prevGroupEnd.next;\n        ListNode nextGroupStart = kth.next;\n        \n        // 反转k个节点\n        ListNode prev = nextGroupStart;\n        ListNode curr = groupStart;\n        while (curr != nextGroupStart) {\n            ListNode next = curr.next;\n            curr.next = prev;\n            prev = curr;\n            curr = next;\n        }\n        \n        // 连接\n        prevGroupEnd.next = kth;\n        prevGroupEnd = groupStart;\n    }\n}', explanation: '检查k个节点，反转，连接' }
    ],
    interview: {
      approach: '分组反转。每次检查是否有k个节点，有则反转这k个节点，然后连接到结果链表。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '如何递归实现？', answer: '递归处理后续部分，然后反转当前k个节点并连接。' }
      ]
    }
  },
  {
    id: 'copy-list-with-random-pointer',
    title: '随机链表的复制',
    titleEn: 'Copy List with Random Pointer',
    category: 'linked-list',
    difficulty: 'medium',
    description: '给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。构造这个链表的深拷贝。',
    examples: [
      { input: 'head = [[7,null],[13,0],[11,4],[10,2],[1,0]]', output: '[[7,null],[13,0],[11,4],[10,2],[1,0]]' }
    ],
    thinkingGuide: [
      { step: 1, question: '难点在哪？', hint: 'random指针', answer: '复制时random指向的节点可能还没创建。' },
      { step: 2, question: '如何解决？', hint: '两种方法', answer: '方法1：用HashMap存储原节点到新节点的映射。方法2：将新节点插入到原节点后面，然后分离。' }
    ],
    codeSteps: [
      { title: 'HashMap方法', description: '存储映射关系', code: 'public Node copyRandomList(Node head) {\n    if (head == null) return null;\n    \n    Map<Node, Node> map = new HashMap<>();\n    \n    // 第一遍：创建所有新节点\n    Node curr = head;\n    while (curr != null) {\n        map.put(curr, new Node(curr.val));\n        curr = curr.next;\n    }\n    \n    // 第二遍：设置next和random\n    curr = head;\n    while (curr != null) {\n        map.get(curr).next = map.get(curr.next);\n        map.get(curr).random = map.get(curr.random);\n        curr = curr.next;\n    }\n    \n    return map.get(head);\n}', explanation: '用HashMap存储原节点到新节点的映射' }
    ],
    interview: {
      approach: 'HashMap。第一遍创建所有新节点并建立映射，第二遍设置next和random指针。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      followUp: [
        { question: '如何O(1)空间？', answer: '将新节点插入到原节点后面，设置random后再分离。' }
      ]
    }
  },
  {
    id: 'sort-list',
    title: '排序链表',
    titleEn: 'Sort List',
    category: 'linked-list',
    difficulty: 'medium',
    description: '给你链表的头结点 head ，请将其按升序排列并返回排序后的链表。',
    examples: [
      { input: 'head = [4,2,1,3]', output: '[1,2,3,4]' },
      { input: 'head = [-1,5,3,4,0]', output: '[-1,0,3,4,5]' }
    ],
    thinkingGuide: [
      { step: 1, question: '链表适合什么排序算法？', hint: '归并排序', answer: '归并排序，因为链表的合并是O(1)空间。' },
      { step: 2, question: '如何找中点？', hint: '快慢指针', answer: '快慢指针找中点，然后递归排序两半，最后合并。' }
    ],
    codeSteps: [
      { title: '归并排序', description: '分治法', code: 'public ListNode sortList(ListNode head) {\n    if (head == null || head.next == null) return head;\n    \n    // 找中点\n    ListNode slow = head, fast = head.next;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n    }\n    ListNode mid = slow.next;\n    slow.next = null;\n    \n    // 递归排序\n    ListNode left = sortList(head);\n    ListNode right = sortList(mid);\n    \n    // 合并\n    return merge(left, right);\n}\n\nprivate ListNode merge(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0);\n    ListNode curr = dummy;\n    while (l1 != null && l2 != null) {\n        if (l1.val < l2.val) {\n            curr.next = l1;\n            l1 = l1.next;\n        } else {\n            curr.next = l2;\n            l2 = l2.next;\n        }\n        curr = curr.next;\n    }\n    curr.next = (l1 != null) ? l1 : l2;\n    return dummy.next;\n}', explanation: '归并排序：找中点，递归排序，合并' }
    ],
    interview: {
      approach: '归并排序。快慢指针找中点，递归排序两半，合并有序链表。',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(log n)，递归栈',
      followUp: [
        { question: '如何O(1)空间？', answer: '自底向上的归并排序，不用递归。' }
      ]
    }
  },
  {
    id: 'merge-k-sorted-lists',
    title: '合并 K 个升序链表',
    titleEn: 'Merge k Sorted Lists',
    category: 'linked-list',
    difficulty: 'hard',
    description: '给你一个链表数组，每个链表都已经按升序排列。请你将所有链表合并到一个升序链表中，返回合并后的链表。',
    examples: [
      { input: 'lists = [[1,4,5],[1,3,4],[2,6]]', output: '[1,1,2,3,4,4,5,6]' },
      { input: 'lists = []', output: '[]' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何高效合并？', hint: '优先队列', answer: '用最小堆存储每个链表的当前头节点，每次取最小的。' },
      { step: 2, question: '还有什么方法？', hint: '分治', answer: '分治法，两两合并。' }
    ],
    codeSteps: [
      { title: '优先队列', description: '最小堆', code: 'public ListNode mergeKLists(ListNode[] lists) {\n    PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);\n    \n    // 初始化：所有链表头入堆\n    for (ListNode list : lists) {\n        if (list != null) pq.offer(list);\n    }\n    \n    ListNode dummy = new ListNode(0);\n    ListNode curr = dummy;\n    \n    while (!pq.isEmpty()) {\n        ListNode node = pq.poll();\n        curr.next = node;\n        curr = curr.next;\n        if (node.next != null) pq.offer(node.next);\n    }\n    return dummy.next;\n}', explanation: '最小堆存储各链表头，每次取最小的' }
    ],
    interview: {
      approach: '优先队列。用最小堆存储每个链表的当前头节点，每次取最小的接到结果后面。',
      timeComplexity: 'O(n log k)，n是总节点数，k是链表数',
      spaceComplexity: 'O(k)',
      followUp: [
        { question: '分治法的复杂度？', answer: '时间O(n log k)，空间O(log k)递归栈。' }
      ]
    }
  },
  {
    id: 'lru-cache',
    title: 'LRU 缓存',
    titleEn: 'LRU Cache',
    category: 'linked-list',
    difficulty: 'medium',
    description: '请你设计并实现一个满足 LRU (最近最少使用) 缓存约束的数据结构。实现 LRUCache 类：LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存；int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1；void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value；如果不存在，则向缓存中插入该组 key-value。如果插入操作导致关键字数量超过 capacity ，则应该逐出最久未使用的关键字。函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。',
    examples: [
      { input: '["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]', output: '[null, null, null, 1, null, -1, null, -1, 3, 4]' }
    ],
    thinkingGuide: [
      { step: 1, question: '需要什么数据结构？', hint: 'O(1)查找和删除', answer: 'HashMap + 双向链表。HashMap实现O(1)查找，双向链表实现O(1)删除和移动。' },
      { step: 2, question: '链表的顺序代表什么？', hint: '使用顺序', answer: '最近使用的在头部，最久未使用的在尾部。' }
    ],
    codeSteps: [
      { title: 'HashMap + 双向链表', description: 'O(1)操作', code: 'class LRUCache {\n    private Map<Integer, Node> cache;\n    private Node head, tail;\n    private int capacity;\n    \n    class Node {\n        int key, value;\n        Node prev, next;\n        Node(int k, int v) { key = k; value = v; }\n    }\n    \n    public LRUCache(int capacity) {\n        this.capacity = capacity;\n        cache = new HashMap<>();\n        head = new Node(0, 0);\n        tail = new Node(0, 0);\n        head.next = tail;\n        tail.prev = head;\n    }\n    \n    public int get(int key) {\n        if (!cache.containsKey(key)) return -1;\n        Node node = cache.get(key);\n        moveToHead(node);\n        return node.value;\n    }\n    \n    public void put(int key, int value) {\n        if (cache.containsKey(key)) {\n            Node node = cache.get(key);\n            node.value = value;\n            moveToHead(node);\n        } else {\n            Node node = new Node(key, value);\n            cache.put(key, node);\n            addToHead(node);\n            if (cache.size() > capacity) {\n                Node removed = removeTail();\n                cache.remove(removed.key);\n            }\n        }\n    }\n    \n    private void moveToHead(Node node) {\n        removeNode(node);\n        addToHead(node);\n    }\n    \n    private void addToHead(Node node) {\n        node.prev = head;\n        node.next = head.next;\n        head.next.prev = node;\n        head.next = node;\n    }\n    \n    private void removeNode(Node node) {\n        node.prev.next = node.next;\n        node.next.prev = node.prev;\n    }\n    \n    private Node removeTail() {\n        Node node = tail.prev;\n        removeNode(node);\n        return node;\n    }\n}', explanation: 'HashMap存储key到节点的映射，双向链表维护使用顺序' }
    ],
    interview: {
      approach: 'HashMap + 双向链表。HashMap实现O(1)查找，双向链表实现O(1)删除和移动。最近使用的在头部，最久未使用的在尾部。',
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(capacity)',
      followUp: [
        { question: '如何实现LFU缓存？', answer: '需要额外维护访问频率，相同频率的按LRU淘汰。' }
      ]
    }
  },

  // ==================== 普通数组 (5道) ====================
  {
    id: 'max-subarray',
    title: '最大子数组和',
    titleEn: 'Maximum Subarray',
    category: 'array',
    difficulty: 'medium',
    description: '给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。',
    examples: [
      { input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6', explanation: '[4,-1,2,1]' },
      { input: 'nums = [1]', output: '1' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何定义状态？', hint: '以i结尾', answer: 'dp[i]表示以nums[i]结尾的最大子数组和。' },
      { step: 2, question: '状态转移方程？', hint: '接上还是重新开始', answer: 'dp[i] = max(dp[i-1] + nums[i], nums[i])，即要么接上前面的，要么从当前重新开始。' }
    ],
    codeSteps: [
      { title: '动态规划', description: 'Kadane算法', code: 'public int maxSubArray(int[] nums) {\n    int maxSum = nums[0];\n    int currSum = nums[0];\n    \n    for (int i = 1; i < nums.length; i++) {\n        currSum = Math.max(currSum + nums[i], nums[i]);\n        maxSum = Math.max(maxSum, currSum);\n    }\n    return maxSum;\n}', explanation: '要么接上前面的，要么从当前重新开始' }
    ],
    interview: {
      approach: 'Kadane算法。dp[i] = max(dp[i-1] + nums[i], nums[i])，空间优化到O(1)。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '如何用分治法？', answer: '分成左右两半，答案在左半、右半、或跨越中点。' }
      ]
    }
  },
  {
    id: 'merge-intervals',
    title: '合并区间',
    titleEn: 'Merge Intervals',
    category: 'array',
    difficulty: 'medium',
    description: '以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。',
    examples: [
      { input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]', output: '[[1,6],[8,10],[15,18]]' },
      { input: 'intervals = [[1,4],[4,5]]', output: '[[1,5]]' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何判断重叠？', hint: '排序后', answer: '按起点排序后，如果当前区间的起点 <= 前一个区间的终点，则重叠。' },
      { step: 2, question: '如何合并？', hint: '更新终点', answer: '重叠时，更新终点为两个区间终点的最大值。' }
    ],
    codeSteps: [
      { title: '排序后合并', description: '按起点排序', code: 'public int[][] merge(int[][] intervals) {\n    Arrays.sort(intervals, (a, b) -> a[0] - b[0]);\n    List<int[]> result = new ArrayList<>();\n    \n    for (int[] interval : intervals) {\n        if (result.isEmpty() || result.get(result.size() - 1)[1] < interval[0]) {\n            result.add(interval);\n        } else {\n            result.get(result.size() - 1)[1] = Math.max(result.get(result.size() - 1)[1], interval[1]);\n        }\n    }\n    return result.toArray(new int[result.size()][]);\n}', explanation: '排序后，重叠则合并，不重叠则添加' }
    ],
    interview: {
      approach: '排序后合并。按起点排序，遍历时判断是否与前一个区间重叠，重叠则合并。',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)',
      followUp: [
        { question: '如何插入一个新区间？', answer: '找到插入位置，合并重叠的区间。' }
      ]
    }
  },
  {
    id: 'rotate-array',
    title: '轮转数组',
    titleEn: 'Rotate Array',
    category: 'array',
    difficulty: 'medium',
    description: '给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。',
    examples: [
      { input: 'nums = [1,2,3,4,5,6,7], k = 3', output: '[5,6,7,1,2,3,4]' },
      { input: 'nums = [-1,-100,3,99], k = 2', output: '[3,99,-1,-100]' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何O(1)空间实现？', hint: '反转', answer: '先整体反转，再反转前k个，再反转后n-k个。' },
      { step: 2, question: '为什么这样可以？', hint: '推导', answer: '[1,2,3,4,5,6,7] -> [7,6,5,4,3,2,1] -> [5,6,7,4,3,2,1] -> [5,6,7,1,2,3,4]' }
    ],
    codeSteps: [
      { title: '三次反转', description: 'O(1)空间', code: 'public void rotate(int[] nums, int k) {\n    k = k % nums.length;\n    reverse(nums, 0, nums.length - 1);  // 整体反转\n    reverse(nums, 0, k - 1);            // 反转前k个\n    reverse(nums, k, nums.length - 1);  // 反转后n-k个\n}\n\nprivate void reverse(int[] nums, int start, int end) {\n    while (start < end) {\n        int temp = nums[start];\n        nums[start] = nums[end];\n        nums[end] = temp;\n        start++;\n        end--;\n    }\n}', explanation: '三次反转实现轮转' }
    ],
    interview: {
      approach: '三次反转。先整体反转，再反转前k个，再反转后n-k个。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '还有其他方法吗？', answer: '环状替换，每个元素直接放到最终位置。' }
      ]
    }
  },
  {
    id: 'product-except-self',
    title: '除自身以外数组的乘积',
    titleEn: 'Product of Array Except Self',
    category: 'array',
    difficulty: 'medium',
    description: '给你一个整数数组 nums，返回数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。请不要使用除法，且在 O(n) 时间复杂度内完成此题。',
    examples: [
      { input: 'nums = [1,2,3,4]', output: '[24,12,8,6]' },
      { input: 'nums = [-1,1,0,-3,3]', output: '[0,0,9,0,0]' }
    ],
    thinkingGuide: [
      { step: 1, question: '不用除法怎么做？', hint: '前缀积和后缀积', answer: 'answer[i] = 左边所有数的乘积 × 右边所有数的乘积。' },
      { step: 2, question: '如何O(1)空间？', hint: '复用answer数组', answer: '先用answer存左边乘积，再从右往左乘上右边乘积。' }
    ],
    codeSteps: [
      { title: '前缀积×后缀积', description: 'O(1)额外空间', code: 'public int[] productExceptSelf(int[] nums) {\n    int n = nums.length;\n    int[] answer = new int[n];\n    \n    // 计算左边乘积\n    answer[0] = 1;\n    for (int i = 1; i < n; i++) {\n        answer[i] = answer[i - 1] * nums[i - 1];\n    }\n    \n    // 乘上右边乘积\n    int right = 1;\n    for (int i = n - 1; i >= 0; i--) {\n        answer[i] *= right;\n        right *= nums[i];\n    }\n    return answer;\n}', explanation: '先存左边乘积，再乘上右边乘积' }
    ],
    interview: {
      approach: '前缀积×后缀积。answer[i] = 左边乘积 × 右边乘积，先存左边乘积，再从右往左乘上右边乘积。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)，不算输出数组',
      followUp: [
        { question: '如果允许用除法？', answer: '先算总乘积，除以当前元素。但要处理0的情况。' }
      ]
    }
  },
  {
    id: 'first-missing-positive',
    title: '缺失的第一个正数',
    titleEn: 'First Missing Positive',
    category: 'array',
    difficulty: 'hard',
    description: '给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。',
    examples: [
      { input: 'nums = [1,2,0]', output: '3' },
      { input: 'nums = [3,4,-1,1]', output: '2' }
    ],
    thinkingGuide: [
      { step: 1, question: '答案的范围是什么？', hint: '1到n+1', answer: '答案一定在[1, n+1]范围内，因为最多有n个正数。' },
      { step: 2, question: '如何O(1)空间标记？', hint: '原地哈希', answer: '把每个数放到它应该在的位置，nums[i]应该放在nums[i]-1的位置。' }
    ],
    codeSteps: [
      { title: '原地哈希', description: '把数放到正确位置', code: 'public int firstMissingPositive(int[] nums) {\n    int n = nums.length;\n    \n    // 把每个数放到正确位置\n    for (int i = 0; i < n; i++) {\n        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {\n            int temp = nums[nums[i] - 1];\n            nums[nums[i] - 1] = nums[i];\n            nums[i] = temp;\n        }\n    }\n    \n    // 找第一个不在正确位置的\n    for (int i = 0; i < n; i++) {\n        if (nums[i] != i + 1) return i + 1;\n    }\n    return n + 1;\n}', explanation: '把nums[i]放到nums[i]-1的位置，然后找第一个不对的' }
    ],
    interview: {
      approach: '原地哈希。把每个数放到它应该在的位置（nums[i]放到索引nums[i]-1），然后找第一个不在正确位置的。',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '为什么用while不用if？', answer: '交换后新来的数可能也需要放到正确位置。' }
      ]
    }
  },

  // ==================== 矩阵 (4道) ====================
  {
    id: 'set-matrix-zeroes',
    title: '矩阵置零',
    titleEn: 'Set Matrix Zeroes',
    category: 'matrix',
    difficulty: 'medium',
    description: '给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用原地算法。',
    examples: [
      { input: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]', output: '[[1,0,1],[0,0,0],[1,0,1]]' },
      { input: 'matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]', output: '[[0,0,0,0],[0,4,5,0],[0,3,1,0]]' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何O(1)空间？', hint: '用第一行第一列标记', answer: '用第一行和第一列作为标记数组，记录哪些行列需要置零。' },
      { step: 2, question: '第一行第一列本身怎么处理？', hint: '额外变量', answer: '用两个变量记录第一行和第一列是否需要置零。' }
    ],
    codeSteps: [
      { title: '原地标记', description: '用第一行第一列标记', code: 'public void setZeroes(int[][] matrix) {\n    int m = matrix.length, n = matrix[0].length;\n    boolean firstRowZero = false, firstColZero = false;\n    \n    // 检查第一行第一列\n    for (int j = 0; j < n; j++) if (matrix[0][j] == 0) firstRowZero = true;\n    for (int i = 0; i < m; i++) if (matrix[i][0] == 0) firstColZero = true;\n    \n    // 用第一行第一列标记\n    for (int i = 1; i < m; i++) {\n        for (int j = 1; j < n; j++) {\n            if (matrix[i][j] == 0) {\n                matrix[i][0] = 0;\n                matrix[0][j] = 0;\n            }\n        }\n    }\n    \n    // 根据标记置零\n    for (int i = 1; i < m; i++) {\n        for (int j = 1; j < n; j++) {\n            if (matrix[i][0] == 0 || matrix[0][j] == 0) {\n                matrix[i][j] = 0;\n            }\n        }\n    }\n    \n    // 处理第一行第一列\n    if (firstRowZero) for (int j = 0; j < n; j++) matrix[0][j] = 0;\n    if (firstColZero) for (int i = 0; i < m; i++) matrix[i][0] = 0;\n}', explanation: '用第一行第一列作为标记数组' }
    ],
    interview: {
      approach: '原地标记。用第一行和第一列作为标记数组，用两个变量记录第一行第一列是否需要置零。',
      timeComplexity: 'O(mn)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '为什么要先检查第一行第一列？', answer: '因为后面会修改它们，需要先记录原始状态。' }
      ]
    }
  },
  {
    id: 'spiral-matrix',
    title: '螺旋矩阵',
    titleEn: 'Spiral Matrix',
    category: 'matrix',
    difficulty: 'medium',
    description: '给你一个 m 行 n 列的矩阵 matrix ，请按照顺时针螺旋顺序，返回矩阵中的所有元素。',
    examples: [
      { input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', output: '[1,2,3,6,9,8,7,4,5]' },
      { input: 'matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]', output: '[1,2,3,4,8,12,11,10,9,5,6,7]' }
    ],
    thinkingGuide: [
      { step: 1, question: '如何模拟螺旋？', hint: '四个边界', answer: '维护上下左右四个边界，按顺序遍历：右→下→左→上，每遍历完一边收缩边界。' },
      { step: 2, question: '何时停止？', hint: '边界交叉', answer: '当上边界>下边界或左边界>右边界时停止。' }
    ],
    codeSteps: [
      { title: '模拟螺旋', description: '四个边界', code: 'public List<Integer> spiralOrder(int[][] matrix) {\n    List<Integer> result = new ArrayList<>();\n    int top = 0, bottom = matrix.length - 1;\n    int left = 0, right = matrix[0].length - 1;\n    \n    while (top <= bottom && left <= right) {\n        // 右\n        for (int j = left; j <= right; j++) result.add(matrix[top][j]);\n        top++;\n        \n        // 下\n        for (int i = top; i <= bottom; i++) result.add(matrix[i][right]);\n        right--;\n        \n        // 左\n        if (top <= bottom) {\n            for (int j = right; j >= left; j--) result.add(matrix[bottom][j]);\n            bottom--;\n        }\n        \n        // 上\n        if (left <= right) {\n            for (int i = bottom; i >= top; i--) result.add(matrix[i][left]);\n            left++;\n        }\n    }\n    return result;\n}', explanation: '四个边界，按顺序遍历并收缩' }
    ],
    interview: {
      approach: '模拟。维护上下左右四个边界，按右→下→左→上顺序遍历，每遍历完一边收缩边界。',
      timeComplexity: 'O(mn)',
      spaceComplexity: 'O(1)，不算输出',
      followUp: [
        { question: '如何生成螺旋矩阵？', answer: '类似方法，按顺序填入1到n²。' }
      ]
    }
  },
  {
    id: 'rotate-image',
    title: '旋转图像',
    titleEn: 'Rotate Image',
    category: 'matrix',
    difficulty: 'medium',
    description: '给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。',
    examples: [
      { input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', output: '[[7,4,1],[8,5,2],[9,6,3]]' },
      { input: 'matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]', output: '[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]' }
    ],
    thinkingGuide: [
      { step: 1, question: '顺时针旋转90度等于什么操作？', hint: '转置+反转', answer: '先转置（行列互换），再左右反转每一行。' },
      { step: 2, question: '如何原地转置？', hint: '只遍历上三角', answer: '遍历上三角，交换matrix[i][j]和matrix[j][i]。' }
    ],
    codeSteps: [
      { title: '转置+反转', description: '两步操作', code: 'public void rotate(int[][] matrix) {\n    int n = matrix.length;\n    \n    // 转置\n    for (int i = 0; i < n; i++) {\n        for (int j = i + 1; j < n; j++) {\n            int temp = matrix[i][j];\n            matrix[i][j] = matrix[j][i];\n            matrix[j][i] = temp;\n        }\n    }\n    \n    // 左右反转每一行\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n / 2; j++) {\n            int temp = matrix[i][j];\n            matrix[i][j] = matrix[i][n - 1 - j];\n            matrix[i][n - 1 - j] = temp;\n        }\n    }\n}', explanation: '转置后左右反转' }
    ],
    interview: {
      approach: '转置+反转。顺时针旋转90度 = 先转置（行列互换），再左右反转每一行。',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '逆时针旋转呢？', answer: '先转置，再上下反转。或者先左右反转，再转置。' }
      ]
    }
  },
  {
    id: 'search-matrix-ii',
    title: '搜索二维矩阵 II',
    titleEn: 'Search a 2D Matrix II',
    category: 'matrix',
    difficulty: 'medium',
    description: '编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：每行的元素从左到右升序排列。每列的元素从上到下升序排列。',
    examples: [
      { input: 'matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5', output: 'true' },
      { input: 'matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20', output: 'false' }
    ],
    thinkingGuide: [
      { step: 1, question: '从哪个角开始搜索？', hint: '右上角或左下角', answer: '从右上角开始：如果当前值大于target，往左走；如果小于target，往下走。' },
      { step: 2, question: '为什么不从左上角开始？', hint: '两个方向都是递增', answer: '左上角往右和往下都是递增，无法确定方向；右上角往左递减往下递增，可以确定方向。' }
    ],
    codeSteps: [
      { title: '从右上角搜索', description: '利用有序性', code: 'public boolean searchMatrix(int[][] matrix, int target) {\n    int m = matrix.length, n = matrix[0].length;\n    int i = 0, j = n - 1;  // 从右上角开始\n    \n    while (i < m && j >= 0) {\n        if (matrix[i][j] == target) {\n            return true;\n        } else if (matrix[i][j] > target) {\n            j--;  // 往左\n        } else {\n            i++;  // 往下\n        }\n    }\n    return false;\n}', explanation: '从右上角开始，大于target往左，小于target往下' }
    ],
    interview: {
      approach: '从右上角开始搜索。当前值大于target往左走，小于target往下走。每步排除一行或一列。',
      timeComplexity: 'O(m+n)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '为什么是O(m+n)？', answer: '每步要么往左要么往下，最多走m+n步。' }
      ]
    }
  }
];
