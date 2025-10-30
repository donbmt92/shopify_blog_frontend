// Render FAQ section
export const renderFAQSection = (faqs) => {
  if (!faqs || faqs.length === 0) return "";

  const faqItems = faqs
    .filter(faq => faq.question && faq.answer)
    .map((faq, index) => {
      const headerId = `header-${faq.id || index}`;
      
      return `
        <details id="faq-item-${faq.id || index}" class="pf-faq-item" data-pf-type="Accordion3.Content.Wrapper" data-editable="true" data-field="faq" data-faq-id="${faq.id || index}">
          <summary>
            <div id="faq-header-${faq.id || index}" class="pf-faq-header" data-header-id="${headerId}" data-active="false" data-pf-type="Accordion3.Header" data-editable="true" data-field="faqQuestion" data-faq-id="${faq.id || index}">
              <svg class="pf-accordion-icon pfa-chevron-right pfa-arrow" style="width:auto;fill:currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
              </svg>
              <span id="faq-question-${faq.id || index}" data-editable="true" data-field="faqQuestionText" data-faq-id="${faq.id || index}">${faq.question}</span>
            </div>
          </summary>
          <div id="faq-body-${faq.id || index}" class="pf-faq-body" data-pf-expandable="true" data-pf-type="Accordion3.Content" data-editable="true" data-field="faqAnswer" data-faq-id="${faq.id || index}">
            <div class="pf-accordion-display-content">
              <div data-pf-type="Accordion3.Flex.Content" class="pf-faq-content">
                <p id="faq-answer-${faq.id || index}" class="pf-faq-text" data-pf-type="Paragraph4" data-editable="true" data-field="faqAnswerText" data-faq-id="${faq.id || index}">
                  <span class="pf-paragraph-content">${faq.answer.replace(/\n/g, '<br><br>')}</span>
                </p>
              </div>
            </div>
          </div>
        </details>
      `;
    })
    .join("");

  return `
    <section id="faq-section" data-section-id="pf-faq" data-pf-type="FlexSection" class="pf-faq-section" data-editable="true" data-field="faqs">
      <div class="sc-bMCZcR cZQJs pf-flex-section">
        <div data-pf-type="FlexBlock" class="sc-dUewcE fxbYUh pf-710_">
          <div data-pf-type="Divider2" class="sc-cezzpg jQsAoH pf-711_ pf-divider-1"></div>
          <h2 id="faq-section-title" data-pf-type="Heading2" class="sc-gplwNw jqcdAe pf-715_ pf-heading-1-h2" data-editable="true" data-field="faqSectionTitle">FAQs</h2>
          <div data-pf-type="FlexBlock" class="sc-dUewcE fxbYUh pf-717_">
            <div id="faq-accordion-container" class="sc-lmEGMn feOAbI pf-718_ pf-icon-right" data-scroll-to-top="true" data-open-multiple="false" data-pf-type="Accordion3" data-editable="true" data-field="faqAccordion">
              ${faqItems}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};

