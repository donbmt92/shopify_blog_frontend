import React from 'react';

// Template cho bài viết review sản phẩm theo phong cách Snowears
export default function ProductReviewTemplate() {
  const template = `
<div class="product-review-article">
  <!-- Header Section -->
  <div class="article-hero">
    <h1 class="article-main-title">Best Men's Ski Goggles 2025 – Top Picks for Every Condition</h1>
    <div class="article-meta">
      <span class="author">By Cecilia Wong</span>
      <span class="date">August 20, 2025</span>
    </div>
    <img src="hero-image.jpg" alt="Best Men's Ski Goggles" class="hero-image" />
  </div>

  <!-- Introduction -->
  <div class="article-intro">
    <p><strong>I tested 7 products and found</strong> <strong>NANEND 3 Lens Magnetic Ski Goggles</strong> to be the best overall choice. They deliver exceptional clarity, comfort, and versatility across all conditions.</p>
  </div>

  <!-- Quick Picks Section -->
  <div class="quick-picks">
    <h2>🏆 Quick Picks</h2>
    <div class="picks-grid">
      <div class="pick-card">
        <div class="pick-badge">Best Overall</div>
        <img src="product-1.jpg" alt="Product 1" />
        <h3>NANEND 3 Lens Magnetic Ski Goggles</h3>
        <div class="rating">⭐⭐⭐⭐⭐ 4.8/5</div>
        <p class="price">$129.99</p>
        <a href="#" class="btn-buy">View Product</a>
      </div>
      
      <div class="pick-card">
        <div class="pick-badge">Best Value</div>
        <img src="product-2.jpg" alt="Product 2" />
        <h3>Budget-Friendly Option</h3>
        <div class="rating">⭐⭐⭐⭐ 4.2/5</div>
        <p class="price">$79.99</p>
        <a href="#" class="btn-buy">View Product</a>
      </div>
      
      <div class="pick-card">
        <div class="pick-badge">Premium Choice</div>
        <img src="product-3.jpg" alt="Product 3" />
        <h3>High-End Professional</h3>
        <div class="rating">⭐⭐⭐⭐⭐ 4.9/5</div>
        <p class="price">$249.99</p>
        <a href="#" class="btn-buy">View Product</a>
      </div>
    </div>
  </div>

  <!-- Detailed Reviews -->
  <div class="detailed-reviews">
    <h2>📝 Detailed Product Reviews</h2>
    
    <div class="product-review">
      <div class="review-header">
        <img src="product-1.jpg" alt="Product" class="review-image" />
        <div class="review-title-section">
          <h3>1. NANEND 3 Lens Magnetic Ski Goggles</h3>
          <div class="overall-rating">
            <span class="rating-score">4.8/5</span>
            <span class="rating-stars">⭐⭐⭐⭐⭐</span>
          </div>
        </div>
      </div>
      
      <div class="review-criteria">
        <div class="criterion">
          <span class="criterion-label">Lens Quality</span>
          <div class="criterion-bar">
            <div class="criterion-fill" style="width: 96%"></div>
          </div>
          <span class="criterion-score">4.8/5</span>
        </div>
        
        <div class="criterion">
          <span class="criterion-label">Comfort</span>
          <div class="criterion-bar">
            <div class="criterion-fill" style="width: 90%"></div>
          </div>
          <span class="criterion-score">4.5/5</span>
        </div>
        
        <div class="criterion">
          <span class="criterion-label">Ventilation</span>
          <div class="criterion-bar">
            <div class="criterion-fill" style="width: 94%"></div>
          </div>
          <span class="criterion-score">4.7/5</span>
        </div>
        
        <div class="criterion">
          <span class="criterion-label">Sustainability</span>
          <div class="criterion-bar">
            <div class="criterion-fill" style="width: 80%"></div>
          </div>
          <span class="criterion-score">4.0/5</span>
        </div>
      </div>
      
      <div class="review-content">
        <h4>Key Features</h4>
        <ul>
          <li>✅ 3 interchangeable lenses (sunny, cloudy, night)</li>
          <li>✅ Magnetic dual-lock system for quick swaps</li>
          <li>✅ HD bionic cornea technology</li>
          <li>✅ Anti-fog ventilation system</li>
          <li>✅ OTG compatible (over-the-glasses)</li>
        </ul>
        
        <h4>Pros & Cons</h4>
        <div class="pros-cons">
          <div class="pros">
            <h5>👍 Pros</h5>
            <ul>
              <li>Exceptional lens clarity in all conditions</li>
              <li>Quick and secure magnetic lens system</li>
              <li>Comfortable triple-layer foam</li>
              <li>Great value for money</li>
            </ul>
          </div>
          <div class="cons">
            <h5>👎 Cons</h5>
            <ul>
              <li>Slightly bulky for smaller faces</li>
              <li>Limited color options</li>
            </ul>
          </div>
        </div>
        
        <h4>Our Verdict</h4>
        <p>The NANEND 3 Lens Magnetic Ski Goggles deliver outstanding performance across all conditions. The magnetic lens system is genuinely useful, and the optical quality rivals goggles costing twice as much.</p>
        
        <a href="#" class="btn-primary">Check Current Price →</a>
      </div>
    </div>
    
    <!-- Repeat for other products -->
  </div>

  <!-- Comparison Table -->
  <div class="comparison-section">
    <h2>📊 Product Comparison Table</h2>
    <div class="comparison-table-wrapper">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Lens Quality</th>
            <th>Comfort</th>
            <th>Ventilation</th>
            <th>Price</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>NANEND 3 Lens</strong></td>
            <td>⭐⭐⭐⭐⭐ 4.8</td>
            <td>⭐⭐⭐⭐⭐ 4.5</td>
            <td>⭐⭐⭐⭐⭐ 4.7</td>
            <td>$129.99</td>
            <td>All conditions</td>
          </tr>
          <tr>
            <td><strong>Budget Option</strong></td>
            <td>⭐⭐⭐⭐ 4.0</td>
            <td>⭐⭐⭐⭐ 4.2</td>
            <td>⭐⭐⭐⭐ 3.8</td>
            <td>$79.99</td>
            <td>Beginners</td>
          </tr>
          <tr>
            <td><strong>Premium Choice</strong></td>
            <td>⭐⭐⭐⭐⭐ 4.9</td>
            <td>⭐⭐⭐⭐⭐ 4.8</td>
            <td>⭐⭐⭐⭐⭐ 4.9</td>
            <td>$249.99</td>
            <td>Professionals</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Buying Guide -->
  <div class="buying-guide">
    <h2>🛒 What To Consider When Buying</h2>
    
    <div class="guide-section">
      <h3>1. Lens Quality</h3>
      <img src="lens-quality.jpg" alt="Lens Quality" />
      <p>Lens quality determines how well you see on the mountain. Look for features like:</p>
      <ul>
        <li><strong>UV Protection:</strong> 100% UV400 protection is essential</li>
        <li><strong>Anti-fog coating:</strong> Keeps your vision clear</li>
        <li><strong>Contrast enhancement:</strong> Helps you read terrain better</li>
        <li><strong>Scratch resistance:</strong> Protects your investment</li>
      </ul>
      
      <div class="rating-guide">
        <h4>Rating Scale:</h4>
        <div class="rating-tier">
          <span class="tier-score">4-5 ⭐</span>
          <p>Premium optics with exceptional clarity, minimal distortion, and durable coatings.</p>
        </div>
        <div class="rating-tier">
          <span class="tier-score">2.5-3.5 ⭐</span>
          <p>Good quality for most conditions, minor distortion at edges.</p>
        </div>
        <div class="rating-tier">
          <span class="tier-score">0-2 ⭐</span>
          <p>Basic lenses that get the job done but lack premium features.</p>
        </div>
      </div>
    </div>
    
    <div class="guide-section">
      <h3>2. Comfort</h3>
      <img src="comfort.jpg" alt="Comfort" />
      <p>All-day comfort comes from quality foam and proper fit. Key factors include:</p>
      <ul>
        <li><strong>Multi-layer foam:</strong> Triple-layer is best for comfort</li>
        <li><strong>Face contour:</strong> Should match your face shape</li>
        <li><strong>Frame flexibility:</strong> Semi-flexible frames adapt better</li>
        <li><strong>Weight:</strong> Lighter goggles reduce fatigue</li>
      </ul>
    </div>
    
    <div class="guide-section">
      <h3>3. Ventilation</h3>
      <img src="ventilation.jpg" alt="Ventilation" />
      <p>Proper ventilation prevents fogging. Look for:</p>
      <ul>
        <li><strong>Frame vents:</strong> Top and bottom vents work best</li>
        <li><strong>Lens vents:</strong> Dual-pane lenses help airflow</li>
        <li><strong>Anti-fog treatment:</strong> Long-lasting coatings</li>
      </ul>
    </div>
    
    <div class="guide-section">
      <h3>4. Sustainability</h3>
      <img src="sustainability.jpg" alt="Sustainability" />
      <p>Consider environmental impact:</p>
      <ul>
        <li><strong>Recycled materials:</strong> Frame and strap materials</li>
        <li><strong>Replaceable lenses:</strong> Extends product life</li>
        <li><strong>Eco packaging:</strong> Minimal and recyclable</li>
        <li><strong>Brand practices:</strong> Carbon monitoring and reporting</li>
      </ul>
    </div>
  </div>

  <!-- Related Articles -->
  <div class="related-articles">
    <h2>📚 People Also Read</h2>
    <div class="related-grid">
      <a href="#" class="related-card">
        <img src="related-1.jpg" alt="Related Article" />
        <h4>Best Waterproof Snowboard Hoodies</h4>
      </a>
      <a href="#" class="related-card">
        <img src="related-2.jpg" alt="Related Article" />
        <h4>Best Baggy Ski Pullovers for 2025</h4>
      </a>
      <a href="#" class="related-card">
        <img src="related-3.jpg" alt="Related Article" />
        <h4>All-Terrain Baggy Cargo Snow Trousers</h4>
      </a>
    </div>
  </div>

  <!-- Conclusion -->
  <div class="article-conclusion">
    <h2>🎯 Conclusion</h2>
    <p>After comparing dozens of ski goggles this season, the <strong>NANEND 3 Lens Magnetic Ski Goggles</strong> claim the top spot. They offer a trio of interchangeable lenses—sunny, cloudy, and night—which means you're always ready, no matter how fast light changes.</p>
    <p>The magnetic dual-lock system is secure yet fast, letting you swap out lenses quickly without fuss. Add in HD lenses with bionic cornea tech, anti-fog ventilation, and wide compatibility, including OTG (over-the-glasses), and you've got a package that delivers both clarity and comfort.</p>
    <p>For riders who demand performance, durability, and adaptability without paying premium brand prices, this one delivers more than its price tag suggests.</p>
    <a href="#" class="btn-cta">🛒 Check Current Price & Availability →</a>
  </div>

  <!-- FAQs -->
  <div class="faq-section">
    <h2>❓ Frequently Asked Questions</h2>
    
    <div class="faq-item">
      <h3>What Are the Best Men's Ski Goggles?</h3>
      <p>The <strong>NANEND 3 Lens Magnetic Ski Goggles</strong> are our top pick for men this season. With three interchangeable lenses—sunny, cloudy, and night—they adapt seamlessly to changing light.</p>
      <p>The magnetic dual-lock system makes swaps fast and secure, while the HD bionic lenses deliver crisp clarity with reliable anti-fog ventilation. They're also OTG-friendly and built for comfort, so you can ride longer without distraction.</p>
    </div>
    
    <div class="faq-item">
      <h3>How Much Should I Spend on Men's Ski Goggles?</h3>
      <p>Most skiers will find the sweet spot between <strong>$100 and $150</strong>. At this price, you get high-quality optics, dependable anti-fog treatments, and durable frames without overspending.</p>
      <p>Premium options above $200 often add small performance perks, but for the majority of riders, mid-range goggles strike the perfect balance of clarity, comfort, and value.</p>
    </div>
    
    <div class="faq-item">
      <h3>How Do I Choose the Right Ski Goggles Fit?</h3>
      <p>Fit is just as important as lens quality. Your goggles should sit flush against your face without gaps, pressure points, or slipping. Look for multi-layer foam padding that molds comfortably to your features and a frame size matched to your face shape.</p>
      <p>If you often notice a gap over the bridge of your nose, consider a low-bridge fit. And always check helmet compatibility—goggles and helmets should pair smoothly for a sealed, draft-free fit.</p>
    </div>
    
    <div class="faq-item">
      <h3>Do You Really Need Ski Goggles?</h3>
      <p>Yes—ski goggles aren't just for style, they're essential for visibility, safety, and comfort. Quality lenses protect your eyes from UV rays, shield against wind and snow, and reduce glare on bright days.</p>
      <p>Goggles also improve depth perception in flat light, which helps you navigate terrain more confidently. Sunglasses alone can't match the coverage or security of a properly fitted goggle on the mountain.</p>
    </div>
    
    <div class="faq-item">
      <h3>How Often Should I Replace My Ski Goggles?</h3>
      <p>A good pair of goggles can last 3 to 5 seasons with proper care, but replacement depends on wear. If your lenses are scratched, the foam is breaking down, or the anti-fog coating has worn off, it's time for a new set.</p>
      <p>Technology also evolves quickly—modern goggles with magnetic lens systems and better ventilation can make a big difference in performance. If your goggles are holding you back, upgrading sooner is worth it.</p>
    </div>
  </div>

  <!-- Contact Form -->
  <div class="contact-section">
    <h2>💬 Have Any Questions?</h2>
    <p>We are here to answer all of your queries</p>
    <form class="contact-form">
      <div class="form-row">
        <input type="text" placeholder="First Name*" required />
        <input type="text" placeholder="Last Name*" required />
      </div>
      <input type="email" placeholder="Email*" required />
      <textarea placeholder="Your Question*" rows="5" required></textarea>
      <button type="submit" class="btn-submit">Send Message</button>
    </form>
  </div>
</div>
  `;

  return (
    <div className="template-preview">
      <div className="template-header">
        <h2>📝 Product Review Template</h2>
        <p>Template theo phong cách Snowears - Chuyên nghiệp và chi tiết</p>
      </div>
      
      <div className="template-actions">
        <button 
          className="btn btn-primary"
          onClick={() => {
            navigator.clipboard.writeText(template);
            alert('✅ Template đã được copy vào clipboard!');
          }}
        >
          📋 Copy Template
        </button>
        <button 
          className="btn btn-secondary"
          onClick={() => {
            const blob = new Blob([template], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'product-review-template.html';
            a.click();
          }}
        >
          💾 Download HTML
        </button>
      </div>

      <div className="template-code">
        <pre><code>{template}</code></pre>
      </div>

      <div className="template-features">
        <h3>✨ Tính năng của template:</h3>
        <ul>
          <li>✅ Hero section với title và meta info</li>
          <li>✅ Quick picks với badges (Best Overall, Best Value, Premium)</li>
          <li>✅ Detailed reviews với rating bars</li>
          <li>✅ Pros & Cons sections</li>
          <li>✅ Comparison table</li>
          <li>✅ Buying guide với rating scales</li>
          <li>✅ Related articles grid</li>
          <li>✅ Conclusion với CTA</li>
          <li>✅ FAQ section</li>
          <li>✅ Contact form</li>
        </ul>
      </div>

      <div className="template-usage">
        <h3>📖 Cách sử dụng:</h3>
        <ol>
          <li>Copy template HTML</li>
          <li>Paste vào editor của bạn</li>
          <li>Thay thế nội dung mẫu bằng nội dung thực</li>
          <li>Thêm hình ảnh và links</li>
          <li>Publish bài viết!</li>
        </ol>
      </div>
    </div>
  );
}
