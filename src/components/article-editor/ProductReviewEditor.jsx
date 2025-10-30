import React from 'react';

export default function ProductReviewEditor({ 
  reviews, 
  products, 
  onAdd, 
  onRemove, 
  onUpdate 
}) {
  const addReview = () => {
    const defaultRatings = [
      { label: 'Warmth', score: 4 },
      { label: 'Waterproof', score: 3 },
      { label: 'Tightness', score: 2 },
      { label: 'Breathability', score: 3 }
    ];
    
    const newReview = {
      id: Date.now(),
      rank: 'TOP 1',
      productId: null,
      selectedImages: [],
      description: '',
      ratings: defaultRatings,
      pros: [''],
      cons: [''],
      theme: 'light' // Mặc định là light theme
    };
    onAdd(newReview);
  };

  const updateReview = (reviewId, field, value) => {
    const updatedReviews = reviews.map(review => 
      review.id === reviewId ? { ...review, [field]: value } : review
    );
    onUpdate(updatedReviews);
  };

  const updateRating = (reviewId, index, field, value) => {
    const updatedReviews = reviews.map(review => {
      if (review.id === reviewId) {
        const newRatings = [...review.ratings];
        newRatings[index] = { ...newRatings[index], [field]: value };
        return { ...review, ratings: newRatings };
      }
      return review;
    });
    onUpdate(updatedReviews);
  };

  const addRating = (reviewId) => {
    const updatedReviews = reviews.map(review => 
      review.id === reviewId 
        ? { ...review, ratings: [...review.ratings, { label: '', score: 0 }] } 
        : review
    );
    onUpdate(updatedReviews);
  };

  const removeRating = (reviewId, index) => {
    const updatedReviews = reviews.map(review => {
      if (review.id === reviewId && review.ratings.length > 1) {
        return { ...review, ratings: review.ratings.filter((_, i) => i !== index) };
      }
      return review;
    });
    onUpdate(updatedReviews);
  };

  const addPro = (reviewId) => {
    const updatedReviews = reviews.map(review => 
      review.id === reviewId ? { ...review, pros: [...review.pros, ''] } : review
    );
    onUpdate(updatedReviews);
  };

  const updatePro = (reviewId, index, value) => {
    const updatedReviews = reviews.map(review => {
      if (review.id === reviewId) {
        const newPros = [...review.pros];
        newPros[index] = value;
        return { ...review, pros: newPros };
      }
      return review;
    });
    onUpdate(updatedReviews);
  };

  const removePro = (reviewId, index) => {
    const updatedReviews = reviews.map(review => {
      if (review.id === reviewId && review.pros.length > 1) {
        return { ...review, pros: review.pros.filter((_, i) => i !== index) };
      }
      return review;
    });
    onUpdate(updatedReviews);
  };

  const addCon = (reviewId) => {
    const updatedReviews = reviews.map(review => 
      review.id === reviewId ? { ...review, cons: [...review.cons, ''] } : review
    );
    onUpdate(updatedReviews);
  };

  const updateCon = (reviewId, index, value) => {
    const updatedReviews = reviews.map(review => {
      if (review.id === reviewId) {
        const newCons = [...review.cons];
        newCons[index] = value;
        return { ...review, cons: newCons };
      }
      return review;
    });
    onUpdate(updatedReviews);
  };

  const removeCon = (reviewId, index) => {
    const updatedReviews = reviews.map(review => {
      if (review.id === reviewId && review.cons.length > 1) {
        return { ...review, cons: review.cons.filter((_, i) => i !== index) };
      }
      return review;
    });
    onUpdate(updatedReviews);
  };

  // Image management functions
  const addImageToReview = (reviewId, imageUrl) => {
    const updatedReviews = reviews.map(review => {
      if (review.id === reviewId) {
        const newImages = [...(review.selectedImages || []), imageUrl];
        return { ...review, selectedImages: newImages };
      }
      return review;
    });
    onUpdate(updatedReviews);
  };

  const removeImageFromReview = (reviewId, imageIndex) => {
    const updatedReviews = reviews.map(review => {
      if (review.id === reviewId) {
        const newImages = review.selectedImages.filter((_, i) => i !== imageIndex);
        return { ...review, selectedImages: newImages };
      }
      return review;
    });
    onUpdate(updatedReviews);
  };

  // Note: reorderImages function available for future use
  // const reorderImages = (reviewId, fromIndex, toIndex) => {
  //   const updatedReviews = reviews.map(review => {
  //     if (review.id === reviewId) {
  //       const newImages = [...review.selectedImages];
  //       const [movedImage] = newImages.splice(fromIndex, 1);
  //       newImages.splice(toIndex, 0, movedImage);
  //       return { ...review, selectedImages: newImages };
  //     }
  //     return review;
  //   });
  //   onUpdate(updatedReviews);
  // };


  return (
    <div className="product-review-editor">
      <div className="section-header">
        <h3 className="section-title">🏆 Product Reviews</h3>
        <button type="button" className="btn btn-primary btn-sm" onClick={addReview}>
          ➕ Thêm Product Review
        </button>
      </div>

      {reviews.map((review, reviewIndex) => {
        const selectedProduct = products.find(p => p.id === review.productId);
        
        return (
          <div key={review.id} style={{ 
            marginBottom: '30px', 
            padding: '20px', 
            border: '2px solid #667eea', 
            borderRadius: '12px', 
            backgroundColor: '#f7fafc' 
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#667eea' }}>
                Review {reviewIndex + 1}
              </h4>
              <button 
                type="button" 
                className="btn btn-danger btn-sm" 
                onClick={() => onRemove(review.id)}
              >
                🗑️ Xóa Review
              </button>
            </div>

            {/* Rank & Product Selection */}
            <div className="form-group">
              <label className="form-label">Rank Badge (VD: TOP 1)</label>
              <input
                className="form-input"
                placeholder="TOP 1"
                value={review.rank || ''}
                onChange={e => updateReview(review.id, 'rank', e.target.value)}
              />
            </div>

            {/* Theme Selection */}
            <div className="form-group">
              <label className="form-label">🎨 Giao diện nền</label>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <button
                  type="button"
                  onClick={() => updateReview(review.id, 'theme', 'light')}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: '8px',
                    border: review.theme === 'light' ? '2px solid #667eea' : '2px solid #ddd',
                    backgroundColor: review.theme === 'light' ? '#e0f2fe' : '#fff',
                    color: review.theme === 'light' ? '#667eea' : '#666',
                    fontWeight: review.theme === 'light' ? 'bold' : 'normal',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  ☀️ Nền sáng
                </button>
                <button
                  type="button"
                  onClick={() => updateReview(review.id, 'theme', 'dark')}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: '8px',
                    border: review.theme === 'dark' ? '2px solid #667eea' : '2px solid #ddd',
                    backgroundColor: review.theme === 'dark' ? '#1e293b' : '#fff',
                    color: review.theme === 'dark' ? '#fff' : '#666',
                    fontWeight: review.theme === 'dark' ? 'bold' : 'normal',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  🌙 Nền đen
                </button>
              </div>
              <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                💡 Chọn nền sáng hoặc nền đen cho product review này
              </p>
            </div>

            <div className="form-group">
              <label className="form-label">Chọn sản phẩm *</label>
              <select
                className="form-input"
                value={review.productId || ''}
                onChange={e => updateReview(review.id, 'productId', parseInt(e.target.value))}
              >
                <option value="">-- Chọn sản phẩm --</option>
                {products.map(product => (
                  <option key={product.id} value={product.id}>
                    {product.title}
                  </option>
                ))}
              </select>
              {selectedProduct && (
                <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                  ✅ Đã chọn: <strong>{selectedProduct.title}</strong>
                </p>
              )}
            </div>

            {/* Image Selection */}
            {selectedProduct && (
              <div className="form-group">
                <label className="form-label">🖼️ Chọn hình ảnh sản phẩm</label>
                
                {/* Available Images Grid */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
                  gap: '10px', 
                  marginBottom: '20px',
                  padding: '15px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  border: '1px solid #e9ecef'
                }}>
                  {selectedProduct.images && selectedProduct.images.map((image, imageIndex) => {
                    const isSelected = review.selectedImages && review.selectedImages.includes(image.src);
                    return (
                      <div 
                        key={imageIndex}
                        style={{
                          position: 'relative',
                          cursor: 'pointer',
                          border: isSelected ? '3px solid #667eea' : '2px solid #ddd',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          opacity: isSelected ? 0.7 : 1,
                          transition: 'all 0.2s ease'
                        }}
                        onClick={() => {
                          if (isSelected) {
                            const imageUrlIndex = review.selectedImages.indexOf(image.src);
                            removeImageFromReview(review.id, imageUrlIndex);
                          } else {
                            addImageToReview(review.id, image.src);
                          }
                        }}
                      >
                        <img 
                          src={image.src} 
                          alt={`Product ${imageIndex + 1}`}
                          style={{ 
                            width: '100%', 
                            height: '120px', 
                            objectFit: 'cover',
                            display: 'block'
                          }}
                        />
                        {isSelected && (
                          <div style={{
                            position: 'absolute',
                            top: '5px',
                            right: '5px',
                            backgroundColor: '#667eea',
                            color: 'white',
                            borderRadius: '50%',
                            width: '20px',
                            height: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px'
                          }}>
                            ✓
                          </div>
                        )}
                        <div style={{
                          position: 'absolute',
                          bottom: '0',
                          left: '0',
                          right: '0',
                          backgroundColor: 'rgba(0,0,0,0.7)',
                          color: 'white',
                          fontSize: '10px',
                          padding: '2px 4px',
                          textAlign: 'center'
                        }}>
                          {image.position}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Selected Images Preview */}
                {review.selectedImages && review.selectedImages.length > 0 && (
                  <div style={{ marginTop: '15px' }}>
                    <h5 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#667eea' }}>
                      📸 Hình ảnh đã chọn ({review.selectedImages.length}):
                    </h5>
                    <div style={{ 
                      display: 'flex', 
                      gap: '10px', 
                      flexWrap: 'wrap',
                      padding: '10px',
                      backgroundColor: '#fff',
                      borderRadius: '8px',
                      border: '1px solid #e9ecef'
                    }}>
                      {review.selectedImages.map((imageUrl, index) => (
                        <div key={index} style={{ position: 'relative' }}>
                          <img 
                            src={imageUrl} 
                            alt={`Selected ${index + 1}`}
                            style={{ 
                              width: '80px', 
                              height: '80px', 
                              objectFit: 'cover',
                              borderRadius: '6px',
                              border: '2px solid #667eea'
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => removeImageFromReview(review.id, index)}
                            style={{
                              position: 'absolute',
                              top: '-5px',
                              right: '-5px',
                              backgroundColor: '#dc3545',
                              color: 'white',
                              border: 'none',
                              borderRadius: '50%',
                              width: '20px',
                              height: '20px',
                              fontSize: '12px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            ×
                          </button>
                          <div style={{
                            position: 'absolute',
                            bottom: '2px',
                            left: '2px',
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            color: 'white',
                            fontSize: '10px',
                            padding: '1px 4px',
                            borderRadius: '3px'
                          }}>
                            {index + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                      💡 Hình ảnh sẽ hiển thị theo thứ tự slider trong bài viết
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Product Description */}
            {selectedProduct && (
              <div className="form-group">
                <label className="form-label">📝 Mô tả sản phẩm</label>
                <textarea
                  className="form-input"
                  placeholder="Nhập mô tả sản phẩm..."
                  value={review.description || ''}
                  onChange={e => updateReview(review.id, 'description', e.target.value)}
                  rows="4"
                />
              </div>
            )}

            {/* Ratings */}
            <div className="form-group">
              <label className="form-label">⭐ Đánh giá thuộc tính (0-5) - Tối đa 4 thuộc tính</label>
              {review.ratings && review.ratings.map((rating, ratingIndex) => (
                <div key={ratingIndex} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'center' }}>
                  <input
                    className="form-input"
                    placeholder="Label (VD: Warmth, Waterproof)"
                    value={rating.label || ''}
                    onChange={e => updateRating(review.id, ratingIndex, 'label', e.target.value)}
                    style={{ flex: 1 }}
                  />
                  <input
                    className="form-input"
                    type="number"
                    min="0"
                    max="5"
                    step="0.1"
                    placeholder="Score"
                    value={rating.score || 0}
                    onChange={e => updateRating(review.id, ratingIndex, 'score', parseFloat(e.target.value))}
                    style={{ width: '100px' }}
                  />
                  {review.ratings.length > 1 && (
                    <button 
                      type="button" 
                      className="btn btn-danger btn-sm" 
                      onClick={() => removeRating(review.id, ratingIndex)}
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              {(!review.ratings || review.ratings.length < 4) && (
                <button 
                  type="button" 
                  className="btn btn-secondary btn-sm" 
                  onClick={() => addRating(review.id)}
                >
                  ➕ Thêm Rating
                </button>
              )}
            </div>

            {/* Pros */}
            <div className="form-group">
              <label className="form-label">✅ Pros (Ưu điểm) - Format: "Label: Description"</label>
              {review.pros && review.pros.map((pro, proIndex) => (
                <div key={proIndex} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <input
                    className="form-input"
                    placeholder='VD: Timeless Design: Vintage-inspired look that never goes out of style.'
                    value={pro}
                    onChange={e => updatePro(review.id, proIndex, e.target.value)}
                    style={{ flex: 1 }}
                  />
                  {review.pros.length > 1 && (
                    <button 
                      type="button" 
                      className="btn btn-danger btn-sm" 
                      onClick={() => removePro(review.id, proIndex)}
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button 
                type="button" 
                className="btn btn-secondary btn-sm" 
                onClick={() => addPro(review.id)}
              >
                ➕ Thêm Pro
              </button>
            </div>

            {/* Cons */}
            <div className="form-group">
              <label className="form-label">❌ Cons (Nhược điểm) - Format: "Label: Description"</label>
              {review.cons && review.cons.map((con, conIndex) => (
                <div key={conIndex} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <input
                    className="form-input"
                    placeholder='VD: Limited Color Options: Currently available in select shades only.'
                    value={con}
                    onChange={e => updateCon(review.id, conIndex, e.target.value)}
                    style={{ flex: 1 }}
                  />
                  {review.cons.length > 1 && (
                    <button 
                      type="button" 
                      className="btn btn-danger btn-sm" 
                      onClick={() => removeCon(review.id, conIndex)}
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button 
                type="button" 
                className="btn btn-secondary btn-sm" 
                onClick={() => addCon(review.id)}
              >
                ➕ Thêm Con
              </button>
            </div>
          </div>
        );
      })}

      {reviews.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#999', border: '2px dashed #ddd', borderRadius: '8px' }}>
          <div style={{ fontSize: '48px', marginBottom: '10px' }}>🏆</div>
          <p>Chưa có product review nào</p>
          <p style={{ fontSize: '14px' }}>Click "Thêm Product Review" để bắt đầu!</p>
        </div>
      )}
    </div>
  );
}

