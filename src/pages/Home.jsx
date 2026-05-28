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

// ─── Section Wrapper with fade-in ────────────────────────────────────────────
function AnimatedSection({ children, className = '' }) {
  const [ref, visible] = useScrollAnimation()
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}>
      {children}
    </div>
  )
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: '🌐',
    title: 'Website Development',
    desc: 'Modern, fast and responsive websites tailored for your business, school or NGO.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: '⚙️',
    title: 'Web Applications',
    desc: 'Custom web apps and portals that streamline your operations and boost productivity.',
    color: 'from-indigo-500 to-indigo-700',
  },
  {
    icon: '🏢',
    title: 'ERP Systems',
    desc: 'Integrated enterprise solutions for inventory, HR, finance and school management.',
    color: 'from-purple-500 to-purple-700',
  },
  {
    icon: '📣',
    title: 'Digital Marketing',
    desc: 'Google Ads, SEO and social media strategies that grow your brand online.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: '🎨',
    title: 'Branding & Printing',
    desc: 'Logos, business cards, banners and full brand identity packages.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: '📷',
    title: 'CCTV Installation',
    desc: 'Professional security camera installation for homes, offices and institutions.',
    color: 'from-gray-600 to-gray-800',
  },
  {
    icon: '🔧',
    title: 'IT Support & Repair',
    desc: 'Fast, reliable computer and laptop repair, networking and IT maintenance.',
    color: 'from-green-500 to-green-700',
  },
  {
    icon: '🖥️',
    title: 'Computer Sales',
    desc: 'Quality new and used computers, laptops and printers at competitive prices.',
    color: 'from-teal-500 to-teal-700',
  },
]

const whyUs = [
  {
    icon: '🏆',
    title: 'Proven Experience',
    desc: 'Years of delivering top-quality IT solutions to businesses, schools and NGOs across Uganda.',
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    desc: 'We deliver projects on time without compromising on quality or attention to detail.',
  },
  {
    icon: '💰',
    title: 'Affordable Pricing',
    desc: 'Flexible pricing packages designed to fit every budget from startups to large institutions.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Support',
    desc: '24/7 after-sales support and maintenance to keep your systems running smoothly.',
  },
  {
    icon: '🔒',
    title: 'Secure Solutions',
    desc: 'We build with security in mind — your data and systems are always protected.',
  },
  {
    icon: '🌍',
    title: 'Local Expertise',
    desc: 'We understand the Ugandan market and tailor solutions to local business needs.',
  },
]

