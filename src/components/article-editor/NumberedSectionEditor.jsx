import React from 'react';

export default function NumberedSectionEditor({ sections, onAdd, onRemove, onUpdate }) {
  return (
    <div className="form-group">
      <div className="section-header">
        <h4 className="section-title">Numbered Sections</h4>
        <button type="button" className="btn btn-primary btn-sm" onClick={onAdd}>
          ➕ Add Section
        </button>
      </div>
      
      {sections.map((section, index) => (
        <div key={section.id} className="content-block-item" style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f8f9fa' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <label className="form-label">Section {index + 1}</label>
            <button type="button" className="btn btn-danger btn-sm" onClick={() => onRemove(section.id)}>
              🗑️ Remove
            </button>
          </div>
          
          <div className="form-group">
            <label className="form-label">Section Heading</label>
            <input
              className="form-input"
              placeholder="VD: Weather Protection"
              value={section.heading}
              onChange={e => onUpdate(section.id, 'heading', e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Text Alignment</label>
            <select
              className="form-input"
              value={section.textAlign}
              onChange={e => onUpdate(section.id, 'textAlign', e.target.value)}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
              <option value="justify">Justify</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Section Content</label>
            <textarea
              className="form-input"
              placeholder="Enter section content here..."
              value={section.content}
              onChange={e => onUpdate(section.id, 'content', e.target.value)}
              rows="3"
              style={{ resize: 'vertical' }}
            />
          </div>
          
          {section.heading && section.content && (
            <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#e9ecef', borderRadius: '4px' }}>
              <small style={{ color: '#666' }}>Preview:</small>
              <h3 style={{ margin: '5px 0', fontSize: '18px', fontWeight: 'bold', fontStyle: 'italic' }}>
                {index + 1}. {section.heading}
              </h3>
              <p style={{ margin: '5px 0', textAlign: section.textAlign }}>{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

