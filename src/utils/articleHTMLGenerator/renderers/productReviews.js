import { generateImageSlider, generateSingleImage } from '../helpers/imageHelpers';

// Render product reviews
export const renderProductReviews = (reviews, products) => {
  if (!reviews || reviews.length === 0) return "";

  return reviews
    .map((review, index) => {
      const product = products.find((p) => p.id === review.productId);
      if (!product || !review.productId) return "";

      // Use selected images if available, otherwise fallback to product images
      const displayImages =
        review.selectedImages && review.selectedImages.length > 0
          ? review.selectedImages
          : product.images && product.images.length > 0
            ? [product.images[0].src]
            : [product.image?.src].filter(Boolean);

      // Generate image slider or single image
      const imageContent =
        displayImages.length > 1
          ? generateImageSlider(displayImages, product.title, review.id)
          : generateSingleImage(displayImages[0], product.title);

      // Calculate overall rating
      const overallRating = review.overallRating ||
        (review.ratings && review.ratings.length > 0
          ? (review.ratings.reduce((sum, r) => sum + r.score, 0) / review.ratings.length).toFixed(1)
          : "0");

      // Generate feature rating cards
      const ratingCards = (review.ratings || []).slice(0, 4)
        .map((rating, idx) => {
          const percent = (rating.score / 5) * 100;
          const colors = [
            { bg: 'linear-gradient(to bottom, #ff8c42, #ff6b1a)', bar: '#ff8c42' }, // Orange
            { bg: 'linear-gradient(to bottom, #4fc3f7, #29b6f6)', bar: '#4fc3f7' }, // Light blue
            { bg: 'linear-gradient(to bottom, #ba68c8, #ab47bc)', bar: '#ba68c8' }, // Purple
            { bg: 'linear-gradient(to bottom, #66bb6a, #43a047)', bar: '#66bb6a' }  // Dark green
          ];
          const color = colors[idx % 4];

          // Icon mapping based on rating label
          const getIcon = (label) => {
            const labelLower = label.toLowerCase();
            if (labelLower.includes('warm') || labelLower.includes('heat')) {
              return '🔥';
            } else if (labelLower.includes('water') || labelLower.includes('rain')) {
              return '💧';
            } else if (labelLower.includes('tight') || labelLower.includes('fit')) {
              return '👒';
            } else if (labelLower.includes('breath') || labelLower.includes('air')) {
              return '⬆️';
            }
            return '⭐';
          };

          return `
            <div class="pf-feature-card" style="background: ${color.bg};">
              <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 12px; width: 100%;">
                <div style="display: flex; flex-direction: column; align-items: flex-start; width: 40%; flex-shrink: 0;">
                  <div style="display: flex; align-items: baseline; gap: 2px; margin-bottom: 12px;">
                    <div class="pf-feature-score">${rating.score}</div>
                    <div class="pf-feature-divider">/5</div>
                  </div>
                  <div class="pf-feature-bar-container" style="width: 100%;">
                    <div class="pf-feature-bar" style="background: ${color.bar}; width: ${percent}%;"></div>
                  </div>
                </div>
                <div class="pf-feature-icon" style="align-self: flex-start; flex-shrink: 0;">${getIcon(rating.label)}</div>
              </div>
              <div class="pf-feature-label">${rating.label.toUpperCase()}</div>
            </div>
          `;
        })
        .join("");

      // Generate pros & cons list
      const prosList = (review.pros || [])
        .filter((p) => p.trim())
        .map((pro) => `<li class="pf-list-item">${pro}</li>`)
        .join("");

      const consList = (review.cons || [])
        .filter((c) => c.trim())
        .map((con) => `<li class="pf-list-item">${con}</li>`)
        .join("");

      const productUrl = `/products/${product.handle || product.id}`;

      // Get product description
      const productDescription = review.description || product.body_html || product.description || "";

      // Format pros and cons as paragraphs instead of list items
      const prosFormatted = (review.pros || [])
        .filter((p) => p.trim())
        .map((pro) => {
          // Parse "Label: Description" format
          const parts = pro.split(':');
          if (parts.length > 1) {
            const label = parts[0].trim();
            const desc = parts.slice(1).join(':').trim();
            return `<p class="pf-pros-item"><span class="pf-pros-label">${label}:</span> ${desc}</p>`;
          }
          return `<p class="pf-pros-item">${pro}</p>`;
        })
        .join("");

      const consFormatted = (review.cons || [])
        .filter((c) => c.trim())
        .map((con) => {
          // Parse "Label: Description" format
          const parts = con.split(':');
          if (parts.length > 1) {
            const label = parts[0].trim();
            const desc = parts.slice(1).join(':').trim();
            return `<p class="pf-cons-item"><span class="pf-cons-label">${label}:</span> ${desc}</p>`;
          }
          return `<p class="pf-cons-item">${con}</p>`;
        })
        .join("");

      // Get theme (default to 'light' if not specified)
      const theme = review.theme || 'light';
      const themeClass = theme === 'dark' ? 'pf-review-dark-theme' : '';

      // ✅ NEW STRUCTURE MATCHING product-review-card.tsx
      return `
        <section id="product-review-${review.id}" data-section-id="pf-review-${review.id}" data-product-id="${product.id}" data-pf-type="FlexSection" class="pf-product-review-section ${themeClass}" data-editable="true" data-field="productReview" data-review-id="${review.id}" data-theme="${theme}">
          <div class="pf-review-card-container">
            <div class="pf-review-grid">
              <!-- Image Carousel - Left Side -->
              <div class="pf-review-image-column">
                <!-- Header with Badge - mobile only -->
                <div class="pf-review-mobile-header">
              <div id="review-rank-${review.id}" class="pf-review-rank-badge" data-editable="true" data-field="rank" data-review-id="${review.id}">
                ${review.rank}${review.rankTitle ? " - " + review.rankTitle : "TOP 1"}
              </div>
                  <div id="review-overall-rating-mobile-${review.id}" class="pf-review-rating-mobile" data-editable="true" data-field="overallRating" data-review-id="${review.id}">
                    <div class="pf-rating-number">${overallRating}</div>
                    <div class="pf-rating-divider">/5</div>
              </div>
            </div>
            
                <div id="review-images-${review.id}" class="pf-review-image-wrapper" data-editable="true" data-field="images" data-review-id="${review.id}">
                  ${imageContent}
                </div>
              </div>

              <!-- Product Info - Right Side -->
              <div class="pf-review-info-column">
                <!-- Header with Badge and Rating - desktop only -->
                <div class="pf-review-desktop-header">
                  <div id="review-rank-desktop-${review.id}" class="pf-review-rank-badge" data-editable="true" data-field="rank" data-review-id="${review.id}">
                    ${review.rank}${review.rankTitle ? " - " + review.rankTitle : "TOP 1"}
                  </div>
                  <div id="review-overall-rating-${review.id}" class="pf-review-rating-desktop" data-editable="true" data-field="overallRating" data-review-id="${review.id}">
                    <div class="pf-rating-number">${overallRating}</div>
                    <div class="pf-rating-divider">/5</div>
                  </div>
                </div>

                <div id="review-product-title-${review.id}" class="pf-review-product-title" data-editable="true" data-field="productTitle" data-review-id="${review.id}">
                  <h1>${product.title}</h1>
                </div>
                
              ${product.vendor ? `
                <div class="pf-review-product-brand" data-editable="true" data-field="productBrand" data-review-id="${review.id}">
                  BY ${product.vendor.toUpperCase()}
                </div>
              ` : ""}
              
              ${productDescription ? `
                <div id="review-product-description-${review.id}" class="pf-review-product-description" data-editable="true" data-field="productDescription" data-review-id="${review.id}">
                  ${productDescription}
                </div>
              ` : ""}

                <!-- Pros Section -->
                ${prosFormatted ? `
                  <div id="review-pros-${review.id}" class="pf-pros-section-new" data-editable="true" data-field="pros" data-review-id="${review.id}">
                    <div class="pf-pros-header-new">PROS</div>
                    <div class="pf-pros-content-new">
                      ${prosFormatted}
                    </div>
                  </div>
                ` : ""}

                <!-- Cons Section -->
                ${consFormatted ? `
                  <div id="review-cons-${review.id}" class="pf-cons-section-new" data-editable="true" data-field="cons" data-review-id="${review.id}">
                    <div class="pf-cons-header-new">CONS</div>
                    <div class="pf-cons-content-new">
                      ${consFormatted}
                    </div>
                  </div>
                ` : ""}
              </div>
          </div>

            <!-- Attribute Ratings -->
          ${ratingCards ? `
            <div id="review-ratings-${review.id}" class="pf-feature-cards-container" data-editable="true" data-field="ratings" data-review-id="${review.id}">
              ${ratingCards}
            </div>
          ` : ""}
          </div>

        </section>
      `;
    })
    .join("");
};


