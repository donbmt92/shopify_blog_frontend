// Render Conclusion section
export const renderConclusionSection = (conclusion) => {
  if (!conclusion || !conclusion.title || !conclusion.content) return "";

  return `
    <section id="conclusion-section" data-section-id="pf-conclusion" data-pf-type="FlexSection" class="pf-what-to-consider-section" data-editable="true" data-field="conclusion">
      <div class="pf-what-to-consider-flex-section">
        <h2 id="conclusion-title" data-pf-type="Heading2" class="pf-what-to-consider-heading" data-editable="true" data-field="conclusionTitle">${
          conclusion.title
        }</h2>
        <div id="conclusion-content" class="pf-what-to-consider-content" data-editable="true" data-field="conclusionContent">
          ${conclusion.content
            .split("\n")
            .map((paragraph, index) =>
              paragraph.trim()
                ? `<p id="conclusion-paragraph-${index}" class="pf-what-to-consider-text" data-editable="true" data-field="conclusionParagraph" data-paragraph-index="${index}">${paragraph}</p>`
                : ""
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
};

