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

const servicesData = [
  {
    id: 'web-development',
    icon: '🌐',
    title: 'Website Development',
    tagline: 'Modern, Fast & Responsive',
    description: 'We build custom websites that are fast, secure, and optimized for search engines. From business websites to e-commerce stores, we deliver solutions that convert visitors into customers.',
    fullDescription: `Our website development service covers everything from simple brochure websites to complex e-commerce platforms. We use modern frameworks like React, Node.js, and WordPress to build sites that are:
• Fully responsive across all devices
• SEO-optimized from day one
• Fast-loading with 90+ Lighthouse scores
• Secure with SSL certificates and regular backups
• Easy to manage with custom CMS integration`,
    features: [
      'Custom Design & Development',
      'E-commerce Solutions',
      'CMS Integration (WordPress, Sanity)',
      'SEO Optimization',
      'Speed Optimization',
      'SSL Certificate & Security',
      'Monthly Maintenance Plans',
      '24/7 Uptime Monitoring',
    ],
    price: 'From UGX',
    timeline: '1-3 weeks',
    color: 'from-blue-500 to-blue-700',
    bgLight: 'bg-blue-50',
    iconBg: 'bg-blue-100',
  },
  {
    id: 'web-applications',
    icon: '⚙️',
    title: 'Web Applications',
    tagline: 'Custom Portals & Dashboards',
    description: 'Powerful web applications that streamline your operations, manage data, and automate workflows. Built for scalability and performance.',
    fullDescription: `We develop custom web applications tailored to your unique business processes. Whether you need a client portal, inventory system, or internal dashboard, we build solutions that:
• Automate repetitive tasks
• Centralize data management
• Provide real-time analytics
• Integrate with your existing tools
• Scale as your business grows`,
    features: [
      'Custom Dashboard Development',
      'Client & Staff Portals',
      'Inventory Management Systems',
      'Task & Project Management',
      'Real-time Analytics & Reporting',
      'Third-party API Integration',
      'Database Design & Optimization',
      'Cloud Deployment (AWS, Azure)',
    ],
    price: 'From UGX',
    timeline: '4-8 weeks',
    color: 'from-indigo-500 to-indigo-700',
    bgLight: 'bg-indigo-50',
    iconBg: 'bg-indigo-100',
  },
  {
    id: 'erp-systems',
    icon: '🏢',
    title: 'ERP Systems',
    tagline: 'Complete Business Management',
    description: 'Integrated enterprise resource planning solutions for schools, businesses, and NGOs. Manage everything from finance to HR in one place.',
    fullDescription: `Our ERP systems bring all your business operations into a single, unified platform. We specialize in:
• School Management Systems (admissions, fees, exams, results)
• Business ERP (inventory, sales, purchases, accounting)
• NGO Management (donor tracking, project management, beneficiary records)
• Hospital Management Systems
The result is reduced manual work, fewer errors, and better decision-making with real-time data.`,
    features: [
      'School Management System',
      'Inventory & Stock Control',
      'Financial Accounting',
      'HR & Payroll Management',
      'Sales & Purchase Orders',
      'Student/Client Records',
      'Exam & Results Management',
      'Custom Reporting & Analytics',
    ],
    price: 'Custom Quote',
    timeline: '6-12 weeks',
    color: 'from-purple-500 to-purple-700',
    bgLight: 'bg-purple-50',
    iconBg: 'bg-purple-100',
  },
  {
    id: 'digital-marketing',
    icon: '📣',
    title: 'Digital Marketing',
    tagline: 'Grow Your Online Presence',
    description: 'Data-driven Google Ads, SEO, and social media strategies that attract more customers and grow your brand online.',
    fullDescription: `We don't just build websites — we help people find them. Our digital marketing services are designed to drive targeted traffic and measurable results:
• Google Ads campaigns managed by certified experts
• SEO that gets you on page one
• Social media management for brand growth
• Email marketing that converts
• Detailed monthly reports showing ROI`,
    features: [
      'Google Ads (PPC) Campaigns',
      'SEO (Local & National)',
      'Social Media Management',
      'Facebook & Instagram Ads',
      'Email Marketing',
      'Content Marketing',
      'Analytics & Reporting',
      'Conversion Rate Optimization',
    ],
    price: 'From UGX',
    timeline: 'Ongoing',
    color: 'from-orange-500 to-orange-600',
    bgLight: 'bg-orange-50',
    iconBg: 'bg-orange-100',
  },
  {
    id: 'branding',
    icon: '🎨',
    title: 'Branding & Printing',
    tagline: 'Stand Out From The Crowd',
    description: 'Professional logo design, brand identity packages, and high-quality printing services that make your business memorable.',
    fullDescription: `Your brand is your promise to your customers. We help you create a consistent, professional image across all touchpoints:
• Logo design that captures your essence
• Complete brand guidelines
• Business cards, letterheads, and envelopes
• Banners, signage, and promotional materials
• Product packaging design
We handle everything from design to printing and delivery.`,
    features: [
      'Logo & Brand Identity Design',
      'Business Cards & Stationery',
      'Banners & Signage',
      'Brochures & Flyers',
      'Product Packaging',
      'Social Media Graphics',
      'Brand Guidelines',
      'Print Management & Delivery',
    ],
    price: 'From UGX',
    timeline: '1-2 weeks',
    color: 'from-pink-500 to-rose-600',
    bgLight: 'bg-pink-50',
    iconBg: 'bg-pink-100',
  },
  {
    id: 'cctv',
    icon: '📷',
    title: 'CCTV Installation',
    tagline: 'Secure Your Property',
    description: 'Professional security camera installation for homes, offices, schools, and institutions. Remote viewing and 24/7 recording.',
    fullDescription: `Protect what matters most with our professional CCTV installation services:
• High-definition IP cameras (day/night vision)
• Remote viewing on phone or computer
• Motion detection & alerts
• 24/7 continuous recording
• Weatherproof outdoor cameras
• Professional cabling and setup
• Maintenance and support
We assess your property and recommend the optimal camera positions for maximum coverage.`,
    features: [
      'HD IP Camera Installation',
      'Remote Mobile Viewing',
      'Motion Detection & Alerts',
      'Night Vision Capability',
      '24/7 Recording',
      'Weatherproof Cameras',
      'Video Analytics',
      'Maintenance & Support',
    ],
    price: 'From UGX',
    timeline: '1-3 days',
    color: 'from-gray-600 to-gray-800',
    bgLight: 'bg-gray-50',
    iconBg: 'bg-gray-100',
  },
  {
    id: 'it-support',
    icon: '🔧',
    title: 'IT Support & Repair',
    tagline: 'Fast, Reliable Computer Repair',
    description: 'Computer and laptop repair, networking setup, virus removal, and ongoing IT maintenance for businesses and individuals.',
    fullDescription: `Don't let technical problems slow you down. Our IT support team is ready to help:
• Computer and laptop repair (hardware & software)
• Virus and malware removal
• Data recovery and backup
• Network setup and troubleshooting
• Printer installation and repair
• Regular maintenance contracts for businesses
We offer both on-site and remote support with fast response times.`,
    features: [
      'Computer & Laptop Repair',
      'Virus & Malware Removal',
      'Data Recovery & Backup',
      'Network Setup & Troubleshooting',
      'Printer Installation & Repair',
      'Software Installation',
      'Hardware Upgrades',
      'Business Maintenance Contracts',
    ],
    price: 'From UGX',
    timeline: '24-48 hours',
    color: 'from-green-500 to-green-700',
    bgLight: 'bg-green-50',
    iconBg: 'bg-green-100',
  },
  {
    id: 'computer-sales',
    icon: '🖥️',
    title: 'Computer Sales',
    tagline: 'Quality Computers at Fair Prices',
    description: 'New and refurbished computers, laptops, and printers. All tested, cleaned, and backed by our warranty.',
    fullDescription: `Get quality computing hardware without breaking the bank:
• Brand new laptops and desktops (Dell, HP, Lenovo)
• Refurbished computers (tested & certified)
• Printers (inkjet and laser)
• Computer accessories (monitors, keyboards, mice)
• Bulk orders for schools and businesses
Every refurbished computer is cleaned, tested, and comes with a warranty. We also offer installation and setup.`,
    features: [
      'New Laptops & Desktops',
      'Refurbished Computers',
      'Printers (Inkjet & Laser)',
      'Monitors & Accessories',
      'Bulk Orders for Institutions',
      'Installation & Setup',
      'Warranty on All Products',
      'Trade-in Available',
    ],
    price: 'From UGX',
    timeline: 'In stock',
    color: 'from-teal-500 to-teal-700',
    bgLight: 'bg-teal-50',
    iconBg: 'bg-teal-100',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'We listen to your needs, goals, and budget to understand exactly what you\'re looking for.',
    icon: '🤝',
  },
  {
    step: '02',
    title: 'Proposal',
    desc: 'We provide a detailed proposal with timeline, pricing, and deliverables for your approval.',
    icon: '📋',
  },
  {
    step: '03',
    title: 'Development',
    desc: 'Our team builds your solution with regular updates and feedback sessions along the way.',
    icon: '⚙️',
  },
  {
    step: '04',
    title: 'Testing',
    desc: 'Rigorous quality assurance to ensure everything works perfectly before launch.',
    icon: '✅',
  },
  {
    step: '05',
    title: 'Launch',
    desc: 'We deploy your solution and provide training so you can hit the ground running.',
    icon: '🚀',
  },
  {
    step: '06',
    title: 'Support',
    desc: 'Ongoing maintenance and support to keep your systems running smoothly.',
    icon: '💪',
  },
]

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'A standard business website typically takes 1–2 weeks. Complex web applications or ERP systems may take 4–8 weeks depending on requirements.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes! We offer flexible payment plans for most of our services. Typically we require a 50% deposit to begin, with the balance due upon completion.',
  },
  {
    q: 'Will my website be mobile-friendly?',
    a: 'Absolutely. Every website we build is fully responsive and looks great on all devices — phones, tablets, and desktops.',
  },
  {
    q: 'Do you provide training after launch?',
    a: 'Yes. We provide comprehensive training for you and your team on how to use and manage your new system or website.',
  },
  {
    q: 'What happens after my project is complete?',
    a: 'We offer ongoing maintenance and support packages to keep your systems secure, updated, and running smoothly.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'We work hard to ensure you\'re 100% satisfied. If you\'re unhappy for any reason, we\'ll work to make it right. Refunds are handled on a case-by-case basis.',
  },
]

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
function ServicesHero() {
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
          Our Services
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Comprehensive{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            IT Solutions
          </span>
        </h1>
        <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          From websites to ERP systems, CCTV to digital marketing — we offer everything you need to grow your business in the digital age.
        </p>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-blue-300 text-sm">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-white font-medium">Services</span>
        </div>
      </div>
    </section>
  )
}

