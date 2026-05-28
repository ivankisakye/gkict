import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// ─── Scroll Animation Hook ───────────────────────────────────────────────────
function useScrollAnimation() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, visible]
}

function AnimatedSection({ children, className = '' }) {
  const [ref, visible] = useScrollAnimation()
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}>
      {children}
    </div>
  )
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const blogPosts = [
  {
    id: 'why-your-business-needs-a-professional-website',
    slug: 'why-your-business-needs-a-professional-website',
    title: 'Why Your Business Needs a Professional Website in 2024',
    excerpt: 'In today\'s digital age, having a professional website is no longer optional — it\'s essential. Here\'s why your business needs to invest in quality web development.',
    content: `
      <p>In 2024, a professional website is the cornerstone of any successful business. It's your digital storefront, open 24/7, accessible from anywhere in the world.</p>
      
      <h2>First Impressions Matter</h2>
      <p>Studies show that 75% of consumers judge a company's credibility based on its website design. A professional, modern website builds trust before a potential customer even speaks to you.</p>
      
      <h2>24/7 Availability</h2>
      <p>Unlike a physical store that closes at 6 PM, your website works for you around the clock. Customers can learn about your products, read reviews, and even make purchases at 2 AM on a Sunday.</p>
      
      <h2>Credibility and Trust</h2>
      <p>Consumers expect businesses to have a website. Without one, you risk appearing outdated or even illegitimate. A professional website with customer testimonials, case studies, and clear contact information establishes credibility.</p>
      
      <h2>Cost-Effective Marketing</h2>
      <p>Your website is the hub of all your digital marketing efforts. Every social media post, email campaign, and Google ad should drive traffic back to your website, where visitors can convert into customers.</p>
      
      <h2>Stay Ahead of Competitors</h2>
      <p>If your competitors have websites and you don't, you're losing business. Even worse, if their websites are better than yours, customers will choose them over you.</p>
      
      <h2>Get Started Today</h2>
      <p>Ready to build a professional website for your business? Contact GK ICT Solutions for a free consultation and quote.</p>
    `,
    author: 'Gerald Kato',
    authorAvatar: 'GK',
    authorRole: 'CEO & Lead Developer',
    date: 'December 15, 2024',
    readTime: '5 min read',
    category: 'Web Development',
    categoryColor: 'bg-blue-100 text-blue-700',
    image: 'website',
    featured: true,
    tags: ['Web Development', 'Business', 'Digital Marketing'],
  },
  {
    id: 'cctv-installation-guide',
    slug: 'cctv-installation-guide',
    title: 'A Complete Guide to CCTV Installation for Your Business',
    excerpt: 'Protect your business with professional CCTV installation. Learn about camera types, placement strategies, and what to look for in a security provider.',
    content: `
      <p>Security is a top concern for any business owner. CCTV cameras are one of the most effective deterrents against theft, vandalism, and other security threats.</p>
      
      <h2>Types of CCTV Cameras</h2>
      <p><strong>Dome Cameras:</strong> Discreet and stylish, these are great for indoor use in retail stores and offices. Their dome shape makes it hard to tell which direction they're pointing.</p>
      <p><strong>Bullet Cameras:</strong> Long and cylindrical, these are visible deterrents perfect for outdoor use. They're great for monitoring specific areas like entrances and parking lots.</p>
      <p><strong>PTZ Cameras:</strong> Pan-Tilt-Zoom cameras can be remotely controlled to follow movement. Ideal for large properties and warehouses.</p>
      
      <h2>Strategic Camera Placement</h2>
      <p>Proper placement is crucial for effective security coverage. Key areas include all entry and exit points, cash registers, inventory storage areas, parking lots, and blind spots.</p>
      
      <h2>Remote Viewing Benefits</h2>
      <p>Modern CCTV systems allow you to view live footage from your phone or computer from anywhere in the world. You can check on your business while on vacation or monitor multiple locations from one dashboard.</p>
      
      <h2>Why Professional Installation Matters</h2>
      <p>DIY camera systems may seem cheaper, but professional installation ensures optimal camera angles, proper cabling, reliable recording, and ongoing support. At GK ICT Solutions, we handle everything from site assessment to installation and training.</p>
      
      <h2>Ready to Secure Your Business?</h2>
      <p>Contact us today for a free security assessment and quote for professional CCTV installation.</p>
    `,
    author: 'David Ssemwogerere',
    authorAvatar: 'DS',
    authorRole: 'IT Support & Networking',
    date: 'December 10, 2024',
    readTime: '6 min read',
    category: 'Security',
    categoryColor: 'bg-red-100 text-red-700',
    image: 'cctv',
    featured: false,
    tags: ['CCTV', 'Security', 'Business Safety'],
  },
  {
    id: 'digital-marketing-strategies',
    slug: 'digital-marketing-strategies',
    title: '10 Digital Marketing Strategies That Actually Work in Uganda',
    excerpt: 'Reach more customers and grow your brand with these proven digital marketing strategies tailored for the Ugandan market.',
    content: `
      <p>The digital landscape in Uganda is growing rapidly. With increasing internet penetration and mobile usage, digital marketing has become essential for businesses of all sizes.</p>
      
      <h2>1. Google Ads (PPC)</h2>
      <p>Google Ads puts your business at the top of search results instantly. Target customers actively searching for your products or services in Kampala, Jinja, or nationwide.</p>
      
      <h2>2. Local SEO</h2>
      <p>Optimize your website to rank for "near me" searches. When someone searches for "IT company near me" or "best web developer Kampala," you want to be the first result.</p>
      
      <h2>3. Facebook & Instagram Ads</h2>
      <p>With millions of Ugandans on Facebook and Instagram, these platforms offer highly targeted advertising options based on location, age, interests, and behaviors.</p>
      
      <h2>4. WhatsApp Marketing</h2>
      <p>WhatsApp is the most popular messaging app in Uganda. Use WhatsApp Business to send updates, answer customer questions, and build relationships.</p>
      
      <h2>5. Content Marketing</h2>
      <p>Create valuable blog posts, videos, and guides that help your customers. This builds trust and establishes you as an authority in your industry.</p>
      
      <h2>6. Email Marketing</h2>
      <p>Build an email list and nurture leads with regular newsletters, promotions, and valuable content. Email has one of the highest ROIs of any marketing channel.</p>
      
      <h2>7. Social Media Engagement</h2>
      <p>Don't just post — engage. Respond to comments, answer questions, and join conversations. Building a community around your brand leads to loyal customers.</p>
      
      <h2>8. Influencer Partnerships</h2>
      <p>Partner with local influencers who align with your brand. Their endorsement can introduce your business to thousands of potential customers.</p>
      
      <h2>9. Video Marketing</h2>
      <p>Video content gets more engagement than any other format. Create product demos, behind-the-scenes content, and customer testimonials.</p>
      
      <h2>10. Analytics & Optimization</h2>
      <p>Track everything. Use data to understand what's working and double down on successful strategies while cutting what isn't performing.</p>
      
      <h2>Need Help with Digital Marketing?</h2>
      <p>At GK ICT Solutions, we offer comprehensive digital marketing services tailored to your business goals. Contact us for a free consultation.</p>
    `,
    author: 'Patricia Akello',
    authorAvatar: 'PA',
    authorRole: 'Digital Marketing Lead',
    date: 'December 5, 2024',
    readTime: '8 min read',
    category: 'Digital Marketing',
    categoryColor: 'bg-orange-100 text-orange-700',
    image: 'marketing',
    featured: true,
    tags: ['Digital Marketing', 'SEO', 'Google Ads', 'Social Media'],
  },
  {
    id: 'erp-system-benefits',
    slug: 'erp-system-benefits',
    title: '5 Benefits of Implementing an ERP System for Your School or Business',
    excerpt: 'Discover how an integrated ERP system can save time, reduce errors, and help you make better decisions with real-time data.',
    content: `
      <p>Enterprise Resource Planning (ERP) systems are no longer just for large corporations. Schools, NGOs, and growing businesses in Uganda can benefit tremendously from integrated management software.</p>
      
      <h2>1. Centralized Data Management</h2>
      <p>Stop juggling between spreadsheets, paper records, and different software. An ERP system stores all your data in one place — student records, financial transactions, inventory, staff information, and more.</p>
      
      <h2>2. Real-Time Reporting & Analytics</h2>
      <p>Make better decisions with real-time data. See your financial position, student enrollment trends, or inventory levels instantly. Generate reports with one click instead of spending hours compiling data.</p>
      
      <h2>3. Reduced Errors & Manual Work</h2>
      <p>Manual data entry leads to errors. Duplicate entries, calculation mistakes, and lost paperwork cost time and money. ERP systems automate calculations, validate data entry, and maintain a single source of truth.</p>
      
      <h2>4. Better Communication & Collaboration</h2>
      <p>When everyone uses the same system, communication improves. Parents can check their child's fees balance online. Department heads can request supplies through the system. Everyone sees the same up-to-date information.</p>
      
      <h2>5. Scalability & Growth</h2>
      <p>As your school or business grows, your systems need to keep up. ERP systems scale with you — add new users, new locations, or new features without replacing your entire system.</p>
      
      <h2>Real-World Example: School Management System</h2>
      <p>A school using our ERP system can manage student admissions, fee collection, exam results, timetables, and staff payroll all from one dashboard. Parents can pay fees online and download report cards. Teachers can enter marks directly into the system.</p>
      
      <h2>Ready to Transform Your Operations?</h2>
      <p>Contact GK ICT Solutions to discuss your needs and get a customized quote for an ERP system designed for you.</p>
    `,
    author: 'Gerald Kato',
    authorAvatar: 'GK',
    authorRole: 'CEO & Lead Developer',
    date: 'November 28, 2024',
    readTime: '7 min read',
    category: 'ERP Systems',
    categoryColor: 'bg-purple-100 text-purple-700',
    image: 'erp',
    featured: false,
    tags: ['ERP', 'School Management', 'Business Software'],
  },
  {
    id: 'brand-identity-importance',
    slug: 'brand-identity-importance',
    title: 'Why Brand Identity Matters More Than You Think',
    excerpt: 'Your brand is more than just a logo. Learn why a strong brand identity builds trust, attracts customers, and sets you apart from competitors.',
    content: `
      <p>When people think of Coca-Cola, they don't just think of a brown sugary drink. They think of happiness, refreshment, and Christmas. That's brand identity at work.</p>
      
      <h2>What Is Brand Identity?</h2>
      <p>Brand identity is the visible elements of your brand — your logo, colors, typography, and design style. But it also includes your brand voice, personality, and the emotions you evoke in customers.</p>
      
      <h2>Builds Trust & Credibility</h2>
      <p>A professional, consistent brand identity signals that you take your business seriously. Customers are more likely to trust and buy from a business that looks professional.</p>
      
      <h2>Differentiates You From Competitors</h2>
      <p>In a crowded market, brand identity helps you stand out. When all IT companies look the same, a unique brand identity makes customers remember you.</p>
      
      <h2>Creates Emotional Connection</h2>
      <p>People don't just buy products — they buy feelings. Strong brand identity creates an emotional connection with your audience, leading to customer loyalty and repeat business.</p>
      
      <h2>Supports All Marketing Efforts</h2>
      <p>Every ad, social media post, and email benefits from strong brand identity. Consistent branding builds recognition, so people remember you when they need your services.</p>
      
      <h2>Increases Perceived Value</h2>
      <p>Would you pay more for a product in beautiful packaging with a professional logo? Most people would. Strong brand identity increases your perceived value, allowing you to charge premium prices.</p>
      
      <h2>Ready to Build Your Brand?</h2>
      <p>GK ICT Solutions offers complete branding packages including logo design, brand guidelines, and printed materials. Let's create a brand that stands out.</p>
    `,
    author: 'Aisha Namukasa',
    authorAvatar: 'AN',
    authorRole: 'UI/UX & Brand Designer',
    date: 'November 20, 2024',
    readTime: '5 min read',
    category: 'Branding',
    categoryColor: 'bg-pink-100 text-pink-700',
    image: 'branding',
    featured: false,
    tags: ['Branding', 'Logo Design', 'Marketing'],
  },
  {
    id: 'it-support-importance',
    slug: 'it-support-importance',
    title: 'Why Every Business Needs Reliable IT Support',
    excerpt: 'Downtime costs money. Learn how professional IT support keeps your business running smoothly and protects you from costly disruptions.',
    content: `
      <p>Imagine walking into your office on Monday morning and none of your computers work. Your servers are down. Your internet is dead. You can't access customer data, process payments, or send emails.</p>
      
      <p>How much money would you lose in one hour? One day? One week?</p>
      
      <h2>Prevents Costly Downtime</h2>
      <p>According to studies, the average cost of IT downtime is thousands of dollars per hour. Professional IT support prevents problems before they cause downtime through proactive monitoring and maintenance.</p>
      
      <h2>Protects Against Security Threats</h2>
      <p>Cyber attacks are increasing in Uganda. Without proper security, your business data could be stolen, encrypted for ransom, or deleted. IT support ensures your systems have updated security, firewalls, and backup systems.</p>
      
      <h2>Keeps Hardware Running</h2>
      <p>Computers, printers, and networking equipment need maintenance. Regular cleaning, updates, and repairs extend the life of your hardware and prevent unexpected failures.</p>
      
      <h2>Provides Help When You Need It</h2>
      <p>When something breaks, you need it fixed fast. With professional IT support, you have someone to call who knows your systems and can solve problems quickly.</p>
      
      <h2>Allows You to Focus on Your Business</h2>
      <p>You didn't start your business to fix computers. Let IT professionals handle the technology so you can focus on serving customers and growing your business.</p>
      
      <h2>Get Reliable IT Support Today</h2>
      <p>GK ICT Solutions offers IT support packages for businesses of all sizes. From one-time repairs to ongoing maintenance contracts, we've got you covered. Contact us today.</p>
    `,
    author: 'David Ssemwogerere',
    authorAvatar: 'DS',
    authorRole: 'IT Support & Networking',
    date: 'November 15, 2024',
    readTime: '4 min read',
    category: 'IT Support',
    categoryColor: 'bg-green-100 text-green-700',
    image: 'itsupport',
    featured: false,
    tags: ['IT Support', 'Business', 'Security'],
  },
]

