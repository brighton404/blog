import  Blog from "@/blog/blog";
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { BlogPage } from "@/blog/blogPage";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
      <Routes>
      <Route path="/" element={<Blog />} />
        <Route path="blog/" element={<Blog />} />
        <Route path="blog/:id" element={<BlogPage />} />
      </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;