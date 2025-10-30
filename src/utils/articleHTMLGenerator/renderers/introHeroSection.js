// Generate intro hero section with background image
export const renderIntroHeroSection = ({
  title,
  author,
  publishDate,
  shortDescription,
  featuredImage,
}) => {
  // Format date
  const formattedDate = publishDate
    ? new Date(publishDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

  // Generate intro hero section with background image
  const backgroundImageStyle = featuredImage
    ? `background-image: url('${featuredImage}'); background-position: center center; background-repeat: no-repeat; background-size: cover;`
    : `background-color: #e0ffc2;`;

  return `
    <div style="margin: 0; padding: 0; width: 100%;">
      <section id="article-intro-section" style="--overlay:rgba(16, 16, 16, 0.7); ${backgroundImageStyle} position: relative; padding: 318px 24px 101px 24px; margin-bottom: 0;" data-section-id="pf-intro" data-pf-type="FlexSection" class="pf-intro-section" data-editable="true" data-field="intro">
        <div class="pf-overlay"></div>
        <div class="pf-flex-section">
          <h1 id="article-title" data-pf-type="Heading2" class="pf-heading-1-h1" data-editable="true" data-field="title">${title}</h1>
          <div data-pf-type="FlexBlock" class="pf-meta-container">
            ${
              author
                ? `<p id="article-author" class="pf-meta-item" data-pf-type="Paragraph4" data-editable="true" data-field="author"><span class="pf-paragraph-content">${author}</span></p>`
                : ""
            }
            <p id="article-publish-date" class="pf-meta-item" data-pf-type="Paragraph4" data-editable="true" data-field="publishDate"><span class="pf-paragraph-content">${formattedDate}</span></p>
            ${
              shortDescription
                ? `<p id="article-short-description" class="pf-short-desc" data-pf-type="Paragraph3" data-editable="true" data-field="shortDescription">${shortDescription}</p>`
                : ""
            }
          </div>
        </div>
      </section>
    </div>
  `;
};

