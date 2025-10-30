import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'https://backend-xi-puce-34.vercel.app';

export default function Dashboard() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalArticles: 0,
    recentArticles: []
  });

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const blogsRes = await axios.get(`${API_BASE}/blogs`);
      setBlogs(blogsRes.data);
      
      // Load articles from all blogs
      const allArticles = [];
      for (const blog of blogsRes.data) {
        try {
          const articlesRes = await axios.get(`${API_BASE}/blogs/${blog.id}/articles`);
          allArticles.push(...articlesRes.data.map(article => ({
            ...article,
            blogTitle: blog.title
          })));
        } catch (error) {
          console.error(`Error loading articles for blog ${blog.id}:`, error);
        }
      }
      setStats({
        totalBlogs: blogsRes.data.length,
        totalArticles: allArticles.length,
        recentArticles: allArticles
          .sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0))
          .slice(0, 5)
      });
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">📊 Dashboard</h1>
        <p className="dashboard-subtitle">Tổng quan về blog và bài viết của bạn</p>
        <button 
          onClick={() => navigate('/sample')}
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
          }}
        >
          👁️ Xem Trang Mẫu (Sample Article)
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-content">
            <div className="stat-number">{stats.totalBlogs}</div>
            <div className="stat-label">Total Blogs</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📝</div>
          <div className="stat-content">
            <div className="stat-number">{stats.totalArticles}</div>
            <div className="stat-label">Total Articles</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <div className="stat-number">{blogs.length > 0 ? Math.round(stats.totalArticles / blogs.length) : 0}</div>
            <div className="stat-label">Avg Articles/Blog</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⚡</div>
          <div className="stat-content">
            <div className="stat-number">{stats.recentArticles.length}</div>
            <div className="stat-label">Recent Articles</div>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-section">
          <h2 className="section-title">📚 Your Blogs</h2>
          <div className="blogs-grid">
            {blogs.map(blog => (
              <div key={blog.id} className="blog-card">
                <h3 className="blog-card-title">{blog.title}</h3>
                <div className="blog-card-meta">
                  <span className="blog-id">ID: {blog.id}</span>
                  {blog.handle && <span className="blog-handle">@{blog.handle}</span>}
                </div>
                <div className="blog-card-actions">
                  <button className="btn btn-primary btn-sm">Manage</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-section">
          <h2 className="section-title">📝 Recent Articles</h2>
          <div className="recent-articles">
            {stats.recentArticles.map(article => (
              <div key={article.id} className="recent-article-item">
                <div className="recent-article-content">
                  <h4 className="recent-article-title">{article.title}</h4>
                  <p className="recent-article-blog">From: {article.blogTitle}</p>
                  <p className="recent-article-date">
                    {new Date(article.created_at || new Date()).toLocaleDateString('vi-VN')}
                  </p>
                </div>
                <div className="recent-article-actions">
                  <button className="btn btn-secondary btn-sm">Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}