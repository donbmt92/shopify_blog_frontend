import React from 'react';

export default function ArticleCard({ article, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const stripHtml = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const getPreview = (html) => {
    const text = stripHtml(html);
    return text.length > 150 ? text.substring(0, 150) + '...' : text;
  };

  return (
    <div className="article-card">
      <div className="article-header">
        <h3 className="article-title">{article.title}</h3>
        <div className="article-actions">
          <button 
            className="btn btn-secondary btn-sm" 
            onClick={() => onEdit(article)}
            title="Edit article"
          >
            ✏️ Edit
          </button>
          <button 
            className="btn btn-danger btn-sm" 
            onClick={() => onDelete(article.id)}
            title="Delete article"
          >
            🗑️ Delete
          </button>
        </div>
      </div>
      
      <div className="article-preview">
        {getPreview(article.body_html)}
      </div>
      
      <div className="article-footer">
        <span className="article-date">
          📅 {formatDate(article.created_at || new Date())}
        </span>
        <span className="article-id">
          ID: {article.id}
        </span>
      </div>
    </div>
  );
}