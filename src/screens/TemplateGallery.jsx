import React, { useState } from 'react';
import ProductReviewTemplate from '../components/blog-templates/ProductReviewTemplate';

export default function TemplateGallery() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    {
      id: 'product-review',
      name: 'Product Review Template',
      description: 'Template chuyên nghiệp cho bài viết review sản phẩm, theo phong cách Snowears',
      icon: '📝',
      features: [
        'Hero section với meta info',
        'Quick picks grid',
        'Detailed reviews với ratings',
        'Comparison table',
        'Buying guide',
        'FAQ section'
      ],
      component: ProductReviewTemplate
    },
    {
      id: 'how-to-guide',
      name: 'How-To Guide Template',
      description: 'Template cho bài viết hướng dẫn từng bước',
      icon: '📚',
      features: [
        'Step-by-step instructions',
        'Image galleries',
        'Tips & tricks boxes',
        'Video embeds',
        'Checklist sections'
      ],
      html: `
<div class="how-to-guide">
  <h1>How to Choose the Perfect Ski Equipment</h1>
  
  <div class="guide-intro">
    <p>This comprehensive guide will walk you through everything you need to know...</p>
  </div>
  
  <div class="steps-container">
    <div class="step">
      <div class="step-number">1</div>
      <h3>Determine Your Skill Level</h3>
      <img src="step-1.jpg" alt="Step 1" />
      <p>Understanding your skill level is crucial...</p>
    </div>
    
    <div class="step">
      <div class="step-number">2</div>
      <h3>Choose the Right Type</h3>
      <img src="step-2.jpg" alt="Step 2" />
      <p>Different types of equipment suit different styles...</p>
    </div>
    
    <!-- More steps -->
  </div>
  
  <div class="tips-box">
    <h3>💡 Pro Tips</h3>
    <ul>
      <li>Always try before you buy</li>
      <li>Consider renting first</li>
      <li>Ask for expert advice</li>
    </ul>
  </div>
</div>`
    },
    {
      id: 'listicle',
      name: 'Listicle Template',
      description: 'Template cho bài viết dạng danh sách (Top 10, Best of...)',
      icon: '📋',
      features: [
        'Numbered list format',
        'Featured images',
        'Quick facts boxes',
        'Rating systems',
        'Jump links'
      ],
      html: `
<div class="listicle-article">
  <h1>Top 10 Must-Have Ski Accessories for 2025</h1>
  
  <div class="table-of-contents">
    <h3>Quick Navigation</h3>
    <ol>
      <li><a href="#item-1">Heated Gloves</a></li>
      <li><a href="#item-2">Action Camera</a></li>
      <li><a href="#item-3">Portable Warmer</a></li>
      <!-- More items -->
    </ol>
  </div>
  
  <div class="list-item" id="item-1">
    <div class="item-rank">1</div>
    <img src="item-1.jpg" alt="Item 1" />
    <h2>Heated Gloves - Keep Your Hands Warm</h2>
    <div class="quick-facts">
      <span>💰 Price: $89.99</span>
      <span>⭐ Rating: 4.8/5</span>
      <span>🔥 Battery Life: 8 hours</span>
    </div>
    <p>These heated gloves are game-changers...</p>
    <a href="#" class="btn-check">Check Price</a>
  </div>
  
  <!-- More items -->
</div>`
    },
    {
      id: 'comparison',
      name: 'Comparison Template',
      description: 'Template so sánh 2 hoặc nhiều sản phẩm',
      icon: '⚖️',
      features: [
        'Side-by-side comparison',
        'Feature matrix',
        'Winner badges',
        'Detailed breakdowns',
        'Decision helper'
      ],
      html: `
<div class="comparison-article">
  <h1>Product A vs Product B: Which One Should You Buy?</h1>
  
  <div class="comparison-grid">
    <div class="product-column">
      <div class="winner-badge">🏆 Winner</div>
      <img src="product-a.jpg" alt="Product A" />
      <h2>Product A</h2>
      <div class="price">$149.99</div>
      <div class="rating">⭐⭐⭐⭐⭐ 4.8/5</div>
    </div>
    
    <div class="product-column">
      <img src="product-b.jpg" alt="Product B" />
      <h2>Product B</h2>
      <div class="price">$129.99</div>
      <div class="rating">⭐⭐⭐⭐ 4.3/5</div>
    </div>
  </div>
  
  <div class="feature-comparison">
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Product A</th>
          <th>Product B</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Weight</td>
          <td>✅ 150g</td>
          <td>❌ 200g</td>
        </tr>
        <!-- More features -->
      </tbody>
    </table>
  </div>
  
  <div class="verdict">
    <h2>Our Verdict</h2>
    <p>Product A wins overall due to...</p>
  </div>
</div>`
    },
    {
      id: 'news-article',
      name: 'News Article Template',
      description: 'Template cho bài viết tin tức và cập nhật',
      icon: '📰',
      features: [
        'Breaking news format',
        'Timeline sections',
        'Quote blocks',
        'Related stories',
        'Social sharing'
      ],
      html: `
<div class="news-article">
  <div class="breaking-badge">🔴 Breaking News</div>
  <h1>Major Announcement: New Ski Resort Opening in 2025</h1>
  
  <div class="article-meta">
    <span class="author">By John Doe</span>
    <span class="date">December 15, 2024</span>
    <span class="read-time">5 min read</span>
  </div>
  
  <img src="news-hero.jpg" alt="News" class="hero-image" />
  
  <div class="article-body">
    <p class="lead">In a groundbreaking announcement today...</p>
    
    <blockquote class="quote-block">
      <p>"This is a game-changer for the industry"</p>
      <cite>- CEO Name, Company</cite>
    </blockquote>
    
    <h2>What This Means</h2>
    <p>The implications are significant...</p>
    
    <div class="timeline">
      <h3>Timeline of Events</h3>
      <div class="timeline-item">
        <div class="timeline-date">Jan 2025</div>
        <p>Construction begins</p>
      </div>
      <!-- More timeline items -->
    </div>
  </div>
  
  <div class="related-stories">
    <h3>Related Stories</h3>
    <!-- Related articles -->
  </div>
</div>`
    }
  ];

  const handleCopyTemplate = (html) => {
    navigator.clipboard.writeText(html);
    alert('✅ Template đã được copy vào clipboard!');
  };

  const handleDownloadTemplate = (html, filename) => {
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="template-gallery">
      <div className="page-header">
        <h1 className="page-title">📚 Blog Template Gallery</h1>
        <p className="page-subtitle">Chọn template phù hợp cho bài viết của bạn</p>
      </div>

      <div className="templates-grid">
        {templates.map(template => (
          <div key={template.id} className="template-card">
            <div className="template-icon">{template.icon}</div>
            <h3 className="template-name">{template.name}</h3>
            <p className="template-description">{template.description}</p>
            
            <div className="template-features-list">
              <h4>✨ Features:</h4>
              <ul>
                {template.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="template-actions">
              <button 
                className="btn btn-primary"
                onClick={() => setSelectedTemplate(template)}
              >
                👁️ Preview
              </button>
              {template.html && (
                <>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => handleCopyTemplate(template.html)}
                  >
                    📋 Copy
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => handleDownloadTemplate(template.html, template.id)}
                  >
                    💾 Download
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedTemplate && (
        <div className="template-modal">
          <div className="modal-overlay" onClick={() => setSelectedTemplate(null)}></div>
          <div className="modal-content">
            <button 
              className="modal-close"
              onClick={() => setSelectedTemplate(null)}
            >
              ✕
            </button>
            
            {selectedTemplate.component ? (
              <selectedTemplate.component />
            ) : (
              <div className="template-preview">
                <h2>{selectedTemplate.name}</h2>
                <div className="template-code">
                  <pre><code>{selectedTemplate.html}</code></pre>
                </div>
                <div className="modal-actions">
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleCopyTemplate(selectedTemplate.html)}
                  >
                    📋 Copy Template
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => handleDownloadTemplate(selectedTemplate.html, selectedTemplate.id)}
                  >
                    💾 Download HTML
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="template-guide">
        <h2>📖 Hướng dẫn sử dụng Templates</h2>
        <div className="guide-steps">
          <div className="guide-step">
            <div className="step-number">1</div>
            <h3>Chọn Template</h3>
            <p>Duyệt qua các template và chọn loại phù hợp với bài viết của bạn</p>
          </div>
          
          <div className="guide-step">
            <div className="step-number">2</div>
            <h3>Preview & Copy</h3>
            <p>Xem trước template và copy HTML code</p>
          </div>
          
          <div className="guide-step">
            <div className="step-number">3</div>
            <h3>Customize</h3>
            <p>Paste vào editor và tùy chỉnh nội dung theo ý muốn</p>
          </div>
          
          <div className="guide-step">
            <div className="step-number">4</div>
            <h3>Publish</h3>
            <p>Thêm hình ảnh, links và publish bài viết!</p>
          </div>
        </div>
      </div>

      <div className="template-tips">
        <h2>💡 Tips cho bài viết chuyên nghiệp</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h3>📸 Hình ảnh chất lượng cao</h3>
            <p>Sử dụng hình ảnh HD, tối thiểu 1200px width</p>
          </div>
          
          <div className="tip-card">
            <h3>⭐ Rating hợp lý</h3>
            <p>Đánh giá dựa trên tiêu chí rõ ràng và nhất quán</p>
          </div>
          
          <div className="tip-card">
            <h3>📊 Data-driven</h3>
            <p>Sử dụng số liệu, thống kê để tăng độ tin cậy</p>
          </div>
          
          <div className="tip-card">
            <h3>🎯 Clear CTA</h3>
            <p>Có call-to-action rõ ràng ở cuối bài</p>
          </div>
          
          <div className="tip-card">
            <h3>❓ FAQ Section</h3>
            <p>Trả lời các câu hỏi thường gặp của người đọc</p>
          </div>
          
          <div className="tip-card">
            <h3>🔗 Internal Links</h3>
            <p>Link đến các bài viết liên quan khác</p>
          </div>
        </div>
      </div>
    </div>
  );
}
