import React, { useRef } from 'react';

export default function DescriptionBlockEditor({ 
  blocks, 
  onAdd, 
  onRemove, 
  onUpdate, 
  title, 
  helpText, 
  minBlocks = 1 
}) {
  const textareaRefs = useRef({});

  const insertFormatting = (blockId, before, after = '') => {
    const textarea = textareaRefs.current[blockId];
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);

    const newText = text.substring(0, start) + before + selectedText + after + text.substring(end);
    onUpdate(blockId, 'content', newText);

    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + before.length + selectedText.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const insertLink = (blockId) => {
    const url = prompt('Nhập URL (VD: https://snowears.com/products/...)');
    if (!url) return;
    
    const textarea = textareaRefs.current[blockId];
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const linkText = selectedText || prompt('Nhập text hiển thị:') || 'link';
    
    const linkHtml = `<a href="${url}" target="_blank">${linkText}</a>`;
    const text = textarea.value;
    const newText = text.substring(0, start) + linkHtml + text.substring(end);
    onUpdate(blockId, 'content', newText);
    
    setTimeout(() => {
      textarea.focus();
      const newPos = start + linkHtml.length;
      textarea.setSelectionRange(newPos, newPos);
    }, 0);
  };

  return (
    <div className="form-group">
      <div className="section-header">
        <h3 className="section-title">{title}</h3>
        <button type="button" className="btn btn-secondary btn-sm" onClick={onAdd}>
          ➕ Add Description
        </button>
      </div>
      {helpText && <p className="form-help-text">{helpText}</p>}
      
      {blocks.map((block, index) => (
        <div key={block.id} className="content-block-item" style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f8f9fa' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <label className="form-label">Description {index + 1}</label>
            {blocks.length > minBlocks && (
              <button type="button" className="btn btn-danger btn-sm" onClick={() => onRemove(block.id)}>
                🗑️ Remove
              </button>
            )}
          </div>
          
          <div className="form-group">
            <label className="form-label">Text Alignment</label>
            <select
              className="form-input"
              value={block.textAlign}
              onChange={e => onUpdate(block.id, 'textAlign', e.target.value)}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
              <option value="justify">Justify</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Content</label>
            
            <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
              <button 
                type="button"
                className="btn btn-sm"
                onClick={() => insertFormatting(block.id, '<strong>', '</strong>')}
                title="Bôi đậm text (chọn text trước)"
                style={{ padding: '4px 12px', fontSize: '14px' }}
              >
                <strong>B</strong> Bold
              </button>
              <button 
                type="button"
                className="btn btn-sm"
                onClick={() => insertFormatting(block.id, '<em>', '</em>')}
                title="In nghiêng"
                style={{ padding: '4px 12px', fontSize: '14px' }}
              >
                <em>I</em> Italic
              </button>
              <button 
                type="button"
                className="btn btn-sm"
                onClick={() => insertLink(block.id)}
                title="Thêm link"
                style={{ padding: '4px 12px', fontSize: '14px' }}
              >
                🔗 Link
              </button>
              <button 
                type="button"
                className="btn btn-sm"
                onClick={() => insertFormatting(block.id, '<h3>', '</h3>')}
                title="Tiêu đề phụ"
                style={{ padding: '4px 12px', fontSize: '14px' }}
              >
                H3 Heading
              </button>
              <button 
                type="button"
                className="btn btn-sm"
                onClick={() => insertFormatting(block.id, '<br><br>')}
                title="Xuống dòng"
                style={{ padding: '4px 12px', fontSize: '14px' }}
              >
                ↵ Break
              </button>
            </div>

            <textarea
              ref={el => textareaRefs.current[block.id] = el}
              className="form-input"
              placeholder="Nhập nội dung... (Chọn text rồi click nút bên trên để format)"
              value={block.content}
              onChange={e => onUpdate(block.id, 'content', e.target.value)}
              rows="8"
              style={{ resize: 'vertical', fontFamily: 'monospace', fontSize: '13px' }}
            />
            <p style={{ fontSize: '12px', color: '#718096', marginTop: '8px', fontStyle: 'italic', background: '#f0f9ff', padding: '8px 12px', borderRadius: '4px', border: '1px solid #bfdbfe' }}>
              💡 <strong>Cách dùng:</strong> Chọn text bạn muốn format → Click nút <strong>B</strong> (đậm), <em>I</em> (nghiêng), 🔗 (link), H3 (tiêu đề), hoặc ↵ (xuống dòng)
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

