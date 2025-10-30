export const getArticleStyles = () => `
  <style>
    /* CSS Variables */
    :root {
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      --wrapper-mw: 1500px;
      --font-family-1: Archivo, sans-serif;
      --font-family-2: "Host Grotesk", sans-serif;
      --font-family-3: Poppins, sans-serif;
      --font-body-family: "Host Grotesk", sans-serif;
      --font-heading-family: Archivo, sans-serif;
      --t4s-success-color: #428445;
      --t4s-success-color-rgb: 66, 132, 69;
      --t4s-warning-color: #e0b252;
      --t4s-warning-color-rgb: 224, 178, 82;
      --t4s-error-color: #EB001B;
      --t4s-error-color-rgb: 235, 0, 27;
      --t4s-light-color: #ffffff;
      --t4s-dark-color: #222222;
      --t4s-highlight-color: #ec0101;
      --t4s-tooltip-background: #383838;
      --t4s-tooltip-color: #fff;
      --primary-sw-color: #000000;
      --primary-sw-color-rgb: 0, 0, 0;
      --border-sw-color: #ddd;
      --secondary-sw-color: #000000;
      --primary-price-color: #ec0101;
      --secondary-price-color: #000000;
      --t4s-body-background: #fff;
      --text-color: #222222;
      --text-color-rgb: 34, 34, 34;
      --heading-color: #000000;
      --accent-color: #000000;
      --accent-color-rgb: 0, 0, 0;
      --accent-color-darken: #000000;
      --accent-color-hover: var(--accent-color-darken);
      --secondary-color: #222222;
      --secondary-color-rgb: 34, 34, 34;
      --link-color: #000000;
      --link-color-hover: #668760;
      --border-color: #dddddd;
      --border-color-rgb: 221, 221, 221;
      --border-primary-color: #f1f1f1;
      --button-background: #000000;
      --button-color: #fff;
      --button-background-hover: #000000;
      --button-color-hover: #fff;
      --sale-badge-background: #f63737;
      --sale-badge-color: #fff;
      --new-badge-background: #ff4081;
      --new-badge-color: #fff;
      --preorder-badge-background: #0774d7;
      --preorder-badge-color: #fff;
      --soldout-badge-background: #999999;
      --soldout-badge-color: #fff;
      --custom-badge-background: #00A500;
      --custom-badge-color: #fff;
      --aspect-ratiocus1: 0.75;
      --payment-terms-background-color: ;
      --lz-background: #cacaca;
      --lz-img: url("//snowears.com/cdn/shop/t/45/assets/t4s_loader.svg?v=48531301088412258971752020281");
      --lz-img-cus: url("//snowears.com/cdn/shop/files/2_634b7633-dea9-41c4-af37-f279cbb9462a.png?v=1739411216&width=108");
      --lz-size-cus: 60px;
      --ease-out-slow: cubic-bezier(0, 0, .3, 1);
      --rbr__border-color-primary: #cbcbcb;
      --rbr__border-color-secondary: rgb( from var(--rbr__border-color-primary) r g b / .4 );
      --rbr__border-color-tertiary: rgb( from var(--rbr__border-color-primary) r g b / .2 );
      --rbr__text-primary: #191919;
      --rbr__text-secondary: rgb(from var(--rbr__text-primary) r g b / .7);
      --rbr__text-tertiary: rgb(from var(--rbr__text-primary) r g b / .5);
      --rbr__fill-primary: #262626;
      --rbr__fill-secondary: rgb(from var(--rbr__fill-primary) r g b / .1);
      --rbr__fill-tertiary: rgb(from var(--rbr__fill-primary) r g b / .05);
      --rbr__fill-interactive: #2c6ecb;
      --rbr__fill-disabled: #e5e5e5;
      --rbr__color: white;
      --rbr__general-bg-color: white;
      --rbr__general-button-color: #262626;
      --rbr__button-text-color: #ffffff;
      --rbr__badge-text-color: #ffffff;
      --rbr__variant-selector-fill-vs: #fafafa;
      --rbr__variant-text-color: #000000;
      --rbr__fill-pmmdo-inactive: #f1f1f1;
      --rbr__text-pmmdo-inactive: #5e5e5e;
      --rbr__fill-pmmdo-active: #e0faef;
      --rbr__fill-success: #008060;
      --rbr__text-pmmdo-active: #13a165;
      --rbr__text-critical: #d72c0d;
      --rbr__fill-on-primary-light: #ffffff;
      --rbr__variant-selector-border-vs: #ebebeb;
      --rbr__fill-on-primary-dark: #000000;
      --rbr__fill-badge: #c30000;
      --rbr__border-critical: #e0b5b2;
      --rbr__surface-critical: #fff4f4;
      --rbr__spacing-s-12: 12px;
      --rbr__spacing-s-8: 8px;
      --rbr__spacing-s-4: 4px;
      --rbr__spacing-s-16: 16px;
      --rbr__spacing-s-24: 24px;
      --rbr__border-border-radius-lg: 12px;
      --rbr__border-border-radius-md: 9px;
      --rbr__border-border-radius-sm: 6px;
      --rbr__border-border-width: 1px;
      --rbr__body-font-size: 16px;
      --rbr__body-line-height: 20px;
      --rbr__title-font-size: 18px;
      --rbr__title-line-height: 22px;
      --rbr__caption-font-size: 14px;
      --rbr__caption-line-height: 18px;
      --rbr__text_alignment: left;
      --rbr__sub-caption-font-size: 12px;
      --rbr__sub-caption-line-height: 14.5px;
      --jdgm-primary-color: #093F31;
      --jdgm-secondary-color: rgba(9,63,49,0.1);
      --jdgm-star-color: #fdb000;
      --jdgm-write-review-text-color: white;
      --jdgm-write-review-bg-color: #093F31;
      --jdgm-paginate-color: #093F31;
      --jdgm-border-radius: 10;
      --jdgm-reviewer-name-color: #093F31;
      --btn-radius: 60px;
      --t4s-other-radius: 0px;
      --facebook-cl: rgb(59, 89, 152);
      --twitter-cl: rgb(29, 161, 242);
      --instagram-cl: rgb(224, 53, 102);
      --dribbble-cl: rgb(234, 76, 137);
      --linkedin-cl: rgb(0, 119, 181);
      --pinterest-cl: rgb(203, 32, 39);
      --tumblr-cl: rgb(55, 69, 92);
      --snapchat-cl: rgb(255, 221, 0);
      --youtube-cl: rgb(205, 32, 31);
      --vimeo-cl: rgb(26, 183, 234);
      --behance-cl: rgb(23, 106, 255);
      --soundcloud-cl: rgb(255, 119, 0);
      --tiktok-cl: #FE2C55;
      --email-cl: rgb(219, 68, 55);
      --telegram-cl: rgb(0, 136, 204);
      --duration-extra-long: .6s;
      --animation-slide-in: revealSlideIn var(--duration-extra-long) cubic-bezier(0, 0, .3, 1) forwards;
      --animation-fade-in: reveaFadeIn var(--duration-extra-long) cubic-bezier(0, 0, .3, 1);
      --scroll-w: 15px;
      --topbar-height: 40px;
      --header-height: 93px;
      text-rendering: optimizeLegibility;
      letter-spacing: 0px;
      -webkit-font-smoothing: auto;
      --pf-sample-color: #5d6b82;
      --pf-border-color: #d1d5db;
      --pf-shopify-font-family-fnt-fm-sp1: Archivo, sans-serif;
      --pf-shopify-font-style-fnt-fm-sp1: normal;
      --pf-shopify-font-weight-fnt-fm-sp1: 400;
      --pf-shopify-font-family-fnt-fm-sp2: "Host Grotesk", sans-serif;
      --pf-shopify-font-style-fnt-fm-sp2: normal;
      --pf-shopify-font-weight-fnt-fm-sp2: 500;
      --pf-shopify-font-family-fnt-fm-sp3: Poppins, sans-serif;
      --pf-shopify-font-style-fnt-fm-sp3: normal;
      --pf-shopify-font-weight-fnt-fm-sp3: 400;
      --pf-scheme-btn-text-color: rgb(255, 255, 255);
      --pf-scheme-bg-color: rgba(255, 255, 255, 0);
      --pf-scheme-text-color: rgb(0, 0, 0);
      --pf-scheme-btn-bg-color: rgb(145, 157, 169);
      --pf-scheme-border-color: rgba(0, 0, 0);
      --pf-scheme-shadow-color: rgb(0, 0, 0, 0.25);
      --overlay: rgba(16, 16, 16, 0.7);
    }

    /* Intro Hero Section Styles */
    .pf-intro-section {
      position: relative;
      padding: 318px 24px 101px 24px;
      margin: 0 0 40px 0;  /* ✅ Thêm margin-bottom để tạo khoảng cách */
      width: 100%;
      box-sizing: border-box;
    }
    
    .pf-overlay {
      pointer-events: none;
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(16, 16, 16, 0.7);
      display: block !important;
    }
    
    .pf-flex-section {
      position: relative;
      margin: auto;
      display: flex;
      max-width: 1100px;
      flex-flow: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0;
      z-index: 1;
    }
    
    .pf-heading-1-h1 {
      white-space: pre-line;
      user-select: text;
      color: #fff;
      line-height: 1.5em;
      font-size: 50px;
      font-family: 'Lato', 'Archivo', sans-serif;
      margin-bottom: 24px;
      margin-top: 50px;
      font-weight: 400;
      text-align: left;
    }
    
    .pf-meta-container {
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: baseline;
      font: inherit;
      font-size: 100%;
      box-sizing: border-box;
      position: relative;
      align-self: stretch;
      height: fit-content;
      width: unset;
      display: flex;
      flex-flow: row;
      justify-content: flex-start;
      align-items: center;
      gap: 0;
      flex: unset;
    }
    
    .pf-meta-item {
      white-space: nowrap;
      color: #fff;
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: baseline;
      font: inherit;
      box-sizing: border-box;
      flex: unset;
      font-weight: 400;
      line-height: 1.5em;
      font-size: 18px;
      font-family: Lato;
      padding-right: 24px;
      border-style: solid;
      border-color: #bdbdbd;
      border-width: 0 1px 0 0;
      margin-right: 24px;
      margin-top: 0;
      margin-bottom: 0;
    }
    
    .pf-meta-item:last-of-type {
      border-right: none;
      margin-right: 0;
      padding-right: 0;
    }
    
    .pf-short-desc {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5em;
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: baseline;
      font: inherit;
      box-sizing: border-box;
      white-space: nowrap;
      padding-right: 24px;
      border-style: solid;
      border-color: #bdbdbd;
      border-width: 0 1px 0 0;
      margin-right: 24px;
      margin-top: 0;
      margin-bottom: 0;
    }
    
    .pf-paragraph-content {
      display: inline;
      white-space: nowrap;
    }
    
    @media (max-width: 768px) {
      .pf-intro-section {
        padding: 200px 20px 60px 20px;
        margin: 0 0 30px 0;  /* ✅ Giảm margin cho mobile */
      }
      
      .pf-heading-1-h1 {
        font-size: 32px;
        margin-top: 20px;
      }
      
      .pf-meta-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }
      
      .pf-meta-item {
        border-right: none;
        margin: 0;
        padding-right: 0;
        font-size: 16px;
      }
      
      .pf-short-desc {
        font-size: 14px;
      }
    }
    
    /* Overall Section Styles */
    .pf-530_ {
      box-sizing: border-box;
      position: relative;
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      align-items: flex-start;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      margin: 0 0 40px 0;  /* ✅ Thêm margin-bottom để tạo khoảng cách */
    }
    
    .pf-flex-section {
      width: 100%;
    }
    
    .pf-531_ {
      border: 3px solid #064734;
      background-color: #fd7d3b;
      padding-right: 20px;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      width: 100%;
    }
    .pf-531_1{
      background-color: #064734;
      padding-right: 20px;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      width: 100%;
    }
        /* Paragraphs in the left column */
        .pf-548_, .pf-552_ {
            font-size: 18px;
            font-family: Lato, sans-serif;
            font-weight: 400;
            color: #333;
            line-height: 1.8em;
            margin-bottom: 1em; /* spacing between paragraphs */
        }
        
        /* Image Style */
        .pf-551_ {
            max-width: 100%;
            height: auto;
            border-radius: 15px;
            margin: 1em 0;
        }

        /* Rating number headings (e.g., "4-5") */
        .pf-556_, .pf-560_, .pf-564_ {
            box-sizing: border-box;
            font-family: var(--font-heading-family);
            line-height: 1.5;
            color: #fff;
            font-size: 28px;
            font-weight: 700;
            border-radius: 20px;
            width: 150px;
            height: 40px;
            padding-top: 2px;
            margin-left: 70px;
            margin-bottom: 0.5em;
        }
        
        /* Style for "4-5" rating */
        .pf-556_ {
            background-color: #417505; /* Green */
            padding-left: 55px;
        }
        
        /* Style for "2.5-3.5" rating */
        .pf-560_ {
            background-color: #f5a623; /* Orange */
            padding-left: 32px;
        }
        
        /* Style for "0-2" rating */
        .pf-564_ {
            background-color: #d0021b; /* Red */
            padding-left: 50px;
        }
        
        /* Container for rating blocks */
        .pf-555_ {
            background-color: #f6f6f6;
        }
        
        /* Rating description paragraphs */
        .pf-558_, .pf-562_, .pf-566_ {
            box-sizing: border-box;
            color: #333;
            line-height: 1.8em;
            font-size: 18px;
            font-family: var(--font-family-1);
            padding: 10px 70px 30px;
            background-color: transparent;
            margin-top: -10px; /* Pull text up closer to the rating box */
            margin-bottom: 1em;
        }
    .pf-532_ {
      color: #fff;
      line-height: 1.5em;
      font-size: 40px;
      font-family: Lato, sans-serif;
      font-weight: 700;
      background-color: transparent;
      padding: 10px 0 0 20px;
      margin: 0 34px 16px 0;
    }
    
    .pf-535_ {
      box-sizing: border-box;
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      align-items: flex-start;
      background-color: #f6f6f6;
      width: 100%;
    }
    
    .pf-539_ {
      box-sizing: border-box;
      display: block;
      max-width: 100%;
      object-fit: cover;
      object-position: center center;
      aspect-ratio: var(--pf-image-ratio);
      margin: 20px auto;
      border-radius: 20px;
      width: calc(100% - 200px);
    }
    
    .pf-536_,
    .pf-540_ {
      color: #333;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.8em;
      padding: 20px 20px 0 50px;
      margin: 0;
      word-break: break-word;
    }
    
    @media (max-width: 768px) {
      .pf-532_ {
        font-size: 28px;
        padding: 8px 0 0 15px;
        margin: 0 20px 12px 0;
      }
      
      .pf-536_,
      .pf-540_ {
        font-size: 16px;
        padding: 15px 15px 0 30px;
      }
      
      .pf-539_ {
        width: calc(100% - 40px);
        margin: 15px auto;
      }
    }
    
    /* What To Consider Section Styles */
    .pf-what-to-consider-section {
      position: relative;
      padding: 60px 24px 40px 24px;
      margin: 0 0 40px 0;  /* ✅ Thêm margin-bottom để tạo khoảng cách */
      width: 100%;
      box-sizing: border-box;
      background-color: #e0ffc2;
      border-radius: 12px;  /* ✅ Thêm border-radius để làm mềm góc */
    }
    
    .pf-what-to-consider-flex-section {
      position: relative;
      margin: auto;
      display: flex;
      max-width: 1100px;
      flex-flow: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0;
      height: fit-content;
    }
    
    .pf-what-to-consider-heading {
      white-space: pre-line;
      user-select: text;
      align-self: stretch;
      height: fit-content;
      width: unset;
      flex: unset;
      color: #064734;
      font-weight: 600;
      line-height: 1.5em;
      font-size: 40px;
      font-family: 'Montserrat', 'Archivo', sans-serif;
      margin: 0 0 30px 0;
    }
    
    .pf-what-to-consider-content {
      width: 100%;
    }
    
    .pf-what-to-consider-text {
      word-break: break-word;
      width: 100%;
      font-family: 'Lato', sans-serif;
      height: fit-content;
      font-size: 18px;
      font-weight: 400;
      color: #333;
      margin: 0 0 20px 0;
      padding-top: 10px;
      line-height: 1.8em;
    }
    
    .pf-what-to-consider-text:last-child {
      margin-bottom: 0;
    }
    
    @media (max-width: 768px) {
      .pf-what-to-consider-section {
        padding: 40px 20px 30px 20px;
        margin: 0 0 30px 0;  /* ✅ Giảm margin cho mobile */
      }
      
      .pf-what-to-consider-heading {
        font-size: 28px;
        margin-bottom: 20px;
      }
      
      .pf-what-to-consider-text {
        font-size: 16px;
      }
      }
      
      /* Conclusion Section Styles */
      .pf-704_ {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 60px 24px 40px 24px;
        margin: 0;
        width: 100%;
        background-color: #ffffff;
      }
      
      .pf-705_ {
        color: #064734;
        line-height: 1.5em;
        font-size: 40px;
        font-family: Lato, sans-serif;
        font-weight: 700;
        background-color: transparent;
        padding: 0 0 20px 0;
        margin: 0 0 20px 0;
      }
      
      .pf-707_ {
        color: #333;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.8em;
        padding: 0;
        margin: 0;
        word-break: break-word;
      }
      
      @media (max-width: 768px) {
        .pf-704_ {
          padding: 40px 20px 30px 20px;
        }
        
        .pf-705_ {
          font-size: 28px;
          padding: 0 0 15px 0;
          margin: 0 0 15px 0;
        }
        
        .pf-707_ {
          font-size: 16px;
        }
      }
      
      /* Content Description Section Styles */
    .pf-content-section {
      position: relative;
      padding: 60px 24px 40px 24px;
      margin: 0 0 40px 0;  /* ✅ Thêm margin-bottom để tạo khoảng cách */
      width: 100%;
      box-sizing: border-box;
      background-color: #e0ffc2;
      border-radius: 12px;  /* ✅ Thêm border-radius để làm mềm góc */
    }
    
    .pf-content-flex-section {
      position: relative;
      margin: auto;
      display: flex;
      max-width: 1100px;
      flex-flow: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0;
      height: fit-content;
    }
    
    .pf-text-content {
      word-break: break-word;
      flex-basis: unset;
      width: 100%;
      font-family: 'Lato', sans-serif;
      height: fit-content;
      font-size: 18px;
      font-weight: 400;
      color: #131313;
      margin: 0 0 20px 0;
      padding-top: 10px;
      line-height: 1.6;
    }
    
    .pf-text-content:last-child {
      margin-bottom: 0;
    }
    
    .pf-text-content h3 {
      font-size: 40px;
      color: #064734;
      font-family: 'Lato', sans-serif;
      font-weight: 700;
      margin: 80px 0 20px 0;
      line-height: 1.2;
    }
    
    .pf-text-content h3:first-child {
      margin-top: 0;
    }
    
    .pf-text-content strong {
      font-weight: 700;
    }
    
    .pf-text-content em {
      font-style: italic;
    }
    
    .pf-text-content a {
      color: #3f5af4;
      text-decoration: none;
      transition: all .25s ease;
    }
    
    .pf-text-content a:hover {
      color: #668760;
      text-decoration: underline;
    }
    
    @media (max-width: 768px) {
      .pf-content-section {
        padding: 40px 20px 30px 20px;
        margin: 0 0 30px 0;  /* ✅ Giảm margin cho mobile */
      }
      
      .pf-text-content {
        font-size: 16px;
      }
      
      .pf-text-content h3 {
        font-size: 28px;
        margin: 40px 0 15px 0;
      }
    }
    
    /* Product Review Section Styles - Updated to match product-review-card.tsx */
    .pf-product-review-section {
      position: relative;
      width: 100%;
      margin: 0 0 40px 0;
      box-sizing: border-box;
    }
    
    .pf-review-card-container {
      width: 100%;
      max-width: 1152px; /* max-w-6xl = 72rem = 1152px */
      margin: 0 auto;
      background: var(--card-bg, #ffffff);
      border-radius: 24px; /* rounded-3xl */
      padding: 32px; /* p-8 */
      border: 1px solid var(--border-color, #e5e7eb);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
    }
    
    .pf-review-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 32px; /* gap-8 */
      margin-bottom: 32px; /* mb-8 */
    }
    
    @media (min-width: 1024px) {
      .pf-review-grid {
        grid-template-columns: 1fr 1fr; /* lg:grid-cols-2 */
      }
    }
    
    .pf-review-image-column {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    .pf-review-info-column {
      display: flex;
      flex-direction: column;
    }
    
    /* Mobile Header (visible on mobile, hidden on desktop) */
    .pf-review-mobile-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 16px; /* mb-4 */
    }
    
    @media (min-width: 1024px) {
      .pf-review-mobile-header {
        display: none; /* lg:hidden */
      }
    }
    
    /* Desktop Header (hidden on mobile, visible on desktop) */
    .pf-review-desktop-header {
      display: none;
    }
    
    @media (min-width: 1024px) {
      .pf-review-desktop-header {
        display: flex; /* lg:flex */
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 24px; /* mb-6 */
        
      }
    }
    
    .pf-review-rank-badge {
      background: linear-gradient(to right, #fbbf24, #f59e0b); /* from-amber-400 to-amber-500 */
      color: #000000; /* text-black */
      padding: 8px 16px; /* px-4 py-2 */
      border-radius: 8px; /* rounded-lg */
      font-weight: 700; /* font-bold */
      font-size: 14px; /* text-sm */
      font-family: 'Lato', sans-serif;
      display: inline-block;
      max-width: 350px;
    }
    
    .pf-review-rating-mobile,
    .pf-review-rating-desktop {
      text-align: right;
      display: flex;
      align-items: baseline;
      justify-content: flex-end;
      gap: 4px;
    }
    
    .pf-review-rating-mobile .pf-rating-number {
      font-size: 30px; /* Larger size */
      font-weight: 700; /* font-bold */
      color: var(--foreground, #000000);
      line-height: 1;
    }
    
    .pf-review-rating-mobile .pf-rating-divider {
      font-size: 24px; /* Same as rating-number */
      font-weight: 700; /* font-bold */
      color: var(--muted-foreground, #6b7280);
      line-height: 1;
    }
    
    .pf-review-rating-desktop .pf-rating-number {
      font-size: 56px; /* Larger size */
      font-weight: 700; /* font-bold */
      color: var(--foreground, #000000);
      line-height: 1;
    }
    
    .pf-review-rating-desktop .pf-rating-divider {
      font-size: 56px; /* Same as rating-number */
      font-weight: 700; /* font-bold */
      color: var(--muted-foreground, #6b7280);
      line-height: 1;
    }
    
    .pf-review-image-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 1; /* aspect-square */
      background: var(--muted, #f3f4f6);
      border-radius: 16px; /* rounded-2xl */
      overflow: hidden;
      margin-bottom: 24px; /* mb-6 */
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .pf-review-image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .pf-review-product-title h1 {
      font-size: 30px; /* text-3xl */
      font-weight: 700; /* font-bold */
      color: var(--foreground, #000000);
      margin-bottom: 8px; /* mb-2 */
      line-height: 1.2;
      font-family: 'Lato', sans-serif;
    }
    
    @media (min-width: 1024px) {
      .pf-review-product-title h1 {
        font-size: 36px; /* lg:text-4xl */
      }
    }
    
    .pf-review-product-brand {
      font-size: 14px; /* text-sm */
      color: var(--muted-foreground, #6b7280);
      margin-bottom: 24px; /* mb-6 */
      font-family: 'Lato', sans-serif;
      text-transform: uppercase;
    }
    
    .pf-review-product-description {
      color: rgba(0, 0, 0, 0.9); /* text-foreground/90 */
      font-size: 14px; /* text-sm */
      line-height: 1.75; /* leading-relaxed */
      margin-bottom: 24px; /* mb-6 */
      font-family: 'Lato', sans-serif;
    }
    
    /* Pros Section New Style */
    .pf-pros-section-new {
      margin-bottom: 16px; /* mb-4 */
    }
    
    .pf-pros-header-new {
      background-color: #22c55e; /* bg-green-500 */
      color: #ffffff; /* text-white */
      font-weight: 700; /* font-bold */
      padding: 8px 16px; /* py-2 px-4 */
      border-radius: 8px; /* rounded-lg */
      margin-bottom: 12px; /* mb-3 */
      font-size: 14px; /* text-sm */
      font-family: 'Lato', sans-serif;
    }
    
    .pf-pros-content-new {
      background: var(--muted, #f3f4f6); /* bg-muted */
      border-radius: 8px; /* rounded-lg */
      padding: 16px; /* p-4 */
    }
    
    .pf-pros-content-new .pf-pros-item {
      font-size: 14px; /* text-sm */
      color: var(--foreground, #000000);
      margin-bottom: 8px; /* space-y-2 */
      line-height: 1.5;
      font-family: 'Lato', sans-serif;
    }
    
    .pf-pros-content-new .pf-pros-item:last-child {
      margin-bottom: 0;
    }
    
    .pf-pros-label {
      font-weight: 600; /* font-semibold */
    }
    
    /* Cons Section New Style */
    .pf-cons-section-new {
      margin-bottom: 0;
    }
    
    .pf-cons-header-new {
      background-color: #ef4444; /* bg-red-500 */
      color: #ffffff; /* text-white */
      font-weight: 700; /* font-bold */
      padding: 8px 16px; /* py-2 px-4 */
      border-radius: 8px; /* rounded-lg */
      margin-bottom: 12px; /* mb-3 */
      font-size: 14px; /* text-sm */
      font-family: 'Lato', sans-serif;
    }
    
    .pf-cons-content-new {
      background: var(--muted, #f3f4f6); /* bg-muted */
      border-radius: 8px; /* rounded-lg */
      padding: 16px; /* p-4 */
    }
    
    .pf-cons-content-new .pf-cons-item {
      font-size: 14px; /* text-sm */
      color: var(--foreground, #000000);
      margin-bottom: 8px;
      line-height: 1.5;
      font-family: 'Lato', sans-serif;
    }
    
    .pf-cons-content-new .pf-cons-item:last-child {
      margin-bottom: 0;
    }
    
    .pf-cons-label {
      font-weight: 600; /* font-semibold */
    }
    
    /* ✅ Tạo khoảng cách đặc biệt cho product review đầu tiên */
    .pf-product-review-section:first-of-type {
      margin-top: 20px;
    }
    
    /* ✅ Tạo khoảng cách đặc biệt cho product review cuối cùng */
    .pf-product-review-section:last-of-type {
      margin-bottom: 60px;
    }
    
    /* Dark Theme Styles */
    .pf-product-review-section.pf-review-dark-theme .pf-review-card-container {
      background: #1e293b; /* Dark slate background */
      border-color: #334155;
    }
    
    .pf-product-review-section.pf-review-dark-theme .pf-review-product-title h1 {
      color: #ffffff;
    }
    
    .pf-product-review-section.pf-review-dark-theme .pf-review-product-brand {
      color: #cbd5e1; /* Light gray for brand */
    }
    
    .pf-product-review-section.pf-review-dark-theme .pf-review-product-description {
      color: #e2e8f0; /* Light text on dark background */
    }
    
    .pf-product-review-section.pf-review-dark-theme .pf-review-rating-mobile .pf-rating-number,
    .pf-product-review-section.pf-review-dark-theme .pf-review-rating-desktop .pf-rating-number {
      color: #ffffff;
    }
    
    .pf-product-review-section.pf-review-dark-theme .pf-review-rating-mobile .pf-rating-divider,
    .pf-product-review-section.pf-review-dark-theme .pf-review-rating-desktop .pf-rating-divider {
      color: #94a3b8; /* Muted text for divider */
    }
    
    .pf-product-review-section.pf-review-dark-theme .pf-pros-content-new {
      background: #0f172a; /* Darker background for pros */
      border: 1px solid #334155;
    }
    
    .pf-product-review-section.pf-review-dark-theme .pf-pros-content-new .pf-pros-item {
      color: #e2e8f0;
    }
    
    .pf-product-review-section.pf-review-dark-theme .pf-cons-content-new {
      background: #0f172a; /* Darker background for cons */
      border: 1px solid #334155;
    }
    
    .pf-product-review-section.pf-review-dark-theme .pf-cons-content-new .pf-cons-item {
      color: #e2e8f0;
    }
    
    .pf-product-review-section.pf-review-dark-theme .pf-review-image-wrapper {
      background: #0f172a;
      border: 1px solid #334155;
    }
    
    .pf-review-flex-section {
    background-color: #f6f6f6;
      position: relative;
      margin: auto;
      display: flex;
      max-width: 1100px;
      flex-flow: column;
      gap: 20px;
    }
      .pf-review-flex-section1 {
      position: relative;
      margin: auto;
      display: flex;
      max-width: 1100px;
      flex-flow: column;
      gap: 20px;
    }
    
    .pf-review-rank {
      font-size: 30px !important;
      font-weight: 900 !important;
      color: #064734;
      margin: 0;
      font-family: 'Lato', sans-serif;
      padding: 5px 24px;
    }
    
    .pf-review-product-title h3 {
      font-size: 32px !important;
      font-weight: 700 !important;
      color: #064734 !important;
      margin: 10px 0 !important;
      font-family: 'Lato', sans-serif !important;
      background-color: #064734 !important;
      border: 3px solid #064734 !important;
      border-top-left-radius: 20px !important;
      border-top-right-radius: 20px !important;
      padding: 30px 20px !important;
      color: white !important;
      text-align: left !important;
      position: relative !important;
      align-self: stretch !important;
      height: fit-content !important;
      flex-basis: unset !important;
      display: flex !important;
      flex-flow: column !important;
      justify-content: flex-start !important;
      align-items: flex-start !important;
      gap: 0 !important;
    }
    
    .pf-review-content {
      display: flex;
      gap: 30px;
      align-items: center;
      flex-wrap: wrap;
      min-height: 300px;
      padding: 5px 24px;
    }
    
    .pf-product-image-container {
      flex: 1;
      min-width: 300px;
      max-width: 400px;
    }
    
    .pf-product-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .pf-ratings-container {
      flex: 1;
      min-width: 300px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      justify-content: center;
      align-items: center;
    }
    
    .pf-rating-bar {
      width: 100%;
    }
    
    .progress-bar-element {
      width: 100%;
      height: 13px;
      border-radius: 10px;
      appearance: none;
      background-color: #ccc;
    }
    
    .progress-bar-element::-webkit-progress-bar {
      background-color: #ccc;
      border-radius: 10px;
    }
    
    .progress-bar-element::-webkit-progress-value {
      background-color: #064734;
      border-radius: 10px;
    }
    
    .progress-bar-element::-moz-progress-bar {
      background-color: #064734;
      border-radius: 10px;
    }
    
    .pf-pros-cons-container {
      display: flex;
      gap: 30px;
      flex-wrap: wrap;
      margin-top: 20px;
      padding: 5px 24px;
    }
    
    .pf-pros-section,
    .pf-cons-section {
      flex: 1;
      min-width: 250px;
    }
    
    .pf-section-heading {
      font-size: 30px;
      font-weight: 700;
      color: #064734;
      margin: 0 0 15px 0;
      font-family: 'Lato', sans-serif;
    }
    
    .pf-pros-section .pf-section-heading {
      color: #22c55e !important;
    }
    
    .pf-cons-section .pf-section-heading {
      color: #ef4444 !important;
    }
    
    .pf-list {
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      text-rendering: optimizeLegibility;
      letter-spacing: 0px;
      -webkit-font-smoothing: auto;
      text-align: left;
      border: 0;
      vertical-align: baseline;
      font: inherit;
      font-size: 100%;
      box-sizing: border-box;
      list-style: inherit;
      margin: 0 0 var(--pf-line-spacing-lg);
      padding: 0;
      --list-mb: 20px;
      --li-mb: 10px;
      --li-pl: 17px;
      --pf-line-spacing-xs: 10px;
      --pf-line-spacing-sm: 10px;
      --pf-line-spacing-md: 10px;
      --pf-line-spacing-lg: 10px;
      --pf-text-indent-xs: 0px;
      --pf-text-indent-sm: 0px;
      --pf-text-indent-md: 0px;
      --pf-text-indent-lg: 0px;
      padding-inline-start: var(--li-pl);
      list-style-position: inside;
      list-style-type: disc;
      font-size: 19px;
    }
    
    .pf-list-item {
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      text-rendering: optimizeLegibility;
      letter-spacing: 0px;
      -webkit-font-smoothing: auto;
      color: var(--text-color);
      font-size: 19px;
      margin-bottom: var(--li-mb);
      font-family: var(--font-body-family);
      line-height: 1.5;
      text-align: left;
      padding: 0;
      border: 0;
      vertical-align: baseline;
      font: inherit;
      box-sizing: border-box;
      list-style: inherit;
    }
    
    .pf-cta-button-container .pf-cta-button {
      font-size: 32px !important;
      font-weight: 900 !important;
      padding: 5px 24px !important;
    }
    
    .pf-cta-button {
      display: inline-block !important;
      padding: 15px !important;
      background-color: #fd7d3b !important;
      color: #fff !important;
      text-decoration: none !important;
      border-radius: 50px !important;
      font-size: 32px !important;
      font-weight: 900 !important;
      text-transform: capitalize !important;
      transition: all .25s ease !important;
      font-family: 'Lato', sans-serif !important;
      text-align: center !important;
      width: 100% !important;
      flex-basis: unset !important;
      height: fit-content !important;
      flex-grow: unset !important;
      align-self: unset !important;
      border: 0 !important;
      vertical-align: baseline !important;
      font: inherit !important;
      touch-action: manipulation !important;
      box-sizing: border-box !important;
      margin: 0 !important;
    }
    
    .pf-cta-button:hover {
      background-color: #e66a2a !important;
      transform: translateY(-2px) !important;
      box-shadow: 0 4px 12px rgba(253, 125, 59, 0.3) !important;
    }
    
    .pf-detailed-review {
      margin-top: 30px;
      padding: 24px;
    }
    
    .pf-detailed-review-normal {
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 25px;
      margin-top: 20px;
    }
    
    .pf-detailed-review-with-score {
      background-color: transparent;
      border: none;
      padding: 5px 24px;
      margin-top: 25px;
    }
    
    .pf-detailed-review-with-score .pf-section-heading {
      color: #064734 !important;
      font-size: 20px !important;
      margin-bottom: 20px !important;
      // text-align: center;
    }
    
    .pf-score-highlight {
      background-color: #e8eeca;
      border-radius: 12px;
      padding: 25px;
      margin: 20px 0;
      text-align: center;
    }
    
    .pf-score-summary {
      font-style: italic;
      font-size: 24px;
      line-height: 1.6;
      color: #131313;
      margin-bottom: 15px;
      font-family: 'Lato', sans-serif;
    }
    
    .pf-score-value {
      font-weight: 700;
      font-size: 20px;
      color: #131313;
      font-family: 'Lato', sans-serif;
    }
    
    .pf-review-text {
      font-size: 18px;
      line-height: 1.6;
      color: #131313;
      font-family: 'Lato', sans-serif;
    }
    
    .pf-review-text strong {
      font-weight: 700;
    }
    
    .pf-review-text a {
      color: #3f5af4;
      text-decoration: none;
    }
    
    .pf-review-text a:hover {
      text-decoration: underline;
    }
    
    @media (max-width: 768px) {
      .pf-product-review-section {
        padding: 40px 20px;
        margin: 0 0 30px 0;  /* ✅ Giảm margin cho mobile */
      }
      
      /* ✅ Điều chỉnh khoảng cách cho mobile */
      .pf-product-review-section:first-of-type {
        margin-top: 15px;
      }
      
      .pf-product-review-section:last-of-type {
        margin-bottom: 40px;
      }
      
      .pf-review-rank {
        font-size: 20px;
      }
      
      .pf-review-product-title h3 {
        font-size: 24px !important;
        padding: 20px 15px !important;
        border-top-left-radius: 15px !important;
        border-top-right-radius: 15px !important;
      }
      
      .pf-review-content {
        flex-direction: column;
        min-height: auto;
        align-items: flex-start;
      }
      
      .pf-ratings-container {
        justify-content: flex-start;
        align-items: flex-start;
      }
      
      .pf-product-image-container {
        max-width: 100%;
      }
      
      .pf-pros-cons-container {
        flex-direction: column;
        gap: 20px;
      }
      
      .pf-list-item {
        font-size: 14px;
      }
      
      .pf-cta-button {
        font-size: 24px !important;
        padding: 12px !important;
      }
      
      .pf-detailed-review-normal {
        padding: 20px;
        margin-top: 15px;
      }
      
      .pf-detailed-review-with-score .pf-section-heading {
        font-size: 18px !important;
      }
      
      .pf-score-highlight {
        padding: 20px;
        margin: 15px 0;
      }
      
      .pf-score-summary {
        font-size: 16px;
        margin-bottom: 12px;
      }
      
      .pf-score-value {
        font-size: 16px;
      }
    }
    
    /* ✅ Dark Theme Styles for Product Review */
    .pf-review-dark-theme {
      background-color: #2a2a2a;
      color: #ffffff;
      padding: 40px 24px;
      border-radius: 0;
      border: none;
    }
    
    .pf-review-header-section {
      margin-bottom: 30px;
    }
    
    .pf-review-top-section {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 20px;
      position: relative;
    }
    
    .pf-review-rank-badge {
      background: linear-gradient(135deg, #ff8c42, #ff6b1a);
      color: #ffffff;
      font-size: 20px;
      font-weight: 900;
      padding: 10px 20px;
      border-radius: 12px;
      font-family: 'Lato', sans-serif;
      display: inline-block;
    }
    
    .pf-review-overall-rating {
      font-size: 36px;
      font-weight: 900;
      color: #ffffff;
      font-family: 'Lato', sans-serif;
      position: absolute;
      top: 0;
      right: 0;
    }
    
    .pf-review-product-info {
      position: relative;
    }
    
    .pf-review-product-title-dark h3 {
      font-size: 42px !important;
      font-weight: 700 !important;
      color: #ffffff !important;
      margin: 10px 0 5px 0 !important;
      font-family: 'Lato', sans-serif !important;
      background: transparent !important;
      border: none !important;
      padding: 0 !important;
      text-align: left !important;
    }
    
    .pf-review-product-brand {
      font-size: 16px;
      // color: #ffffff;
      margin-bottom: 20px;
      font-family: 'Lato', sans-serif;
      opacity: 0.9;
    }
    
    .pf-review-image-section {
      margin: 20px 0;
      position: relative;
    }
    
    .pf-review-product-description {
      font-size: 16px;
      line-height: 1.6;
      color: #232323;
      font-family: 'Lato', sans-serif;
      margin-top: 20px;
      opacity: 0.95;
    }
    
    /* Pros & Cons Dark Theme */
    .pf-pros-cons-container-dark {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      margin: 30px 0;
    }
    
    .pf-pros-section-dark,
    .pf-cons-section-dark {
      flex: 1;
      min-width: 250px;
      display: flex;
      flex-direction: column;
    }
    
    .pf-pros-cons-header {
      font-size: 24px;
      font-weight: 900;
      padding: 15px 20px;
      border-radius: 12px 12px 0 0;
      color: #ffffff;
      font-family: 'Lato', sans-serif;
      text-align: center;
    }
    
    .pf-pros-header {
      background-color: #22c55e;
    }
    
    .pf-cons-header {
      background-color: #ef4444;
    }
    
    .pf-pros-cons-content {
      background-color: #1a1a1a;
      padding: 20px;
      border-radius: 0 0 12px 12px;
    }
    
    .pf-list-dark {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .pf-list-dark .pf-list-item {
      color: #ffffff;
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 12px;
      padding-left: 25px;
      position: relative;
    }
    
    .pf-list-dark .pf-list-item::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #ffffff;
      font-size: 20px;
    }
    
    /* Feature Rating Cards - Updated to match product-review-card.tsx */
    .pf-feature-cards-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* grid-cols-2 */
      gap: 16px; /* gap-4 */
      margin-top: 0;
    }
    
    @media (min-width: 768px) {
      .pf-feature-cards-container {
        grid-template-columns: repeat(4, 1fr); /* md:grid-cols-4 */
      }
    }
    
    .pf-feature-card {
      border-radius: 16px; /* rounded-2xl */
      padding: 24px; /* p-6 */
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: #ffffff;
      position: relative;
      overflow: hidden;
    }
    
    .pf-feature-card .pf-feature-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px; /* w-6 h-6 equivalent */
      line-height: 1;
      flex-shrink: 0;
      margin-left: 12px;
    }
    
    .pf-feature-score {
      font-size: 30px; /* text-3xl */
      font-weight: 700; /* font-bold */
      color: #ffffff;
      font-family: 'Lato', sans-serif;
      line-height: 1;
      display: inline-block;
    }
    
    .pf-feature-divider {
      font-size: 30px; /* Same as feature-score */
      font-weight: 700; /* font-bold */
      color: #ffffff;
      font-family: 'Lato', sans-serif;
      line-height: 1;
      display: inline-block;
    }
    
    .pf-feature-bar-container {
      width: 100%;
      background: rgba(255, 255, 255, 0.3); /* bg-white/30 */
      border-radius: 9999px; /* rounded-full */
      height: 4px; /* h-1 = 4px */
      margin-bottom: 12px; /* mb-3 */
      overflow: hidden;
      display: block;
    }
    
    .pf-feature-bar {
      height: 100%;
      background: #ffffff; /* bg-white */
      border-radius: 9999px; /* rounded-full */
      transition: width 0.3s ease;
      display: block;
      min-width: 0;
    }
    
    .pf-feature-label {
      font-size: 12px; /* text-xs */
      font-weight: 600; /* font-semibold */
      color: #ffffff;
      font-family: 'Lato', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.05em; /* tracking-wide */
    }
    
    /* Responsive styles for new layout */
    @media (max-width: 768px) {
      .pf-review-card-container {
        padding: 24px 16px;
        border-radius: 16px;
      }
      
      .pf-review-grid {
        gap: 24px;
        margin-bottom: 24px;
      }
      
      .pf-review-product-title h1 {
        font-size: 24px;
      }
      
      .pf-review-rating-mobile .pf-rating-number {
        font-size: 24px;
      }
      
      .pf-review-rating-desktop .pf-rating-number {
        font-size: 28px;
      }
      
      .pf-feature-cards-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }
      
      .pf-feature-card {
        padding: 20px 16px;
      }
      
      .pf-feature-score {
        font-size: 24px;
      }
    }
    
    /* Keep old dark theme styles for backward compatibility */
    @media (max-width: 768px) {
      .pf-review-dark-theme {
        padding: 30px 16px;
      }
      
      .pf-review-top-section {
        flex-direction: column;
        gap: 15px;
      }
      
      .pf-review-overall-rating {
        position: static;
        font-size: 28px;
      }
      
      .pf-review-product-title-dark h3 {
        font-size: 28px !important;
      }
      
      .pf-pros-cons-container-dark {
        flex-direction: column;
      }
    }
    
    .t4s-main-article-page > div:not(:last-child) { margin-bottom: 50px; }
    .t4s-article-title ul { list-style: disc; display: flex; padding-left: 0; margin-bottom: 0px; }
    .t4s-article-title ul li { margin: 0px 20px; }
    .t4s-article-title ul li:first-child { list-style: none; margin-left: 0px; }
    .t4s-main-article .t4s-socials { justify-content: center; }
    .t4s-section { position: relative; }
    .t4s-container { max-width: 100% !important; margin: 0; padding: 0; }
    .t4s-row { display: flex; flex-wrap: wrap; margin: 0 -15px; }
    .t4s-col-item { padding: 0 15px; }
    .t4s-main-article-page { width: 100%; }
    .t4s-article-content { font-family: var(--font-body-family); color: var(--text-color); line-height: 1.6; }
    .t4s-article-title { font-family: var(--font-heading-family); }
    
    /* Bggle block styles */
    .bggle--block { 
      box-sizing: border-box;
      padding: 0;
      border: 0;
      vertical-align: baseline;
      font: inherit;
      font-size: 100%;
      direction: ltr;
    }
    
    .bggle_text p { 
      margin: 0;
      color: var(--text-color);
      font-size: var(--rbr__body-font-size);
      line-height: 1.6;
    }
    
    .bggle_text h3 {
      font-family: var(--font-heading-family);
      font-size: 22px;
      line-height: 28px;
      font-weight: 700;
      color: var(--heading-color);
      margin: 20px 0 10px 0;
    }
    
    .bggle_text a {
      color: var(--link-color);
      text-decoration: underline;
    }
    
    .bggle_text a:hover {
      color: var(--link-color-hover);
    }
    
    .bggle_text strong {
      font-weight: 700;
    }
    
    .bggle_text em {
      font-style: italic;
    }
    
    .bggle_title {
      font-family: var(--font-heading-family);
      font-weight: 700;
      text-transform: none;
      font-style: normal;
      color: #000000;
      text-decoration: none;
      letter-spacing: 0px;
      padding-top: 0px;
      padding-bottom: 0px;
      margin-bottom: 0px;
    }
    
    .bggle_title.text--1696603111564,
    h2.bggle_title {
      font-size: 26px;
      line-height: 33px;
    }
    
    .bggle_title.text--1696603216779,
    h3.bggle_title {
      font-size: 22px;
      line-height: 28px;
    }
    
    .no--margin-vertical { margin-top: 0; margin-bottom: 0; }
    .margin_vertical--small { margin-top: 20px; margin-bottom: 20px; }
    .margin_horizontal--small { margin-left: 20px; margin-right: 20px; }
    .padding_horizontal--small { padding-left: 20px; padding-right: 20px; }
    .margin-top_none { margin-top: 0px !important; }
    
    .text__left { text-align: left; }
    .text__center { text-align: center; }
    .text__right { text-align: right; }
    .text__justify { text-align: justify; }
    
    /* Product with text layout */
    .bggle_product-with-text {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
    
    .margin_vertical--medium { margin-top: 30px; margin-bottom: 30px; }
    .padding_vertical--small { padding-top: 20px; padding-bottom: 20px; }
    
    .bggle_text--container {
      flex: 1;
      min-width: 300px;
    }
    
    .bggle_product--container {
      flex: 1;
      min-width: 300px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
    
    .bggle_product--container.productRight {
      order: 2;
    }
    
    .bggle_product-container {
      width: 100%;
      max-width: 400px;
    }
    
    .bloggle_product--img {
      width: 100%;
      
      object-fit: contain;
      border-radius: 8px;
    }
    
    .bloggle_product--infos {
      padding: 15px 0;
    }
    
    .bloggle_product--title {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      color: #000000;
      margin: 10px 0;
    }
    
    .fd--row {
      display: flex;
      align-items: center;
    }
    
    .jc--center {
      justify-content: center;
    }
    
    .bggle--compare {
      margin-right: 10px;
    }
    
    .bloggle_product--compare-at-price {
      text-decoration: line-through;
      color: #999;
      font-size: 14px;
    }
    
    .bloggle_product--price {
      font-size: 18px;
      font-weight: 700;
      color: #ec0101;
    }
    
    .bloggle_product--price-currency {
      margin-right: 2px;
    }
    
    .bggle_button {
      margin-top: 15px;
    }
    
    .bggle_button-link {
      display: inline-block;
      padding: 12px 24px;
      background: #000000;
      color: #ffffff;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 600;
      transition: background 0.3s;
    }
    
    .bggle_button-link:hover {
      background: #333333;
    }
    
    .mr--auto {
      margin-right: auto;
    }
    
    @media (max-width: 768px) {
      .bggle_product-with-text {
        flex-direction: column;
      }
      
      .bggle_product--container.productRight {
        order: 1;
      }
      
      .bggle_text--container {
        order: 2;
      }
    }
    
    :root {
      --wrapper-mw: 1500px;
      --font-body-family: "Host Grotesk", sans-serif;
      --font-heading-family: Archivo, sans-serif;
      --t4s-success-color: #428445;
      --t4s-error-color: #EB001B;
      --t4s-light-color: #ffffff;
      --t4s-body-background: #fff;
      --text-color: #222222;
      --heading-color: #000000;
      --accent-color: #000000;
      --secondary-color: #222222;
      --link-color: #000000;
      --border-color: #dddddd;
      --border-primary-color: #f1f1f1;
      --button-background: #000000;
      --button-color: #fff;
      --rbr__body-font-size: 16px;
      --rbr__title-font-size: 18px;
      --rbr__caption-font-size: 14px;
    }
    
    @media (max-width: 768px) {
      .t4s-container { padding: 0; }
      .t4s-article-title { font-size: 28px; }
    }
    
    /* Image Slider Styles */
    .pf-image-slider {
      position: relative;
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
    }
    
    .pf-slides-container {
      position: relative;
      width: 100%;
      overflow: hidden;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .pf-slide {
      display: none;
      width: 100%;
      height: 100%;
    }
    
    .pf-slide.active {
      display: block;
    }
    
    .pf-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
    
    .pf-slider-controls {
      position: absolute;
      top: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      transform: translateY(-50%);
      pointer-events: none;
    }
    
    .pf-slider-btn {
      background: rgba(0,0,0,0.5);
      color: white;
      border: none;
      padding: 10px 15px;
      cursor: pointer;
      font-size: 18px;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      pointer-events: all;
    }
    
    .pf-slider-btn:hover {
      background: rgba(0,0,0,0.8);
      transform: scale(1.1);
    }
    
    .pf-prev {
      margin-left: 10px;
    }
    
    .pf-next {
      margin-right: 10px;
    }
    
    .pf-slider-dots {
      text-align: center;
      margin-top: 15px;
    }
    
    .pf-slider-dot {
      height: 12px;
      width: 12px;
      margin: 0 5px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    .pf-slider-dot.active,
    .pf-slider-dot:hover {
      background-color: #064734;
    }
    
    @media (max-width: 768px) {
      .pf-image-slider {
        max-width: 100%;
      }
      
      .pf-slides-container {
        height: 250px;
      }
      
      .pf-slider-btn {
        width: 35px;
        height: 35px;
        font-size: 16px;
      }
      
      .pf-prev {
        margin-left: 5px;
      }
      
      .pf-next {
        margin-right: 5px;
      }
    }
    
    /* FAQ Section Styles */
    .pf-faq-section {
      position: relative;
      padding: 60px 24px 40px 24px;
      margin: 0 0 40px 0;  /* ✅ Thêm margin-bottom để tạo khoảng cách */
      width: 100%;
      box-sizing: border-box;
      background-color: #ffffff;
      border-radius: 12px;  /* ✅ Thêm border-radius để làm mềm góc */
    }
    
    .pf-faq-section .pf-flex-section {
      position: relative;
      margin: auto;
      display: flex;
      max-width: 1100px;
      flex-flow: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0;
      height: fit-content;
    }
    
    .pf-faq-section .pf-divider-1 {
      width: 100%;
      height: 1px;
      background-color: #e2e8f0;
      margin: 0 0 30px 0;
    }
    
    .pf-faq-section .pf-heading-1-h2 {
      white-space: pre-line;
      user-select: text;
      align-self: stretch;
      height: fit-content;
      width: unset;
      flex: unset;
      color: #064734;
      font-weight: 600;
      line-height: 1.5em;
      font-size: 40px;
      font-family: 'Montserrat', 'Archivo', sans-serif;
      margin: 0 0 30px 0;
    }
    
    .pf-faq-section .pf-icon-right {
      width: 100%;
    }
    
    .pf-faq-section .pf-710_ {
      width: 100% !important;
    }
    
    .pf-faq-item {
      margin-bottom: 0;
      border: none;
      background: transparent;
    }
    
    .pf-faq-item summary {
      list-style: none;
      cursor: pointer;
      outline: none;
    }
    
    .pf-faq-item summary::-webkit-details-marker {
      display: none;
    }
    
    .pf-faq-header {
      display: flex;
      align-items: center;
      padding: 15px;
      background: #eee;
      border: 1px solid #ebebeb;
      border-bottom: none;
      font-weight: 700;
      font-size: 20px;
      color: #000;
      cursor: pointer;
      word-wrap: break-word;
      position: relative;
      outline: 0;
    }
    
    .pf-faq-header:hover {
      background: #f5f5f5;
    }
    
    .pf-accordion-icon {
      width: 16px;
      height: 16px;
      margin-right: 12px;
      transition: transform 0.3s ease;
      flex-shrink: 0;
    }
    
    .pf-faq-item[open] .pf-accordion-icon {
      transform: rotate(90deg);
    }
    
    .pf-faq-body {
      background: #fff;
      border: 1px solid #ebebeb;
      border-top: none;
      padding: 0;
    }
    
    .pf-accordion-display-content {
      padding: 0;
    }
    
    .pf-faq-content {
      padding: 20px;
    }
    
    .pf-faq-text {
      margin: 0;
      color: #333;
      font-size: 16px;
      line-height: 1.6;
      font-family: 'Lato', sans-serif;
    }
    
    .pf-paragraph-content {
      display: block;
    }
    
    .pf-faq-text strong {
      font-weight: 700;
    }
    
    .pf-faq-text a {
      color: #3f5af4;
      text-decoration: none;
    }
    
    .pf-faq-text a:hover {
      text-decoration: underline;
    }
    
    @media (max-width: 768px) {
      .pf-faq-section {
        padding: 40px 20px 30px 20px;
        margin: 0 0 30px 0;  /* ✅ Giảm margin cho mobile */
      }
      
      .pf-faq-section .pf-heading-1-h2 {
        font-size: 28px;
        margin-bottom: 20px;
      }
      
      .pf-faq-header {
        font-size: 18px;
        padding: 12px;
      }
      
      .pf-faq-content {
        padding: 15px;
      }
      
      .pf-faq-text {
        font-size: 15px;
      }
    }
  </style>
  
  <script>
    // Image Slider JavaScript Functions
    function showSlide(slideIndex, sliderId) {
      const slider = document.getElementById(sliderId);
      if (!slider) return;
      
      const slides = slider.querySelectorAll('.pf-slide');
      const dots = slider.querySelectorAll('.pf-slider-dot');
      
      if (slideIndex > slides.length) slideIndex = 1;
      if (slideIndex < 1) slideIndex = slides.length;
      
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      slides[slideIndex - 1].classList.add('active');
      dots[slideIndex - 1].classList.add('active');
    }
    
    function changeSlide(direction, sliderId) {
      const slider = document.getElementById(sliderId);
      if (!slider) return;
      
      const slides = slider.querySelectorAll('.pf-slide');
      const currentSlide = slider.querySelector('.pf-slide.active');
      let currentIndex = Array.from(slides).indexOf(currentSlide) + 1;
      
      currentIndex += direction;
      showSlide(currentIndex, sliderId);
    }
    
    function currentSlide(slideIndex, sliderId) {
      showSlide(slideIndex, sliderId);
    }
    
    // Initialize all sliders on page load
    document.addEventListener('DOMContentLoaded', function() {
      const sliders = document.querySelectorAll('.pf-image-slider');
      sliders.forEach(slider => {
        showSlide(1, slider.id);
      });
    });
  </script>
`;