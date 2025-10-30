import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './screens/Dashboard';
import BlogManagement from './screens/BlogManagement';
import ArticleEditor from './screens/ArticleEditor';
import TemplateGallery from './screens/TemplateGallery';
import Settings from './screens/Settings';
import SampleArticlePreview from './screens/SampleArticlePreview';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/blogs" element={<BlogManagement />} />
            <Route path="/articles" element={<ArticleEditor />} />
            <Route path="/templates" element={<TemplateGallery />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/sample" element={<SampleArticlePreview />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
