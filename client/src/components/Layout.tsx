import { ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { Home, BookOpen } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/bg-wedding.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Semi-transparent overlay for readability */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      </div>
      
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-200/50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">&lt;/&gt;</span>
                </div>
                <div>
                  <h1 className="font-bold text-lg text-gray-800">算法通关指南</h1>
                  <p className="text-xs text-gray-500">大厂面试必备</p>
                </div>
              </div>
            </Link>
            
            {/* Navigation Links */}
            <nav className="flex items-center gap-6">
              <Link href="/">
                <span className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                  location === '/' 
                    ? 'bg-amber-100 text-amber-700 font-medium' 
                    : 'text-gray-600 hover:bg-amber-50 hover:text-amber-600'
                }`}>
                  <Home className="w-4 h-4" />
                  首页
                </span>
              </Link>
              <Link href="/templates">
                <span className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                  location === '/templates' 
                    ? 'bg-amber-100 text-amber-700 font-medium' 
                    : 'text-gray-600 hover:bg-amber-50 hover:text-amber-600'
                }`}>
                  <BookOpen className="w-4 h-4" />
                  解题模板
                </span>
              </Link>
            </nav>
            
            {/* Empty space for balance */}
            <div className="w-32" />
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="relative z-10 pt-20">
        {children}
      </main>
    </div>
  );
}