const testimonials = [
  {
    name: 'John Mugisha',
    role: 'Head Teacher, Kampala Primary School',
    text: 'GK ICT Solutions built us a school management system that transformed how we handle admissions, fees and results. Absolutely brilliant work!',
    avatar: 'JM',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Sarah Nakato',
    role: 'CEO, Nakato Enterprises',
    text: 'Our website and Google Ads campaign drove a 300% increase in inquiries within the first month. The team is professional and responsive.',
    avatar: 'SN',
    color: 'from-green-500 to-green-700',
  },
  {
    name: 'Peter Ochieng',
    role: 'IT Manager, Lighthouse NGO',
    text: 'From CCTV installation to network setup, GK ICT handled everything flawlessly. Our office security has never been better.',
    avatar: 'PO',
    color: 'from-orange-500 to-orange-600',
  },
  {
    name: 'Grace Tumusiime',
    role: 'Business Owner, GT Supplies',
    text: 'They designed our brand identity and printed all our marketing materials. The quality exceeded our expectations at a very fair price.',
    avatar: 'GT',
    color: 'from-purple-500 to-purple-700',
  },
]

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'A standard business website typically takes 1–2 weeks. Complex web applications or ERP systems may take 4–8 weeks depending on requirements.',
  },
  {
    q: 'Do you offer website hosting and maintenance?',
    a: 'Yes! We offer affordable hosting packages and monthly maintenance plans to keep your website fast, secure and up to date.',
  },
  {
    q: 'Can you build a system for my school?',
    a: 'Absolutely. We specialize in school management systems covering admissions, fees, results, timetables and staff management.',
  },
  {
    q: 'What areas in Uganda do you serve?',
    a: 'We are based in Kampala and serve clients across all of Uganda. Remote support is available nationwide.',
  },
  {
    q: 'Do you sell second-hand computers?',
    a: 'Yes. We stock quality tested and refurbished computers, laptops and printers at competitive prices with a warranty.',
  },
  {
    q: 'How do I get a quote for my project?',
    a: 'Simply contact us via WhatsApp, call us directly, or fill out the contact form on our Contact page. We respond within 24 hours.',
  },
]

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
function Hero() {
  const [count, setCount] = useState({ projects: 0, clients: 0, years: 0 })

  useEffect(() => {
    const targets = { projects: 200, clients: 150, years: 5 }
    const duration = 2000
    const steps = 60
    const interval = duration / steps
    let step = 0
    const timer = setInterval(() => {
      step++
      setCount({
        projects: Math.min(Math.round((targets.projects / steps) * step), targets.projects),
        clients: Math.min(Math.round((targets.clients / steps) * step), targets.clients),
        years: Math.min(Math.round((targets.years / steps) * step), targets.years),
      })
      if (step >= steps) clearInterval(timer)
    }, interval)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — Text */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6 animate-pulse">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Uganda's Trusted IT Partner
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Your Vision,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                Our Innovation
              </span>
            </h1>

            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              We deliver world-class IT solutions — from websites and ERP systems to CCTV and digital marketing — helping businesses, schools and NGOs thrive in the digital age.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="tel:+256772168241"
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call Us Now
              </a>

              <a href="https://wa.me/256772168241" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>

              <Link to="/services"
                className="flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-7 py-4 rounded-xl transition-all duration-300 hover:bg-white/10">
                Our Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: count.projects, label: 'Projects Done', suffix: '+' },
                { value: count.clients, label: 'Happy Clients', suffix: '+' },
                { value: count.years, label: 'Years Experience', suffix: '+' },
              ].map((stat, i) => (
                <div key={i} className="text-center border border-white/20 rounded-xl p-4 bg-white/5 backdrop-blur">
                  <div className="text-3xl font-black text-orange-400">{stat.value}{stat.suffix}</div>
                  <div className="text-blue-200 text-xs mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual Card */}
          <div className="hidden lg:flex flex-col gap-5">
            {/* Main card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-2xl">
                  💡
                </div>
                <div>
                  <div className="font-bold text-lg">GK ICT Solutions</div>
                  <div className="text-blue-200 text-sm">Digital Transformation Partner</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Web Dev', 'ERP Systems', 'CCTV', 'Digital Mktg', 'Branding', 'IT Support'].map(s => (
                  <div key={s} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                    <span className="text-sm font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-4 text-white text-center">
                <div className="text-2xl mb-1">✅</div>
                <div className="font-bold text-sm">Trusted by 150+ Clients</div>
              </div>
              <div className="bg-orange-500/20 border border-orange-400/30 rounded-xl p-4 text-white text-center">
                <div className="text-2xl mb-1">🚀</div>
                <div className="font-bold text-sm">Fast Delivery Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      


    </section>
  )
}

// ─── ABOUT PREVIEW ────────────────────────────────────────────────────────────
function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <AnimatedSection>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-200 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
                <div className="relative text-center">
                  <div className="text-8xl mb-4">💻</div>
                  <h3 className="text-2xl font-black text-blue-900 mb-2">GK ICT Solutions</h3>
                  <p className="text-blue-600 font-medium">Your Vision Our Innovation</p>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {[
                      { icon: '🌐', label: 'Web Dev' },
                      { icon: '📊', label: 'ERP' },
                      { icon: '🔒', label: 'Security' },
                    ].map(item => (
                      <div key={item.label} className="bg-white rounded-xl p-3 shadow-sm text-center">
                        <div className="text-2xl">{item.icon}</div>
                        <div className="text-xs font-semibold text-gray-600 mt-1">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-5 -right-5 bg-orange-500 text-white rounded-2xl px-5 py-3 shadow-lg font-bold text-sm">
                🏆 5+ Years Experience
              </div>
            </div>
          </AnimatedSection>

          {/* Right */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              About GK ICT Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 leading-tight">
              Empowering Uganda with{' '}
              <span className="text-blue-600">Smart Technology</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              GK ICT Solutions is a leading IT company based in Kampala, Uganda. We specialize in delivering innovative digital solutions that help businesses, schools and NGOs grow, operate efficiently and compete in today's digital economy.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From custom software development to hardware sales and support, we are your one-stop technology partner — combining local expertise with world-class standards.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                '✅ Certified IT Professionals',
                '✅ Affordable Packages',
                '✅ After-Sales Support',
                '✅ Fast Project Delivery',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                  {item}
                </div>
              ))}
            </div>
            <Link to="/about"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// ─── SERVICES SECTION ─────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            What We Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions designed to meet the unique needs of every client — from startups to established institutions.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={i}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100 h-full">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10">
          <Link to="/services"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

// ─── WHY CHOOSE US ─────────────────────────────────────────────────────────────
function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
            Why Work With Us
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Why Choose <span className="text-orange-400">GK ICT Solutions?</span>
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We don't just deliver technology — we deliver results. Here's what sets us apart.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item, i) => (
            <AnimatedSection key={i}>
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-7 hover:bg-white/15 transition-all duration-300 group h-full">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            Client Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real feedback from real clients who trusted us with their technology needs.
          </p>
        </AnimatedSection>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-100 rounded-3xl p-10 mx-2">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, s) => (
                        <svg key={s} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center text-white font-black text-lg flex-shrink-0`}>
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">{t.name}</div>
                        <div className="text-gray-500 text-sm">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  active === i ? 'w-8 h-3 bg-blue-600' : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-11 h-11 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-200 border border-gray-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActive((active + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-11 h-11 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-200 border border-gray-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ SECTION ──────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
            Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Can't find what you're looking for? Contact us directly.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i}>
              <div className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i ? 'border-blue-200 shadow-md' : 'border-gray-100 hover:border-gray-200 hover:shadow-sm'
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

// ─── CONTACT CTA ──────────────────────────────────────────────────────────────
function ContactCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative">
              <div className="text-5xl mb-5">🚀</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
                Ready to Start Your Project?
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
                Get in touch today for a free consultation and quote. Let's turn your vision into reality.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact"
                  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  Get a Free Quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a href="tel:+256700000000"
                  className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Call Us Now
                </a>
                <a href="https://wa.me/256700000000" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// ─── MAIN HOME PAGE ───────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  )
}