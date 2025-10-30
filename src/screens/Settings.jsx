import React, { useState } from 'react';

export default function Settings() {
  const [settings, setSettings] = useState({
    theme: 'light',
    language: 'vi',
    autoSave: true,
    notifications: true,
    editorFontSize: 16,
    editorTheme: 'default'
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveSettings = () => {
    localStorage.setItem('blogManagerSettings', JSON.stringify(settings));
    alert('Cài đặt đã được lưu!');
  };

  const handleResetSettings = () => {
    const defaultSettings = {
      theme: 'light',
      language: 'vi',
      autoSave: true,
      notifications: true,
      editorFontSize: 16,
      editorTheme: 'default'
    };
    setSettings(defaultSettings);
    localStorage.setItem('blogManagerSettings', JSON.stringify(defaultSettings));
    alert('Cài đặt đã được reset về mặc định!');
  };

  return (
    <div className="settings">
      <div className="page-header">
        <h1 className="page-title">⚙️ Settings</h1>
        <p className="page-subtitle">Cài đặt ứng dụng và tùy chỉnh giao diện</p>
      </div>

      <div className="settings-content">
        <div className="settings-section">
          <h2 className="section-title">🎨 Appearance</h2>
          
          <div className="setting-group">
            <label className="setting-label">Theme</label>
            <select 
              className="setting-select"
              value={settings.theme}
              onChange={(e) => handleSettingChange('theme', e.target.value)}
            >
              <option value="light">☀️ Light</option>
              <option value="dark">🌙 Dark</option>
              <option value="auto">🔄 Auto</option>
            </select>
          </div>

          <div className="setting-group">
            <label className="setting-label">Language</label>
            <select 
              className="setting-select"
              value={settings.language}
              onChange={(e) => handleSettingChange('language', e.target.value)}
            >
              <option value="vi">🇻🇳 Tiếng Việt</option>
              <option value="en">🇺🇸 English</option>
            </select>
          </div>

          <div className="setting-group">
            <label className="setting-label">Editor Font Size</label>
            <input
              type="range"
              min="12"
              max="24"
              value={settings.editorFontSize}
              onChange={(e) => handleSettingChange('editorFontSize', parseInt(e.target.value))}
              className="setting-range"
            />
            <span className="setting-value">{settings.editorFontSize}px</span>
          </div>
        </div>

        <div className="settings-section">
          <h2 className="section-title">📝 Editor</h2>
          
          <div className="setting-group">
            <label className="setting-label">Editor Theme</label>
            <select 
              className="setting-select"
              value={settings.editorTheme}
              onChange={(e) => handleSettingChange('editorTheme', e.target.value)}
            >
              <option value="default">Default</option>
              <option value="github">GitHub</option>
              <option value="monokai">Monokai</option>
              <option value="solarized">Solarized</option>
            </select>
          </div>

          <div className="setting-group">
            <label className="setting-item">
              <input
                type="checkbox"
                checked={settings.autoSave}
                onChange={(e) => handleSettingChange('autoSave', e.target.checked)}
                className="setting-checkbox"
              />
              <span className="setting-text">Auto Save</span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h2 className="section-title">🔔 Notifications</h2>
          
          <div className="setting-group">
            <label className="setting-item">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                className="setting-checkbox"
              />
              <span className="setting-text">Enable Notifications</span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h2 className="section-title">ℹ️ About</h2>
          
          <div className="about-info">
            <div className="about-item">
              <span className="about-label">Version:</span>
              <span className="about-value">1.0.0</span>
            </div>
            <div className="about-item">
              <span className="about-label">Build:</span>
              <span className="about-value">2025.01.15</span>
            </div>
            <div className="about-item">
              <span className="about-label">Framework:</span>
              <span className="about-value">React 18</span>
            </div>
            <div className="about-item">
              <span className="about-label">Editor:</span>
              <span className="about-value">TipTap</span>
            </div>
          </div>
        </div>

        <div className="settings-actions">
          <button className="btn btn-primary" onClick={handleSaveSettings}>
            💾 Save Settings
          </button>
          <button className="btn btn-secondary" onClick={handleResetSettings}>
            🔄 Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
}
