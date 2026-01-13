import Layout from '@/components/Layout';
import { Link, useSearch } from 'wouter';
import { categories, allProblems } from '@/data/problems';
import { motion } from 'framer-motion';
import { CheckCircle2, BookOpen, Code2, Target, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// 顶部装饰性标签（不可选中）
const decorativeTags = [
  { icon: '{ }', name: '哈希表', desc: 'O(1)查找' },
  { icon: '⇄', name: '双指针', desc: '左右夹逼' },
  { icon: '▭', name: '滑动窗口', desc: '动态区间' },
  { icon: '[ ]', name: '子串', desc: '字符处理' },
  { icon: '↺', name: '回溯', desc: '穷举搜索' },
  { icon: '⌖', name: '二分查找', desc: '折半查找' },
  { icon: '▤', name: '栈', desc: '后进先出' },
  { icon: '△', name: '堆', desc: '优先队列' },
  { icon: '✓', name: '贪心', desc: '局部最优' },
  { icon: '🌳', name: '二叉树', desc: '递归遍历' },
  { icon: '📊', name: '动态规划', desc: '状态转移' },
  { icon: '🔗', name: '链表', desc: '指针操作' },
  { icon: '📋', name: '数组', desc: '原地操作' },
  { icon: '⊞', name: '矩阵', desc: '二维操作' },
  { icon: '🔗', name: '图论', desc: 'BFS/DFS' },
  { icon: '💡', name: '技巧', desc: '位运算' },
  { icon: '↕', name: '排序', desc: '快排/归并' },
  { icon: '🔍', name: '查找', desc: '线性/二分' },
];

// 学习路径步骤
const learningPath = [
  { step: 1, title: '理解题意', desc: '分析问题本质', icon: Target },
  { step: 2, title: '思路推导', desc: '循循善诱引导', icon: BookOpen },
  { step: 3, title: '代码实现', desc: '逐步构建代码', icon: Code2 },
  { step: 4, title: '面试技巧', desc: '掌握表达方法', icon: MessageSquare },
];

// 分类卡片颜色配置 - 适配浅色背景
const categoryColors: { [key: string]: { bg: string; border: string; text: string; gradient: string } } = {
  'hash': { bg: 'bg-emerald-100', border: 'border-emerald-400', text: 'text-emerald-700', gradient: 'from-emerald-500 to-teal-600' },
  'two-pointer': { bg: 'bg-amber-100', border: 'border-amber-400', text: 'text-amber-700', gradient: 'from-amber-500 to-orange-600' },
  'sliding-window': { bg: 'bg-violet-100', border: 'border-violet-400', text: 'text-violet-700', gradient: 'from-violet-500 to-purple-600' },
  'substring': { bg: 'bg-pink-100', border: 'border-pink-400', text: 'text-pink-700', gradient: 'from-pink-500 to-rose-600' },
  'backtracking': { bg: 'bg-red-100', border: 'border-red-400', text: 'text-red-700', gradient: 'from-red-500 to-rose-600' },
  'binary-search': { bg: 'bg-cyan-100', border: 'border-cyan-400', text: 'text-cyan-700', gradient: 'from-cyan-500 to-blue-600' },
  'stack': { bg: 'bg-blue-100', border: 'border-blue-400', text: 'text-blue-700', gradient: 'from-blue-500 to-indigo-600' },
  'heap': { bg: 'bg-purple-100', border: 'border-purple-400', text: 'text-purple-700', gradient: 'from-purple-500 to-violet-600' },
  'greedy': { bg: 'bg-green-100', border: 'border-green-400', text: 'text-green-700', gradient: 'from-green-500 to-emerald-600' },
  'binary-tree': { bg: 'bg-teal-100', border: 'border-teal-400', text: 'text-teal-700', gradient: 'from-teal-500 to-cyan-600' },
  'dp': { bg: 'bg-orange-100', border: 'border-orange-400', text: 'text-orange-700', gradient: 'from-orange-500 to-amber-600' },
  'multi-dp': { bg: 'bg-indigo-100', border: 'border-indigo-400', text: 'text-indigo-700', gradient: 'from-indigo-500 to-blue-600' },
  'technique': { bg: 'bg-yellow-100', border: 'border-yellow-400', text: 'text-yellow-700', gradient: 'from-yellow-500 to-amber-600' },
  'graph': { bg: 'bg-rose-100', border: 'border-rose-400', text: 'text-rose-700', gradient: 'from-rose-500 to-pink-600' },
  'linked-list': { bg: 'bg-lime-100', border: 'border-lime-400', text: 'text-lime-700', gradient: 'from-lime-500 to-green-600' },
  'array': { bg: 'bg-sky-100', border: 'border-sky-400', text: 'text-sky-700', gradient: 'from-sky-500 to-blue-600' },
  'matrix': { bg: 'bg-fuchsia-100', border: 'border-fuchsia-400', text: 'text-fuchsia-700', gradient: 'from-fuchsia-500 to-purple-600' },
  'sorting': { bg: 'bg-rose-100', border: 'border-rose-400', text: 'text-rose-700', gradient: 'from-rose-500 to-red-600' },
  'searching': { bg: 'bg-cyan-100', border: 'border-cyan-400', text: 'text-cyan-700', gradient: 'from-cyan-600 to-teal-600' },
};

export default function Home() {
  const searchString = useSearch();
  const urlParams = new URLSearchParams(searchString);
  const categoryFromUrl = urlParams.get('category');
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryFromUrl ? [categoryFromUrl] : categories.map(c => c.id)
  );
  const [completedProblems, setCompletedProblems] = useState<string[]>([]);
  
  useEffect(() => {
    const saved = localStorage.getItem('completedProblems');
    if (saved) {
      setCompletedProblems(JSON.parse(saved));
    }
  }, []);
  
  // 当URL参数变化时更新选中的分类
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategories([categoryFromUrl]);
    }
  }, [categoryFromUrl]);
  
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };
  
  const selectAll = () => setSelectedCategories(categories.map(c => c.id));
  const clearAll = () => setSelectedCategories([]);
  
  const totalProblems = allProblems.length;
  const selectedProblemsCount = allProblems.filter(p => selectedCategories.includes(p.category)).length;
  
  // 获取选中分类的题目
  const filteredProblems = categories
    .filter(cat => selectedCategories.includes(cat.id))
    .map(cat => ({
      category: cat,
      problems: allProblems.filter(p => p.category === cat.id)
    }))
    .filter(group => group.problems.length > 0);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="container py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200/50"
          >
            <h1 className="text-4xl font-bold mb-2 text-gray-800">
              用<span className="text-amber-600">一套方法</span>
            </h1>
            <h1 className="text-4xl font-bold mb-6 text-gray-800">
              解决<span className="text-orange-500">多类题目</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mb-8">
              专为零基础小白设计，从思路分析到代码实现，循循善诱带你掌握算法面试核心技巧。不是死记硬背，而是理解分析问题的思考过程。
            </p>
            
            {/* Decorative Tags - Not Selectable */}
            <div className="flex flex-wrap gap-3">
              {decorativeTags.map((tag, index) => (
                <motion.div
                  key={tag.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 border border-amber-200 text-gray-600 shadow-sm"
                >
                  <span className="text-lg text-amber-600">{tag.icon}</span>
                  <div>
                    <div className="text-sm font-medium text-gray-700">{tag.name}</div>
                    <div className="text-xs text-gray-500">{tag.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Learning Path */}
        <div className="container py-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/50">
            <h2 className="text-lg font-semibold mb-6 text-gray-800">学习路径</h2>
            <div className="flex items-center justify-between max-w-4xl">
              {learningPath.map((item, index) => (
                <div key={item.step} className="flex items-center">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-md',
                      index === 0 ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' : 'bg-white text-gray-500 border border-gray-200'
                    )}>
                      {item.step}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                  {index < learningPath.length - 1 && (
                    <div className="mx-6 text-gray-400">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Category Selection */}
        <div className="container py-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/50 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-amber-600">▼</span>
                <h2 className="text-lg font-semibold text-gray-800">选择题目类别</h2>
                <span className="text-sm text-gray-500">
                  已选 {selectedCategories.length} 类，共 {selectedProblemsCount} 题
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={selectAll}
                  className="text-sm text-gray-500 hover:text-amber-600 transition-colors"
                >
                  全选
                </button>
                <span className="text-gray-400">×</span>
                <button
                  onClick={clearAll}
                  className="text-sm text-gray-500 hover:text-amber-600 transition-colors"
                >
                  清空
                </button>
              </div>
            </div>
            
            {/* Category Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {categories.map((category) => {
                const isSelected = selectedCategories.includes(category.id);
                const colors = categoryColors[category.id] || { bg: 'bg-gray-100', border: 'border-gray-400', text: 'text-gray-700', gradient: 'from-gray-500 to-gray-600' };
                const problemCount = allProblems.filter(p => p.category === category.id).length;
                
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => toggleCategory(category.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      'relative p-4 rounded-xl border-2 transition-all text-left shadow-sm',
                      isSelected
                        ? `${colors.bg} ${colors.border}`
                        : 'bg-white/80 border-gray-200 hover:border-gray-300'
                    )}
                  >
                    {/* Checkbox */}
                    <div className={cn(
                      'absolute top-3 left-3 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors',
                      isSelected
                        ? `${colors.border} ${colors.bg}`
                        : 'border-gray-300 bg-white'
                    )}>
                      {isSelected && (
                        <CheckCircle2 className={cn('w-4 h-4', colors.text)} />
                      )}
                    </div>
                    
                    <div className="pt-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={cn('text-lg', isSelected ? colors.text : 'text-gray-500')}>
                          {category.icon}
                        </span>
                        <span className={cn(
                          'font-medium',
                          isSelected ? colors.text : 'text-gray-700'
                        )}>
                          {category.name}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {problemCount} 题
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
          
          {/* Problem List by Category */}
          <div className="space-y-6">
            {filteredProblems.map(({ category, problems: categoryProblems }) => {
              const colors = categoryColors[category.id] || { bg: 'bg-gray-100', border: 'border-gray-400', text: 'text-gray-700', gradient: 'from-gray-500 to-gray-600' };
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl border border-amber-200/50 overflow-hidden shadow-lg"
                >
                  {/* Category Header */}
                  <div className={cn('px-5 py-4 bg-gradient-to-r text-white', colors.gradient)}>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{category.icon}</span>
                      <div>
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-white/80">{categoryProblems.length} 道题目</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Problems List */}
                  <div className="divide-y divide-gray-100">
                    {categoryProblems.map((problem, index) => {
                      const isCompleted = completedProblems.includes(problem.id);
                      
                      return (
                        <Link
                          key={problem.id}
                          href={`/problem/${problem.id}`}
                        >
                          <motion.div
                            whileHover={{ backgroundColor: 'rgba(251, 191, 36, 0.1)' }}
                            className="px-5 py-3 flex items-center justify-between cursor-pointer"
                          >
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-gray-400 font-mono w-8">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <span className="font-medium text-gray-800">{problem.title}</span>
                              <span className={cn(
                                'text-xs px-2 py-0.5 rounded font-medium',
                                problem.difficulty === 'easy' && 'bg-green-100 text-green-700',
                                problem.difficulty === 'medium' && 'bg-amber-100 text-amber-700',
                                problem.difficulty === 'hard' && 'bg-red-100 text-red-700'
                              )}>
                                {problem.difficulty === 'easy' ? '简单' : problem.difficulty === 'medium' ? '中等' : '困难'}
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              {isCompleted && (
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                              )}
                              <span className="text-amber-500">→</span>
                            </div>
                          </motion.div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Empty State */}
          {filteredProblems.length === 0 && (
            <div className="text-center py-20 bg-white/60 backdrop-blur-sm rounded-2xl">
              <p className="text-gray-500">请选择至少一个题目类别</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