// ─── SERVICE CARD (Detailed) ───────────────────────────────────────────────────
function ServiceDetail({ service, isOpen, onToggle }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      {/* Header - Always visible */}
      <button
        onClick={onToggle}
        className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex items-start gap-5">
          <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0`}>
            {service.icon}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-gray-900 text-xl">{service.title}</h3>
                <p className="text-blue-600 text-sm font-medium mt-0.5">{service.tagline}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs text-gray-400">Starting from</div>
                  <div className="font-bold text-blue-600">{service.price}</div>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-2 pr-8">{service.description}</p>
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" />
                </svg>
                Timeline: {service.timeline}
              </div>
            </div>
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[800px]' : 'max-h-0'}`}>
        <div className="px-6 pb-6 pt-2 border-t border-gray-100 mt-2">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - Full Description */}
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Overview</h4>
              <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                {service.fullDescription.split('\n').map((para, i) => (
                  para.trim() && <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Right - Features & CTA */}
            <div>
              <h4 className="font-bold text-gray-900 mb-3">What's Included</h4>
              <ul className="grid grid-cols-1 gap-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <Link to="/contact"
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 text-sm">
                  Get a Quote
                </Link>
                <a href={`#${service.id}-inquiry`}
                  className="flex-1 text-center border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 text-sm">
                  Ask a Question
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── SERVICES LIST SECTION ────────────────────────────────────────────────────
function ServicesList() {
  const [openService, setOpenService] = useState(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            What We Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Explore Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Click on any service to learn more about pricing, timeline, and what's included.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {servicesData.map((service, i) => (
            <AnimatedSection key={service.id}>
              <ServiceDetail
                service={service}
                isOpen={openService === i}
                onToggle={() => setOpenService(openService === i ? null : i)}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── HOW WE WORK (Process) ────────────────────────────────────────────────────
function HowWeWork() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            How We <span className="text-blue-600">Work</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A simple, transparent process designed to deliver results with no surprises.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, i) => (
            <AnimatedSection key={i}>
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                  <div className="text-2xl font-black text-blue-100">0{step.step}</div>
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SERVICE HIGHLIGHTS (Grid Cards) ──────────────────────────────────────────
function ServiceHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            At a Glance
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            All Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Quick overview of everything we offer. Click any card above for full details.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((service, i) => (
            <AnimatedSection key={i}>
              <div className={`${service.bgLight} rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full`}>
                <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center text-xl mb-3`}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-md mb-1">{service.title}</h3>
                <p className="text-gray-500 text-xs">{service.tagline}</p>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <div className="text-xs text-gray-400">From</div>
                  <div className="font-bold text-blue-600 text-sm">{service.price}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ SECTION ──────────────────────────────────────────────────────────────
function ServicesFAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Got more questions? Contact us directly — we're happy to help.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i}>
              <div className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i ? 'border-blue-200 shadow-md' : 'border-gray-100 hover:border-gray-200'
              }`}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left gap-4"
                >
                  <span className={`font-semibold text-base transition-colors ${open === i ? 'text-blue-600' : 'text-gray-900'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    open === i ? 'bg-blue-600 text-white rotate-180' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`transition-all duration-300 ${open === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                  <p className="px-7 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA SECTION ──────────────────────────────────────────────────────────────
function ServicesCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="text-5xl mb-5">💬</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
            Contact us today for a free consultation and quote. We'll help you choose the right solution for your needs and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/about"
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300">
              Learn About Us
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// ─── MAIN SERVICES PAGE ───────────────────────────────────────────────────────
export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <HowWeWork />
      <ServiceHighlights />
      <ServicesFAQ />
      <ServicesCTA />
    </>
  )
}