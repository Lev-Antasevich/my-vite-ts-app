import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import UsersPage_LAA from './pages/UsersPage_LAA';
import PostsPage_LAA from './pages/PostsPage_LAA';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
          <NavLink to="/users-laa" style={{ marginRight: '20px' }}>Users</NavLink>
          <NavLink to="/posts-laa">Posts</NavLink>
        </nav>
        <Routes>
          <Route path="/users-laa" element={<UsersPage_LAA />} />
          <Route path="/posts-laa" element={<PostsPage_LAA />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App
