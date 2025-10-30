import React from 'react';
import './ArticlePreview.css';

export default function ArticlePreview({
  title,
  author,
  publishDate,
  shortDescription,
  featuredImage,
  articleDescriptions,
  productReviews = [],
  products = [],
  whatToConsider = null,
  conclusion = null,
  faqs = []
}) {
  if (!title.trim()) {
    return (
      <div className="preview-empty">
        <div className="preview-empty-icon">👁️</div>
        <h3>Chưa có nội dung để xem trước</h3>
        <p>Hãy nhập tiêu đề và nội dung để xem preview</p>
      </div>
    );
  }

  // Format date
  const formattedDate = publishDate 
    ? new Date(publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="article-preview-container">
      <div className="article-preview">
        {/* Intro Hero Section with Background Image */}
        <div 
          className="preview-intro-hero" 
          style={featuredImage ? { backgroundImage: `url(${featuredImage})` } : {}}
          data-has-image={!!featuredImage}
        >
          <div className="preview-intro-content">
            <h1 className="preview-intro-title">{title}</h1>
            <div className="preview-intro-meta">
              {author && <p className="preview-author">{author}</p>}
              <p className="preview-date">{formattedDate}</p>
            </div>
            {shortDescription && <p className="preview-short-desc">{shortDescription}</p>}
          </div>
        </div>
        
        {articleDescriptions.some(b => b.content) && (
          <div className="preview-content-section">
            <div className="preview-content-container">
              {articleDescriptions.map(block => 
                block.content && (
                  <div key={block.id} className="preview-article-description">
                    <p 
                      style={{ textAlign: block.textAlign }} 
                      dangerouslySetInnerHTML={{ __html: block.content }}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Product Reviews */}
        {productReviews.map(review => {
          const product = products.find(p => p.id === review.productId);
          if (!product) return null;
          
          const mainImage = product.images?.[0]?.src || product.image?.src || '';
          
          return (
            <div key={review.id} className="preview-product-review">
              <div className="preview-review-container">
                <h3 className="preview-review-rank">
                  {review.rank}{review.rankTitle ? ` - ${review.rankTitle}` : ''}
                </h3>
                <div className="preview-review-product-title">
                  <h3>{product.title}</h3>
                </div>
                
                <div className="preview-review-content">
                  {mainImage && (
                    <div className="preview-product-image-box">
                      <img src={mainImage} alt={product.title} />
                    </div>
                  )}
                  
                  <div className="preview-ratings-box">
                    {review.ratings.map((rating, idx) => {
                      const percent = (rating.score / 5) * 100;
                      return (
                        <div key={idx} className="preview-rating-item">
                          <div className="preview-rating-label">
                            {rating.label} {rating.score}/5
                          </div>
                          <progress max="100" value={percent}></progress>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="preview-pros-cons">
                  {review.pros.filter(p => p.trim()).length > 0 && (
                    <div className="preview-pros">
                      <h4>Pros</h4>
                      <ul>
                        {review.pros.filter(p => p.trim()).map((pro, idx) => (
                          <li key={idx}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {review.cons.filter(c => c.trim()).length > 0 && (
                    <div className="preview-cons">
                      <h4>Cons</h4>
                      <ul>
                        {review.cons.filter(c => c.trim()).map((con, idx) => (
                          <li key={idx}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="preview-cta-button">
                  <a href={`/products/${product.handle || product.id}`} target="_blank" rel="noopener noreferrer">
                    Check out the latest price
                  </a>
                </div>
                
                {/* Detailed Reviews (Multiple) */}
                {(review.detailedReviews || []).map((detailedReview, index) => (
                  <div key={detailedReview.id} className="preview-detailed-review preview-detailed-review-normal">
                    <h4>Detailed Review {index + 1}</h4>
                    <div dangerouslySetInnerHTML={{ __html: detailedReview.content }} />
                  </div>
                ))}
                
                {/* Detailed Review with Score (Single) */}
                {review.detailedReviewWithScore && review.detailedReviewWithScore.content && (
                  <div className="preview-detailed-review preview-detailed-review-with-score">
                    <h4>Detailed Review</h4>
                    <div dangerouslySetInnerHTML={{ __html: review.detailedReviewWithScore.content }} />
                    <div className="preview-score-highlight">
                      <div className="preview-score-summary">{review.detailedReviewWithScore.scoreSummary || 'Effortless lens swaps, sharp optics, and all-day comfort make these a powerhouse pick for skiers who want one goggle to do it all.'}</div>
                      <div className="preview-score-value">Score: {review.detailedReviewWithScore.score}/5</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        
        {/* What To Consider Section */}
        {whatToConsider && whatToConsider.title && whatToConsider.content && (
          <div className="preview-what-to-consider-section">
            <div className="preview-what-to-consider-container">
              <h2 className="preview-what-to-consider-heading">{whatToConsider.title}</h2>
              <div className="preview-what-to-consider-content">
                {whatToConsider.content.split('\n').map((paragraph, index) => 
                  paragraph.trim() && (
                    <p key={index} className="preview-what-to-consider-text">
                      {paragraph}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Conclusion Section */}
        {conclusion && conclusion.title && conclusion.content && (
          <div className="preview-conclusion-section">
            <div className="preview-conclusion-container">
              <h2 className="preview-conclusion-heading">{conclusion.title}</h2>
              <p className="preview-conclusion-text">{conclusion.content}</p>
            </div>
          </div>
        )}
        
        {/* FAQ Section */}
        {faqs && faqs.length > 0 && (
          <div className="preview-faq-section">
            <div className="preview-faq-container">
              <h2 className="preview-faq-heading">FAQs</h2>
              <div className="preview-faq-list">
                {faqs.map((faq, index) => (
                  <details key={faq.id || index} className="preview-faq-item">
                    <summary className="preview-faq-question">
                      <span className="preview-faq-icon">❓</span>
                      {faq.question}
                    </summary>
                    <div className="preview-faq-answer">
                      {faq.answer.split('\n').map((paragraph, pIndex) => 
                        paragraph.trim() && (
                          <p key={pIndex} className="preview-faq-text">
                            {paragraph}
                          </p>
                        )
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="preview-comment-section">
          <h3>LEAVE A COMMENT</h3>
          <div className="comment-form-preview">
            <textarea placeholder="Comment *" disabled></textarea>
            <input placeholder="Name *" disabled />
            <input placeholder="Email *" disabled />
            <button disabled>Post Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
