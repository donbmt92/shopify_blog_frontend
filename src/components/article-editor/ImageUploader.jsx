import React from 'react';

export default function ImageUploader({ 
  featuredImage, 
  imagePreview, 
  imageFile, 
  onImageUpload, 
  onRemoveImage 
}) {
  return (
    <div className="form-group">
      <label className="form-label">🖼️ Hình ảnh header (Featured Image)</label>
      
      <div style={{ marginBottom: '15px' }}>
        <label className="form-label" style={{ fontSize: '14px', marginBottom: '5px' }}>
          📁 Upload từ máy tính:
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={onImageUpload}
          style={{ 
            width: '100%', 
            padding: '8px', 
            border: '1px solid #ddd', 
            borderRadius: '4px',
            fontSize: '14px'
          }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label className="form-label" style={{ fontSize: '14px', marginBottom: '5px' }}>
          🌐 Hoặc nhập URL:
        </label>
        <input
          className="form-input"
          placeholder="VD: https://example.com/image.jpg"
          value={featuredImage.startsWith('data:') ? '' : featuredImage}
          onChange={e => onImageUpload(e)}
        />
      </div>

      {(imagePreview || featuredImage) && (
        <div style={{ marginTop: '10px', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
          <img 
            src={imagePreview || featuredImage} 
            alt="Preview" 
            style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} 
          />
          <button
            type="button"
            onClick={onRemoveImage}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'rgba(0,0,0,0.7)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            ×
          </button>
          {imageFile && !featuredImage && (
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              background: 'rgba(0,0,0,0.7)',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '4px',
              fontSize: '12px'
            }}>
              ⏳ Đang upload...
            </div>
          )}
          {featuredImage && (
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              background: 'rgba(0,255,0,0.7)',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '4px',
              fontSize: '12px'
            }}>
              ✅ Đã upload lên Shopify
            </div>
          )}
        </div>
      )}
    </div>
  );
}