const categories = [
  { name: 'All', count: blogPosts.length, slug: 'all' },
  { name: 'Web Development', count: blogPosts.filter(p => p.category === 'Web Development').length, slug: 'web-development' },
  { name: 'Digital Marketing', count: blogPosts.filter(p => p.category === 'Digital Marketing').length, slug: 'digital-marketing' },
  { name: 'ERP Systems', count: blogPosts.filter(p => p.category === 'ERP Systems').length, slug: 'erp-systems' },
  { name: 'Security', count: blogPosts.filter(p => p.category === 'Security').length, slug: 'security' },
  { name: 'Branding', count: blogPosts.filter(p => p.category === 'Branding').length, slug: 'branding' },
  { name: 'IT Support', count: blogPosts.filter(p => p.category === 'IT Support').length, slug: 'it-support' },
]

const recentPosts = blogPosts.slice(0, 4)

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
function BlogHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
          Insights & Updates
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            Blog
          </span>
        </h1>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Expert insights, tips, and guides on web development, digital marketing, security, and more.
        </p>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-blue-300 text-sm">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-white font-medium">Blog</span>
        </div>
      </div>
    </section>
  )
}

// ─── FEATURED POST CARD ───────────────────────────────────────────────────────
function FeaturedPost({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="block group">
      <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
        <div className={`h-56 bg-gradient-to-r ${post.category === 'Web Development' ? 'from-blue-500 to-blue-700' : 
          post.category === 'Digital Marketing' ? 'from-orange-500 to-orange-600' : 
          post.category === 'ERP Systems' ? 'from-purple-500 to-purple-700' : 
          post.category === 'Security' ? 'from-red-500 to-red-700' : 
          post.category === 'Branding' ? 'from-pink-500 to-rose-600' :
          'from-green-500 to-green-700'} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-8xl opacity-20">
              {post.image === 'website' && '🌐'}
              {post.image === 'cctv' && '📷'}
              {post.image === 'marketing' && '📣'}
              {post.image === 'erp' && '🏢'}
              {post.image === 'branding' && '🎨'}
              {post.image === 'itsupport' && '🔧'}
            </div>
          </div>
          <div className="absolute top-4 left-4">
            <span className={`${post.categoryColor} px-3 py-1 rounded-full text-xs font-semibold`}>
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h2 className="text-xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 bg-gradient-to-br ${
              post.author === 'Gerald Kato' ? 'from-blue-500 to-blue-700' :
              post.author === 'Patricia Akello' ? 'from-orange-500 to-orange-600' :
              post.author === 'David Ssemwogerere' ? 'from-green-500 to-green-700' :
              'from-pink-500 to-rose-600'
            } rounded-full flex items-center justify-center text-white font-bold text-xs`}>
              {post.authorAvatar}
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-sm">{post.author}</div>
              <div className="text-gray-400 text-xs">{post.authorRole}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

// ─── BLOG POST CARD (Regular) ─────────────────────────────────────────────────
function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="block group">
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col">
        <div className={`h-48 bg-gradient-to-r ${post.category === 'Web Development' ? 'from-blue-500 to-blue-700' : 
          post.category === 'Digital Marketing' ? 'from-orange-500 to-orange-600' : 
          post.category === 'ERP Systems' ? 'from-purple-500 to-purple-700' : 
          post.category === 'Security' ? 'from-red-500 to-red-700' : 
          post.category === 'Branding' ? 'from-pink-500 to-rose-600' :
          'from-green-500 to-green-700'} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-7xl opacity-20">
              {post.image === 'website' && '🌐'}
              {post.image === 'cctv' && '📷'}
              {post.image === 'marketing' && '📣'}
              {post.image === 'erp' && '🏢'}
              {post.image === 'branding' && '🎨'}
              {post.image === 'itsupport' && '🔧'}
            </div>
          </div>
          <div className="absolute top-3 left-3">
            <span className={`${post.categoryColor} px-2 py-0.5 rounded-full text-xs font-semibold`}>
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 text-md">
            {post.title}
          </h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2 pt-2 border-t border-gray-100 mt-2">
            <div className={`w-6 h-6 bg-gradient-to-br ${
              post.author === 'Gerald Kato' ? 'from-blue-500 to-blue-700' :
              post.author === 'Patricia Akello' ? 'from-orange-500 to-orange-600' :
              post.author === 'David Ssemwogerere' ? 'from-green-500 to-green-700' :
              'from-pink-500 to-rose-600'
            } rounded-full flex items-center justify-center text-white font-bold text-[10px]`}>
              {post.authorAvatar}
            </div>
            <div className="text-gray-500 text-xs">{post.author}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────
function BlogSidebar({ selectedCategory, onCategoryChange, searchQuery, onSearchChange }) {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-3">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => onCategoryChange(cat.slug === 'all' ? null : cat.slug)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 ${
                (selectedCategory === null && cat.slug === 'all') || selectedCategory === cat.slug
                  ? 'bg-blue-50 text-blue-600 font-medium'
                  : 'hover:bg-gray-50 text-gray-600'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                (selectedCategory === null && cat.slug === 'all') || selectedCategory === cat.slug
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-3">Recent Posts</h3>
        <div className="space-y-3">
          {recentPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="flex gap-3 group">
              <div className={`w-12 h-12 bg-gradient-to-r ${post.category === 'Web Development' ? 'from-blue-500 to-blue-700' : 
                post.category === 'Digital Marketing' ? 'from-orange-500 to-orange-600' : 
                post.category === 'ERP Systems' ? 'from-purple-500 to-purple-700' : 
                'from-green-500 to-green-700'} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                {post.icon || '📄'}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-5 text-white">
        <div className="text-3xl mb-2">📧</div>
        <h3 className="font-bold text-lg mb-2">Subscribe</h3>
        <p className="text-blue-100 text-sm mb-4">Get the latest posts delivered to your inbox.</p>
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm mb-2 focus:outline-none"
        />
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 text-sm">
          Subscribe
        </button>
      </div>
    </div>
  )
}

// ─── MAIN BLOG PAGE ───────────────────────────────────────────────────────────
export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory ? post.category.toLowerCase().replace(' ', '-') === selectedCategory : true
    const matchesSearch = searchQuery ? 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
      : true
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(p => p.featured)
  const regularPosts = filteredPosts.filter(p => !p.featured)

  return (
    <>
      <BlogHero />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Posts */}
              {featuredPosts.length > 0 && !selectedCategory && !searchQuery && (
                <div className="mb-12">
                  <h2 className="text-2xl font-black text-gray-900 mb-6">Featured Articles</h2>
                  <div className="grid gap-6">
                    {featuredPosts.map((post, i) => (
                      <AnimatedSection key={post.id}>
                        <FeaturedPost post={post} />
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              )}

              {/* All Posts */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-black text-gray-900">
                    {selectedCategory ? `Category: ${selectedCategory.replace('-', ' ')}` : 'Latest Articles'}
                  </h2>
                  <p className="text-gray-400 text-sm">{filteredPosts.length} posts</p>
                </div>

                {filteredPosts.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No posts found</h3>
                    <p className="text-gray-500">Try adjusting your search or category filter.</p>
                  </div>
                ) : (
                  <div className="grid gap-6">
                    {regularPosts.map((post, i) => (
                      <AnimatedSection key={post.id}>
                        <BlogCard post={post} />
                      </AnimatedSection>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <BlogSidebar 
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-5xl mb-5">✍️</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
              Have a Topic You'd Like Us to Cover?
            </h2>
            <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
              Let us know what you'd like to learn about. We're always looking for new topics to write about.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              Suggest a Topic
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}