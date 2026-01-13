import { Problem } from './problems';

// 动态规划题目 (10道) - 详细的思路引导和代码步骤
export const dpProblems: Problem[] = [
  {
    id: 'climbing-stairs',
    title: '爬楼梯',
    titleEn: 'Climbing Stairs',
    category: 'dp',
    difficulty: 'easy',
    description: '假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？',
    examples: [
      { input: 'n = 2', output: '2', explanation: '两种方法：1+1 或直接2' },
      { input: 'n = 3', output: '3', explanation: '三种方法：1+1+1, 1+2, 2+1' },
      { input: 'n = 4', output: '5', explanation: '五种方法：1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '想象你站在第n阶楼梯上，你是怎么到达这里的？', 
        hint: '你最后一步走了几阶？', 
        answer: '你最后一步要么走了1阶（从第n-1阶来），要么走了2阶（从第n-2阶来）。所以到达第n阶的方法数 = 到达第n-1阶的方法数 + 到达第n-2阶的方法数。' 
      },
      { 
        step: 2, 
        question: '这个规律让你想到了什么数学概念？', 
        hint: '1, 1, 2, 3, 5, 8...', 
        answer: '这就是斐波那契数列！f(n) = f(n-1) + f(n-2)。爬楼梯问题本质上就是求斐波那契数列的第n项。' 
      },
      { 
        step: 3, 
        question: '最小的情况是什么？我们需要什么初始值？', 
        hint: '想想n=1和n=2的情况', 
        answer: 'n=1时只有1种方法（走1阶），n=2时有2种方法（1+1或2）。这就是我们的初始条件：dp[1]=1, dp[2]=2。' 
      },
      { 
        step: 4, 
        question: '如果用数组存储所有结果，空间复杂度是多少？能优化吗？', 
        hint: '计算dp[n]只需要哪些值？', 
        answer: '用数组需要O(n)空间。但计算dp[n]只需要dp[n-1]和dp[n-2]，所以只用两个变量就够了，空间优化到O(1)！' 
      }
    ],
    codeSteps: [
      { 
        title: '定义方法签名', 
        description: '确定输入输出：输入是楼梯阶数n，输出是方法总数', 
        code: 'public int climbStairs(int n) {\n    // 待实现\n}', 
        explanation: '返回类型是int，因为方法数是整数。参数n表示楼梯总阶数。' 
      },
      { 
        title: '处理边界情况', 
        description: '当n很小时，直接返回结果', 
        code: 'public int climbStairs(int n) {\n    // 边界情况：n<=2时直接返回n\n    if (n <= 2) {\n        return n;\n    }\n}', 
        explanation: 'n=1返回1，n=2返回2。这既是边界处理，也是我们的初始条件。' 
      },
      { 
        title: '初始化两个变量', 
        description: '用两个变量代替数组，记录前两个状态', 
        code: 'public int climbStairs(int n) {\n    if (n <= 2) return n;\n    \n    // prev2代表dp[i-2]，prev1代表dp[i-1]\n    int prev2 = 1;  // dp[1] = 1\n    int prev1 = 2;  // dp[2] = 2\n}', 
        explanation: 'prev2存储"前前一个"状态，prev1存储"前一个"状态。初始时prev2=1（1阶的方法数），prev1=2（2阶的方法数）。' 
      },
      { 
        title: '循环计算：确定循环范围', 
        description: '从第3阶开始计算，直到第n阶', 
        code: 'public int climbStairs(int n) {\n    if (n <= 2) return n;\n    int prev2 = 1, prev1 = 2;\n    \n    // 从3开始，因为1和2已经有初始值了\n    for (int i = 3; i <= n; i++) {\n        // 计算当前阶的方法数\n    }\n}', 
        explanation: '为什么从3开始？因为dp[1]和dp[2]已经知道了。为什么i<=n？因为我们要计算到第n阶。' 
      },
      { 
        title: '状态转移：计算当前值', 
        description: '当前方法数 = 前一阶方法数 + 前两阶方法数', 
        code: 'public int climbStairs(int n) {\n    if (n <= 2) return n;\n    int prev2 = 1, prev1 = 2;\n    \n    for (int i = 3; i <= n; i++) {\n        int curr = prev1 + prev2;  // dp[i] = dp[i-1] + dp[i-2]\n        // 更新变量，为下一轮做准备\n        prev2 = prev1;\n        prev1 = curr;\n    }\n}', 
        explanation: 'curr是当前阶的方法数。计算完后，要更新prev2和prev1：prev2变成原来的prev1，prev1变成curr。这样下一轮循环时，prev2和prev1就是新的"前两个"状态。' 
      },
      { 
        title: '返回结果', 
        description: '循环结束后，prev1就是第n阶的方法数', 
        code: 'public int climbStairs(int n) {\n    if (n <= 2) return n;\n    int prev2 = 1, prev1 = 2;\n    \n    for (int i = 3; i <= n; i++) {\n        int curr = prev1 + prev2;\n        prev2 = prev1;\n        prev1 = curr;\n    }\n    \n    return prev1;  // 最终prev1就是dp[n]\n}', 
        explanation: '循环结束时，prev1存的就是dp[n]的值，即到达第n阶的方法总数。' 
      }
    ],
    interview: {
      approach: '这道题的核心是发现规律：到达第n阶的方法数等于到达n-1阶和n-2阶的方法数之和，本质是斐波那契数列。我使用动态规划，用两个变量滚动更新，将空间复杂度从O(n)优化到O(1)。',
      timeComplexity: 'O(n)：只需要一次循环从3到n',
      spaceComplexity: 'O(1)：只用了两个变量prev1和prev2',
      followUp: [
        { question: '如果每次可以爬1、2、3阶呢？', answer: '状态转移变为dp[n] = dp[n-1] + dp[n-2] + dp[n-3]，需要三个变量滚动更新。' },
        { question: '能用矩阵快速幂优化到O(log n)吗？', answer: '可以！斐波那契数列可以用矩阵表示：[f(n), f(n-1)] = [f(2), f(1)] × [[1,1],[1,0]]^(n-2)，用快速幂计算矩阵的n次方。' },
        { question: '如果n非常大，结果会溢出怎么办？', answer: '可以对结果取模，比如对10^9+7取模，或者使用BigInteger类。' }
      ]
    }
  },
  {
    id: 'pascals-triangle',
    title: '杨辉三角',
    titleEn: 'Pascals Triangle',
    category: 'dp',
    difficulty: 'easy',
    description: '给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。在「杨辉三角」中，每个数是它左上方和右上方的数的和。',
    examples: [
      { input: 'numRows = 5', output: '[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]', explanation: '每个数是上方两数之和' },
      { input: 'numRows = 1', output: '[[1]]', explanation: '第一行只有一个1' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '杨辉三角有什么规律？', 
        hint: '观察每个数是怎么来的', 
        answer: '每行的首尾都是1，中间的每个数等于它正上方和左上方两个数的和。比如第3行的2 = 第2行的1+1。' 
      },
      { 
        step: 2, 
        question: '第i行有多少个数？', 
        hint: '第1行有1个，第2行有2个...', 
        answer: '第i行有i个数（i从1开始数）。如果从0开始数，第i行有i+1个数。' 
      },
      { 
        step: 3, 
        question: '如何用代码表示"上方两数之和"？', 
        hint: '假设上一行是prevRow，当前位置是j', 
        answer: '当前数 = prevRow[j-1] + prevRow[j]。j-1是左上方，j是正上方。' 
      },
      { 
        step: 4, 
        question: '边界情况怎么处理？', 
        hint: '每行的第一个和最后一个', 
        answer: '当j=0或j=i时（首尾位置），直接设为1，不需要计算。' 
      }
    ],
    codeSteps: [
      { 
        title: '定义方法和返回类型', 
        description: '返回一个二维列表，每个内部列表是一行', 
        code: 'public List<List<Integer>> generate(int numRows) {\n    // 待实现\n}', 
        explanation: '返回类型是List<List<Integer>>，外层List存所有行，内层List存每行的数字。' 
      },
      { 
        title: '创建结果容器', 
        description: '用ArrayList存储所有行', 
        code: 'public List<List<Integer>> generate(int numRows) {\n    List<List<Integer>> result = new ArrayList<>();\n}', 
        explanation: 'result用来存储最终的杨辉三角，每生成一行就添加进去。' 
      },
      { 
        title: '外层循环：遍历每一行', 
        description: '从第0行到第numRows-1行', 
        code: 'public List<List<Integer>> generate(int numRows) {\n    List<List<Integer>> result = new ArrayList<>();\n    \n    for (int i = 0; i < numRows; i++) {\n        List<Integer> row = new ArrayList<>();\n        // 生成第i行\n    }\n}', 
        explanation: 'i表示当前是第几行（从0开始）。每行创建一个新的ArrayList。' 
      },
      { 
        title: '内层循环：生成每行的数字', 
        description: '第i行有i+1个数字', 
        code: 'for (int i = 0; i < numRows; i++) {\n    List<Integer> row = new ArrayList<>();\n    \n    for (int j = 0; j <= i; j++) {\n        // 计算第j个位置的值\n    }\n    \n    result.add(row);\n}', 
        explanation: 'j从0到i，共i+1个数。循环结束后把这一行添加到result中。' 
      },
      { 
        title: '计算每个位置的值', 
        description: '首尾为1，中间为上方两数之和', 
        code: 'for (int j = 0; j <= i; j++) {\n    if (j == 0 || j == i) {\n        // 首尾位置，值为1\n        row.add(1);\n    } else {\n        // 中间位置，等于上一行的两个数之和\n        List<Integer> prevRow = result.get(i - 1);\n        row.add(prevRow.get(j - 1) + prevRow.get(j));\n    }\n}', 
        explanation: 'j==0是行首，j==i是行尾，都是1。中间位置取上一行的j-1和j位置相加。' 
      },
      { 
        title: '返回完整结果', 
        description: '所有行生成完毕，返回result', 
        code: 'public List<List<Integer>> generate(int numRows) {\n    List<List<Integer>> result = new ArrayList<>();\n    \n    for (int i = 0; i < numRows; i++) {\n        List<Integer> row = new ArrayList<>();\n        for (int j = 0; j <= i; j++) {\n            if (j == 0 || j == i) {\n                row.add(1);\n            } else {\n                row.add(result.get(i-1).get(j-1) + result.get(i-1).get(j));\n            }\n        }\n        result.add(row);\n    }\n    \n    return result;\n}', 
        explanation: '完整代码：外层循环遍历行，内层循环生成每行的数字，最后返回整个杨辉三角。' 
      }
    ],
    interview: {
      approach: '杨辉三角的规律是：每行首尾为1，中间的数等于上一行对应位置的两个数之和。我用两层循环，外层遍历行，内层生成每行的数字。',
      timeComplexity: 'O(n²)：需要生成n行，第i行有i个数，总共1+2+...+n = n(n+1)/2个数',
      spaceComplexity: 'O(n²)：存储整个杨辉三角',
      followUp: [
        { question: '如果只要返回第n行呢？', answer: '可以只保留上一行，空间优化到O(n)。或者利用组合数公式C(n,k)直接计算。' },
        { question: '杨辉三角和组合数有什么关系？', answer: '第n行第k个数就是C(n,k)，即从n个元素中选k个的方案数。' },
        { question: '如何高效获取第n行第k个数？', answer: '用公式C(n,k) = C(n,k-1) × (n-k+1) / k递推计算，避免计算阶乘。' }
      ]
    }
  },
  {
    id: 'house-robber',
    title: '打家劫舍',
    titleEn: 'House Robber',
    category: 'dp',
    difficulty: 'medium',
    description: '你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。给定一个代表每个房屋存放金额的非负整数数组，计算你不触动警报装置的情况下，一夜之内能够偷窃到的最高金额。',
    examples: [
      { input: 'nums = [1,2,3,1]', output: '4', explanation: '偷第1间（金额1）和第3间（金额3），总共1+3=4' },
      { input: 'nums = [2,7,9,3,1]', output: '12', explanation: '偷第1间（2）、第3间（9）、第5间（1），总共2+9+1=12' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '对于第i间房，你有几种选择？', 
        hint: '偷还是不偷', 
        answer: '两种选择：偷或不偷。如果偷第i间，就不能偷第i-1间；如果不偷第i间，金额和偷到第i-1间时相同。' 
      },
      { 
        step: 2, 
        question: '如何用dp[i]表示状态？', 
        hint: 'dp[i]表示什么含义', 
        answer: 'dp[i]表示偷到第i间房时能获得的最大金额（不一定偷第i间）。' 
      },
      { 
        step: 3, 
        question: '状态转移方程是什么？', 
        hint: '偷和不偷哪个更好', 
        answer: 'dp[i] = max(dp[i-1], dp[i-2] + nums[i])。不偷第i间：dp[i-1]；偷第i间：dp[i-2] + nums[i]。取较大值。' 
      },
      { 
        step: 4, 
        question: '初始条件是什么？', 
        hint: '前两间房的情况', 
        answer: 'dp[0] = nums[0]（只有一间房，必偷）。dp[1] = max(nums[0], nums[1])（两间房，偷金额大的那间）。' 
      },
      { 
        step: 5, 
        question: '能优化空间吗？', 
        hint: '计算dp[i]需要哪些值', 
        answer: '只需要dp[i-1]和dp[i-2]，所以用两个变量就够了，空间从O(n)优化到O(1)。' 
      }
    ],
    codeSteps: [
      { 
        title: '定义方法签名', 
        description: '输入是金额数组，输出是最大金额', 
        code: 'public int rob(int[] nums) {\n    // 待实现\n}', 
        explanation: '参数nums是每间房的金额，返回能偷到的最大金额。' 
      },
      { 
        title: '处理边界情况', 
        description: '只有一间房时直接返回', 
        code: 'public int rob(int[] nums) {\n    int n = nums.length;\n    if (n == 1) {\n        return nums[0];  // 只有一间房，直接偷\n    }\n}', 
        explanation: '只有一间房时，没有选择，必须偷这间。' 
      },
      { 
        title: '初始化两个状态变量', 
        description: '用两个变量代替dp数组', 
        code: 'public int rob(int[] nums) {\n    int n = nums.length;\n    if (n == 1) return nums[0];\n    \n    // prev2 = dp[i-2], prev1 = dp[i-1]\n    int prev2 = nums[0];  // 第一间房的最大金额\n    int prev1 = Math.max(nums[0], nums[1]);  // 前两间房的最大金额\n}', 
        explanation: 'prev2对应dp[0]=nums[0]，prev1对应dp[1]=max(nums[0],nums[1])。' 
      },
      { 
        title: '循环遍历剩余房屋', 
        description: '从第3间房开始计算', 
        code: 'public int rob(int[] nums) {\n    int n = nums.length;\n    if (n == 1) return nums[0];\n    \n    int prev2 = nums[0];\n    int prev1 = Math.max(nums[0], nums[1]);\n    \n    // 从第3间房（下标2）开始\n    for (int i = 2; i < n; i++) {\n        // 计算偷到第i间的最大金额\n    }\n}', 
        explanation: '为什么从i=2开始？因为i=0和i=1的情况已经在初始化时处理了。' 
      },
      { 
        title: '状态转移：选择偷或不偷', 
        description: '比较偷当前房和不偷当前房的收益', 
        code: 'for (int i = 2; i < n; i++) {\n    // 不偷第i间：prev1\n    // 偷第i间：prev2 + nums[i]\n    int curr = Math.max(prev1, prev2 + nums[i]);\n    \n    // 滚动更新\n    prev2 = prev1;\n    prev1 = curr;\n}', 
        explanation: 'curr是偷到第i间时的最大金额。然后滚动更新：prev2变成原来的prev1，prev1变成curr。' 
      },
      { 
        title: '返回最终结果', 
        description: 'prev1就是偷完所有房的最大金额', 
        code: 'public int rob(int[] nums) {\n    int n = nums.length;\n    if (n == 1) return nums[0];\n    \n    int prev2 = nums[0];\n    int prev1 = Math.max(nums[0], nums[1]);\n    \n    for (int i = 2; i < n; i++) {\n        int curr = Math.max(prev1, prev2 + nums[i]);\n        prev2 = prev1;\n        prev1 = curr;\n    }\n    \n    return prev1;\n}', 
        explanation: '循环结束后，prev1存储的就是偷完所有房屋能获得的最大金额。' 
      }
    ],
    interview: {
      approach: '这是经典的动态规划问题。对于每间房，我们选择偷或不偷：偷的话加上当前金额但不能偷上一间，不偷的话金额和上一间相同。状态转移方程是dp[i] = max(dp[i-1], dp[i-2] + nums[i])。用滚动数组优化空间到O(1)。',
      timeComplexity: 'O(n)：遍历一次数组',
      spaceComplexity: 'O(1)：只用两个变量',
      followUp: [
        { question: '如果房屋围成一个圈呢？（打家劫舍II）', answer: '分两种情况：偷第一间不偷最后一间，或不偷第一间可偷最后一间。分别计算取最大值。' },
        { question: '如果房屋是树形结构呢？（打家劫舍III）', answer: '树形DP，每个节点返回两个值：偷这个节点的最大值和不偷这个节点的最大值。' },
        { question: '如何输出具体偷了哪些房？', answer: '额外记录每个状态是从哪个状态转移来的，最后回溯路径。' }
      ]
    }
  },
  {
    id: 'perfect-squares',
    title: '完全平方数',
    titleEn: 'Perfect Squares',
    category: 'dp',
    difficulty: 'medium',
    description: '给你一个整数 n，返回和为 n 的完全平方数的最少数量。完全平方数是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。',
    examples: [
      { input: 'n = 12', output: '3', explanation: '12 = 4 + 4 + 4（三个4相加）' },
      { input: 'n = 13', output: '2', explanation: '13 = 4 + 9（4和9相加）' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '这道题像什么类型的问题？', 
        hint: '用若干个数凑出目标值', 
        answer: '这是完全背包问题！我们有无限个完全平方数（1,4,9,16...），要用最少的数凑出n。' 
      },
      { 
        step: 2, 
        question: 'dp[i]应该表示什么？', 
        hint: '凑出i需要多少个数', 
        answer: 'dp[i]表示凑出数字i所需的最少完全平方数个数。' 
      },
      { 
        step: 3, 
        question: '状态转移方程是什么？', 
        hint: '尝试每个可用的完全平方数', 
        answer: '对于每个完全平方数j²（j²≤i），dp[i] = min(dp[i], dp[i-j²] + 1)。意思是：用一个j²，剩下的i-j²需要dp[i-j²]个数。' 
      },
      { 
        step: 4, 
        question: '初始条件是什么？', 
        hint: '凑出0需要几个数', 
        answer: 'dp[0] = 0，凑出0不需要任何数。其他位置初始化为一个很大的值（表示还没计算）。' 
      },
      { 
        step: 5, 
        question: '为什么初始化为很大的值而不是0？', 
        hint: '我们要求最小值', 
        answer: '因为我们要取min，如果初始化为0，min永远是0。初始化为一个大值（如n+1或Integer.MAX_VALUE），才能正确更新。' 
      }
    ],
    codeSteps: [
      { 
        title: '定义方法签名', 
        description: '输入是目标数n，输出是最少的完全平方数个数', 
        code: 'public int numSquares(int n) {\n    // 待实现\n}', 
        explanation: '返回凑出n所需的最少完全平方数个数。' 
      },
      { 
        title: '创建并初始化dp数组', 
        description: 'dp[i]表示凑出i的最少个数', 
        code: 'public int numSquares(int n) {\n    // dp[i] = 凑出i的最少完全平方数个数\n    int[] dp = new int[n + 1];\n    \n    // 初始化为最大值，方便后面取min\n    Arrays.fill(dp, Integer.MAX_VALUE);\n    \n    // 凑出0需要0个数\n    dp[0] = 0;\n}', 
        explanation: '数组大小是n+1，因为要计算dp[0]到dp[n]。初始化为MAX_VALUE，dp[0]=0是基础情况。' 
      },
      { 
        title: '外层循环：遍历每个目标值', 
        description: '从1到n，依次计算每个数的最少个数', 
        code: 'public int numSquares(int n) {\n    int[] dp = new int[n + 1];\n    Arrays.fill(dp, Integer.MAX_VALUE);\n    dp[0] = 0;\n    \n    // 计算dp[1], dp[2], ..., dp[n]\n    for (int i = 1; i <= n; i++) {\n        // 尝试每个完全平方数\n    }\n}', 
        explanation: '从小到大计算，因为dp[i]依赖于更小的dp值。' 
      },
      { 
        title: '内层循环：尝试每个完全平方数', 
        description: '遍历所有不超过i的完全平方数', 
        code: 'for (int i = 1; i <= n; i++) {\n    // j是完全平方数的底数，j*j是完全平方数\n    for (int j = 1; j * j <= i; j++) {\n        // 尝试用一个j*j\n    }\n}', 
        explanation: 'j从1开始，j*j就是1,4,9,16...。条件j*j<=i保证完全平方数不超过当前目标。' 
      },
      { 
        title: '状态转移：更新最小值', 
        description: '比较使用当前完全平方数是否更优', 
        code: 'for (int i = 1; i <= n; i++) {\n    for (int j = 1; j * j <= i; j++) {\n        // 用一个j*j，剩下i-j*j需要dp[i-j*j]个数\n        // 总共需要dp[i-j*j] + 1个数\n        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);\n    }\n}', 
        explanation: '如果用一个j²，剩下的数是i-j²，需要dp[i-j²]个完全平方数，加上这个j²就是dp[i-j²]+1个。' 
      },
      { 
        title: '返回结果', 
        description: 'dp[n]就是凑出n的最少个数', 
        code: 'public int numSquares(int n) {\n    int[] dp = new int[n + 1];\n    Arrays.fill(dp, Integer.MAX_VALUE);\n    dp[0] = 0;\n    \n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j * j <= i; j++) {\n            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);\n        }\n    }\n    \n    return dp[n];\n}', 
        explanation: '完整代码：初始化dp数组，双层循环计算每个dp值，最后返回dp[n]。' 
      }
    ],
    interview: {
      approach: '这是完全背包问题的变形。dp[i]表示凑出i的最少完全平方数个数。对于每个i，尝试所有不超过i的完全平方数j²，状态转移方程是dp[i] = min(dp[i], dp[i-j²] + 1)。',
      timeComplexity: 'O(n√n)：外层n次，内层√n次',
      spaceComplexity: 'O(n)：dp数组',
      followUp: [
        { question: '能用BFS做吗？', answer: '可以！从n开始，每次减去一个完全平方数，找到0的最短路径。BFS天然找最短路径。' },
        { question: '四平方和定理是什么？', answer: '任何正整数都可以表示为最多4个完全平方数之和。所以答案只可能是1,2,3,4。' },
        { question: '如何判断答案是1？', answer: '当n本身是完全平方数时，答案是1。判断方法：(int)Math.sqrt(n) * (int)Math.sqrt(n) == n' }
      ]
    }
  },
  {
    id: 'coin-change',
    title: '零钱兑换',
    titleEn: 'Coin Change',
    category: 'dp',
    difficulty: 'medium',
    description: '给你一个整数数组 coins，表示不同面额的硬币；以及一个整数 amount，表示总金额。计算并返回可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。你可以认为每种硬币的数量是无限的。',
    examples: [
      { input: 'coins = [1,2,5], amount = 11', output: '3', explanation: '11 = 5 + 5 + 1，最少3枚硬币' },
      { input: 'coins = [2], amount = 3', output: '-1', explanation: '只有面额2的硬币，无法凑出3' },
      { input: 'coins = [1], amount = 0', output: '0', explanation: '金额0不需要硬币' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '这道题和"完全平方数"有什么相似之处？', 
        hint: '都是用若干个数凑目标', 
        answer: '非常相似！都是完全背包问题。"完全平方数"用1,4,9,16...凑n，这道题用coins数组里的数凑amount。' 
      },
      { 
        step: 2, 
        question: 'dp[i]表示什么？', 
        hint: '凑出金额i需要多少硬币', 
        answer: 'dp[i]表示凑出金额i所需的最少硬币数。如果无法凑出，dp[i]保持为一个很大的值。' 
      },
      { 
        step: 3, 
        question: '状态转移方程是什么？', 
        hint: '尝试每种硬币', 
        answer: '对于每种硬币coin（coin≤i），dp[i] = min(dp[i], dp[i-coin] + 1)。用一枚coin，剩下的金额i-coin需要dp[i-coin]枚。' 
      },
      { 
        step: 4, 
        question: '如何判断无法凑出？', 
        hint: '初始值和最终值的关系', 
        answer: '初始化dp为amount+1（一个不可能的大值）。如果最后dp[amount]还是大于amount，说明无法凑出，返回-1。' 
      },
      { 
        step: 5, 
        question: '为什么用amount+1而不是Integer.MAX_VALUE？', 
        hint: '考虑+1操作', 
        answer: '因为要做dp[i-coin]+1，如果用MAX_VALUE会溢出变成负数。amount+1足够大（最多用amount个1元硬币），又不会溢出。' 
      }
    ],
    codeSteps: [
      { 
        title: '定义方法签名', 
        description: '输入硬币数组和目标金额，输出最少硬币数', 
        code: 'public int coinChange(int[] coins, int amount) {\n    // 待实现\n}', 
        explanation: '返回凑出amount的最少硬币数，无法凑出返回-1。' 
      },
      { 
        title: '创建并初始化dp数组', 
        description: '用amount+1作为"无穷大"', 
        code: 'public int coinChange(int[] coins, int amount) {\n    // dp[i] = 凑出金额i的最少硬币数\n    int[] dp = new int[amount + 1];\n    \n    // 初始化为amount+1（不可能的值）\n    Arrays.fill(dp, amount + 1);\n    \n    // 凑出0元需要0枚硬币\n    dp[0] = 0;\n}', 
        explanation: 'amount+1是一个安全的"无穷大"：比任何有效答案都大，又不会在+1时溢出。' 
      },
      { 
        title: '外层循环：遍历每个金额', 
        description: '从1到amount依次计算', 
        code: 'public int coinChange(int[] coins, int amount) {\n    int[] dp = new int[amount + 1];\n    Arrays.fill(dp, amount + 1);\n    dp[0] = 0;\n    \n    // 计算dp[1], dp[2], ..., dp[amount]\n    for (int i = 1; i <= amount; i++) {\n        // 尝试每种硬币\n    }\n}', 
        explanation: '从小到大计算，保证计算dp[i]时，所有更小的dp值已经算好了。' 
      },
      { 
        title: '内层循环：尝试每种硬币', 
        description: '遍历coins数组中的每种硬币', 
        code: 'for (int i = 1; i <= amount; i++) {\n    for (int coin : coins) {\n        // 只有当硬币面额不超过当前金额时才能用\n        if (coin <= i) {\n            // 尝试用这枚硬币\n        }\n    }\n}', 
        explanation: '用foreach遍历所有硬币。条件coin<=i确保硬币面额不超过当前要凑的金额。' 
      },
      { 
        title: '状态转移：更新最小值', 
        description: '比较使用当前硬币是否更优', 
        code: 'for (int i = 1; i <= amount; i++) {\n    for (int coin : coins) {\n        if (coin <= i) {\n            // 用一枚coin，剩下i-coin需要dp[i-coin]枚\n            dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n        }\n    }\n}', 
        explanation: '如果用一枚面额为coin的硬币，剩下的金额是i-coin，需要dp[i-coin]枚硬币，总共dp[i-coin]+1枚。' 
      },
      { 
        title: '返回结果：处理无法凑出的情况', 
        description: '检查dp[amount]是否有效', 
        code: 'public int coinChange(int[] coins, int amount) {\n    int[] dp = new int[amount + 1];\n    Arrays.fill(dp, amount + 1);\n    dp[0] = 0;\n    \n    for (int i = 1; i <= amount; i++) {\n        for (int coin : coins) {\n            if (coin <= i) {\n                dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n            }\n        }\n    }\n    \n    // 如果dp[amount]还是初始值，说明无法凑出\n    return dp[amount] > amount ? -1 : dp[amount];\n}', 
        explanation: '如果dp[amount]>amount，说明没有被更新过，无法凑出，返回-1；否则返回dp[amount]。' 
      }
    ],
    interview: {
      approach: '这是经典的完全背包问题。dp[i]表示凑出金额i的最少硬币数。对于每个金额i，尝试每种硬币coin，状态转移方程是dp[i] = min(dp[i], dp[i-coin] + 1)。初始化为amount+1避免溢出，最后检查是否能凑出。',
      timeComplexity: 'O(amount × n)：amount是金额，n是硬币种类数',
      spaceComplexity: 'O(amount)：dp数组',
      followUp: [
        { question: '如果要求凑出amount的方案数呢？', answer: '状态转移变为dp[i] += dp[i-coin]，初始dp[0]=1（凑出0有一种方案：不选任何硬币）。' },
        { question: '能用BFS做吗？', answer: '可以！从0开始，每次加一枚硬币，找到amount的最短路径。但空间复杂度可能更高。' },
        { question: '如果每种硬币只能用一次呢？', answer: '变成0-1背包问题，内层循环要倒序遍历，或者增加一个维度表示硬币使用情况。' }
      ]
    }
  },
  {
    id: 'word-break',
    title: '单词拆分',
    titleEn: 'Word Break',
    category: 'dp',
    difficulty: 'medium',
    description: '给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。',
    examples: [
      { input: 's = "leetcode", wordDict = ["leet","code"]', output: 'true', explanation: '"leetcode"可以拆分为"leet"+"code"' },
      { input: 's = "applepenapple", wordDict = ["apple","pen"]', output: 'true', explanation: '可以拆分为"apple"+"pen"+"apple"，单词可以重复使用' },
      { input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', output: 'false', explanation: '无法拆分' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: 'dp[i]应该表示什么？', 
        hint: '前i个字符能否被拆分', 
        answer: 'dp[i]表示字符串s的前i个字符（s[0..i-1]）能否被字典中的单词拼接而成。dp[i]是布尔值。' 
      },
      { 
        step: 2, 
        question: '如何判断dp[i]是否为true？', 
        hint: '枚举分割点', 
        answer: '枚举分割点j（0≤j<i）：如果dp[j]为true，且s[j..i-1]在字典中，那么dp[i]=true。意思是：前j个字符能拆分，剩下的j到i-1也是一个完整单词。' 
      },
      { 
        step: 3, 
        question: '初始条件是什么？', 
        hint: '空字符串能否被拆分', 
        answer: 'dp[0]=true，空字符串可以被"拆分"（不需要任何单词）。这是递推的起点。' 
      },
      { 
        step: 4, 
        question: '如何高效判断子串是否在字典中？', 
        hint: '什么数据结构查找快', 
        answer: '把字典转成HashSet，查找时间O(1)。否则每次查找都要遍历整个字典。' 
      },
      { 
        step: 5, 
        question: '找到一个有效分割后还需要继续吗？', 
        hint: '我们只需要判断能否拆分', 
        answer: '不需要！一旦发现dp[i]=true，就可以break跳出内层循环，继续计算dp[i+1]。' 
      }
    ],
    codeSteps: [
      { 
        title: '定义方法签名', 
        description: '输入字符串和字典，输出能否拆分', 
        code: 'public boolean wordBreak(String s, List<String> wordDict) {\n    // 待实现\n}', 
        explanation: '返回true表示s可以被字典中的单词拼接，false表示不能。' 
      },
      { 
        title: '将字典转为HashSet', 
        description: '加速单词查找', 
        code: 'public boolean wordBreak(String s, List<String> wordDict) {\n    // 用Set加速查找，O(1)时间判断单词是否在字典中\n    Set<String> dict = new HashSet<>(wordDict);\n}', 
        explanation: 'HashSet的contains方法是O(1)，比List的O(n)快得多。' 
      },
      { 
        title: '创建并初始化dp数组', 
        description: 'dp[i]表示前i个字符能否拆分', 
        code: 'public boolean wordBreak(String s, List<String> wordDict) {\n    Set<String> dict = new HashSet<>(wordDict);\n    int n = s.length();\n    \n    // dp[i] = s的前i个字符能否被拆分\n    boolean[] dp = new boolean[n + 1];\n    \n    // 空字符串可以被拆分\n    dp[0] = true;\n}', 
        explanation: '数组大小n+1，dp[0]到dp[n]。dp[0]=true是基础情况。' 
      },
      { 
        title: '外层循环：遍历每个位置', 
        description: '计算dp[1]到dp[n]', 
        code: 'public boolean wordBreak(String s, List<String> wordDict) {\n    Set<String> dict = new HashSet<>(wordDict);\n    int n = s.length();\n    boolean[] dp = new boolean[n + 1];\n    dp[0] = true;\n    \n    // 计算dp[1], dp[2], ..., dp[n]\n    for (int i = 1; i <= n; i++) {\n        // 枚举分割点j\n    }\n}', 
        explanation: 'i表示要判断前i个字符能否拆分。' 
      },
      { 
        title: '内层循环：枚举分割点', 
        description: '尝试在位置j处分割', 
        code: 'for (int i = 1; i <= n; i++) {\n    // j是分割点：前j个字符 + 第j到i-1个字符\n    for (int j = 0; j < i; j++) {\n        // 检查是否能在j处分割\n        if (dp[j] && dict.contains(s.substring(j, i))) {\n            dp[i] = true;\n            break;  // 找到一个就够了\n        }\n    }\n}', 
        explanation: 'j从0到i-1。如果dp[j]=true（前j个能拆分）且s[j..i-1]在字典中，则dp[i]=true。找到一个有效分割就break。' 
      },
      { 
        title: '返回结果', 
        description: 'dp[n]表示整个字符串能否拆分', 
        code: 'public boolean wordBreak(String s, List<String> wordDict) {\n    Set<String> dict = new HashSet<>(wordDict);\n    int n = s.length();\n    boolean[] dp = new boolean[n + 1];\n    dp[0] = true;\n    \n    for (int i = 1; i <= n; i++) {\n        for (int j = 0; j < i; j++) {\n            if (dp[j] && dict.contains(s.substring(j, i))) {\n                dp[i] = true;\n                break;\n            }\n        }\n    }\n    \n    return dp[n];\n}', 
        explanation: 'dp[n]表示s的前n个字符（即整个字符串）能否被拆分。' 
      }
    ],
    interview: {
      approach: '动态规划。dp[i]表示s的前i个字符能否被字典中的单词拼接。对于每个位置i，枚举分割点j：如果dp[j]=true且s[j..i-1]在字典中，则dp[i]=true。用HashSet加速字典查找。',
      timeComplexity: 'O(n²)：两层循环，substring也是O(n)但可以优化',
      spaceComplexity: 'O(n)：dp数组',
      followUp: [
        { question: '如果要返回所有可能的拆分方案呢？', answer: '用回溯+记忆化搜索。记录每个位置能拆分成哪些单词，然后DFS生成所有路径。' },
        { question: '能用Trie优化吗？', answer: '可以！把字典建成Trie，在枚举分割点时沿着Trie走，可以提前剪枝。' },
        { question: '如何优化substring的开销？', answer: '可以限制内层循环的范围：j只需要从i-maxWordLen到i-minWordLen，其中maxWordLen和minWordLen是字典中单词的最大和最小长度。' }
      ]
    }
  },
  {
    id: 'longest-increasing-subsequence',
    title: '最长递增子序列',
    titleEn: 'Longest Increasing Subsequence',
    category: 'dp',
    difficulty: 'medium',
    description: '给你一个整数数组 nums，找到其中最长严格递增子序列的长度。子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。',
    examples: [
      { input: 'nums = [10,9,2,5,3,7,101,18]', output: '4', explanation: '最长递增子序列是[2,3,7,101]或[2,3,7,18]，长度为4' },
      { input: 'nums = [0,1,0,3,2,3]', output: '4', explanation: '最长递增子序列是[0,1,2,3]' },
      { input: 'nums = [7,7,7,7,7,7,7]', output: '1', explanation: '所有元素相同，最长递增子序列只有一个元素' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: 'dp[i]应该表示什么？', 
        hint: '以第i个元素结尾', 
        answer: 'dp[i]表示以nums[i]结尾的最长递增子序列的长度。注意：必须以nums[i]结尾，不是前i个元素中的最长。' 
      },
      { 
        step: 2, 
        question: '如何计算dp[i]？', 
        hint: '找前面比nums[i]小的元素', 
        answer: '遍历所有j<i，如果nums[j]<nums[i]，说明nums[i]可以接在以nums[j]结尾的序列后面，dp[i] = max(dp[i], dp[j]+1)。' 
      },
      { 
        step: 3, 
        question: '初始值是什么？', 
        hint: '单个元素也是递增子序列', 
        answer: '每个dp[i]初始化为1，因为单独一个元素nums[i]本身就是长度为1的递增子序列。' 
      },
      { 
        step: 4, 
        question: '最终答案是什么？', 
        hint: '最长的不一定以最后一个元素结尾', 
        answer: '答案是所有dp[i]中的最大值，不是dp[n-1]！因为最长递增子序列不一定以数组最后一个元素结尾。' 
      },
      { 
        step: 5, 
        question: '这个解法的时间复杂度是多少？能优化吗？', 
        hint: '两层循环', 
        answer: 'O(n²)。可以用二分查找优化到O(n log n)：维护一个数组，数组中第i个位置存储长度为i+1的递增子序列的最小结尾元素。' 
      }
    ],
    codeSteps: [
      { 
        title: '定义方法签名', 
        description: '输入数组，输出最长递增子序列的长度', 
        code: 'public int lengthOfLIS(int[] nums) {\n    // 待实现\n}', 
        explanation: '返回最长严格递增子序列的长度。' 
      },
      { 
        title: '创建并初始化dp数组', 
        description: '每个位置初始化为1', 
        code: 'public int lengthOfLIS(int[] nums) {\n    int n = nums.length;\n    \n    // dp[i] = 以nums[i]结尾的LIS长度\n    int[] dp = new int[n];\n    \n    // 初始化：单个元素的LIS长度为1\n    Arrays.fill(dp, 1);\n}', 
        explanation: '每个元素自己就是一个长度为1的递增子序列，所以初始化为1。' 
      },
      { 
        title: '初始化最大长度变量', 
        description: '记录全局最大值', 
        code: 'public int lengthOfLIS(int[] nums) {\n    int n = nums.length;\n    int[] dp = new int[n];\n    Arrays.fill(dp, 1);\n    \n    // 记录最长长度，初始为1（至少有一个元素）\n    int maxLen = 1;\n}', 
        explanation: '用maxLen记录所有dp[i]中的最大值，最后返回它。' 
      },
      { 
        title: '外层循环：遍历每个位置', 
        description: '计算以每个元素结尾的LIS长度', 
        code: 'public int lengthOfLIS(int[] nums) {\n    int n = nums.length;\n    int[] dp = new int[n];\n    Arrays.fill(dp, 1);\n    int maxLen = 1;\n    \n    // 从第2个元素开始（第1个元素dp[0]=1已经确定）\n    for (int i = 1; i < n; i++) {\n        // 找前面所有比nums[i]小的元素\n    }\n}', 
        explanation: 'i从1开始，因为dp[0]=1已经是正确的（只有一个元素）。' 
      },
      { 
        title: '内层循环：找前面更小的元素', 
        description: '遍历所有j<i，更新dp[i]', 
        code: 'for (int i = 1; i < n; i++) {\n    for (int j = 0; j < i; j++) {\n        // 如果nums[j] < nums[i]，可以接在后面\n        if (nums[j] < nums[i]) {\n            dp[i] = Math.max(dp[i], dp[j] + 1);\n        }\n    }\n    // 更新全局最大值\n    maxLen = Math.max(maxLen, dp[i]);\n}', 
        explanation: '对于每个j<i，如果nums[j]<nums[i]，说明nums[i]可以接在以nums[j]结尾的序列后面，长度变为dp[j]+1。取所有可能中的最大值。' 
      },
      { 
        title: '返回最大长度', 
        description: 'maxLen就是最长递增子序列的长度', 
        code: 'public int lengthOfLIS(int[] nums) {\n    int n = nums.length;\n    int[] dp = new int[n];\n    Arrays.fill(dp, 1);\n    int maxLen = 1;\n    \n    for (int i = 1; i < n; i++) {\n        for (int j = 0; j < i; j++) {\n            if (nums[j] < nums[i]) {\n                dp[i] = Math.max(dp[i], dp[j] + 1);\n            }\n        }\n        maxLen = Math.max(maxLen, dp[i]);\n    }\n    \n    return maxLen;\n}', 
        explanation: '完整代码：初始化dp数组，双层循环计算每个dp[i]，同时更新maxLen，最后返回maxLen。' 
      }
    ],
    interview: {
      approach: '动态规划。dp[i]表示以nums[i]结尾的最长递增子序列长度。对于每个位置i，遍历前面所有位置j，如果nums[j]<nums[i]，则dp[i] = max(dp[i], dp[j]+1)。最终答案是所有dp[i]的最大值。',
      timeComplexity: 'O(n²)：两层循环',
      spaceComplexity: 'O(n)：dp数组',
      followUp: [
        { question: '如何优化到O(n log n)？', answer: '维护一个数组tails，tails[i]表示长度为i+1的LIS的最小结尾元素。遍历nums，用二分查找在tails中找到第一个>=当前元素的位置并替换。' },
        { question: '如何输出具体的最长递增子序列？', answer: '记录每个位置的前驱（从哪个位置转移来的），找到dp最大的位置后，沿着前驱回溯。' },
        { question: '如果是最长非递减子序列呢？', answer: '把条件nums[j]<nums[i]改成nums[j]<=nums[i]即可。' }
      ]
    }
  },
  {
    id: 'max-product-subarray',
    title: '乘积最大子数组',
    titleEn: 'Maximum Product Subarray',
    category: 'dp',
    difficulty: 'medium',
    description: '给你一个整数数组 nums，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。测试用例的答案是一个 32 位整数。子数组是数组的连续子序列。',
    examples: [
      { input: 'nums = [2,3,-2,4]', output: '6', explanation: '子数组[2,3]的乘积最大，为6' },
      { input: 'nums = [-2,0,-1]', output: '0', explanation: '结果不能为2，因为[-2,-1]不是连续子数组' },
      { input: 'nums = [-2,3,-4]', output: '24', explanation: '整个数组的乘积：(-2)×3×(-4)=24' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '这道题和"最大子数组和"有什么不同？', 
        hint: '乘法有什么特殊性', 
        answer: '乘法中负数×负数=正数！所以一个很小的负数乘以一个负数可能变成最大值。我们不能只记录最大值，还要记录最小值。' 
      },
      { 
        step: 2, 
        question: '需要维护哪些状态？', 
        hint: '最大和最小', 
        answer: '需要同时维护以当前位置结尾的最大乘积maxProd和最小乘积minProd。因为最小的负数乘以一个负数可能变成最大。' 
      },
      { 
        step: 3, 
        question: '状态如何转移？', 
        hint: '当前元素有三种选择', 
        answer: '对于nums[i]，新的最大值可能是：nums[i]本身、nums[i]×前一个最大值、nums[i]×前一个最小值。最小值同理。' 
      },
      { 
        step: 4, 
        question: '为什么nums[i]本身也是一个选择？', 
        hint: '想想前面乘积为0的情况', 
        answer: '如果前面的乘积是0，或者nums[i]乘以前面的结果反而变小了，那就从nums[i]重新开始。这相当于"断开"前面的子数组。' 
      },
      { 
        step: 5, 
        question: '初始值和最终答案是什么？', 
        hint: '从第一个元素开始', 
        answer: '初始maxProd=minProd=result=nums[0]。每次更新后，用maxProd更新result。最后返回result。' 
      }
    ],
    codeSteps: [
      { 
        title: '定义方法签名', 
        description: '输入数组，输出最大乘积', 
        code: 'public int maxProduct(int[] nums) {\n    // 待实现\n}', 
        explanation: '返回连续子数组的最大乘积。' 
      },
      { 
        title: '初始化状态变量', 
        description: '用第一个元素初始化', 
        code: 'public int maxProduct(int[] nums) {\n    // 以当前位置结尾的最大乘积\n    int maxProd = nums[0];\n    // 以当前位置结尾的最小乘积\n    int minProd = nums[0];\n    // 全局最大乘积\n    int result = nums[0];\n}', 
        explanation: '三个变量：maxProd记录当前最大，minProd记录当前最小（可能是负数），result记录全局最大。' 
      },
      { 
        title: '遍历数组', 
        description: '从第二个元素开始', 
        code: 'public int maxProduct(int[] nums) {\n    int maxProd = nums[0];\n    int minProd = nums[0];\n    int result = nums[0];\n    \n    // 从第二个元素开始遍历\n    for (int i = 1; i < nums.length; i++) {\n        int curr = nums[i];\n        // 计算新的最大和最小\n    }\n}', 
        explanation: '从i=1开始，因为i=0的情况已经在初始化时处理了。' 
      },
      { 
        title: '保存旧的最大值', 
        description: '因为计算最小值时需要用到旧的最大值', 
        code: 'for (int i = 1; i < nums.length; i++) {\n    int curr = nums[i];\n    \n    // 保存旧的maxProd，因为下面会被覆盖\n    int tempMax = maxProd;\n    \n    // 计算新的最大值和最小值\n}', 
        explanation: '计算新minProd时需要用旧的maxProd，但如果先更新maxProd，旧值就丢失了。所以先保存。' 
      },
      { 
        title: '更新最大值和最小值', 
        description: '三者取最大/最小', 
        code: 'for (int i = 1; i < nums.length; i++) {\n    int curr = nums[i];\n    int tempMax = maxProd;\n    \n    // 新最大 = max(当前值, 当前×旧最大, 当前×旧最小)\n    maxProd = Math.max(curr, Math.max(curr * maxProd, curr * minProd));\n    \n    // 新最小 = min(当前值, 当前×旧最大, 当前×旧最小)\n    minProd = Math.min(curr, Math.min(curr * tempMax, curr * minProd));\n    \n    // 更新全局最大\n    result = Math.max(result, maxProd);\n}', 
        explanation: '注意计算minProd时用的是tempMax（旧的maxProd），而不是新的maxProd。' 
      },
      { 
        title: '返回结果', 
        description: 'result就是最大乘积', 
        code: 'public int maxProduct(int[] nums) {\n    int maxProd = nums[0];\n    int minProd = nums[0];\n    int result = nums[0];\n    \n    for (int i = 1; i < nums.length; i++) {\n        int curr = nums[i];\n        int tempMax = maxProd;\n        \n        maxProd = Math.max(curr, Math.max(curr * maxProd, curr * minProd));\n        minProd = Math.min(curr, Math.min(curr * tempMax, curr * minProd));\n        \n        result = Math.max(result, maxProd);\n    }\n    \n    return result;\n}', 
        explanation: '完整代码：初始化三个变量，遍历数组更新最大最小值，最后返回全局最大值。' 
      }
    ],
    interview: {
      approach: '这道题的关键是负数×负数=正数，所以需要同时维护以当前位置结尾的最大乘积和最小乘积。对于每个位置，新的最大值可能来自：当前元素本身、当前元素×前一个最大值、当前元素×前一个最小值。最小值同理。',
      timeComplexity: 'O(n)：遍历一次数组',
      spaceComplexity: 'O(1)：只用几个变量',
      followUp: [
        { question: '如果数组中有0怎么办？', answer: '0会"切断"子数组，因为任何数×0=0。我们的算法已经处理了这种情况：当curr=0时，maxProd和minProd都会变成0，相当于重新开始。' },
        { question: '如果要返回具体的子数组呢？', answer: '记录maxProd取得最大值时的起始和结束位置。每次maxProd=curr时，起始位置重置为i。' },
        { question: '能用分治法做吗？', answer: '可以，类似"最大子数组和"的分治解法，但需要维护更多信息：左端最大/最小乘积、右端最大/最小乘积、整体最大/最小乘积。' }
      ]
    }
  },
  {
    id: 'partition-equal-subset-sum',
    title: '分割等和子集',
    titleEn: 'Partition Equal Subset Sum',
    category: 'dp',
    difficulty: 'medium',
    description: '给你一个只包含正整数的非空数组 nums。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。',
    examples: [
      { input: 'nums = [1,5,11,5]', output: 'true', explanation: '可以分割成[1,5,5]和[11]，和都是11' },
      { input: 'nums = [1,2,3,5]', output: 'false', explanation: '无法分割成两个和相等的子集' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '两个子集和相等意味着什么？', 
        hint: '总和的一半', 
        answer: '如果总和是sum，那么每个子集的和必须是sum/2。所以问题变成：能否从数组中选出一些数，使它们的和等于sum/2？' 
      },
      { 
        step: 2, 
        question: '什么情况下一定不可能？', 
        hint: '奇数能被2整除吗', 
        answer: '如果sum是奇数，不可能分成两个相等的整数，直接返回false。' 
      },
      { 
        step: 3, 
        question: '这个问题像什么经典问题？', 
        hint: '选或不选', 
        answer: '0-1背包问题！每个数要么选（放入子集1），要么不选（放入子集2）。目标是选出的数的和等于sum/2。' 
      },
      { 
        step: 4, 
        question: 'dp[j]表示什么？', 
        hint: '能否凑出j', 
        answer: 'dp[j]表示能否从数组中选出一些数，使它们的和等于j。dp[j]是布尔值。' 
      },
      { 
        step: 5, 
        question: '为什么内层循环要倒序？', 
        hint: '0-1背包的特点', 
        answer: '因为每个数只能用一次。如果正序，dp[j-num]可能已经被当前这个num更新过了，相当于num被用了多次。倒序保证dp[j-num]是上一轮的值。' 
      }
    ],
    codeSteps: [
      { 
        title: '定义方法签名', 
        description: '输入数组，输出能否分割', 
        code: 'public boolean canPartition(int[] nums) {\n    // 待实现\n}', 
        explanation: '返回true表示可以分割成两个和相等的子集。' 
      },
      { 
        title: '计算总和并判断奇偶', 
        description: '奇数直接返回false', 
        code: 'public boolean canPartition(int[] nums) {\n    int sum = 0;\n    for (int num : nums) {\n        sum += num;\n    }\n    \n    // 奇数无法分成两个相等的整数\n    if (sum % 2 != 0) {\n        return false;\n    }\n    \n    int target = sum / 2;  // 目标：选出和为target的子集\n}', 
        explanation: '先算总和，如果是奇数直接返回false。否则目标是凑出sum/2。' 
      },
      { 
        title: '创建并初始化dp数组', 
        description: 'dp[j]表示能否凑出j', 
        code: 'public boolean canPartition(int[] nums) {\n    int sum = 0;\n    for (int num : nums) sum += num;\n    if (sum % 2 != 0) return false;\n    int target = sum / 2;\n    \n    // dp[j] = 能否凑出和为j\n    boolean[] dp = new boolean[target + 1];\n    \n    // 凑出0总是可以的（不选任何数）\n    dp[0] = true;\n}', 
        explanation: 'dp数组大小是target+1。dp[0]=true，因为和为0可以通过不选任何数实现。' 
      },
      { 
        title: '外层循环：遍历每个数', 
        description: '考虑是否选择当前数', 
        code: 'public boolean canPartition(int[] nums) {\n    // ... 前面的代码 ...\n    \n    // 遍历每个数\n    for (int num : nums) {\n        // 更新dp数组\n    }\n}', 
        explanation: '对于每个数num，更新dp数组，考虑选或不选这个数。' 
      },
      { 
        title: '内层循环：倒序更新dp', 
        description: '从target到num倒序遍历', 
        code: 'for (int num : nums) {\n    // 倒序遍历，保证每个数只用一次\n    for (int j = target; j >= num; j--) {\n        // 如果不选num，dp[j]保持不变\n        // 如果选num，dp[j] = dp[j-num]\n        dp[j] = dp[j] || dp[j - num];\n    }\n}', 
        explanation: '倒序是关键！dp[j] = dp[j] || dp[j-num]：要么不选num（保持原值），要么选num（看dp[j-num]）。' 
      },
      { 
        title: '返回结果', 
        description: 'dp[target]表示能否凑出target', 
        code: 'public boolean canPartition(int[] nums) {\n    int sum = 0;\n    for (int num : nums) sum += num;\n    if (sum % 2 != 0) return false;\n    int target = sum / 2;\n    \n    boolean[] dp = new boolean[target + 1];\n    dp[0] = true;\n    \n    for (int num : nums) {\n        for (int j = target; j >= num; j--) {\n            dp[j] = dp[j] || dp[j - num];\n        }\n    }\n    \n    return dp[target];\n}', 
        explanation: 'dp[target]表示能否从数组中选出一些数，使它们的和等于target（即sum/2）。' 
      }
    ],
    interview: {
      approach: '这是0-1背包问题的变形。首先判断总和是否为偶数，如果是奇数直接返回false。然后目标变成：能否选出一些数使和等于sum/2。用一维dp数组，dp[j]表示能否凑出j。内层循环倒序遍历，保证每个数只用一次。',
      timeComplexity: 'O(n × target)：n是数组长度，target是sum/2',
      spaceComplexity: 'O(target)：一维dp数组',
      followUp: [
        { question: '如果要分成k个和相等的子集呢？', answer: '用回溯+剪枝，或者状态压缩DP。难度大大增加。' },
        { question: '如果要求两个子集的差最小呢？', answer: '还是0-1背包，找能凑出的最接近sum/2的值，答案是sum - 2×该值。' },
        { question: '能用位运算优化吗？', answer: '可以用bitset，dp |= dp << num，时间复杂度不变但常数更小。' }
      ]
    }
  },
  {
    id: 'longest-valid-parentheses',
    title: '最长有效括号',
    titleEn: 'Longest Valid Parentheses',
    category: 'dp',
    difficulty: 'hard',
    description: '给你一个只包含 \'(\' 和 \')\' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。',
    examples: [
      { input: 's = "(()"', output: '2', explanation: '最长有效括号子串是"()"' },
      { input: 's = ")()())"', output: '4', explanation: '最长有效括号子串是"()()"' },
      { input: 's = ""', output: '0', explanation: '空字符串' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: 'dp[i]应该表示什么？', 
        hint: '以第i个字符结尾', 
        answer: 'dp[i]表示以s[i]结尾的最长有效括号子串的长度。注意：必须以s[i]结尾。' 
      },
      { 
        step: 2, 
        question: '如果s[i]是\'(\'，dp[i]是多少？', 
        hint: '有效括号能以\'(\'结尾吗', 
        answer: 'dp[i]=0。有效括号必须以\')\'结尾，不可能以\'(\'结尾。' 
      },
      { 
        step: 3, 
        question: '如果s[i]是\')\'，有哪些情况？', 
        hint: '看s[i-1]是什么', 
        answer: '两种情况：1) s[i-1]=\'(\'，形成"...()"；2) s[i-1]=\')\'，形成"...))"，需要找到与s[i]配对的\'(\'。' 
      },
      { 
        step: 4, 
        question: '情况1：s[i-1]=\'(\'时，dp[i]怎么算？', 
        hint: '"()"前面可能还有有效括号', 
        answer: 'dp[i] = dp[i-2] + 2。"()"本身长度2，加上"()"前面的有效括号长度dp[i-2]。' 
      },
      { 
        step: 5, 
        question: '情况2：s[i-1]=\')\'时，如何找配对的\'(\'？', 
        hint: '跳过s[i-1]对应的有效括号', 
        answer: '与s[i]配对的\'(\'在位置i-1-dp[i-1]。如果该位置是\'(\'，dp[i] = dp[i-1] + 2 + dp[i-dp[i-1]-2]。' 
      }
    ],
    codeSteps: [
      { 
        title: '定义方法签名', 
        description: '输入括号字符串，输出最长有效长度', 
        code: 'public int longestValidParentheses(String s) {\n    // 待实现\n}', 
        explanation: '返回最长有效括号子串的长度。' 
      },
      { 
        title: '处理边界情况', 
        description: '空字符串或长度小于2', 
        code: 'public int longestValidParentheses(String s) {\n    int n = s.length();\n    if (n < 2) {\n        return 0;  // 长度小于2不可能有有效括号\n    }\n}', 
        explanation: '有效括号至少需要2个字符"()"。' 
      },
      { 
        title: '创建dp数组', 
        description: 'dp[i]表示以s[i]结尾的最长有效括号长度', 
        code: 'public int longestValidParentheses(String s) {\n    int n = s.length();\n    if (n < 2) return 0;\n    \n    // dp[i] = 以s[i]结尾的最长有效括号长度\n    int[] dp = new int[n];\n    int maxLen = 0;\n}', 
        explanation: 'dp数组初始化为0（Java默认）。maxLen记录全局最大值。' 
      },
      { 
        title: '遍历字符串', 
        description: '从第二个字符开始', 
        code: 'public int longestValidParentheses(String s) {\n    int n = s.length();\n    if (n < 2) return 0;\n    int[] dp = new int[n];\n    int maxLen = 0;\n    \n    // 从i=1开始，因为i=0不可能形成有效括号\n    for (int i = 1; i < n; i++) {\n        // 只处理\')\'，因为\'(\'结尾的dp值为0\n        if (s.charAt(i) == \')\') {\n            // 分情况讨论\n        }\n    }\n}', 
        explanation: '只有当s[i]=\')\'时才需要计算dp[i]，因为有效括号必须以\')\'结尾。' 
      },
      { 
        title: '情况1：s[i-1]=\'(\'', 
        description: '形成"...()"的情况', 
        code: 'if (s.charAt(i) == \')\') {\n    if (s.charAt(i - 1) == \'(\') {\n        // 形成"...()"，长度 = "()"前面的有效长度 + 2\n        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;\n    } else {\n        // s[i-1] == \')\'\n    }\n    maxLen = Math.max(maxLen, dp[i]);\n}', 
        explanation: 'i>=2时加上dp[i-2]，否则只有"()"本身，长度为2。' 
      },
      { 
        title: '情况2：s[i-1]=\')\'', 
        description: '形成"...))"的情况，需要找配对的\'(\'', 
        code: 'if (s.charAt(i - 1) == \')\') {\n    // 与s[i]配对的\'(\'的位置\n    int j = i - 1 - dp[i - 1];\n    \n    // 如果j位置是\'(\'，可以配对\n    if (j >= 0 && s.charAt(j) == \'(\') {\n        // 长度 = dp[i-1] + 2 + j前面的有效长度\n        dp[i] = dp[i - 1] + 2 + (j >= 1 ? dp[j - 1] : 0);\n    }\n}', 
        explanation: 'j = i-1-dp[i-1]是跳过s[i-1]对应的有效括号后的位置。如果s[j]=\'(\'，它与s[i]配对。' 
      },
      { 
        title: '完整代码', 
        description: '整合所有情况', 
        code: 'public int longestValidParentheses(String s) {\n    int n = s.length();\n    if (n < 2) return 0;\n    \n    int[] dp = new int[n];\n    int maxLen = 0;\n    \n    for (int i = 1; i < n; i++) {\n        if (s.charAt(i) == \')\') {\n            if (s.charAt(i - 1) == \'(\') {\n                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;\n            } else if (i - 1 - dp[i - 1] >= 0 && \n                       s.charAt(i - 1 - dp[i - 1]) == \'(\') {\n                dp[i] = dp[i - 1] + 2 + \n                        (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0);\n            }\n            maxLen = Math.max(maxLen, dp[i]);\n        }\n    }\n    \n    return maxLen;\n}', 
        explanation: '完整代码：处理两种情况，注意边界检查，最后返回maxLen。' 
      }
    ],
    interview: {
      approach: '动态规划。dp[i]表示以s[i]结尾的最长有效括号长度。只有s[i]=\')\'时dp[i]才可能非零。分两种情况：1) s[i-1]=\'(\'，形成"()"，dp[i]=dp[i-2]+2；2) s[i-1]=\')\'，需要找与s[i]配对的\'(\'，位置是i-1-dp[i-1]。',
      timeComplexity: 'O(n)：遍历一次字符串',
      spaceComplexity: 'O(n)：dp数组',
      followUp: [
        { question: '能用栈做吗？', answer: '可以！栈中存下标，遇到\'(\'入栈，遇到\')\'出栈。栈底保持一个"分隔符"下标，用于计算长度。' },
        { question: '能用O(1)空间吗？', answer: '可以！从左到右扫描一次，再从右到左扫描一次。分别用两个计数器记录\'(\'和\')\'的数量。' },
        { question: '如果要返回最长有效括号子串本身呢？', answer: '记录maxLen取得最大值时的结束位置，然后用substring截取。' }
      ]
    }
  }
];
