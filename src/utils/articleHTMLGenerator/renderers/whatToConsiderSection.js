// Render What To Consider section
export const renderWhatToConsiderSection = (whatToConsider) => {
  if (!whatToConsider || !whatToConsider.title || !whatToConsider.content)
    return "";

  return `
    <section id="what-to-consider-section" data-section-id="pf-what-to-consider" data-pf-type="FlexSection" class="pf-what-to-consider-section" data-editable="true" data-field="whatToConsider">
      <div class="pf-what-to-consider-flex-section">
        <h2 id="what-to-consider-title" data-pf-type="Heading2" class="pf-what-to-consider-heading" data-editable="true" data-field="whatToConsiderTitle">${
          whatToConsider.title
        }</h2>
        <div id="what-to-consider-content" class="pf-what-to-consider-content" data-editable="true" data-field="whatToConsiderContent">
          ${whatToConsider.content
            .split("\n")
            .map((paragraph, index) =>
              paragraph.trim()
                ? `<p id="what-to-consider-paragraph-${index}" class="pf-what-to-consider-text" data-editable="true" data-field="whatToConsiderParagraph" data-paragraph-index="${index}">${paragraph}</p>`
                : ""
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
};

