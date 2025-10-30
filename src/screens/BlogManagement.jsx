import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogSelector from '../components/BlogSelector';
import { API_BASE } from '../config/api';

export default function BlogManagement() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadBlogs();
  }, []);

  useEffect(() => {
    if (selectedBlog) {
      loadArticles(selectedBlog);
    }
  }, [selectedBlog]);

  const loadBlogs = async () => {
    try {
      const res = await axios.get(`${API_BASE}/blogs`);
      setBlogs(res.data);
      if (res.data.length > 0) {
        setSelectedBlog(res.data[0].id);
      }
    } catch (error) {
      console.error('Error loading blogs:', error);
    }
  };

  const loadArticles = async (blogId) => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/blogs/${blogId}/articles`);
      setArticles(res.data);
    } catch (error) {
      console.error('Error loading articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteArticle = async (articleId) => {
    if (!window.confirm('Bạn có chắc muốn xóa bài viết này?')) return;
    
    try {
      await axios.delete(`${API_BASE}/blogs/${selectedBlog}/articles/${articleId}`);
      loadArticles(selectedBlog);
    } catch (error) {
      console.error('Error deleting article:', error);
      alert('Có lỗi xảy ra khi xóa bài viết');
    }
  };

  const selectedBlogData = blogs.find(b => b.id === selectedBlog);

  return (
    <div className="blog-management">
      <div className="page-header">
        <h1 className="page-title">📚 Blog Management</h1>
        <p className="page-subtitle">Quản lý blog và bài viết của bạn</p>
      </div>

      <div className="management-content">
        <div className="blog-selector-section">
          <BlogSelector blogs={blogs} selectedBlog={selectedBlog} setSelectedBlog={setSelectedBlog} />
        </div>

        {selectedBlogData && (
          <div className="blog-details">
            <div className="blog-info-card">
              <h2 className="blog-info-title">📖 {selectedBlogData.title}</h2>
              <div className="blog-info-grid">
                <div className="info-item">
                  <span className="info-label">🆔 Blog ID:</span>
                  <span className="info-value">{selectedBlogData.id}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">🔗 Handle:</span>
                  <span className="info-value">{selectedBlogData.handle || 'N/A'}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">📝 Total Articles:</span>
                  <span className="info-value">{articles.length}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">📅 Created:</span>
                  <span className="info-value">
                    {new Date(selectedBlogData.created_at || new Date()).toLocaleDateString('vi-VN')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="articles-section">
          <div className="section-header">
            <h2 className="section-title">📝 Articles ({articles.length})</h2>
            <button className="btn btn-primary">
              ➕ Add New Article
            </button>
          </div>

          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Đang tải bài viết...</p>
            </div>
          ) : (
            <div className="articles-grid">
              {articles.map(article => (
                <div key={article.id} className="article-management-card">
                  <div className="article-card-header">
                    <h3 className="article-card-title">{article.title}</h3>
                    <div className="article-card-actions">
                      <button className="btn btn-secondary btn-sm">✏️ Edit</button>
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteArticle(article.id)}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                  
                  <div className="article-card-preview">
                    {article.body_html ? 
                      article.body_html.replace(/<[^>]*>/g, '').substring(0, 150) + '...' :
                      'No content'
                    }
                  </div>
                  
                  <div className="article-card-footer">
                    <span className="article-date">
                      📅 {new Date(article.created_at || new Date()).toLocaleDateString('vi-VN')}
                    </span>
                    <span className="article-id">ID: {article.id}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && articles.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">📝</div>
              <h3>Chưa có bài viết nào</h3>
              <p>Hãy tạo bài viết đầu tiên cho blog này!</p>
              <button className="btn btn-primary">➕ Create First Article</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}