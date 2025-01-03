// blog.tsx
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBlogPosts } from '@/utils/utils';
import { BlogList } from '@/components/BlogList';
import { categories } from './data';
import Header from '@/components/header';

const Blog: React.FC = () => {
  const { data: posts, isLoading: loading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: getBlogPosts
  });
  
  const [showCreate, setShowCreate] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center py-8 text-red-500">
          {error instanceof Error ? error.message : 'An error occurred'}
          <button
            onClick={() => window.location.reload()}
            className="ml-4 text-blue-500 hover:text-blue-700 underline"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  const filteredPosts = posts?.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.categories.includes(selectedCategory) : true;
    return matchesSearch && matchesCategory;
  }) ?? [];


  return (
    <div className="min-h-screen bg-gray-50 w-screen">
      <Header />
      <nav className="bg-white shadow-sm hidden">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">TypeScript Blog</h1>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              onClick={() => setShowCreate(!showCreate)}
            >
              {showCreate ? 'Cancel' : 'New Post'}
            </button>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8 sm:pt-16">
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Search posts..."
              className="flex-1 p-2 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="p-2 border rounded hidden"
              value={selectedCategory || ''}
              onChange={(e) => setSelectedCategory(e.target.value ? Number(e.target.value) : null)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <BlogList
              posts={filteredPosts}
              categories={categories}
              onEditPost={() => {}}
              onAddComment={() => {}}
            />
        </div>
      </main>
    </div>
  );
};

export default Blog;