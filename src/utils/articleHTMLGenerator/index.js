import { renderIntroHeroSection } from './renderers/introHeroSection';
import { renderDescriptionSection } from './renderers/descriptionSection';
import { renderProductReviews } from './renderers/productReviews';
import { renderWhatToConsiderSection } from './renderers/whatToConsiderSection';
import { renderOverallSection } from './renderers/overallSection';
import { renderConclusionSection } from './renderers/conclusionSection';
import { renderFAQSection } from './renderers/faqSection';
import { getArticleStyles } from './styles.js';

export const generateArticleHTML = ({
  title,
  author,
  publishDate,
  shortDescription,
  featuredImage,
  articleDescriptions,
  productReviews = [],
  products = [],
  whatToConsider = null,
  conclusion = null,
  faqs = [],
}) => {
  return `
    ${renderIntroHeroSection({
      title,
      author,
      publishDate,
      shortDescription,
      featuredImage,
    })}
    
    ${renderDescriptionSection(articleDescriptions)}
    
    ${renderProductReviews(productReviews, products)}
    
    ${renderWhatToConsiderSection(whatToConsider)}
    
    ${renderOverallSection()}
    
    ${renderConclusionSection(conclusion)}
    
    ${renderFAQSection(faqs)}
    
    ${getArticleStyles()}
  `;
};

