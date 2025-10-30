// Render descriptions với section wrapper (background xanh nhạt)
export const renderDescriptionSection = (blocks) => {
  if (!blocks || blocks.length === 0 || !blocks.some((b) => b.content))
    return "";

  const contentHTML = blocks
    .map((block, index) =>
      block.content
        ? `<p id="description-block-${index}" class="pf-text-content" style="text-align: ${block.textAlign};" data-editable="true" data-field="description" data-block-index="${index}" data-block-id="${block.id || index}">${block.content}</p>`
        : ""
    )
    .join("");

  return `
    <section id="article-descriptions-section" data-section-id="pf-content" data-pf-type="FlexSection" class="pf-content-section" data-editable="true" data-field="descriptions">
      <div class="pf-content-flex-section">
        ${contentHTML}
      </div>
    </section>
  `;
};

