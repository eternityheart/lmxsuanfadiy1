// 排序算法题目数据 - 详细的思路引导和代码步骤
import { Problem, CategoryType } from './problems';

export const sortingProblems: Problem[] = [
  {
    id: 'bubble-sort',
    title: '冒泡排序',
    titleEn: 'Bubble Sort',
    category: 'sorting' as CategoryType,
    difficulty: 'easy',
    description: '冒泡排序是最简单的排序算法之一。它重复地走访要排序的数列，一次比较两个相邻的元素，如果顺序错误就把它们交换过来。就像水中的气泡一样，大的数字会慢慢"浮"到数组的末尾。',
    examples: [
      { input: 'arr = [64, 34, 25, 12, 22]', output: '[12, 22, 25, 34, 64]', explanation: '通过多轮比较和交换，将数组从小到大排序' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '你见过水里的气泡吗？大气泡会怎样？', 
        hint: '大气泡会慢慢浮到水面上',
        answer: '冒泡排序就像气泡上浮！大的数字就像大气泡，会慢慢"浮"到数组的右边（末尾）。我们每次比较相邻的两个数，如果左边的比右边的大，就交换它们的位置。'
      },
      { 
        step: 2, 
        question: '如果有数组 [5, 3, 8, 1]，第一次比较谁和谁？', 
        hint: '从最左边开始，比较第1个和第2个',
        answer: '比较5和3。因为5>3，所以交换，变成[3, 5, 8, 1]。然后比较5和8，5<8不用交换。再比较8和1，8>1交换，变成[3, 5, 1, 8]。一轮下来，最大的8已经"浮"到最右边了！'
      },
      { 
        step: 3, 
        question: '一轮结束后，数组变成[3, 5, 1, 8]，还需要继续吗？', 
        hint: '8已经在正确位置了，但3、5、1还没排好',
        answer: '继续！第二轮：比较3和5（不换）→比较5和1（交换）→得到[3, 1, 5, 8]。第三轮：比较3和1（交换）→得到[1, 3, 5, 8]。排好了！'
      },
      { 
        step: 4, 
        question: '冒泡排序的核心思想是什么？', 
        hint: '每一轮都会把一个最大的数"冒泡"到正确位置',
        answer: '核心思想：通过相邻元素的比较和交换，每一轮都把当前未排序部分的最大值"冒泡"到末尾。n个数需要n-1轮，每轮比较次数逐渐减少。'
      }
    ],
    codeSteps: [
      {
        title: '定义方法签名',
        description: '创建一个方法，接收整数数组作为参数',
        code: 'public void bubbleSort(int[] arr) {\n    int n = arr.length;\n    // 待实现\n}',
        explanation: '方法名bubbleSort，参数是要排序的数组。先获取数组长度n，后面会用到。'
      },
      {
        title: '外层循环控制轮数',
        description: 'n个数需要n-1轮比较',
        code: 'public void bubbleSort(int[] arr) {\n    int n = arr.length;\n    for (int i = 0; i < n - 1; i++) {\n        // 每轮把一个最大的数冒泡到末尾\n    }\n}',
        explanation: 'i从0到n-2，共n-1轮。为什么是n-1轮？因为排好n-1个数后，最后一个自然就在正确位置了。'
      },
      {
        title: '内层循环比较相邻元素',
        description: '每轮比较相邻的两个数',
        code: 'public void bubbleSort(int[] arr) {\n    int n = arr.length;\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = 0; j < n - 1 - i; j++) {\n            // 比较arr[j]和arr[j+1]\n        }\n    }\n}',
        explanation: 'j < n-1-i：因为每轮结束后，末尾的i个数已经排好了，不需要再比较。这是一个重要的优化！'
      },
      {
        title: '比较并交换',
        description: '如果左边的数比右边大，就交换',
        code: 'for (int j = 0; j < n - 1 - i; j++) {\n    if (arr[j] > arr[j + 1]) {\n        // 交换arr[j]和arr[j+1]\n        int temp = arr[j];\n        arr[j] = arr[j + 1];\n        arr[j + 1] = temp;\n    }\n}',
        explanation: '用临时变量temp保存arr[j]，然后交换两个数的位置。这是交换两个变量的经典写法。'
      },
      {
        title: '优化：提前结束',
        description: '如果某一轮没有发生交换，说明已经排好了',
        code: 'for (int i = 0; i < n - 1; i++) {\n    boolean swapped = false;\n    for (int j = 0; j < n - 1 - i; j++) {\n        if (arr[j] > arr[j + 1]) {\n            int temp = arr[j];\n            arr[j] = arr[j + 1];\n            arr[j + 1] = temp;\n            swapped = true;\n        }\n    }\n    if (!swapped) break; // 没有交换，提前结束\n}',
        explanation: '用swapped标记是否发生交换，如果一轮下来都没交换，说明数组已经有序，可以提前结束。'
      }
    ],
    interview: {
      approach: '冒泡排序的核心思想是通过相邻元素的比较和交换，让大的元素逐渐冒泡到数组末尾。时间复杂度是O(n²)，因为有两层嵌套循环。可以通过添加swapped标记来优化，如果某轮没有交换就提前结束。',
      timeComplexity: 'O(n²)：两层循环，每层最多n次',
      spaceComplexity: 'O(1)：只用了几个临时变量',
      followUp: [
        { question: '冒泡排序是稳定的吗？', answer: '是稳定的，因为只有当arr[j]>arr[j+1]时才交换，相等时不交换，所以相同元素的相对顺序不变。' },
        { question: '最好情况下时间复杂度是多少？', answer: '如果加了swapped优化，最好情况（已排序）是O(n)，只需要一轮比较。' }
      ]
    }
  },
  {
    id: 'selection-sort',
    title: '选择排序',
    titleEn: 'Selection Sort',
    category: 'sorting' as CategoryType,
    difficulty: 'easy',
    description: '选择排序的思想很简单：每次从未排序的部分中选出最小的元素，放到已排序部分的末尾。就像排队时，每次找出最矮的人，让他站到队伍最前面。',
    examples: [
      { input: 'arr = [64, 25, 12, 22, 11]', output: '[11, 12, 22, 25, 64]', explanation: '每次选出最小的数放到前面' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '如果让你给5个小朋友按身高排队，你会怎么做？', 
        hint: '可以每次找出最矮的那个',
        answer: '选择排序就像这样！每次从还没排好的小朋友中，找出最矮的那个，让他站到队伍最前面。然后在剩下的人中再找最矮的，站到第二个位置...以此类推。'
      },
      { 
        step: 2, 
        question: '数组[64, 25, 12, 22, 11]中，最小的数是哪个？在哪个位置？', 
        hint: '遍历整个数组，记录最小值的位置',
        answer: '最小的是11，在位置4（从0开始数）。找到后，把11和位置0的64交换，数组变成[11, 25, 12, 22, 64]。'
      },
      { 
        step: 3, 
        question: '现在11已经在正确位置了，接下来怎么做？', 
        hint: '在[25, 12, 22, 64]中找最小的',
        answer: '在位置1到4中找最小的，是12（位置2）。把12和位置1的25交换，得到[11, 12, 25, 22, 64]。继续这个过程直到排完。'
      },
      { 
        step: 4, 
        question: '选择排序和冒泡排序有什么区别？', 
        hint: '想想交换的次数',
        answer: '选择排序每轮只交换一次（找到最小值后才交换），而冒泡排序可能交换多次。选择排序的交换次数更少，但比较次数一样多。'
      }
    ],
    codeSteps: [
      {
        title: '定义方法签名',
        description: '创建选择排序方法',
        code: 'public void selectionSort(int[] arr) {\n    int n = arr.length;\n    // 待实现\n}',
        explanation: '接收数组，原地排序，不需要返回值。'
      },
      {
        title: '外层循环确定当前位置',
        description: '从位置0开始，依次确定每个位置的值',
        code: 'public void selectionSort(int[] arr) {\n    int n = arr.length;\n    for (int i = 0; i < n - 1; i++) {\n        // 找到位置i应该放的最小值\n    }\n}',
        explanation: 'i表示当前要确定的位置，从0到n-2。最后一个位置不用处理，因为前面都排好了它自然就对了。'
      },
      {
        title: '假设当前位置是最小值',
        description: '用minIdx记录最小值的位置',
        code: 'for (int i = 0; i < n - 1; i++) {\n    int minIdx = i; // 假设当前位置就是最小值\n    // 在后面找更小的\n}',
        explanation: '先假设位置i的元素是最小的，然后去后面找有没有更小的。'
      },
      {
        title: '在剩余部分找最小值',
        description: '遍历i+1到n-1，找真正的最小值',
        code: 'for (int i = 0; i < n - 1; i++) {\n    int minIdx = i;\n    for (int j = i + 1; j < n; j++) {\n        if (arr[j] < arr[minIdx]) {\n            minIdx = j; // 更新最小值位置\n        }\n    }\n}',
        explanation: 'j从i+1开始，如果arr[j]比当前最小值还小，就更新minIdx。'
      },
      {
        title: '交换到正确位置',
        description: '把最小值交换到位置i',
        code: 'for (int i = 0; i < n - 1; i++) {\n    int minIdx = i;\n    for (int j = i + 1; j < n; j++) {\n        if (arr[j] < arr[minIdx]) {\n            minIdx = j;\n        }\n    }\n    // 交换\n    int temp = arr[minIdx];\n    arr[minIdx] = arr[i];\n    arr[i] = temp;\n}',
        explanation: '找到最小值后，和位置i的元素交换。每轮只交换一次！'
      }
    ],
    interview: {
      approach: '选择排序每次从未排序部分选出最小元素，放到已排序部分末尾。时间复杂度O(n²)，但交换次数少，最多n-1次。',
      timeComplexity: 'O(n²)：两层循环，外层n次，内层平均n/2次',
      spaceComplexity: 'O(1)：只用了几个临时变量',
      followUp: [
        { question: '选择排序是稳定的吗？', answer: '不稳定。例如[5a, 5b, 3]，第一轮会把3和5a交换，变成[3, 5b, 5a]，两个5的相对顺序变了。' },
        { question: '选择排序的优势是什么？', answer: '交换次数少（最多n-1次），适合交换成本高的场景。' }
      ]
    }
  },
  {
    id: 'insertion-sort',
    title: '插入排序',
    titleEn: 'Insertion Sort',
    category: 'sorting' as CategoryType,
    difficulty: 'easy',
    description: '插入排序就像整理扑克牌：每次拿到一张新牌，就把它插入到手中已排好序的牌的正确位置。从第二张牌开始，每张牌都要找到自己的位置插进去。',
    examples: [
      { input: 'arr = [5, 2, 4, 6, 1, 3]', output: '[1, 2, 3, 4, 5, 6]', explanation: '像整理扑克牌一样，逐个插入到正确位置' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '你打牌时是怎么整理手中的牌的？', 
        hint: '每拿到一张新牌，就插到合适的位置',
        answer: '插入排序就像整理扑克牌！假设左手已经有几张排好序的牌，每次右手拿到一张新牌，就从右往左找，找到合适的位置插进去。'
      },
      { 
        step: 2, 
        question: '数组[5, 2, 4, 6, 1, 3]，第一张牌5已经"在手上"了，接下来处理谁？', 
        hint: '从第二个元素开始',
        answer: '处理2。把2拿起来（保存到临时变量），然后和左边的5比较。2<5，所以5往右移一位，2插到5原来的位置。变成[2, 5, 4, 6, 1, 3]。'
      },
      { 
        step: 3, 
        question: '现在处理4，应该插到哪里？', 
        hint: '4比5小，比2大',
        answer: '4拿起来，和5比较，4<5，5右移。再和2比较，4>2，停！4插到2和5之间。变成[2, 4, 5, 6, 1, 3]。'
      },
      { 
        step: 4, 
        question: '插入排序什么时候效率最高？', 
        hint: '想想如果数组已经基本有序会怎样',
        answer: '当数组基本有序时，插入排序效率最高！因为每个元素只需要比较很少几次就能找到位置。这是插入排序的优势。'
      }
    ],
    codeSteps: [
      {
        title: '定义方法签名',
        description: '创建插入排序方法',
        code: 'public void insertionSort(int[] arr) {\n    int n = arr.length;\n    // 待实现\n}',
        explanation: '接收数组，原地排序。'
      },
      {
        title: '从第二个元素开始遍历',
        description: '第一个元素默认已排序',
        code: 'public void insertionSort(int[] arr) {\n    int n = arr.length;\n    for (int i = 1; i < n; i++) {\n        // 把arr[i]插入到前面已排序的部分\n    }\n}',
        explanation: 'i从1开始，因为位置0的元素默认已经"在手上"了。'
      },
      {
        title: '保存当前要插入的值',
        description: '用key保存当前元素',
        code: 'for (int i = 1; i < n; i++) {\n    int key = arr[i]; // 拿起这张牌\n    int j = i - 1;    // 从左边第一张牌开始比较\n}',
        explanation: 'key保存要插入的值，j指向已排序部分的最后一个元素。'
      },
      {
        title: '向左找插入位置',
        description: '比key大的元素都往右移',
        code: 'for (int i = 1; i < n; i++) {\n    int key = arr[i];\n    int j = i - 1;\n    \n    // 比key大的元素往右移\n    while (j >= 0 && arr[j] > key) {\n        arr[j + 1] = arr[j]; // 右移\n        j--;\n    }\n}',
        explanation: 'while循环：只要j>=0且arr[j]>key，就把arr[j]右移一位，然后j--继续往左找。'
      },
      {
        title: '插入到正确位置',
        description: '把key放到j+1的位置',
        code: 'for (int i = 1; i < n; i++) {\n    int key = arr[i];\n    int j = i - 1;\n    \n    while (j >= 0 && arr[j] > key) {\n        arr[j + 1] = arr[j];\n        j--;\n    }\n    \n    arr[j + 1] = key; // 插入\n}',
        explanation: '循环结束时，j+1就是key应该插入的位置。为什么是j+1？因为循环结束时j要么是-1，要么arr[j]<=key。'
      }
    ],
    interview: {
      approach: '插入排序像整理扑克牌，每次把一个元素插入到已排序部分的正确位置。对于基本有序的数组效率很高。',
      timeComplexity: 'O(n²)：最坏情况每个元素都要移动到最前面',
      spaceComplexity: 'O(1)：原地排序，只用常数空间',
      followUp: [
        { question: '插入排序是稳定的吗？', answer: '是稳定的，因为只有arr[j]>key时才移动，相等时不移动，所以相同元素的相对顺序不变。' },
        { question: '最好情况下时间复杂度是多少？', answer: 'O(n)，当数组已经有序时，每个元素只需要比较一次。' }
      ]
    }
  },
  {
    id: 'quick-sort',
    title: '快速排序',
    titleEn: 'Quick Sort',
    category: 'sorting' as CategoryType,
    difficulty: 'medium',
    description: '快速排序是最常用的排序算法之一。它的核心思想是"分而治之"：选一个基准值，把数组分成两部分，左边都比基准小，右边都比基准大，然后递归地对两部分排序。',
    examples: [
      { input: 'arr = [10, 7, 8, 9, 1, 5]', output: '[1, 5, 7, 8, 9, 10]', explanation: '通过分治法快速排序' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '如果让你把一群人按身高分成两组，你会怎么做？', 
        hint: '找一个人当标准',
        answer: '快速排序就是这样！选一个人当"基准"，比他矮的站左边，比他高的站右边。然后对左边和右边分别再做同样的事情。'
      },
      { 
        step: 2, 
        question: '数组[10, 7, 8, 9, 1, 5]，如果选最后一个元素5作为基准，怎么分？', 
        hint: '比5小的放左边，比5大的放右边',
        answer: '遍历数组，1比5小放左边，7、8、9、10都比5大放右边。结果：[1, 5, 7, 8, 9, 10]，5已经在正确位置了！'
      },
      { 
        step: 3, 
        question: '分完之后，左边[1]和右边[7, 8, 9, 10]怎么处理？', 
        hint: '递归',
        answer: '递归！左边只有一个元素，不用排了。右边继续选基准、分区、递归...直到所有部分都只剩一个元素。'
      },
      { 
        step: 4, 
        question: '快速排序的时间复杂度是多少？', 
        hint: '取决于基准的选择',
        answer: '平均O(nlogn)，最坏O(n²)。最坏情况是每次选的基准都是最大或最小值，导致分区极不平衡。'
      }
    ],
    codeSteps: [
      {
        title: '定义主方法',
        description: '快速排序的入口',
        code: 'public void quickSort(int[] arr, int low, int high) {\n    if (low < high) {\n        // 分区并获取基准位置\n        // 递归排序左右两部分\n    }\n}',
        explanation: 'low和high是要排序的范围。只有当low<high时才需要排序。'
      },
      {
        title: '分区函数框架',
        description: '把数组分成两部分',
        code: 'private int partition(int[] arr, int low, int high) {\n    int pivot = arr[high]; // 选最后一个元素作为基准\n    int i = low - 1;       // i指向小于基准的区域的最后一个元素\n    // 遍历并分区\n    return i + 1; // 返回基准的最终位置\n}',
        explanation: 'pivot是基准值，i用来追踪小于基准的元素应该放的位置。'
      },
      {
        title: '遍历并分区',
        description: '把小于基准的元素换到左边',
        code: 'private int partition(int[] arr, int low, int high) {\n    int pivot = arr[high];\n    int i = low - 1;\n    \n    for (int j = low; j < high; j++) {\n        if (arr[j] < pivot) {\n            i++;\n            // 交换arr[i]和arr[j]\n            int temp = arr[i];\n            arr[i] = arr[j];\n            arr[j] = temp;\n        }\n    }\n    return i + 1;\n}',
        explanation: '遍历low到high-1，如果arr[j]<pivot，就把它换到左边（i的位置）。'
      },
      {
        title: '把基准放到正确位置',
        description: '基准应该在i+1的位置',
        code: 'private int partition(int[] arr, int low, int high) {\n    int pivot = arr[high];\n    int i = low - 1;\n    \n    for (int j = low; j < high; j++) {\n        if (arr[j] < pivot) {\n            i++;\n            int temp = arr[i];\n            arr[i] = arr[j];\n            arr[j] = temp;\n        }\n    }\n    \n    // 把基准放到正确位置\n    int temp = arr[i + 1];\n    arr[i + 1] = arr[high];\n    arr[high] = temp;\n    \n    return i + 1;\n}',
        explanation: '分区结束后，i+1左边都是小于基准的，右边都是大于基准的，把基准放到i+1位置。'
      },
      {
        title: '递归排序',
        description: '对左右两部分递归排序',
        code: 'public void quickSort(int[] arr, int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        \n        quickSort(arr, low, pi - 1);  // 排序左边\n        quickSort(arr, pi + 1, high); // 排序右边\n    }\n}',
        explanation: 'pi是基准的位置，它已经在正确位置了。递归排序左边[low, pi-1]和右边[pi+1, high]。'
      }
    ],
    interview: {
      approach: '快速排序使用分治法，选择一个基准值，将数组分成小于基准和大于基准两部分，然后递归排序。平均时间复杂度O(nlogn)，是实际应用中最快的排序算法之一。',
      timeComplexity: 'O(nlogn)平均，O(n²)最坏',
      spaceComplexity: 'O(logn)：递归栈空间',
      followUp: [
        { question: '如何避免最坏情况？', answer: '随机选择基准，或者选择三数取中（首、中、尾三个数的中位数）作为基准。' },
        { question: '快速排序是稳定的吗？', answer: '不稳定，因为分区时相同元素可能被交换到不同位置。' }
      ]
    }
  },
  {
    id: 'merge-sort',
    title: '归并排序',
    titleEn: 'Merge Sort',
    category: 'sorting' as CategoryType,
    difficulty: 'medium',
    description: '归并排序也是分治法的典型应用。它把数组分成两半，分别排序，然后把两个有序数组合并成一个有序数组。就像两队已经排好队的人合并成一队。',
    examples: [
      { input: 'arr = [38, 27, 43, 3, 9, 82, 10]', output: '[3, 9, 10, 27, 38, 43, 82]', explanation: '通过分治和合并实现排序' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '如果有两队已经按身高排好的人，怎么把他们合并成一队？', 
        hint: '每次比较两队最前面的人',
        answer: '每次比较两队最前面的人，谁矮谁先出列。这样合并出来的队伍也是按身高排好的！'
      },
      { 
        step: 2, 
        question: '数组[38, 27, 43, 3]怎么用归并排序？', 
        hint: '先分成两半',
        answer: '分成[38, 27]和[43, 3]。再分：[38]、[27]、[43]、[3]。然后合并：[27, 38]、[3, 43]。最后合并：[3, 27, 38, 43]。'
      },
      { 
        step: 3, 
        question: '合并[27, 38]和[3, 43]的过程是怎样的？', 
        hint: '每次取两边较小的那个',
        answer: '比较27和3，3小，取3。比较27和43，27小，取27。比较38和43，38小，取38。最后取43。结果：[3, 27, 38, 43]。'
      },
      { 
        step: 4, 
        question: '归并排序和快速排序有什么区别？', 
        hint: '想想工作是在分的时候做还是合的时候做',
        answer: '快速排序的工作在"分"的时候做（分区），归并排序的工作在"合"的时候做（合并）。归并排序是稳定的，快速排序不稳定。'
      }
    ],
    codeSteps: [
      {
        title: '定义主方法',
        description: '归并排序的入口',
        code: 'public void mergeSort(int[] arr, int left, int right) {\n    if (left < right) {\n        int mid = left + (right - left) / 2;\n        // 递归排序左右两半\n        // 合并两个有序数组\n    }\n}',
        explanation: 'left和right是要排序的范围。mid是中点，用left+(right-left)/2避免溢出。'
      },
      {
        title: '递归排序两半',
        description: '先分别排序左右两部分',
        code: 'public void mergeSort(int[] arr, int left, int right) {\n    if (left < right) {\n        int mid = left + (right - left) / 2;\n        \n        mergeSort(arr, left, mid);      // 排序左半部分\n        mergeSort(arr, mid + 1, right); // 排序右半部分\n        \n        merge(arr, left, mid, right);   // 合并\n    }\n}',
        explanation: '先递归排序左半部分[left, mid]，再递归排序右半部分[mid+1, right]，最后合并。'
      },
      {
        title: '合并函数框架',
        description: '合并两个有序数组',
        code: 'private void merge(int[] arr, int left, int mid, int right) {\n    // 创建临时数组\n    int n1 = mid - left + 1;\n    int n2 = right - mid;\n    int[] L = new int[n1];\n    int[] R = new int[n2];\n    \n    // 复制数据到临时数组\n    for (int i = 0; i < n1; i++) L[i] = arr[left + i];\n    for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];\n}',
        explanation: '创建两个临时数组L和R，分别存储左半部分和右半部分的数据。'
      },
      {
        title: '合并两个有序数组',
        description: '每次取较小的那个',
        code: 'private void merge(int[] arr, int left, int mid, int right) {\n    // ... 创建临时数组的代码 ...\n    \n    int i = 0, j = 0, k = left;\n    \n    while (i < n1 && j < n2) {\n        if (L[i] <= R[j]) {\n            arr[k] = L[i];\n            i++;\n        } else {\n            arr[k] = R[j];\n            j++;\n        }\n        k++;\n    }\n}',
        explanation: 'i指向L的当前元素，j指向R的当前元素，k指向合并后数组的当前位置。每次取较小的放入arr[k]。'
      },
      {
        title: '处理剩余元素',
        description: '把剩余的元素复制过去',
        code: '// 复制L的剩余元素\nwhile (i < n1) {\n    arr[k] = L[i];\n    i++;\n    k++;\n}\n\n// 复制R的剩余元素\nwhile (j < n2) {\n    arr[k] = R[j];\n    j++;\n    k++;\n}',
        explanation: '当一边遍历完后，另一边可能还有剩余元素，直接复制过去即可。'
      }
    ],
    interview: {
      approach: '归并排序使用分治法，先把数组分成两半分别排序，然后合并两个有序数组。时间复杂度稳定O(nlogn)，是稳定排序。',
      timeComplexity: 'O(nlogn)：分logn层，每层合并O(n)',
      spaceComplexity: 'O(n)：需要额外的临时数组',
      followUp: [
        { question: '归并排序是稳定的吗？', answer: '是稳定的，因为合并时相等元素取左边的，保持了相对顺序。' },
        { question: '归并排序的缺点是什么？', answer: '需要O(n)的额外空间，空间复杂度较高。' }
      ]
    }
  },
  {
    id: 'heap-sort',
    title: '堆排序',
    titleEn: 'Heap Sort',
    category: 'sorting' as CategoryType,
    difficulty: 'medium',
    description: '堆排序利用堆这种数据结构来排序。堆是一种完全二叉树，最大堆的每个节点都大于等于它的子节点。我们先建立最大堆，然后不断取出堆顶（最大值）放到数组末尾。',
    examples: [
      { input: 'arr = [12, 11, 13, 5, 6, 7]', output: '[5, 6, 7, 11, 12, 13]', explanation: '利用堆的性质进行排序' }
    ],
    thinkingGuide: [
      { 
        step: 1, 
        question: '什么是堆？最大堆有什么特点？', 
        hint: '想象一个金字塔',
        answer: '堆是一种完全二叉树。最大堆的特点是：每个节点都大于等于它的子节点，所以堆顶一定是最大值！'
      },
      { 
        step: 2, 
        question: '如果堆顶是最大值，怎么用它来排序？', 
        hint: '每次取出最大值放到最后',
        answer: '每次把堆顶（最大值）和数组最后一个元素交换，然后把堆的大小减1，重新调整堆。这样最大值就到了数组末尾！'
      },
      { 
        step: 3, 
        question: '如何把一个数组变成最大堆？', 
        hint: '从最后一个非叶子节点开始调整',
        answer: '从最后一个非叶子节点开始，向前遍历，对每个节点做"下沉"操作（如果比子节点小就交换）。'
      },
      { 
        step: 4, 
        question: '堆排序的时间复杂度是多少？', 
        hint: '建堆O(n)，每次调整O(logn)',
        answer: '建堆O(n)，然后n次取出堆顶并调整，每次调整O(logn)，总共O(nlogn)。'
      }
    ],
    codeSteps: [
      {
        title: '定义主方法',
        description: '堆排序的入口',
        code: 'public void heapSort(int[] arr) {\n    int n = arr.length;\n    \n    // 1. 建立最大堆\n    // 2. 依次取出堆顶\n}',
        explanation: '堆排序分两步：先建堆，再依次取出堆顶。'
      },
      {
        title: '建立最大堆',
        description: '从最后一个非叶子节点开始调整',
        code: 'public void heapSort(int[] arr) {\n    int n = arr.length;\n    \n    // 建立最大堆\n    for (int i = n / 2 - 1; i >= 0; i--) {\n        heapify(arr, n, i);\n    }\n}',
        explanation: 'n/2-1是最后一个非叶子节点的索引。从它开始向前遍历，对每个节点调用heapify。'
      },
      {
        title: '依次取出堆顶',
        description: '把堆顶和最后一个元素交换，然后调整堆',
        code: 'public void heapSort(int[] arr) {\n    int n = arr.length;\n    \n    // 建立最大堆\n    for (int i = n / 2 - 1; i >= 0; i--) {\n        heapify(arr, n, i);\n    }\n    \n    // 依次取出堆顶\n    for (int i = n - 1; i > 0; i--) {\n        // 交换堆顶和最后一个元素\n        int temp = arr[0];\n        arr[0] = arr[i];\n        arr[i] = temp;\n        \n        // 调整堆\n        heapify(arr, i, 0);\n    }\n}',
        explanation: '每次把堆顶arr[0]和arr[i]交换，然后对前i个元素调整堆。'
      },
      {
        title: 'heapify函数框架',
        description: '调整以i为根的子树为最大堆',
        code: 'private void heapify(int[] arr, int n, int i) {\n    int largest = i;      // 假设根节点最大\n    int left = 2 * i + 1; // 左子节点\n    int right = 2 * i + 2; // 右子节点\n    \n    // 找出最大的节点\n    // 如果最大的不是根，交换并递归调整\n}',
        explanation: '在数组表示的堆中，节点i的左子节点是2i+1，右子节点是2i+2。'
      },
      {
        title: '完成heapify',
        description: '找最大节点并调整',
        code: 'private void heapify(int[] arr, int n, int i) {\n    int largest = i;\n    int left = 2 * i + 1;\n    int right = 2 * i + 2;\n    \n    // 如果左子节点更大\n    if (left < n && arr[left] > arr[largest]) {\n        largest = left;\n    }\n    \n    // 如果右子节点更大\n    if (right < n && arr[right] > arr[largest]) {\n        largest = right;\n    }\n    \n    // 如果最大的不是根\n    if (largest != i) {\n        int temp = arr[i];\n        arr[i] = arr[largest];\n        arr[largest] = temp;\n        \n        heapify(arr, n, largest); // 递归调整\n    }\n}',
        explanation: '找出根、左子、右子中最大的，如果不是根就交换，然后递归调整被交换的子树。'
      }
    ],
    interview: {
      approach: '堆排序利用最大堆的性质，先建堆，然后不断取出堆顶（最大值）放到数组末尾。时间复杂度稳定O(nlogn)，原地排序。',
      timeComplexity: 'O(nlogn)：建堆O(n)，n次调整每次O(logn)',
      spaceComplexity: 'O(1)：原地排序',
      followUp: [
        { question: '堆排序是稳定的吗？', answer: '不稳定，因为堆顶和末尾元素交换时可能改变相同元素的相对顺序。' },
        { question: '堆排序的优势是什么？', answer: '时间复杂度稳定O(nlogn)，空间复杂度O(1)，适合对空间要求严格的场景。' }
      ]
    }
  }
];
