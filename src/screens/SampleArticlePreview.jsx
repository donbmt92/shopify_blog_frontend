import React from 'react';
import { useNavigate } from 'react-router-dom';
import { generateArticleHTML } from '../utils/articleHTMLGenerator';

/**
 * Sample Article Preview Page với dữ liệu mẫu đầy đủ
 * Dùng để xem và code lại giao diện
 */
export default function SampleArticlePreview() {
  const navigate = useNavigate();

  // Dữ liệu mẫu đầy đủ
  const sampleData = {
    title: "Best Men's Ski Goggles 2025 – Top Picks for Every Condition",
    author: "Cecilia Wong",
    publishDate: "2025-01-15",
    shortDescription: "Best Men's Ski Goggles of 2025 | Snowears",
    featuredImage: "https://cdn.shopify.com/s/files/1/0580/8993/0916/files/ski-goggles-hero.jpg?v=1759027294",
    articleDescriptions: [
      {
        id: 1,
        content: `<p>When you're carving down a mountain at high speeds, your vision can mean the difference between an epic run and a dangerous crash. The right pair of ski goggles doesn't just protect your eyes—they enhance your ability to see clearly in shifting light conditions, prevent fogging, and maintain comfort during long days on the slopes.</p>
        <h3>What Makes a Great Ski Goggle?</h3>
        <p>After testing dozens of models across different price points, we've identified the key features that separate exceptional goggles from the rest. <strong>Optical clarity</strong> tops the list, followed by reliable anti-fog technology, comfortable fit, and versatile lens options that adapt to changing conditions.</p>
        <p>Whether you're a weekend warrior hitting the local slopes or a serious backcountry enthusiast, our comprehensive review breaks down the best options available in 2025. We've tested everything from budget-friendly picks to premium designs loaded with the latest technology.</p>`,
        textAlign: 'justify'
      },
      {
        id: 2,
        content: `<h3>Quick Picks: Our Top Recommendations</h3>
        <p>If you're in a hurry, here are our top three picks:</p>
        <ul>
          <li><strong>Best Overall:</strong> NANEND 3 Lens Magnetic Ski Goggles - Versatile, reliable, and packed with features</li>
          <li><strong>Best Budget:</strong> OutdoorMaster Pro Ski Goggles - Great performance at an affordable price</li>
          <li><strong>Best Premium:</strong> Oakley Flight Deck Prizm - Top-tier optics with premium build quality</li>
        </ul>`,
        textAlign: 'justify'
      }
    ],
    productReviews: [
      {
        id: 'review-1',
        rank: '#1 Best Overall',
        rankTitle: 'NANEND 3 Lens Magnetic Ski Goggles',
        productId: 'nanend-goggles',
        selectedImages: [
          'https://cdn.shopify.com/s/files/1/0580/8993/0916/files/nanend-goggle-1.jpg?v=1759027294',
          'https://cdn.shopify.com/s/files/1/0580/8993/0916/files/nanend-goggle-2.jpg?v=1759027294'
        ],
        ratings: [
          { label: 'Overall', score: 4.8 },
          { label: 'Optical Quality', score: 4.9 },
          { label: 'Anti-Fog Performance', score: 4.7 },
          { label: 'Comfort', score: 4.8 },
          { label: 'Value', score: 4.9 }
        ],
        pros: [
          'Magnetic lens swap system is incredibly fast and secure',
          'HD lenses with bionic cornea technology deliver exceptional clarity',
          'Anti-fog ventilation works flawlessly even in heavy snow',
          'OTG compatibility fits comfortably over glasses',
          'Three lenses cover sunny, cloudy, and night conditions perfectly'
        ],
        cons: [
          'Premium price point may be out of budget for casual skiers',
          'Frame can feel slightly heavy during very long sessions'
        ],
        detailedReviewWithScore: {
          content: `<p>After weeks of testing across varied conditions—from bright sun on groomed runs to flat light in backcountry powder—the <strong>NANEND 3 Lens Magnetic Ski Goggles</strong> consistently delivered exceptional performance. The magnetic dual-lock system made lens changes effortless, even with gloves on, and the optical clarity rivaled premium brands costing twice as much.</p>
          
          <p>The bionic cornea technology really shines in variable light. We tested these goggles from first tracks at 7 AM through afternoon sessions, and the lens quality remained sharp and distortion-free. The anti-fog system, which combines triple-layer foam and strategically placed vents, prevented any fogging even during strenuous hiking or sudden temperature changes.</p>
          
          <p>For riders who demand flexibility, the three-lens system covers every condition you'll encounter. The sunny lens handles bright resort days perfectly, while the cloudy lens maintains visibility when storms roll in. The night lens, which we tested during evening sessions, provided excellent clarity under artificial light.</p>
          
          <p><strong>Bottom line:</strong> If you're serious about skiing and want one goggle system that handles everything, these are worth the investment. They're not cheap, but the versatility and performance justify the price for dedicated skiers.</p>`,
          score: 4.8,
          scoreSummary: 'Effortless lens swaps, sharp optics, and all-day comfort make these a powerhouse pick for skiers who want one goggle to do it all.'
        },
        detailedReviews: []
      },
      {
        id: 'review-2',
        rank: '#2 Best Budget Pick',
        rankTitle: 'OutdoorMaster Pro Ski Goggles',
        productId: 'outdoormaster-pro',
        selectedImages: [
          'https://cdn.shopify.com/s/files/1/0580/8993/0916/files/outdoormaster-pro.jpg?v=1759027294'
        ],
        ratings: [
          { label: 'Overall', score: 4.5 },
          { label: 'Optical Quality', score: 4.3 },
          { label: 'Anti-Fog Performance', score: 4.4 },
          { label: 'Comfort', score: 4.6 },
          { label: 'Value', score: 4.8 }
        ],
        pros: [
          'Excellent value for the price',
          'Comfortable fit with good seal around face',
          'Solid anti-fog performance',
          'Includes two lenses for different conditions',
          'Stylish design that looks more expensive than it is'
        ],
        cons: [
          'Lens quality not quite as sharp as premium models',
          'Frame durability concerns after heavy use',
          'Limited lens tint options compared to pricier alternatives'
        ],
        detailedReviewWithScore: {
          content: `<p>The <strong>OutdoorMaster Pro Ski Goggles</strong> represent the sweet spot for budget-conscious skiers who don't want to compromise on essential features. At under $50, these goggles deliver solid performance across the board, with particular strengths in comfort and anti-fog technology.</p>
          
          <p>We tested these throughout an entire ski season, and they held up well to regular use. The dual-layer lens system provides decent clarity, though it's not quite as sharp as the premium models we tested. For recreational skiers who hit the slopes a few weekends each winter, this level of optical quality is more than sufficient.</p>
          
          <p>The included two-lens setup covers most conditions you'll encounter—a sunny lens for bright days and a low-light lens for cloudy conditions. While you won't get the versatility of a three-lens system, most skiers won't need that level of flexibility.</p>
          
          <p><strong>Bottom line:</strong> These goggles punch above their weight class. If you're looking for reliable performance without breaking the bank, the OutdoorMaster Pro is a smart choice that won't disappoint.</p>`,
          score: 4.5,
          scoreSummary: 'Exceptional value with solid performance across all key metrics—perfect for recreational skiers who want quality without the premium price tag.'
        },
        detailedReviews: []
      },
      {
        id: 'review-3',
        rank: '#3 Premium Pick',
        rankTitle: 'Oakley Flight Deck Prizm',
        productId: 'oakley-flight-deck',
        selectedImages: [
          'https://cdn.shopify.com/s/files/1/0580/8993/0916/files/oakley-flight-deck.jpg?v=1759027294'
        ],
        ratings: [
          { label: 'Overall', score: 4.9 },
          { label: 'Optical Quality', score: 5.0 },
          { label: 'Anti-Fog Performance', score: 4.8 },
          { label: 'Comfort', score: 4.9 },
          { label: 'Value', score: 4.3 }
        ],
        pros: [
          'Prizm lens technology delivers unmatched clarity and contrast',
          'Premium build quality feels incredibly durable',
          
        ],
        cons: [
          'Very expensive compared to alternatives',
        ],
        detailedReviewWithScore: {
          content: `<p>If money is no object and you demand the absolute best optical performance, the <strong>Oakley Flight Deck Prizm</strong> is in a class of its own. Oakley's proprietary Prizm lens technology amplifies contrast and definition in ways that genuinely improve your ability to read terrain and spot obstacles.</p>
          
          <p>We tested these goggles side-by-side with competitors, and the difference in optical quality was immediately apparent. Colors appeared richer, snow texture was easier to read, and depth perception improved noticeably. On variable terrain with changing light, these goggles made a real difference in confidence and control.</p>
          
          <p>The build quality matches the price point. These goggles feel like they'll last multiple seasons, with robust frame construction and premium materials throughout. The large field of view is a particular strength, offering excellent peripheral vision that helps with situational awareness.</p>
          
          <p><strong>Bottom line:</strong> These are the best goggles we tested, period. If you ski frequently and can justify the premium, the optical quality and build make these worth the investment. For occasional skiers, the value proposition is harder to justify.</p>`,
          score: 4.9,
          scoreSummary: 'The pinnacle of ski goggle technology—exceptional optics and premium construction for serious skiers who demand the absolute best.'
        },
        detailedReviews: []
      }
    ],
    products: [
      {
        id: 'nanend-goggles',
        title: 'NANEND 3 Lens Magnetic Ski Goggles',
        handle: 'nanend-3-lens-magnetic-ski-goggles',
        images: [
          { src: 'https://cdn.shopify.com/s/files/1/0580/8993/0916/files/nanend-goggle-1.jpg?v=1759027294' }
        ]
      },
      {
        id: 'outdoormaster-pro',
        title: 'OutdoorMaster Pro Ski Goggles',
        handle: 'outdoormaster-pro-ski-goggles',
        images: [
          { src: 'https://cdn.shopify.com/s/files/1/0580/8993/0916/files/outdoormaster-pro.jpg?v=1759027294' }
        ]
      },
      {
        id: 'oakley-flight-deck',
        title: 'Oakley Flight Deck Prizm',
        handle: 'oakley-flight-deck-prizm',
        images: [
          { src: 'https://cdn.shopify.com/s/files/1/0580/8993/0916/files/oakley-flight-deck.jpg?v=1759027294' }
        ]
      }
    ],
    whatToConsider: {
      title: "What To Consider When Buying Men's Ski Goggles?",
      content: `Shopping for ski goggles can feel surprisingly tricky. They come in different shapes, sizes, lens types, and with all sorts of tech promising clearer vision and better comfort. While we always recommend trying on goggles to make sure they properly fit your face and helmet, it's also smart to know the key details before you buy. That way, you can narrow down your options and avoid surprises when you're halfway down the mountain.

Some features are straightforward—like making sure your goggles won't fog up in a storm—while others, like lens tints, frame sizes, or quick-swap systems, can take a little more thought. Then there's the balance of price versus performance: premium models often deliver sharper optics and comfort, but budget picks can still hold their own. Below, we break down the main points to keep in mind so you can find the right pair for your skiing style.`
    },
    conclusion: {
      title: 'Conclusion',
      content: `After comparing dozens of ski goggles this season, the NANEND 3 Lens Magnetic Ski Goggles claim the top spot. They offer a trio of interchangeable lenses—sunny, cloudy, and night—which means you're always ready, no matter how fast light changes. The magnetic dual-lock system is secure yet fast, letting you swap out lenses quickly without fuss. Add in HD lenses with bionic cornea tech, anti-fog ventilation, and wide compatibility, including OTG (over-the-glasses), and you've got a package that delivers both clarity and comfort.

For riders who demand performance, durability, and adaptability without paying premium brand prices, this one delivers more than its price tag suggests. If you're ready to upgrade your vision—and your ride—click below and snag your pair now.`
    },
    faqs: [
      {
        id: 'faq-1',
        question: 'What is the best ski goggle for all conditions?',
        answer: `The NANEND 3 Lens Magnetic Ski Goggles are our top pick for all-condition performance. Their three-lens system (sunny, cloudy, and night) covers every lighting scenario you'll encounter, and the magnetic swap system makes changing lenses quick and easy, even with gloves on.`
      },
      {
        id: 'faq-2',
        question: 'How important is anti-fog technology?',
        answer: `Anti-fog technology is crucial for ski goggles. Fogging can completely block your vision, making skiing dangerous. Look for goggles with dual-layer lenses, anti-fog coating, and good ventilation. The NANEND goggles excel here with their triple-layer foam and strategic vent placement that prevents fogging even during strenuous activity.`
      },
      {
        id: 'faq-3',
        question: 'Can I wear ski goggles over my glasses?',
        answer: `Yes! Many goggles are OTG (Over-The-Glasses) compatible, including the NANEND 3 Lens model. Look for goggles with enough depth to accommodate your frames comfortably. Always try them on with your glasses if possible to ensure a proper fit.`
      },
      {
        id: 'faq-4',
        question: 'What\'s the difference between budget and premium ski goggles?',
        answer: `The main differences are optical quality, lens technology, build materials, and durability. Premium goggles like the Oakley Flight Deck offer superior Prizm lens technology with enhanced contrast and clarity, while budget options like the OutdoorMaster Pro provide solid performance at a lower price point. For occasional skiers, budget models are often sufficient, but serious riders will appreciate the optical advantages of premium lenses.`
      },
      {
        id: 'faq-5',
        question: 'How often should I replace my ski goggles?',
        answer: `With proper care, high-quality ski goggles can last multiple seasons. However, you should replace them if: the lenses become scratched and affect visibility, the anti-fog coating wears off, the foam deteriorates and loses its seal, or if you experience persistent fogging issues that cleaning can't resolve.`
      }
    ]
  };

  // Generate HTML từ dữ liệu mẫu
  const sampleHTML = generateArticleHTML(sampleData);

  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      background: '#f5f5f5',
      zIndex: 9999,
      overflow: 'auto'
    }}>
      {/* Header với button quay lại */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 10000,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px 40px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{ 
            margin: 0, 
            color: '#fff', 
            fontSize: '24px',
            fontWeight: 700
          }}>
            📄 Trang Mẫu - Sample Article Preview
          </h1>
          <p style={{ 
            margin: '8px 0 0 0', 
            color: 'rgba(255,255,255,0.9)', 
            fontSize: '14px' 
          }}>
            Dùng để xem và code lại giao diện - Dữ liệu mẫu đầy đủ với 3 product reviews
          </p>
        </div>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '12px 24px',
            background: 'rgba(255,255,255,0.2)',
            border: '2px solid rgba(255,255,255,0.3)',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.3)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.2)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          ← Quay lại Dashboard
        </button>
      </div>

      {/* Render HTML mẫu */}
      <div 
        dangerouslySetInnerHTML={{ __html: sampleHTML }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          background: '#fff',
          minHeight: 'calc(100vh - 100px)',
          padding: '0'
        }}
      />
    </div>
  );
}
