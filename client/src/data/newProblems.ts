import { Problem } from './problems';

// 二叉树题目 (15道)
export const binaryTreeProblems: Problem[] = [
  {
    id: 'binary-tree-inorder',
    title: '二叉树的中序遍历',
    titleEn: 'Binary Tree Inorder Traversal',
    category: 'binary-tree',
    difficulty: 'easy',
    description: '给定一个二叉树的根节点 root，返回它的中序遍历结果。',
    examples: [
      { input: 'root = [1,null,2,3]', output: '[1,3,2]', explanation: '中序遍历顺序：左-根-右' },
      { input: 'root = []', output: '[]', explanation: '空树返回空列表' }
    ],
    thinkingGuide: [
      { step: 1, question: '中序遍历的顺序是什么？', hint: '想想"中"字在哪个位置', answer: '左子树 → 根节点 → 右子树，"中"表示根节点在中间访问' },
      { step: 2, question: '如何用递归实现？', hint: '递归的三要素：终止条件、递归调用、处理当前节点', answer: '先递归左子树，再处理当前节点（加入结果），最后递归右子树' },
      { step: 3, question: '递归的终止条件是什么？', hint: '什么时候不需要继续递归？', answer: '当节点为null时返回，不再继续递归' }
    ],
    codeSteps: [
      { title: '定义方法签名', description: '输入根节点，返回整数列表', code: 'public List<Integer> inorderTraversal(TreeNode root) {\n}', explanation: '方法接收TreeNode类型的根节点' },
      { title: '创建结果列表', description: '用于存储遍历结果', code: 'public List<Integer> inorderTraversal(TreeNode root) {\n    List<Integer> result = new ArrayList<>();\n    inorder(root, result);\n    return result;\n}', explanation: 'ArrayList存储遍历顺序' },
      { title: '实现递归函数', description: '递归遍历二叉树', code: 'private void inorder(TreeNode node, List<Integer> result) {\n    if (node == null) return;\n    inorder(node.left, result);  // 左\n    result.add(node.val);        // 根\n    inorder(node.right, result); // 右\n}', explanation: '按照左-根-右的顺序递归' }
    ],
    interview: {
      approach: '中序遍历按照左-根-右的顺序访问节点，使用递归实现，先递归左子树，再处理当前节点，最后递归右子树。',
      timeComplexity: 'O(n)：访问每个节点一次',
      spaceComplexity: 'O(n)：递归栈深度',
      followUp: [
        { question: '前序、后序遍历怎么写？', answer: '前序：根-左-右；后序：左-右-根，只需调整递归中处理当前节点的位置' },
        { question: '如何用迭代实现？', answer: '使用栈模拟递归，先将所有左节点入栈，出栈时处理节点并转向右子树' }
      ]
    }
  },
  {
    id: 'max-depth',
    title: '二叉树的最大深度',
    titleEn: 'Maximum Depth of Binary Tree',
    category: 'binary-tree',
    difficulty: 'easy',
    description: '给定一个二叉树，找出其最大深度。最大深度是从根节点到最远叶子节点的最长路径上的节点数。',
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '3', explanation: '最长路径：3→20→15或3→20→7' },
      { input: 'root = [1,null,2]', output: '2', explanation: '路径：1→2' }
    ],
    thinkingGuide: [
      { step: 1, question: '树的深度如何定义？', hint: '从根到叶子的路径', answer: '从根节点到最远叶子节点的路径上的节点数' },
      { step: 2, question: '如何用递归思考？', hint: '大问题拆成小问题', answer: '树的深度 = 1 + max(左子树深度, 右子树深度)' },
      { step: 3, question: '递归终止条件？', hint: '空节点的深度是多少？', answer: '空节点深度为0' }
    ],
    codeSteps: [
      { title: '定义方法', description: '返回树的最大深度', code: 'public int maxDepth(TreeNode root) {\n}', explanation: '输入根节点，返回整数深度' },
      { title: '处理空节点', description: '递归终止条件', code: 'public int maxDepth(TreeNode root) {\n    if (root == null) return 0;\n}', explanation: '空树深度为0' },
      { title: '递归计算', description: '取左右子树深度的较大值+1', code: 'public int maxDepth(TreeNode root) {\n    if (root == null) return 0;\n    int left = maxDepth(root.left);\n    int right = maxDepth(root.right);\n    return Math.max(left, right) + 1;\n}', explanation: '当前节点深度=子树最大深度+1' }
    ],
    interview: {
      approach: '使用递归解法，树的最大深度等于左右子树最大深度的较大值加1，空节点深度为0作为递归终止条件。',
      timeComplexity: 'O(n)：访问每个节点',
      spaceComplexity: 'O(h)：h为树高度',
      followUp: [
        { question: '能用BFS实现吗？', answer: '可以，层序遍历统计层数就是最大深度' },
        { question: '最小深度怎么求？', answer: '注意最小深度是到叶子节点的距离，需要特殊处理只有一个子树的情况' }
      ]
    }
  },
  {
    id: 'invert-tree',
    title: '翻转二叉树',
    titleEn: 'Invert Binary Tree',
    category: 'binary-tree',
    difficulty: 'easy',
    description: '给你一棵二叉树的根节点 root，翻转这棵二叉树，并返回其根节点。',
    examples: [
      { input: 'root = [4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]', explanation: '左右子树互换' },
      { input: 'root = [2,1,3]', output: '[2,3,1]', explanation: '1和3互换位置' }
    ],
    thinkingGuide: [
      { step: 1, question: '翻转的含义是什么？', hint: '镜像对称', answer: '每个节点的左右子节点互换' },
      { step: 2, question: '如何递归实现？', hint: '先处理子树还是先交换？', answer: '先递归翻转左右子树，再交换当前节点的左右子节点' },
      { step: 3, question: '终止条件？', hint: '空节点怎么处理？', answer: '空节点直接返回null' }
    ],
    codeSteps: [
      { title: '定义方法', description: '翻转并返回根节点', code: 'public TreeNode invertTree(TreeNode root) {\n}', explanation: '输入输出都是TreeNode' },
      { title: '处理空节点', description: '终止条件', code: 'public TreeNode invertTree(TreeNode root) {\n    if (root == null) return null;\n}', explanation: '空树不需要翻转' },
      { title: '交换左右子树', description: '递归翻转后交换', code: 'public TreeNode invertTree(TreeNode root) {\n    if (root == null) return null;\n    TreeNode left = invertTree(root.left);\n    TreeNode right = invertTree(root.right);\n    root.left = right;\n    root.right = left;\n    return root;\n}', explanation: '先递归翻转子树，再交换' }
    ],
    interview: {
      approach: '翻转二叉树就是将每个节点的左右子节点互换，用递归实现，先递归翻转子树，再交换当前节点的左右子节点。',
      timeComplexity: 'O(n)：访问每个节点',
      spaceComplexity: 'O(h)：递归栈深度',
      followUp: [
        { question: '能用迭代实现吗？', answer: '可以用BFS或DFS迭代，用队列或栈存储待处理节点' },
        { question: '和对称二叉树有什么关系？', answer: '翻转后与原树对称' }
      ]
    }
  },
  {
    id: 'symmetric-tree',
    title: '对称二叉树',
    titleEn: 'Symmetric Tree',
    category: 'binary-tree',
    difficulty: 'easy',
    description: '给你一个二叉树的根节点 root，检查它是否轴对称。',
    examples: [
      { input: 'root = [1,2,2,3,4,4,3]', output: 'true', explanation: '左右子树镜像对称' },
      { input: 'root = [1,2,2,null,3,null,3]', output: 'false', explanation: '不对称' }
    ],
    thinkingGuide: [
      { step: 1, question: '对称的含义？', hint: '镜像', answer: '左子树和右子树互为镜像' },
      { step: 2, question: '如何判断镜像？', hint: '比较哪些节点？', answer: '左子树的左节点=右子树的右节点，左子树的右节点=右子树的左节点' },
      { step: 3, question: '需要辅助函数吗？', hint: '比较两棵子树', answer: '需要一个函数比较两个节点是否镜像对称' }
    ],
    codeSteps: [
      { title: '主函数', description: '调用辅助函数', code: 'public boolean isSymmetric(TreeNode root) {\n    return isMirror(root, root);\n}', explanation: '比较根节点与自身' },
      { title: '辅助函数签名', description: '比较两个节点', code: 'private boolean isMirror(TreeNode t1, TreeNode t2) {\n}', explanation: '判断两棵树是否镜像' },
      { title: '实现镜像判断', description: '递归比较', code: 'private boolean isMirror(TreeNode t1, TreeNode t2) {\n    if (t1 == null && t2 == null) return true;\n    if (t1 == null || t2 == null) return false;\n    return t1.val == t2.val \n        && isMirror(t1.left, t2.right) \n        && isMirror(t1.right, t2.left);\n}', explanation: '值相等且交叉子树镜像' }
    ],
    interview: {
      approach: '对称二叉树要求左右子树镜像对称，用递归比较：两个节点值相等，且左节点的左子树与右节点的右子树对称，左节点的右子树与右节点的左子树对称。',
      timeComplexity: 'O(n)：访问每个节点',
      spaceComplexity: 'O(h)：递归栈深度',
      followUp: [
        { question: '能用迭代实现吗？', answer: '可以用队列，每次取出两个节点比较，然后按镜像顺序入队子节点' },
        { question: '和翻转二叉树的关系？', answer: '对称树翻转后与自身相同' }
      ]
    }
  },
  {
    id: 'diameter-of-binary-tree',
    title: '二叉树的直径',
    titleEn: 'Diameter of Binary Tree',
    category: 'binary-tree',
    difficulty: 'easy',
    description: '给定一棵二叉树，你需要计算它的直径长度。直径是任意两个节点路径长度中的最大值，这条路径可能穿过也可能不穿过根节点。',
    examples: [
      { input: 'root = [1,2,3,4,5]', output: '3', explanation: '路径[4,2,1,3]或[5,2,1,3]长度为3' },
      { input: 'root = [1,2]', output: '1', explanation: '路径[2,1]长度为1' }
    ],
    thinkingGuide: [
      { step: 1, question: '直径如何计算？', hint: '经过某节点的最长路径', answer: '经过某节点的直径 = 左子树深度 + 右子树深度' },
      { step: 2, question: '最大直径在哪？', hint: '可能不经过根节点', answer: '遍历每个节点，记录经过该节点的最大直径' },
      { step: 3, question: '如何在求深度时顺便求直径？', hint: '全局变量记录', answer: '用成员变量记录最大直径，在递归求深度时更新' }
    ],
    codeSteps: [
      { title: '定义成员变量', description: '记录最大直径', code: 'class Solution {\n    private int maxDiameter = 0;\n}', explanation: '全局记录最大值' },
      { title: '主函数', description: '调用深度函数', code: 'public int diameterOfBinaryTree(TreeNode root) {\n    depth(root);\n    return maxDiameter;\n}', explanation: '计算完深度后返回最大直径' },
      { title: '深度函数', description: '计算深度并更新直径', code: 'private int depth(TreeNode node) {\n    if (node == null) return 0;\n    int left = depth(node.left);\n    int right = depth(node.right);\n    maxDiameter = Math.max(maxDiameter, left + right);\n    return Math.max(left, right) + 1;\n}', explanation: '左+右就是经过该节点的直径' }
    ],
    interview: {
      approach: '二叉树直径是经过某节点的最长路径，等于左子树深度加右子树深度。在递归求深度时，顺便更新全局最大直径。',
      timeComplexity: 'O(n)：访问每个节点',
      spaceComplexity: 'O(h)：递归栈深度',
      followUp: [
        { question: '路径长度是边数还是节点数？', answer: '题目中是边数，所以直接用左深度+右深度' },
        { question: '如何返回具体路径？', answer: '需要额外记录路径信息，在更新最大值时保存路径' }
      ]
    }
  },
  {
    id: 'level-order',
    title: '二叉树的层序遍历',
    titleEn: 'Binary Tree Level Order Traversal',
    category: 'binary-tree',
    difficulty: 'medium',
    description: '给你二叉树的根节点 root，返回其节点值的层序遍历（即逐层地，从左到右访问所有节点）。',
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]', explanation: '按层分组' },
      { input: 'root = [1]', output: '[[1]]', explanation: '单节点' }
    ],
    thinkingGuide: [
      { step: 1, question: '层序遍历用什么数据结构？', hint: '先进先出', answer: '队列（Queue），保证按层访问' },
      { step: 2, question: '如何区分不同层？', hint: '记录每层节点数', answer: '每次处理前记录队列大小，就是当前层的节点数' },
      { step: 3, question: '处理流程是什么？', hint: '循环处理每层', answer: '取出当前层所有节点，将它们的子节点加入队列' }
    ],
    codeSteps: [
      { title: '初始化', description: '创建结果列表和队列', code: 'public List<List<Integer>> levelOrder(TreeNode root) {\n    List<List<Integer>> result = new ArrayList<>();\n    if (root == null) return result;\n    Queue<TreeNode> queue = new LinkedList<>();\n    queue.offer(root);\n}', explanation: '队列初始放入根节点' },
      { title: '层序遍历', description: '循环处理每层', code: 'while (!queue.isEmpty()) {\n    int size = queue.size();\n    List<Integer> level = new ArrayList<>();\n    for (int i = 0; i < size; i++) {\n        TreeNode node = queue.poll();\n        level.add(node.val);\n        if (node.left != null) queue.offer(node.left);\n        if (node.right != null) queue.offer(node.right);\n    }\n    result.add(level);\n}\nreturn result;', explanation: '每层节点处理完后加入结果' }
    ],
    interview: {
      approach: '层序遍历使用BFS，用队列存储节点。关键是每次循环前记录队列大小，这就是当前层的节点数，处理完当前层后将子节点加入队列。',
      timeComplexity: 'O(n)：访问每个节点',
      spaceComplexity: 'O(n)：队列最多存一层节点',
      followUp: [
        { question: '能用DFS实现吗？', answer: '可以，递归时传入层数，将节点加入对应层的列表' },
        { question: '锯齿形层序遍历怎么做？', answer: '奇数层正常添加，偶数层反向添加，或者用双端队列' }
      ]
    }
  },
  {
    id: 'sorted-array-to-bst',
    title: '将有序数组转换为二叉搜索树',
    titleEn: 'Convert Sorted Array to BST',
    category: 'binary-tree',
    difficulty: 'easy',
    description: '给你一个整数数组 nums，其中元素已经按升序排列，请你将其转换为一棵高度平衡二叉搜索树。',
    examples: [
      { input: 'nums = [-10,-3,0,5,9]', output: '[0,-3,9,-10,null,5]', explanation: '选中间元素作为根' },
      { input: 'nums = [1,3]', output: '[3,1]', explanation: '选3或1作为根都可以' }
    ],
    thinkingGuide: [
      { step: 1, question: '为什么选中间元素作为根？', hint: '平衡', answer: '中间元素使左右子树节点数接近，保证高度平衡' },
      { step: 2, question: '如何递归构建？', hint: '分治', answer: '中间元素作为根，左半部分构建左子树，右半部分构建右子树' },
      { step: 3, question: '递归终止条件？', hint: '区间为空', answer: '当left > right时返回null' }
    ],
    codeSteps: [
      { title: '主函数', description: '调用递归函数', code: 'public TreeNode sortedArrayToBST(int[] nums) {\n    return build(nums, 0, nums.length - 1);\n}', explanation: '传入整个数组范围' },
      { title: '递归构建', description: '选中间元素建树', code: 'private TreeNode build(int[] nums, int left, int right) {\n    if (left > right) return null;\n    int mid = left + (right - left) / 2;\n    TreeNode root = new TreeNode(nums[mid]);\n    root.left = build(nums, left, mid - 1);\n    root.right = build(nums, mid + 1, right);\n    return root;\n}', explanation: '分治递归构建左右子树' }
    ],
    interview: {
      approach: '有序数组转BST，选中间元素作为根可以保证高度平衡。递归地用左半部分构建左子树，右半部分构建右子树。',
      timeComplexity: 'O(n)：每个元素处理一次',
      spaceComplexity: 'O(log n)：递归栈深度',
      followUp: [
        { question: '如果是链表怎么做？', answer: '可以用快慢指针找中点，或者先转数组' },
        { question: '如何验证是平衡的？', answer: '检查左右子树高度差不超过1' }
      ]
    }
  },
  {
    id: 'validate-bst',
    title: '验证二叉搜索树',
    titleEn: 'Validate Binary Search Tree',
    category: 'binary-tree',
    difficulty: 'medium',
    description: '给你一个二叉树的根节点 root，判断其是否是一个有效的二叉搜索树。',
    examples: [
      { input: 'root = [2,1,3]', output: 'true', explanation: '满足BST性质' },
      { input: 'root = [5,1,4,null,null,3,6]', output: 'false', explanation: '4在5的右子树但小于5' }
    ],
    thinkingGuide: [
      { step: 1, question: 'BST的性质是什么？', hint: '不只是左<根<右', answer: '左子树所有节点 < 根 < 右子树所有节点' },
      { step: 2, question: '如何验证？', hint: '传递上下界', answer: '每个节点都有一个有效范围，递归时更新范围' },
      { step: 3, question: '还有其他方法吗？', hint: '中序遍历', answer: 'BST的中序遍历是严格递增的' }
    ],
    codeSteps: [
      { title: '主函数', description: '初始范围无限制', code: 'public boolean isValidBST(TreeNode root) {\n    return validate(root, null, null);\n}', explanation: '初始上下界为null表示无限制' },
      { title: '递归验证', description: '检查范围并递归', code: 'private boolean validate(TreeNode node, Integer min, Integer max) {\n    if (node == null) return true;\n    if (min != null && node.val <= min) return false;\n    if (max != null && node.val >= max) return false;\n    return validate(node.left, min, node.val) \n        && validate(node.right, node.val, max);\n}', explanation: '左子树上界是当前值，右子树下界是当前值' }
    ],
    interview: {
      approach: '验证BST不能只比较父子节点，要确保整个子树都满足范围。用递归传递上下界，左子树的上界是当前值，右子树的下界是当前值。',
      timeComplexity: 'O(n)：访问每个节点',
      spaceComplexity: 'O(h)：递归栈深度',
      followUp: [
        { question: '用中序遍历怎么做？', answer: '中序遍历BST是严格递增的，检查是否递增即可' },
        { question: '如果有重复值怎么处理？', answer: '根据题目要求，通常BST不允许重复，或者规定重复值放左/右子树' }
      ]
    }
  },
  {
    id: 'kth-smallest-bst',
    title: '二叉搜索树中第K小的元素',
    titleEn: 'Kth Smallest Element in a BST',
    category: 'binary-tree',
    difficulty: 'medium',
    description: '给定一个二叉搜索树的根节点 root，和一个整数 k，请你设计一个算法查找其中第 k 个最小的元素。',
    examples: [
      { input: 'root = [3,1,4,null,2], k = 1', output: '1', explanation: '最小元素是1' },
      { input: 'root = [5,3,6,2,4,null,null,1], k = 3', output: '3', explanation: '第3小是3' }
    ],
    thinkingGuide: [
      { step: 1, question: 'BST的中序遍历有什么特点？', hint: '有序', answer: 'BST的中序遍历结果是升序的' },
      { step: 2, question: '如何找第k小？', hint: '中序遍历', answer: '中序遍历到第k个元素就是答案' },
      { step: 3, question: '需要遍历完整棵树吗？', hint: '提前终止', answer: '找到第k个就可以停止' }
    ],
    codeSteps: [
      { title: '定义计数器和结果', description: '记录遍历状态', code: 'class Solution {\n    private int count = 0;\n    private int result = 0;\n}', explanation: '全局变量记录' },
      { title: '中序遍历', description: '遍历到第k个停止', code: 'public int kthSmallest(TreeNode root, int k) {\n    inorder(root, k);\n    return result;\n}\n\nprivate void inorder(TreeNode node, int k) {\n    if (node == null) return;\n    inorder(node.left, k);\n    count++;\n    if (count == k) { result = node.val; return; }\n    inorder(node.right, k);\n}', explanation: '中序遍历，计数到k时记录结果' }
    ],
    interview: {
      approach: 'BST的中序遍历是升序的，所以中序遍历到第k个元素就是第k小。用计数器记录当前是第几个，到k时记录结果。',
      timeComplexity: 'O(H+k)：H是树高',
      spaceComplexity: 'O(H)：递归栈深度',
      followUp: [
        { question: '如果频繁查询怎么优化？', answer: '每个节点记录左子树大小，可以O(H)找到第k小' },
        { question: '能用迭代实现吗？', answer: '可以用栈模拟中序遍历' }
      ]
    }
  },
  {
    id: 'right-side-view',
    title: '二叉树的右视图',
    titleEn: 'Binary Tree Right Side View',
    category: 'binary-tree',
    difficulty: 'medium',
    description: '给定一个二叉树的根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。',
    examples: [
      { input: 'root = [1,2,3,null,5,null,4]', output: '[1,3,4]', explanation: '每层最右边的节点' },
      { input: 'root = [1,null,3]', output: '[1,3]', explanation: '右侧视图' }
    ],
    thinkingGuide: [
      { step: 1, question: '右视图看到的是什么？', hint: '每层最右', answer: '每一层最右边的节点' },
      { step: 2, question: '如何获取每层最右？', hint: 'BFS', answer: '层序遍历，取每层最后一个节点' },
      { step: 3, question: 'DFS能做吗？', hint: '先右后左', answer: '可以，先访问右子树，每层第一个访问的就是最右节点' }
    ],
    codeSteps: [
      { title: 'BFS初始化', description: '创建队列和结果', code: 'public List<Integer> rightSideView(TreeNode root) {\n    List<Integer> result = new ArrayList<>();\n    if (root == null) return result;\n    Queue<TreeNode> queue = new LinkedList<>();\n    queue.offer(root);\n}', explanation: '层序遍历准备' },
      { title: '层序遍历取最右', description: '每层最后一个加入结果', code: 'while (!queue.isEmpty()) {\n    int size = queue.size();\n    for (int i = 0; i < size; i++) {\n        TreeNode node = queue.poll();\n        if (i == size - 1) result.add(node.val);\n        if (node.left != null) queue.offer(node.left);\n        if (node.right != null) queue.offer(node.right);\n    }\n}\nreturn result;', explanation: '每层最后一个节点就是右视图看到的' }
    ],
    interview: {
      approach: '右视图就是每层最右边的节点，用BFS层序遍历，每层的最后一个节点就是右视图看到的。',
      timeComplexity: 'O(n)：访问每个节点',
      spaceComplexity: 'O(n)：队列存储',
      followUp: [
        { question: '左视图怎么做？', answer: '取每层第一个节点，或DFS先访问左子树' },
        { question: 'DFS解法是什么？', answer: '先访问右子树，用深度判断是否是该层第一个访问的节点' }
      ]
    }
  },
  {
    id: 'flatten-tree',
    title: '二叉树展开为链表',
    titleEn: 'Flatten Binary Tree to Linked List',
    category: 'binary-tree',
    difficulty: 'medium',
    description: '给你二叉树的根结点 root，请你将它展开为一个单链表。展开后的单链表应该同样使用 TreeNode，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null。',
    examples: [
      { input: 'root = [1,2,5,3,4,null,6]', output: '[1,null,2,null,3,null,4,null,5,null,6]', explanation: '前序遍历顺序' },
      { input: 'root = []', output: '[]', explanation: '空树' }
    ],
    thinkingGuide: [
      { step: 1, question: '展开顺序是什么？', hint: '前序遍历', answer: '按前序遍历顺序展开：根-左-右' },
      { step: 2, question: '如何原地修改？', hint: '找前驱节点', answer: '将左子树插入到根和右子树之间' },
      { step: 3, question: '具体怎么插入？', hint: '找左子树最右节点', answer: '左子树最右节点的right指向原右子树' }
    ],
    codeSteps: [
      { title: '遍历每个节点', description: '从根开始处理', code: 'public void flatten(TreeNode root) {\n    TreeNode curr = root;\n    while (curr != null) {\n    }\n}', explanation: '迭代处理每个节点' },
      { title: '处理左子树', description: '将左子树移到右边', code: 'while (curr != null) {\n    if (curr.left != null) {\n        TreeNode next = curr.left;\n        TreeNode pre = next;\n        while (pre.right != null) pre = pre.right;\n        pre.right = curr.right;\n        curr.right = next;\n        curr.left = null;\n    }\n    curr = curr.right;\n}', explanation: '左子树最右节点接原右子树' }
    ],
    interview: {
      approach: '展开为链表按前序顺序，用迭代法：对每个节点，找到左子树的最右节点，将原右子树接到它后面，然后把左子树移到右边。',
      timeComplexity: 'O(n)：访问每个节点',
      spaceComplexity: 'O(1)：原地修改',
      followUp: [
        { question: '能用递归做吗？', answer: '可以，后序遍历，先处理右子树再处理左子树' },
        { question: '空间O(1)怎么实现？', answer: '就是上面的迭代解法，不需要额外空间' }
      ]
    }
  },
  {
    id: 'construct-tree',
    title: '从前序与中序遍历序列构造二叉树',
    titleEn: 'Construct Binary Tree from Preorder and Inorder',
    category: 'binary-tree',
    difficulty: 'medium',
    description: '给定两个整数数组 preorder 和 inorder，其中 preorder 是二叉树的前序遍历，inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。',
    examples: [
      { input: 'preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]', output: '[3,9,20,null,null,15,7]', explanation: '根据遍历序列重建' },
      { input: 'preorder = [-1], inorder = [-1]', output: '[-1]', explanation: '单节点' }
    ],
    thinkingGuide: [
      { step: 1, question: '前序遍历的特点？', hint: '根在哪', answer: '前序第一个元素是根节点' },
      { step: 2, question: '中序遍历的作用？', hint: '划分左右', answer: '根节点在中序中的位置可以划分左右子树' },
      { step: 3, question: '如何递归构建？', hint: '分治', answer: '找到根，划分左右子树的前序和中序，递归构建' }
    ],
    codeSteps: [
      { title: '建立索引映射', description: '快速找根在中序的位置', code: 'private Map<Integer, Integer> indexMap = new HashMap<>();\n\npublic TreeNode buildTree(int[] preorder, int[] inorder) {\n    for (int i = 0; i < inorder.length; i++) {\n        indexMap.put(inorder[i], i);\n    }\n    return build(preorder, 0, preorder.length - 1, 0);\n}', explanation: '哈希表存储中序索引' },
      { title: '递归构建', description: '分治构建子树', code: 'private TreeNode build(int[] preorder, int preLeft, int preRight, int inLeft) {\n    if (preLeft > preRight) return null;\n    TreeNode root = new TreeNode(preorder[preLeft]);\n    int inRoot = indexMap.get(preorder[preLeft]);\n    int leftSize = inRoot - inLeft;\n    root.left = build(preorder, preLeft + 1, preLeft + leftSize, inLeft);\n    root.right = build(preorder, preLeft + leftSize + 1, preRight, inRoot + 1);\n    return root;\n}', explanation: '根据左子树大小划分区间' }
    ],
    interview: {
      approach: '前序第一个是根，在中序中找到根的位置可以划分左右子树。用哈希表优化查找，递归构建左右子树。',
      timeComplexity: 'O(n)：每个节点处理一次',
      spaceComplexity: 'O(n)：哈希表和递归栈',
      followUp: [
        { question: '后序+中序怎么做？', answer: '后序最后一个是根，其他逻辑类似' },
        { question: '为什么需要两种遍历？', answer: '单一遍历无法唯一确定树结构' }
      ]
    }
  },
  {
    id: 'path-sum-iii',
    title: '路径总和 III',
    titleEn: 'Path Sum III',
    category: 'binary-tree',
    difficulty: 'medium',
    description: '给定一个二叉树的根节点 root，和一个整数 targetSum，求该二叉树里节点值之和等于 targetSum 的路径的数目。',
    examples: [
      { input: 'root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8', output: '3', explanation: '路径：5→3, 5→2→1, -3→11' },
      { input: 'root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22', output: '3', explanation: '三条路径' }
    ],
    thinkingGuide: [
      { step: 1, question: '暴力解法是什么？', hint: '以每个节点为起点', answer: '以每个节点为起点向下找路径，O(n²)' },
      { step: 2, question: '如何优化？', hint: '前缀和', answer: '用前缀和，当前前缀和-目标=之前某个前缀和，说明中间路径和=目标' },
      { step: 3, question: '为什么要回溯？', hint: '路径是向下的', answer: '离开当前路径时要移除当前前缀和，避免影响其他路径' }
    ],
    codeSteps: [
      { title: '初始化', description: '前缀和哈希表', code: 'public int pathSum(TreeNode root, int targetSum) {\n    Map<Long, Integer> prefixSum = new HashMap<>();\n    prefixSum.put(0L, 1);\n    return dfs(root, 0, targetSum, prefixSum);\n}', explanation: '初始前缀和0出现1次' },
      { title: 'DFS遍历', description: '前缀和计数', code: 'private int dfs(TreeNode node, long currSum, int target, Map<Long, Integer> prefixSum) {\n    if (node == null) return 0;\n    currSum += node.val;\n    int count = prefixSum.getOrDefault(currSum - target, 0);\n    prefixSum.put(currSum, prefixSum.getOrDefault(currSum, 0) + 1);\n    count += dfs(node.left, currSum, target, prefixSum);\n    count += dfs(node.right, currSum, target, prefixSum);\n    prefixSum.put(currSum, prefixSum.get(currSum) - 1);\n    return count;\n}', explanation: '前缀和差值等于目标说明找到路径' }
    ],
    interview: {
      approach: '用前缀和优化，如果当前前缀和减去目标值等于之前某个前缀和，说明中间这段路径和等于目标。注意离开当前路径时要回溯。',
      timeComplexity: 'O(n)：前缀和优化',
      spaceComplexity: 'O(n)：哈希表存储前缀和',
      followUp: [
        { question: '为什么要回溯？', answer: '路径是向下的，离开当前分支后前缀和不再有效' },
        { question: '暴力解法复杂度？', answer: 'O(n²)，每个节点为起点遍历一次' }
      ]
    }
  },
  {
    id: 'lowest-common-ancestor',
    title: '二叉树的最近公共祖先',
    titleEn: 'Lowest Common Ancestor of a Binary Tree',
    category: 'binary-tree',
    difficulty: 'medium',
    description: '给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。',
    examples: [
      { input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1', output: '3', explanation: '5和1的最近公共祖先是3' },
      { input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4', output: '5', explanation: '5是4的祖先' }
    ],
    thinkingGuide: [
      { step: 1, question: '什么是最近公共祖先？', hint: '最深的共同祖先', answer: '同时是p和q祖先的最深节点' },
      { step: 2, question: '如何判断？', hint: '递归返回值', answer: '如果左右子树分别找到p和q，当前节点就是LCA' },
      { step: 3, question: '边界情况？', hint: '一个是另一个的祖先', answer: '如果当前节点就是p或q，直接返回当前节点' }
    ],
    codeSteps: [
      { title: '递归终止条件', description: '空节点或找到目标', code: 'public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n    if (root == null || root == p || root == q) return root;\n}', explanation: '找到p或q就返回' },
      { title: '递归查找', description: '在左右子树中查找', code: 'TreeNode left = lowestCommonAncestor(root.left, p, q);\nTreeNode right = lowestCommonAncestor(root.right, p, q);', explanation: '分别在左右子树查找' },
      { title: '判断结果', description: '根据左右返回值判断', code: 'if (left != null && right != null) return root;\nreturn left != null ? left : right;', explanation: '左右都有说明当前是LCA' }
    ],
    interview: {
      approach: '递归查找，如果当前节点是p或q就返回。如果左右子树分别找到p和q，当前节点就是LCA；如果只在一边找到，说明LCA在那一边。',
      timeComplexity: 'O(n)：访问每个节点',
      spaceComplexity: 'O(h)：递归栈深度',
      followUp: [
        { question: 'BST的LCA怎么做？', answer: '利用BST性质，根据值大小判断往左还是往右' },
        { question: '如果节点有父指针呢？', answer: '转化为两个链表找交点问题' }
      ]
    }
  },
  {
    id: 'max-path-sum',
    title: '二叉树中的最大路径和',
    titleEn: 'Binary Tree Maximum Path Sum',
    category: 'binary-tree',
    difficulty: 'hard',
    description: '给你一个二叉树的根节点 root，返回其最大路径和。路径被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。',
    examples: [
      { input: 'root = [1,2,3]', output: '6', explanation: '路径2→1→3' },
      { input: 'root = [-10,9,20,null,null,15,7]', output: '42', explanation: '路径15→20→7' }
    ],
    thinkingGuide: [
      { step: 1, question: '路径可以拐弯吗？', hint: '经过根节点', answer: '可以，路径可以经过某节点连接左右子树' },
      { step: 2, question: '如何计算经过某节点的最大路径？', hint: '左+根+右', answer: '左子树最大贡献 + 当前节点 + 右子树最大贡献' },
      { step: 3, question: '贡献值怎么算？', hint: '只能选一边', answer: '向上贡献只能选左或右一边，不能拐弯' }
    ],
    codeSteps: [
      { title: '全局变量', description: '记录最大路径和', code: 'class Solution {\n    private int maxSum = Integer.MIN_VALUE;\n}', explanation: '初始化为最小值' },
      { title: '递归计算', description: '计算贡献值并更新最大和', code: 'public int maxPathSum(TreeNode root) {\n    maxGain(root);\n    return maxSum;\n}\n\nprivate int maxGain(TreeNode node) {\n    if (node == null) return 0;\n    int left = Math.max(maxGain(node.left), 0);\n    int right = Math.max(maxGain(node.right), 0);\n    maxSum = Math.max(maxSum, node.val + left + right);\n    return node.val + Math.max(left, right);\n}', explanation: '负贡献取0，更新全局最大值' }
    ],
    interview: {
      approach: '递归计算每个节点的最大贡献值，负贡献取0。经过当前节点的最大路径和=左贡献+当前值+右贡献。向上贡献只能选一边，因为路径不能分叉。',
      timeComplexity: 'O(n)：访问每个节点',
      spaceComplexity: 'O(h)：递归栈深度',
      followUp: [
        { question: '为什么负贡献取0？', answer: '负贡献会减小路径和，不如不选' },
        { question: '向上贡献为什么只能选一边？', answer: '路径不能分叉，向上只能走一条路' }
      ]
    }
  }
];

// 导出新题目
export const newProblems = binaryTreeProblems;
