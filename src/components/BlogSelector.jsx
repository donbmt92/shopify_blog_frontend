import React from 'react';

export default function BlogSelector({ blogs, selectedBlog, setSelectedBlog }) {
  const selectedBlogData = blogs.find(b => b.id === selectedBlog);
  
  return (
    <div className="blog-selector">
      <div className="blog-selector-header">
        <h3 className="blog-selector-title">📖 Select Blog</h3>
        <div className="blog-count">{blogs.length} blog{blogs.length !== 1 ? 's' : ''}</div>
      </div>
      
      <div className="blog-selector-content">
        <select 
          className="blog-select" 
          value={selectedBlog || ''} 
          onChange={e => setSelectedBlog(e.target.value)}
        >
          <option value="" disabled>Choose a blog...</option>
          {blogs.map(b => (
            <option key={b.id} value={b.id}>
              {b.title}
            </option>
          ))}
        </select>
        
        {selectedBlogData && (
          <div className="selected-blog-info">
            <div className="blog-info-item">
              <span className="blog-info-label">📝 Title:</span>
              <span className="blog-info-value">{selectedBlogData.title}</span>
            </div>
            <div className="blog-info-item">
              <span className="blog-info-label">🆔 ID:</span>
              <span className="blog-info-value">{selectedBlogData.id}</span>
            </div>
            {selectedBlogData.handle && (
              <div className="blog-info-item">
                <span className="blog-info-label">🔗 Handle:</span>
                <span className="blog-info-value">{selectedBlogData.handle}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}