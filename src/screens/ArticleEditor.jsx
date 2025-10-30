import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogSelector from '../components/BlogSelector';
import DescriptionBlockEditor from '../components/article-editor/DescriptionBlockEditor';
import ImageUploader from '../components/article-editor/ImageUploader';
import ProductReviewEditor from '../components/article-editor/ProductReviewEditor';
import ArticlePreview from '../components/article-editor/ArticlePreview';
import { useBlockManager } from '../hooks/useBlockManager';
import { generateArticleHTML } from '../utils/articleHTMLGenerator';
import './ArticleEditor.css';

const API_BASE =  'https://shopify-blog-backend.vercel.app';

export default function ArticleEditor() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [articles, setArticles] = useState([]);
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  // Form fields - chỉ giữ lại title, image, và description
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  
  const [articleDescriptions, setArticleDescriptions] = useState([
    { id: Date.now(), content: '', textAlign: 'justify' }
  ]);

  // Product Reviews
  const [productReviews, setProductReviews] = useState([]);

  // What To Consider Section
  const [whatToConsider, setWhatToConsider] = useState({
    title: 'What To Consider When Buying Men\'s Ski Goggles?',
    content: 'Shopping for ski goggles can feel surprisingly tricky. They come in different shapes, sizes, lens types, and with all sorts of tech promising clearer vision and better comfort. While we always recommend trying on goggles to make sure they properly fit your face and helmet, it\'s also smart to know the key details before you buy. That way, you can narrow down your options and avoid surprises when you\'re halfway down the mountain.\n\nSome features are straightforward—like making sure your goggles won\'t fog up in a storm—while others, like lens tints, frame sizes, or quick-swap systems, can take a little more thought. Then there\'s the balance of price versus performance: premium models often deliver sharper optics and comfort, but budget picks can still hold their own. Below, we break down the main points to keep in mind so you can find the right pair for your skiing style.'
  });

  // Conclusion Section
  const [conclusion, setConclusion] = useState({
    title: 'Conclusion',
    content: 'After comparing dozens of ski goggles this season, the NANEND 3 Lens Magnetic Ski Goggles claim the top spot. They offer a trio of interchangeable lenses—sunny, cloudy, and night—which means you\'re always ready, no matter how fast light changes. The magnetic dual-lock system is secure yet fast, letting you swap out lenses quickly without fuss. Add in HD lenses with bionic cornea tech, anti-fog ventilation, and wide compatibility, including OTG (over-the-glasses), and you\'ve got a package that delivers both clarity and comfort.\n\nFor riders who demand performance, durability, and adaptability without paying premium brand prices, this one delivers more than its price tag suggests. If you\'re ready to upgrade your vision—and your ride—click below and snag your pair now.'
  });

  // FAQ Section
  const [faqs, setFaqs] = useState([]);

  // Block manager
  const articleDescManager = useBlockManager(articleDescriptions, setArticleDescriptions);

  useEffect(() => {
    loadBlogs();
    loadProducts();
  }, []);

  // Log products whenever they change
  useEffect(() => {
    console.log('🔄 Products state updated:', products[0]);
  }, [products]);

  useEffect(() => {
    if (selectedBlog) {
      loadArticles(selectedBlog);
    }
  }, [selectedBlog]);

  const loadBlogs = async () => {
    try {
      const res = await axios.get(`${API_BASE}/blogs`);
      setBlogs(res.data);
      if (res.data.length > 0) {
        setSelectedBlog(res.data[0].id);
      }
    } catch (error) {
      console.error('Error loading blogs:', error);
    }
  };

  const loadArticles = async (blogId) => {
    try {
      const res = await axios.get(`${API_BASE}/blogs/${blogId}/articles`);
      setArticles(res.data);
    } catch (error) {
      console.error('Error loading articles:', error);
    }
  };

  const loadProducts = async () => {
    try {
      const res = await axios.get(`${API_BASE}/products`);
      setProducts(res.data);
      console.log('📦 Products loaded:', res.data);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const handleCreate = async () => {
    if (!title.trim()) {
      alert('Vui lòng nhập tiêu đề bài viết');
      return;
    }
    
    setLoading(true);
    try {
      await axios.post(`${API_BASE}/blogs/${selectedBlog}/articles`, {
        title: title.trim(),
        body_html: generateArticleHTML({
          title,
          author,
          publishDate,
          shortDescription,
          featuredImage,
          articleDescriptions,
          productReviews,
          products,
          whatToConsider,
          conclusion,
          faqs
        })
      });
      
      clearForm();
      loadArticles(selectedBlog);
      alert('Tạo bài viết thành công!');
    } catch (error) {
      console.error('Error creating article:', error);
      alert('Có lỗi xảy ra khi tạo bài viết');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    if (!title.trim()) {
      alert('Vui lòng nhập tiêu đề bài viết');
      return;
    }
    
    setLoading(true);
    try {
      await axios.put(`${API_BASE}/blogs/${selectedBlog}/articles/${editId}`, {
        title: title.trim(),
        body_html: generateArticleHTML({
          title,
          author,
          publishDate,
          shortDescription,
          featuredImage,
          articleDescriptions,
          productReviews,
          products,
          whatToConsider,
          conclusion,
          faqs
        })
      });
      
      clearForm();
      setEditId(null);
      loadArticles(selectedBlog);
      alert('Cập nhật bài viết thành công!');
    } catch (error) {
      console.error('Error updating article:', error);
      alert('Có lỗi xảy ra khi cập nhật bài viết');
    } finally {
      setLoading(false);
    }
  };

  // Parse article data from HTML
  const parseArticleData = (htmlContent) => {
    try {
      // Create a temporary DOM element to parse HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;

      // Extract basic info
      const titleElement = tempDiv.querySelector('#article-title');
      const authorElement = tempDiv.querySelector('#article-author');
      const publishDateElement = tempDiv.querySelector('#article-publish-date');
      const shortDescElement = tempDiv.querySelector('#article-short-description');
      
      // Extract featured image from intro section background
      const introSection = tempDiv.querySelector('#article-intro-section');
      let featuredImage = '';
      if (introSection) {
        const style = introSection.getAttribute('style') || '';
        const bgMatch = style.match(/background-image:\s*url\(['"]?([^'"]+)['"]?\)/);
        if (bgMatch) {
          featuredImage = bgMatch[1];
        }
      }

      // Extract description blocks
      const descriptionBlocks = [];
      const descriptionElements = tempDiv.querySelectorAll('[id^="description-block-"]');
      descriptionElements.forEach((element, index) => {
        const textAlign = element.style.textAlign || 'justify';
        descriptionBlocks.push({
          id: element.dataset.blockId || Date.now() + index,
          content: element.textContent || '',
          textAlign: textAlign
        });
      });

      // Extract What To Consider
      const whatToConsiderTitle = tempDiv.querySelector('#what-to-consider-title')?.textContent || '';
      const whatToConsiderParagraphs = tempDiv.querySelectorAll('[id^="what-to-consider-paragraph-"]');
      const whatToConsiderContent = Array.from(whatToConsiderParagraphs)
        .map(p => p.textContent)
        .join('\n');

      // Extract Conclusion
      const conclusionTitle = tempDiv.querySelector('#conclusion-title')?.textContent || '';
      const conclusionParagraphs = tempDiv.querySelectorAll('[id^="conclusion-paragraph-"]');
      const conclusionContent = Array.from(conclusionParagraphs)
        .map(p => p.textContent)
        .join('\n');

      // Extract FAQs
      const faqItems = [];
      const faqElements = tempDiv.querySelectorAll('[id^="faq-item-"]');
      faqElements.forEach((faqElement, index) => {
        const questionElement = faqElement.querySelector('[id^="faq-question-"]');
        const answerElement = faqElement.querySelector('[id^="faq-answer-"]');
        
        if (questionElement && answerElement) {
          faqItems.push({
            id: faqElement.dataset.faqId || Date.now() + index,
            question: questionElement.textContent || '',
            answer: answerElement.textContent || ''
          });
        }
      });

      // Extract Product Reviews
      const productReviews = [];
      const reviewElements = tempDiv.querySelectorAll('[id^="product-review-"]');
      reviewElements.forEach((reviewElement) => {
        const reviewId = reviewElement.dataset.reviewId;
        const rankElement = reviewElement.querySelector(`#review-rank-${reviewId}, #review-rank-desktop-${reviewId}`);
        const productTitleElement = reviewElement.querySelector(`#review-product-title-${reviewId}`);
        const prosElement = reviewElement.querySelector(`#review-pros-${reviewId}`);
        const consElement = reviewElement.querySelector(`#review-cons-${reviewId}`);
        const ratingsElement = reviewElement.querySelector(`#review-ratings-${reviewId}`);
        const imagesElement = reviewElement.querySelector(`#review-images-${reviewId}`);
        const descriptionElement = reviewElement.querySelector(`#review-product-description-${reviewId}`);

        if (rankElement && productTitleElement) {
          // Parse pros from new format (pf-pros-item paragraphs)
          const pros = [];
          if (prosElement) {
            const prosItems = prosElement.querySelectorAll('.pf-pros-item');
            prosItems.forEach(item => {
              const labelSpan = item.querySelector('.pf-pros-label');
              if (labelSpan) {
                const label = labelSpan.textContent.replace(':', '').trim();
                const desc = item.textContent.replace(labelSpan.textContent, '').trim();
                pros.push(`${label}: ${desc}`);
              } else {
                pros.push(item.textContent.trim());
              }
            });
          }

          // Parse cons from new format (pf-cons-item paragraphs)
          const cons = [];
          if (consElement) {
            const consItems = consElement.querySelectorAll('.pf-cons-item');
            consItems.forEach(item => {
              const labelSpan = item.querySelector('.pf-cons-label');
              if (labelSpan) {
                const label = labelSpan.textContent.replace(':', '').trim();
                const desc = item.textContent.replace(labelSpan.textContent, '').trim();
                cons.push(`${label}: ${desc}`);
              } else {
                cons.push(item.textContent.trim());
              }
            });
          }

          // Parse ratings from feature cards
          const ratings = [];
          if (ratingsElement) {
            const featureCards = ratingsElement.querySelectorAll('.pf-feature-card');
            featureCards.forEach(card => {
              const scoreElement = card.querySelector('.pf-feature-score');
              const labelElement = card.querySelector('.pf-feature-label');
              if (scoreElement && labelElement) {
                const score = parseFloat(scoreElement.textContent.trim()) || 0;
                const label = labelElement.textContent.trim();
                ratings.push({ label, score });
              }
            });
          }

          // Parse selected images from HTML
          const selectedImages = [];
          if (imagesElement) {
            // Check for image slider
            const sliderImages = imagesElement.querySelectorAll('.pf-slide img');
            if (sliderImages.length > 0) {
              sliderImages.forEach(img => {
                const src = img.getAttribute('src');
                if (src) selectedImages.push(src);
              });
            } else {
              // Check for single image
              const singleImage = imagesElement.querySelector('.pf-product-image, img');
              if (singleImage) {
                const src = singleImage.getAttribute('src');
                if (src) selectedImages.push(src);
              }
            }
          }

          // Parse description
          const description = descriptionElement ? descriptionElement.textContent.trim() : '';

          // Parse theme from data-theme attribute or class
          const theme = reviewElement.dataset.theme || 
                       (reviewElement.classList.contains('pf-review-dark-theme') ? 'dark' : 'light');

          // Default ratings if none found
          if (ratings.length === 0) {
            ratings.push(
              { label: 'Warmth', score: 4 },
              { label: 'Waterproof', score: 3 },
              { label: 'Tightness', score: 2 },
              { label: 'Breathability', score: 3 }
            );
          }

          // Try to find matching product by title
          const productTitle = productTitleElement.querySelector('h1, h3')?.textContent || '';
          const matchingProduct = products.find(p => p.title === productTitle);

          productReviews.push({
            id: reviewId,
            rank: rankElement.textContent.trim() || 'TOP 1',
            productId: matchingProduct?.id || reviewElement.dataset.productId || '',
            selectedImages: selectedImages,
            description: description,
            ratings: ratings,
            pros: pros.length > 0 ? pros : [''],
            cons: cons.length > 0 ? cons : [''],
            theme: theme // Lưu theme
          });
        }
      });

      return {
        title: titleElement?.textContent || '',
        author: authorElement?.textContent || '',
        publishDate: publishDateElement?.textContent || '',
        shortDescription: shortDescElement?.textContent || '',
        featuredImage: featuredImage,
        articleDescriptions: descriptionBlocks.length > 0 ? descriptionBlocks : [{ id: Date.now(), content: '', textAlign: 'justify' }],
        whatToConsider: {
          title: whatToConsiderTitle,
          content: whatToConsiderContent
        },
        conclusion: {
          title: conclusionTitle,
          content: conclusionContent
        },
        faqs: faqItems,
        productReviews: productReviews.length > 0 ? productReviews : []
      };
    } catch (error) {
      console.error('Error parsing article data:', error);
      return {
        title: '',
        author: '',
        publishDate: '',
        shortDescription: '',
        featuredImage: '',
        articleDescriptions: [{ id: Date.now(), content: '', textAlign: 'justify' }],
        whatToConsider: { title: '', content: '' },
        conclusion: { title: '', content: '' },
        faqs: [],
        productReviews: []
      };
    }
  };

  const handleEdit = (article) => {
    setEditId(article.id);
    setTitle(article.title);
    
    // Parse and load all data from HTML
    const parsedData = parseArticleData(article.body_html);
    
    console.log('📝 Parsed data for edit:', parsedData);
    
    setAuthor(parsedData.author);
    setPublishDate(parsedData.publishDate);
    setShortDescription(parsedData.shortDescription);
    setFeaturedImage(parsedData.featuredImage);
    setArticleDescriptions(parsedData.articleDescriptions);
    setWhatToConsider(parsedData.whatToConsider);
    setConclusion(parsedData.conclusion);
    setFaqs(parsedData.faqs);
    setProductReviews(parsedData.productReviews);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Bạn có chắc muốn xóa bài viết này?')) return;
    
    try {
      await axios.delete(`${API_BASE}/blogs/${selectedBlog}/articles/${id}`);
      loadArticles(selectedBlog);
      alert('Xóa bài viết thành công!');
    } catch (error) {
      console.error('Error deleting article:', error);
      alert('Có lỗi xảy ra khi xóa bài viết');
    }
  };

  const clearForm = () => {
    setTitle('');
    setAuthor('');
    setPublishDate('');
    setShortDescription('');
    setFeaturedImage('');
    setImageFile(null);
    setImagePreview(null);
    setArticleDescriptions([{ id: Date.now(), content: '', textAlign: 'justify' }]);
    setProductReviews([]);
    setFaqs([]);
    setWhatToConsider({
      title: 'What To Consider When Buying Men\'s Ski Goggles?',
      content: 'Shopping for ski goggles can feel surprisingly tricky. They come in different shapes, sizes, lens types, and with all sorts of tech promising clearer vision and better comfort. While we always recommend trying on goggles to make sure they properly fit your face and helmet, it\'s also smart to know the key details before you buy. That way, you can narrow down your options and avoid surprises when you\'re halfway down the mountain.\n\nSome features are straightforward—like making sure your goggles won\'t fog up in a storm—while others, like lens tints, frame sizes, or quick-swap systems, can take a little more thought. Then there\'s the balance of price versus performance: premium models often deliver sharper optics and comfort, but budget picks can still hold their own. Below, we break down the main points to keep in mind so you can find the right pair for your skiing style.'
    });
    setConclusion({
      title: 'Conclusion',
      content: 'After comparing dozens of ski goggles this season, the NANEND 3 Lens Magnetic Ski Goggles claim the top spot. They offer a trio of interchangeable lenses—sunny, cloudy, and night—which means you\'re always ready, no matter how fast light changes. The magnetic dual-lock system is secure yet fast, letting you swap out lenses quickly without fuss. Add in HD lenses with bionic cornea tech, anti-fog ventilation, and wide compatibility, including OTG (over-the-glasses), and you\'ve got a package that delivers both clarity and comfort.\n\nFor riders who demand performance, durability, and adaptability without paying premium brand prices, this one delivers more than its price tag suggests. If you\'re ready to upgrade your vision—and your ride—click below and snag your pair now.'
    });
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file && !event.target.value) return;

    if (!file && event.target.value) {
      setFeaturedImage(event.target.value);
      setImageFile(null);
      setImagePreview(null);
      return;
    }

    if (file.size > 20 * 1024 * 1024) {
      alert('File quá lớn! Kích thước tối đa là 20MB');
      return;
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      alert('Định dạng file không được hỗ trợ! Chỉ chấp nhận JPEG, PNG, GIF, WEBP');
      return;
    }

    setImageFile(file);
    
    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target.result);
    reader.readAsDataURL(file);

    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await axios.post(`${API_BASE}/upload-image`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response.data.success) {
        setFeaturedImage(response.data.imageUrl);
        alert(`Upload thành công! File: ${response.data.filename}`);
      } else {
        throw new Error(response.data.error || 'Upload thất bại');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert(`Lỗi upload: ${error.response?.data?.error || error.message}`);
      setImageFile(null);
      setImagePreview(null);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setFeaturedImage('');
  };

  return (
    <div className="article-editor">
      <button 
        className={`preview-mode-toggle ${previewMode ? 'active' : ''}`}
        onClick={() => setPreviewMode(!previewMode)}
      >
        {previewMode ? '✏️ Chỉnh Sửa' : '👁️ Xem Trước'}
      </button>
      
      <div className="page-header">
        <h1 className="page-title">✏️ Trình Soạn Bài Viết</h1>
        <p className="page-subtitle">Tạo và quản lý bài viết blog đơn giản</p>
      </div>

      <div className="editor-content">
        {previewMode ? (
          <ArticlePreview
            title={title}
            author={author}
            publishDate={publishDate}
            shortDescription={shortDescription}
            featuredImage={featuredImage}
            articleDescriptions={articleDescriptions}
            productReviews={productReviews}
            products={products}
            whatToConsider={whatToConsider}
            conclusion={conclusion}
            faqs={faqs}
          />
        ) : (
          <>
            <div className="editor-section">
              <div className="blog-selector-card">
                <label className="blog-selector-label">📖 Chọn Blog</label>
                <BlogSelector 
                  blogs={blogs} 
                  selectedBlog={selectedBlog} 
                  setSelectedBlog={setSelectedBlog} 
                />
              </div>
            </div>

            <div className="editor-section">
              <div className="section-header-main">
                <h2 className="section-title-main">
                  {editId ? '✏️ Chỉnh Sửa Bài Viết' : '➕ Tạo Bài Viết Mới'}
                </h2>
                {editId && (
                  <button 
                    className="btn btn-outline"
                    onClick={() => { clearForm(); setEditId(null); }}
                  >
                    ❌ Hủy Chỉnh Sửa
                  </button>
                )}
              </div>

              <div className="content-card">
                <h3 className="card-title">🎨 Section Intro Hero</h3>
                
                <div className="form-group">
                  <label className="form-label">Tiêu đề bài viết *</label>
                  <input
                    className="form-input"
                    placeholder="VD: Best Men's Ski Goggles 2025 – Top Picks for Every Condition"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Tác giả</label>
                  <input
                    className="form-input"
                    placeholder="VD: Cecilia Wong"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Ngày xuất bản</label>
                  <input
                    className="form-input"
                    type="date"
                    value={publishDate}
                    onChange={e => setPublishDate(e.target.value)}
                  />
                  <p className="form-help-text">Để trống sẽ tự động lấy ngày hiện tại</p>
                </div>

                <div className="form-group">
                  <label className="form-label">Mô tả ngắn (hiển thị trong intro)</label>
                  <input
                    className="form-input"
                    placeholder="VD: Best Men's Ski Goggles of 2025 | Snowears"
                    value={shortDescription}
                    onChange={e => setShortDescription(e.target.value)}
                  />
                </div>

                <ImageUploader
                  featuredImage={featuredImage}
                  imagePreview={imagePreview}
                  imageFile={imageFile}
                  onImageUpload={handleImageUpload}
                  onRemoveImage={removeImage}
                />
              </div>

              <div className="content-card" style={{ marginTop: '20px' }}>
                <h3 className="card-title">📝 Nội Dung Bài Viết</h3>
                
                <div style={{ background: '#fffbeb', padding: '16px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #fcd34d' }}>
                  <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 'bold', color: '#92400e' }}>📚 Hướng dẫn sử dụng:</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: '#78350f', lineHeight: '1.8' }}>
                    <li>✍️ Gõ nội dung bình thường như Word</li>
                    <li><strong>Bôi đậm:</strong> Chọn text → Click <strong>B Bold</strong></li>
                    <li><em>In nghiêng:</em> Chọn text → Click <em>I Italic</em></li>
                    <li>🔗 <strong>Thêm link:</strong> Chọn text → Click 🔗 Link → Nhập URL</li>
                    <li>📑 <strong>Tiêu đề phụ:</strong> Gõ text → Chọn → Click H3 Heading</li>
                    <li>↵ <strong>Xuống dòng:</strong> Click ↵ Break để thêm khoảng trắng</li>
                  </ul>
                </div>
                
                <DescriptionBlockEditor
                  blocks={articleDescriptions}
                  onAdd={articleDescManager.add}
                  onRemove={articleDescManager.remove}
                  onUpdate={articleDescManager.update}
                  title="📝 Nội dung chính"
                  helpText="Nội dung sẽ hiển thị trên nền màu xanh nhạt (#e0ffc2)"
                />
              </div>

              <div className="content-card" style={{ marginTop: '20px' }}>
                <ProductReviewEditor
                  reviews={productReviews}
                  products={products}
                  onAdd={(newReview) => setProductReviews([...productReviews, newReview])}
                  onRemove={(reviewId) => setProductReviews(productReviews.filter(r => r.id !== reviewId))}
                  onUpdate={setProductReviews}
                />
              </div>

              <div className="content-card" style={{ marginTop: '20px' }}>
                <h3 className="card-title">🤔 What To Consider Section</h3>
                
                <div className="form-group">
                  <label className="form-label">Tiêu đề section</label>
                  <input
                    className="form-input"
                    placeholder="What To Consider When Buying Men's Ski Goggles?"
                    value={whatToConsider.title}
                    onChange={e => setWhatToConsider({...whatToConsider, title: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Nội dung section</label>
                  <textarea
                    className="form-input"
                    placeholder="Nhập nội dung về những điều cần cân nhắc khi mua sản phẩm..."
                    value={whatToConsider.content}
                    onChange={e => setWhatToConsider({...whatToConsider, content: e.target.value})}
                    rows="8"
                    style={{ resize: 'vertical', fontFamily: 'monospace', fontSize: '13px' }}
                  />
                  <p style={{ fontSize: '12px', color: '#718096', marginTop: '8px' }}>
                    💡 Section này sẽ hiển thị với background màu xanh nhạt (#e0ffc2)
                  </p>
                </div>
              </div>

              <div className="content-card" style={{ marginTop: '20px' }}>
                <h3 className="card-title">🎯 Conclusion Section</h3>
                
                <div className="form-group">
                  <label className="form-label">Tiêu đề section</label>
                  <input
                    className="form-input"
                    placeholder="Conclusion"
                    value={conclusion.title}
                    onChange={e => setConclusion({...conclusion, title: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Nội dung kết luận</label>
                  <textarea
                    className="form-input"
                    placeholder="Nhập nội dung kết luận của bài viết..."
                    value={conclusion.content}
                    onChange={e => setConclusion({...conclusion, content: e.target.value})}
                    rows="8"
                    style={{ resize: 'vertical', fontFamily: 'monospace', fontSize: '13px' }}
                  />
                  <p style={{ fontSize: '12px', color: '#718096', marginTop: '8px' }}>
                    💡 Section này sẽ hiển thị với background màu trắng
                  </p>
                </div>
              </div>

              <div className="content-card" style={{ marginTop: '20px' }}>
                <h3 className="card-title">❓ FAQ Section</h3>
                
                <div style={{ background: '#f0f9ff', padding: '16px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #0ea5e9' }}>
                  <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 'bold', color: '#0c4a6e' }}>📚 Hướng dẫn FAQ:</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: '#075985', lineHeight: '1.8' }}>
                    <li>➕ Click "Thêm FAQ" để tạo câu hỏi mới</li>
                    <li>✏️ Nhập câu hỏi và câu trả lời</li>
                    <li>🗑️ Click "Xóa" để xóa FAQ không cần thiết</li>
                    <li>💡 FAQ sẽ hiển thị dưới dạng accordion có thể mở/đóng</li>
                  </ul>
                </div>

                <div className="faq-list">
                  {faqs.map((faq, index) => (
                    <div key={faq.id} className="faq-item" style={{ 
                      border: '1px solid #e2e8f0', 
                      borderRadius: '8px', 
                      padding: '16px', 
                      marginBottom: '16px',
                      backgroundColor: '#f8fafc'
                    }}>
                      <div className="form-group">
                        <label className="form-label">Câu hỏi {index + 1}</label>
                        <input
                          className="form-input"
                          placeholder="VD: What are the best ski goggles for beginners?"
                          value={faq.question}
                          onChange={e => {
                            const newFaqs = [...faqs];
                            newFaqs[index].question = e.target.value;
                            setFaqs(newFaqs);
                          }}
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">Câu trả lời</label>
                        <textarea
                          className="form-input"
                          placeholder="Nhập câu trả lời chi tiết..."
                          value={faq.answer}
                          onChange={e => {
                            const newFaqs = [...faqs];
                            newFaqs[index].answer = e.target.value;
                            setFaqs(newFaqs);
                          }}
                          rows="4"
                          style={{ resize: 'vertical' }}
                        />
                      </div>
                      
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          const newFaqs = faqs.filter((_, i) => i !== index);
                          setFaqs(newFaqs);
                        }}
                      >
                        🗑️ Xóa FAQ
                      </button>
                    </div>
                  ))}
                </div>

                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    const newFaq = {
                      id: Date.now(),
                      question: '',
                      answer: ''
                    };
                    setFaqs([...faqs, newFaq]);
                  }}
                >
                  ➕ Thêm FAQ
                </button>

                {faqs.length === 0 && (
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '40px 20px', 
                    color: '#64748b',
                    backgroundColor: '#f1f5f9',
                    borderRadius: '8px',
                    border: '2px dashed #cbd5e1'
                  }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>❓</div>
                    <h4 style={{ margin: '0 0 8px 0', color: '#475569' }}>Chưa có FAQ nào</h4>
                    <p style={{ margin: 0, fontSize: '14px' }}>Click "Thêm FAQ" để tạo câu hỏi đầu tiên</p>
                  </div>
                )}
              </div>

              <div className="form-actions-sticky">
                {editId ? (
                  <>
                    <button 
                      className="btn btn-primary btn-lg" 
                      onClick={handleUpdate} 
                      disabled={loading}
                    >
                      {loading ? '⏳ Đang cập nhật...' : '💾 Cập Nhật Bài Viết'}
                    </button>
                    <button 
                      className="btn btn-secondary btn-lg" 
                      onClick={() => { clearForm(); setEditId(null); }} 
                      disabled={loading}
                    >
                      ❌ Hủy
                    </button>
                  </>
                ) : (
                  <button 
                    className="btn btn-primary btn-lg" 
                    onClick={handleCreate} 
                    disabled={loading}
                  >
                    {loading ? '⏳ Đang tạo...' : '✨ Tạo Bài Viết'}
                  </button>
                )}
              </div>
            </div>

            <div className="editor-section" style={{ marginTop: '40px' }}>
              <div className="content-card">
                <h3 className="card-title">📚 Bài Viết Hiện Có ({articles.length})</h3>
                
                <div className="articles-list">
                  {articles.map(article => (
                    <div key={article.id} className="article-item">
                      <div className="article-item-content">
                        <h4 className="article-item-title">{article.title}</h4>
                        <p className="article-item-preview">
                          {article.body_html ? 
                            article.body_html.replace(/<[^>]*>/g, '').substring(0, 100) + '...' :
                            'No content'
                          }
                        </p>
                        <div className="article-item-meta">
                          <span className="article-date">
                            📅 {new Date(article.created_at || new Date()).toLocaleDateString('vi-VN')}
                          </span>
                          <span className="article-id">ID: {article.id}</span>
                        </div>
                      </div>
                      <div className="article-item-actions">
                        <button className="btn btn-secondary btn-sm" onClick={() => handleEdit(article)}>
                          ✏️ Sửa
                        </button>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(article.id)}>
                          🗑️ Xóa
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {articles.length === 0 && (
                  <div className="empty-state">
                    <div className="empty-icon">📝</div>
                    <h3>Chưa có bài viết nào</h3>
                    <p>Tạo bài viết đầu tiên cho blog này!</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}