// 查找算法题目数据 - 详细的思路引导和代码步骤
import { Problem, CategoryType } from './problems';

export const searchingProblems: Problem[] = [
  {
    id: 'linear-search',
    title: '线性查找',
    titleEn: 'Linear Search',
    category: 'searching' as CategoryType,
    difficulty: 'easy',
    description: '线性查找是最简单的查找算法。它从数组的第一个元素开始，逐个检查每个元素，直到找到目标值或遍历完整个数组。就像在书架上一本一本地找书。',
    examples: [
      { input: 'arr = [10, 20, 30, 40, 50], target = 30', output: '2', explanation: '30在索引2的位置' },
      { input: 'arr = [10, 20, 30, 40, 50], target = 35', output: '-1', explanation: '35不在数组中' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '如果让你在一排书中找一本特定的书，你会怎么做？', 
        hint: '最简单的方法',
        answer: '从第一本开始，一本一本地看书名，直到找到为止。这就是线性查找的思想！'
      },
      { 
        step: 2, 
        question: '在数组[10, 20, 30, 40, 50]中找30，需要检查几次？', 
        hint: '从头开始数',
        answer: '检查10（不是）→检查20（不是）→检查30（找到了！）。需要检查3次。'
      },
      { 
        step: 3, 
        question: '如果要找的数不在数组中，怎么办？', 
        hint: '遍历完整个数组',
        answer: '遍历完整个数组都没找到，就返回-1表示"没找到"。'
      },
      { 
        step: 4, 
        question: '线性查找的时间复杂度是多少？', 
        hint: '最坏情况要遍历整个数组',
        answer: 'O(n)，最坏情况下要检查所有n个元素。'
      }
    ],
    codeSteps: [
      {
        title: '定义方法签名',
        description: '接收数组和目标值，返回索引',
        code: 'public int linearSearch(int[] arr, int target) {\n    // 遍历数组查找\n    return -1; // 没找到\n}',
        explanation: '返回目标值的索引，如果没找到返回-1。'
      },
      {
        title: '遍历数组',
        description: '从头到尾检查每个元素',
        code: 'public int linearSearch(int[] arr, int target) {\n    for (int i = 0; i < arr.length; i++) {\n        // 检查arr[i]是否等于target\n    }\n    return -1;\n}',
        explanation: 'i从0到arr.length-1，遍历每个元素。'
      },
      {
        title: '检查并返回',
        description: '找到就返回索引',
        code: 'public int linearSearch(int[] arr, int target) {\n    for (int i = 0; i < arr.length; i++) {\n        if (arr[i] == target) {\n            return i; // 找到了，返回索引\n        }\n    }\n    return -1; // 没找到\n}',
        explanation: '如果arr[i]==target，说明找到了，立即返回索引i。'
      }
    ],
    interview: {
      approach: '线性查找从数组第一个元素开始，逐个检查每个元素，直到找到目标值或遍历完整个数组。简单直观，适用于无序数组。',
      timeComplexity: 'O(n)：最坏情况遍历整个数组',
      spaceComplexity: 'O(1)：只用了常数空间',
      followUp: [
        { question: '线性查找的优缺点是什么？', answer: '优点：简单，适用于任何数组（有序无序都可以）。缺点：效率低，大数据量时很慢。' },
        { question: '什么时候用线性查找？', answer: '数据量小、数组无序、只查找一次时适合用线性查找。' }
      ]
    }
  },
  {
    id: 'binary-search-basic',
    title: '二分查找（基础）',
    titleEn: 'Binary Search (Basic)',
    category: 'searching' as CategoryType,
    difficulty: 'easy',
    description: '二分查找是一种高效的查找算法，但要求数组必须是有序的。它每次比较中间元素，如果目标值小于中间元素就在左半部分找，否则在右半部分找。每次都能排除一半的元素！',
    examples: [
      { input: 'arr = [1, 3, 5, 7, 9, 11, 13], target = 7', output: '3', explanation: '7在索引3的位置' },
      { input: 'arr = [1, 3, 5, 7, 9, 11, 13], target = 6', output: '-1', explanation: '6不在数组中' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '猜数字游戏：1-100中猜一个数，每次告诉你"大了"或"小了"，最少几次能猜中？', 
        hint: '每次猜中间的数',
        answer: '最多7次！每次猜中间的数，就能排除一半。100→50→25→12→6→3→1或2。这就是二分查找的思想！'
      },
      { 
        step: 2, 
        question: '在有序数组[1, 3, 5, 7, 9, 11, 13]中找7，怎么用二分法？', 
        hint: '先看中间的数',
        answer: '中间是7（索引3），正好就是要找的！如果找9：中间是7，9>7，在右半部分[9, 11, 13]中找。'
      },
      { 
        step: 3, 
        question: '二分查找的前提条件是什么？', 
        hint: '数组必须...',
        answer: '数组必须是有序的！如果数组无序，二分查找就不能用了。'
      },
      { 
        step: 4, 
        question: '二分查找的时间复杂度是多少？', 
        hint: '每次排除一半',
        answer: 'O(logn)，因为每次都能排除一半的元素，最多需要log₂n次比较。'
      }
    ],
    codeSteps: [
      {
        title: '定义方法和边界',
        description: '用left和right表示查找范围',
        code: 'public int binarySearch(int[] arr, int target) {\n    int left = 0;\n    int right = arr.length - 1;\n    // 在[left, right]范围内查找\n    return -1;\n}',
        explanation: 'left和right是查找范围的左右边界，初始是整个数组。'
      },
      {
        title: '循环查找',
        description: '当left<=right时继续查找',
        code: 'public int binarySearch(int[] arr, int target) {\n    int left = 0;\n    int right = arr.length - 1;\n    \n    while (left <= right) {\n        // 计算中间位置\n        // 比较并缩小范围\n    }\n    return -1;\n}',
        explanation: 'left<=right表示还有元素可查。如果left>right说明没找到。'
      },
      {
        title: '计算中间位置',
        description: '避免溢出的写法',
        code: 'while (left <= right) {\n    int mid = left + (right - left) / 2;\n    // 比较arr[mid]和target\n}',
        explanation: '用left+(right-left)/2而不是(left+right)/2，避免整数溢出。'
      },
      {
        title: '比较并缩小范围',
        description: '根据比较结果决定往左还是往右',
        code: 'while (left <= right) {\n    int mid = left + (right - left) / 2;\n    \n    if (arr[mid] == target) {\n        return mid; // 找到了\n    } else if (arr[mid] < target) {\n        left = mid + 1; // 在右半部分找\n    } else {\n        right = mid - 1; // 在左半部分找\n    }\n}',
        explanation: '如果arr[mid]==target，找到了。如果arr[mid]<target，目标在右边，left=mid+1。否则目标在左边，right=mid-1。'
      }
    ],
    interview: {
      approach: '二分查找在有序数组中，每次比较中间元素，根据比较结果排除一半的元素。时间复杂度O(logn)，非常高效。',
      timeComplexity: 'O(logn)：每次排除一半',
      spaceComplexity: 'O(1)：只用了常数空间',
      followUp: [
        { question: '为什么用left+(right-left)/2而不是(left+right)/2？', answer: '避免整数溢出。当left和right都很大时，left+right可能超过int的最大值。' },
        { question: '如果数组有重复元素，怎么找第一个等于target的位置？', answer: '找到target后不立即返回，而是继续在左半部分找，直到找不到为止。' }
      ]
    }
  },
  {
    id: 'binary-search-first',
    title: '二分查找第一个位置',
    titleEn: 'Binary Search First Position',
    category: 'searching' as CategoryType,
    difficulty: 'medium',
    description: '在有序数组中查找目标值第一次出现的位置。如果数组中有多个相同的目标值，返回最左边那个的索引。',
    examples: [
      { input: 'arr = [1, 2, 2, 2, 3, 4], target = 2', output: '1', explanation: '第一个2在索引1的位置' },
      { input: 'arr = [1, 2, 2, 2, 3, 4], target = 5', output: '-1', explanation: '5不在数组中' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '在[1, 2, 2, 2, 3, 4]中找第一个2，普通二分查找会返回什么？', 
        hint: '中间的2',
        answer: '普通二分查找可能返回索引2或3（中间的2），但我们要的是第一个2（索引1）。'
      },
      { 
        step: 2, 
        question: '找到一个2后，怎么确定它是不是第一个？', 
        hint: '看它左边还有没有2',
        answer: '找到2后，不要立即返回，继续在左半部分找。如果左边还有2，就更新答案。'
      },
      { 
        step: 3, 
        question: '什么时候停止查找？', 
        hint: '左边没有2了',
        answer: '当left>right时停止。此时记录的答案就是第一个2的位置。'
      },
      { 
        step: 4, 
        question: '如果数组中没有目标值，怎么处理？', 
        hint: '答案的初始值',
        answer: '答案初始化为-1。如果从没找到过目标值，最后返回-1。'
      }
    ],
    codeSteps: [
      {
        title: '定义方法和变量',
        description: '用result记录答案',
        code: 'public int searchFirst(int[] arr, int target) {\n    int left = 0;\n    int right = arr.length - 1;\n    int result = -1; // 记录答案\n    \n    // 二分查找\n    return result;\n}',
        explanation: 'result初始化为-1，表示还没找到。'
      },
      {
        title: '二分查找框架',
        description: '标准的二分查找循环',
        code: 'while (left <= right) {\n    int mid = left + (right - left) / 2;\n    \n    if (arr[mid] == target) {\n        // 找到了，但可能不是第一个\n    } else if (arr[mid] < target) {\n        left = mid + 1;\n    } else {\n        right = mid - 1;\n    }\n}',
        explanation: '基本框架和普通二分查找一样。'
      },
      {
        title: '找到后继续往左找',
        description: '记录答案并继续在左半部分查找',
        code: 'if (arr[mid] == target) {\n    result = mid;      // 记录当前位置\n    right = mid - 1;   // 继续在左半部分找\n}',
        explanation: '找到target后，记录位置，然后继续在左边找，看有没有更靠前的。'
      },
      {
        title: '完整代码',
        description: '组合所有部分',
        code: 'public int searchFirst(int[] arr, int target) {\n    int left = 0;\n    int right = arr.length - 1;\n    int result = -1;\n    \n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        \n        if (arr[mid] == target) {\n            result = mid;\n            right = mid - 1; // 继续往左找\n        } else if (arr[mid] < target) {\n            left = mid + 1;\n        } else {\n            right = mid - 1;\n        }\n    }\n    \n    return result;\n}',
        explanation: '关键是找到target后不立即返回，而是记录并继续往左找。'
      }
    ],
    interview: {
      approach: '在标准二分查找的基础上，找到目标值后不立即返回，而是记录位置并继续在左半部分查找，直到找不到为止。',
      timeComplexity: 'O(logn)：仍然是二分查找',
      spaceComplexity: 'O(1)：只用了常数空间',
      followUp: [
        { question: '如何找最后一个等于target的位置？', answer: '找到后记录位置，然后继续在右半部分找（left=mid+1）。' },
        { question: '如何找第一个大于等于target的位置？', answer: '当arr[mid]>=target时记录并往左找，否则往右找。' }
      ]
    }
  },
  {
    id: 'binary-search-last',
    title: '二分查找最后一个位置',
    titleEn: 'Binary Search Last Position',
    category: 'searching' as CategoryType,
    difficulty: 'medium',
    description: '在有序数组中查找目标值最后一次出现的位置。如果数组中有多个相同的目标值，返回最右边那个的索引。',
    examples: [
      { input: 'arr = [1, 2, 2, 2, 3, 4], target = 2', output: '3', explanation: '最后一个2在索引3的位置' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '找最后一个2和找第一个2有什么区别？', 
        hint: '往哪边继续找',
        answer: '找第一个往左找，找最后一个往右找。找到2后，继续在右半部分找。'
      },
      { 
        step: 2, 
        question: '找到一个2后，怎么继续？', 
        hint: '更新left还是right',
        answer: '记录当前位置，然后left=mid+1，继续在右半部分找。'
      }
    ],
    codeSteps: [
      {
        title: '定义方法和变量',
        description: '和找第一个类似',
        code: 'public int searchLast(int[] arr, int target) {\n    int left = 0;\n    int right = arr.length - 1;\n    int result = -1;\n    \n    // 二分查找\n    return result;\n}',
        explanation: '框架和找第一个一样。'
      },
      {
        title: '找到后继续往右找',
        description: '记录答案并继续在右半部分查找',
        code: 'while (left <= right) {\n    int mid = left + (right - left) / 2;\n    \n    if (arr[mid] == target) {\n        result = mid;\n        left = mid + 1; // 继续往右找\n    } else if (arr[mid] < target) {\n        left = mid + 1;\n    } else {\n        right = mid - 1;\n    }\n}',
        explanation: '关键区别：找到target后，left=mid+1，继续往右找。'
      }
    ],
    interview: {
      approach: '找到目标值后记录位置，然后继续在右半部分查找，直到找不到为止。',
      timeComplexity: 'O(logn)',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '如何同时找第一个和最后一个位置？', answer: '分别调用两个函数，或者用一个函数加参数控制方向。' }
      ]
    }
  },
  {
    id: 'binary-search-rotated',
    title: '旋转数组查找',
    titleEn: 'Search in Rotated Sorted Array',
    category: 'searching' as CategoryType,
    difficulty: 'medium',
    description: '在旋转排序数组中查找目标值。旋转数组是将有序数组的某个位置"切开"，把前半部分移到后面。例如[4,5,6,7,0,1,2]是[0,1,2,4,5,6,7]旋转后的结果。',
    examples: [
      { input: 'arr = [4, 5, 6, 7, 0, 1, 2], target = 0', output: '4', explanation: '0在索引4的位置' },
      { input: 'arr = [4, 5, 6, 7, 0, 1, 2], target = 3', output: '-1', explanation: '3不在数组中' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '旋转数组[4, 5, 6, 7, 0, 1, 2]有什么特点？', 
        hint: '分成两段',
        answer: '分成两段有序的部分：[4, 5, 6, 7]和[0, 1, 2]。前一段的所有元素都大于后一段。'
      },
      { 
        step: 2, 
        question: '怎么判断mid在哪一段？', 
        hint: '和arr[left]比较',
        answer: '如果arr[mid]>=arr[left]，说明mid在前半段（较大的那段）。否则在后半段。'
      },
      { 
        step: 3, 
        question: '知道mid在哪一段后，怎么决定往左还是往右？', 
        hint: '判断target在不在有序的那一段',
        answer: '如果mid在前半段，那[left, mid]是有序的。判断target是否在这个范围内，如果在就往左找，否则往右找。'
      }
    ],
    codeSteps: [
      {
        title: '定义方法和边界',
        description: '标准二分查找框架',
        code: 'public int search(int[] arr, int target) {\n    int left = 0;\n    int right = arr.length - 1;\n    \n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        \n        if (arr[mid] == target) {\n            return mid;\n        }\n        \n        // 判断mid在哪一段，然后决定方向\n    }\n    return -1;\n}',
        explanation: '基本框架和普通二分查找一样，关键是如何决定方向。'
      },
      {
        title: '判断mid在哪一段',
        description: '和arr[left]比较',
        code: 'if (arr[mid] >= arr[left]) {\n    // mid在前半段（左边有序）\n} else {\n    // mid在后半段（右边有序）\n}',
        explanation: 'arr[mid]>=arr[left]说明mid在前半段，此时[left, mid]是有序的。'
      },
      {
        title: 'mid在前半段的情况',
        description: '判断target是否在[left, mid]范围内',
        code: 'if (arr[mid] >= arr[left]) {\n    // 左边有序\n    if (target >= arr[left] && target < arr[mid]) {\n        right = mid - 1; // target在左边\n    } else {\n        left = mid + 1;  // target在右边\n    }\n}',
        explanation: '如果target在[arr[left], arr[mid])范围内，就往左找，否则往右找。'
      },
      {
        title: 'mid在后半段的情况',
        description: '判断target是否在[mid, right]范围内',
        code: 'else {\n    // 右边有序\n    if (target > arr[mid] && target <= arr[right]) {\n        left = mid + 1;  // target在右边\n    } else {\n        right = mid - 1; // target在左边\n    }\n}',
        explanation: '如果target在(arr[mid], arr[right]]范围内，就往右找，否则往左找。'
      }
    ],
    interview: {
      approach: '旋转数组分成两段有序部分。每次二分时，先判断mid在哪一段，然后判断target在不在有序的那一段，从而决定搜索方向。',
      timeComplexity: 'O(logn)：仍然是二分查找',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '如果数组有重复元素怎么办？', answer: '当arr[left]==arr[mid]==arr[right]时，无法判断mid在哪一段，需要left++和right--缩小范围。最坏情况退化为O(n)。' }
      ]
    }
  },
  {
    id: 'binary-search-sqrt',
    title: '求平方根',
    titleEn: 'Square Root',
    category: 'searching' as CategoryType,
    difficulty: 'easy',
    description: '计算并返回x的平方根（只保留整数部分）。例如sqrt(8)=2，因为2²=4<8<9=3²。',
    examples: [
      { input: 'x = 8', output: '2', explanation: '8的平方根是2.828...，整数部分是2' },
      { input: 'x = 4', output: '2', explanation: '4的平方根正好是2' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '怎么找8的平方根的整数部分？', 
        hint: '找一个数n，使得n²<=8<(n+1)²',
        answer: '我们要找最大的n，使得n²<=8。1²=1<=8，2²=4<=8，3²=9>8。所以答案是2。'
      },
      { 
        step: 2, 
        question: '怎么用二分法来找？', 
        hint: '在[1, x]范围内找',
        answer: '在[1, x]范围内二分查找。如果mid²<=x，说明mid可能是答案或者答案更大，往右找。如果mid²>x，说明mid太大了，往左找。'
      },
      { 
        step: 3, 
        question: '为什么要记录答案而不是直接返回？', 
        hint: '我们要找的是最大的满足条件的数',
        answer: '因为我们要找最大的n使得n²<=x。每次找到满足条件的mid，都要记录下来，然后继续往右找看有没有更大的。'
      }
    ],
    codeSteps: [
      {
        title: '处理特殊情况',
        description: 'x为0或1时直接返回',
        code: 'public int mySqrt(int x) {\n    if (x < 2) return x;\n    \n    // 二分查找\n}',
        explanation: '0的平方根是0，1的平方根是1，直接返回。'
      },
      {
        title: '定义查找范围',
        description: '在[1, x/2]范围内查找',
        code: 'public int mySqrt(int x) {\n    if (x < 2) return x;\n    \n    int left = 1;\n    int right = x / 2; // 平方根不会超过x/2\n    int result = 1;\n    \n    // 二分查找\n    return result;\n}',
        explanation: '当x>=2时，sqrt(x)<=x/2，所以right可以设为x/2。'
      },
      {
        title: '二分查找',
        description: '找最大的n使得n²<=x',
        code: 'while (left <= right) {\n    int mid = left + (right - left) / 2;\n    \n    if ((long)mid * mid <= x) {\n        result = mid;      // mid可能是答案\n        left = mid + 1;    // 继续往右找更大的\n    } else {\n        right = mid - 1;   // mid太大了\n    }\n}',
        explanation: '注意mid*mid可能溢出，要转成long。如果mid²<=x，记录答案并往右找。'
      }
    ],
    interview: {
      approach: '用二分查找在[1, x/2]范围内找最大的n使得n²<=x。每次找到满足条件的mid就记录，然后继续往右找。',
      timeComplexity: 'O(logx)：二分查找',
      spaceComplexity: 'O(1)',
      followUp: [
        { question: '还有什么方法可以求平方根？', answer: '牛顿迭代法，收敛更快。公式：x_{n+1} = (x_n + a/x_n) / 2' }
      ]
    }
  }
];
