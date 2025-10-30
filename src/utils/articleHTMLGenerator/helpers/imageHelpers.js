// Generate image slider for multiple images
export const generateImageSlider = (images, productTitle, reviewId) => {
  const sliderId = `slider-${reviewId}`;
  const dotsHtml = images
    .map(
      (_, index) =>
        `<span class="pf-slider-dot" onclick="currentSlide(${
          index + 1
        }, '${sliderId}')"></span>`
    )
    .join("");

  const slidesHtml = images
    .map(
      (imageSrc, index) => `
    <div class="pf-slide">
      <img src="${imageSrc}" alt="${productTitle} - Image ${
        index + 1
      }" class="pf-product-image" />
    </div>
  `
    )
    .join("");

  return `
    <div class="pf-image-slider" id="${sliderId}">
      <div class="pf-slides-container">
        ${slidesHtml}
      </div>
      
      <div class="pf-slider-controls">
        <button class="pf-slider-btn pf-prev" onclick="changeSlide(-1, '${sliderId}')">❮</button>
        <button class="pf-slider-btn pf-next" onclick="changeSlide(1, '${sliderId}')">❯</button>
      </div>
      
      <div class="pf-slider-dots">
        ${dotsHtml}
      </div>
    </div>
  `;
};

// Generate single image
export const generateSingleImage = (imageSrc, productTitle) => {
  return `<img src="${imageSrc}" alt="${productTitle}" class="pf-product-image" />`;
};

