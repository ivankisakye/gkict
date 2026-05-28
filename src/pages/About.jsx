import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// ─── Scroll Animation ─────────────────────────────────────────────────────────
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

const teamMembers = [
  {
    name: 'Gerald Kato',
    role: 'CEO & Lead Developer',
    bio: 'Full-stack developer with 5+ years building enterprise solutions for businesses and institutions across Uganda.',
    avatar: 'GK',
    color: 'from-blue-500 to-blue-700',
    skills: ['Web Dev', 'ERP Systems', 'Leadership'],
  },
  {
    name: 'Aisha Namukasa',
    role: 'UI/UX & Brand Designer',
    bio: 'Creative designer specializing in brand identity, digital design and user experience for modern businesses.',
    avatar: 'AN',
    color: 'from-pink-500 to-rose-600',
    skills: ['Branding', 'UI/UX', 'Print Design'],
  },
  {
    name: 'David Ssemwogerere',
    role: 'IT Support & Networking',
    bio: 'Certified network engineer handling CCTV, computer repairs, structured cabling and IT infrastructure.',
    avatar: 'DS',
    color: 'from-green-500 to-green-700',
    skills: ['CCTV', 'Networking', 'IT Repair'],
  },
  {
    name: 'Patricia Akello',
    role: 'Digital Marketing Lead',
    bio: 'Google Ads certified specialist driving measurable growth through SEO, PPC and social media campaigns.',
    avatar: 'PA',
    color: 'from-orange-500 to-orange-600',
    skills: ['Google Ads', 'SEO', 'Social Media'],
  },
]

const values = [
  {
    icon: '🎯',
    title: 'Client-First Approach',
    desc: 'Every decision we make is guided by what delivers the most value to our clients.',
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-100',
  },
  {
    icon: '💡',
    title: 'Innovation',
    desc: 'We stay ahead of technology trends to bring fresh, modern solutions to every project.',
    color: 'bg-orange-50 border-orange-100',
    iconBg: 'bg-orange-100',
  },
  {
    icon: '🔒',
    title: 'Integrity',
    desc: 'We are honest, transparent and committed to delivering what we promise — every time.',
    color: 'bg-green-50 border-green-100',
    iconBg: 'bg-green-100',
  },
  {
    icon: '⚡',
    title: 'Excellence',
    desc: 'We hold ourselves to the highest standards of quality in every service we deliver.',
    color: 'bg-purple-50 border-purple-100',
    iconBg: 'bg-purple-100',
  },
  {
    icon: '🤝',
    title: 'Partnership',
    desc: 'We build long-term relationships, not just one-off projects. Your growth is our success.',
    color: 'bg-teal-50 border-teal-100',
    iconBg: 'bg-teal-100',
  },
  {
    icon: '🌍',
    title: 'Local Impact',
    desc: 'Proudly Ugandan — we understand the local market and are committed to growing it.',
    color: 'bg-yellow-50 border-yellow-100',
    iconBg: 'bg-yellow-100',
  },
]

const milestones = [
  {
    year: '2019',
    title: 'Company Founded',
    desc: 'GK ICT Solutions launched in Kampala with a mission to make quality IT accessible to all businesses.',
    icon: '🚀',
    color: 'bg-blue-600',
  },
  {
    year: '2020',
    title: 'First 50 Clients',
    desc: 'Reached our first 50 clients milestone, serving schools, NGOs and small businesses across Kampala.',
    icon: '🎯',
    color: 'bg-green-600',
  },
  {
    year: '2021',
    title: 'ERP Division Launched',
    desc: 'Launched our ERP and school management system division, serving 10+ institutions.',
    icon: '⚙️',
    color: 'bg-purple-600',
  },
  {
    year: '2022',
    title: 'Digital Marketing Unit',
    desc: 'Added Google Ads and digital marketing services, becoming a full-service digital agency.',
    icon: '📣',
    color: 'bg-orange-600',
  },
  {
    year: '2023',
    title: 'CCTV & Security Wing',
    desc: 'Expanded into physical security with professional CCTV installation for offices and institutions.',
    icon: '🔒',
    color: 'bg-red-600',
  },
  {
    year: '2024',
    title: '150+ Clients Served',
    desc: 'Proud to have served over 150 satisfied clients with a 95%+ satisfaction rate across all services.',
    icon: '🏆',
    color: 'bg-yellow-500',
  },
]

const stats = [
  { value: '150+', label: 'Happy Clients', icon: '😊' },
  { value: '200+', label: 'Projects Completed', icon: '✅' },
  { value: '5+', label: 'Years Experience', icon: '📅' },
  { value: '95%', label: 'Client Satisfaction', icon: '⭐' },
]

const clients = [
  { name: 'Schools', icon: '🏫', count: '40+', color: 'from-blue-500 to-blue-700' },
  { name: 'Businesses', icon: '🏢', count: '80+', color: 'from-green-500 to-green-700' },
  { name: 'NGOs', icon: '🌍', count: '30+', color: 'from-orange-500 to-orange-600' },
]

// ─── HERO ─────────────────────────────────────────────────────────────────────
function AboutHero() {
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
          About Us
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Who We Are &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            What We Stand For
          </span>
        </h1>
        <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          GK ICT Solutions is Uganda's trusted technology partner — combining innovation, expertise and passion to deliver digital solutions that make a real difference.
        </p>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-blue-300 text-sm">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-white font-medium">About Us</span>
        </div>
      </div>
    </section>
  )
}

// ─── STATS BAR ────────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <section className="bg-white py-10 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-blue-700 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── STORY SECTION ────────────────────────────────────────────────────────────
function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Visual */}
          <AnimatedSection>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative">
                  <div className="text-6xl mb-5">💻</div>
                  <h3 className="text-2xl font-black mb-3">Our Mission</h3>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    To empower every business, school and organization in Uganda with affordable, reliable and cutting-edge technology that drives real growth.
                  </p>
                  <div className="border-t border-white/20 pt-6">
                    <h3 className="text-xl font-black mb-3">Our Vision</h3>
                    <p className="text-blue-100 leading-relaxed">
                      To be Uganda's most trusted and innovative technology partner — known for quality, integrity and results.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="font-black text-2xl">5+</div>
                <div className="text-sm font-medium text-orange-100">Years in Business</div>
              </div>

              {/* Clients card */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl px-6 py-4 shadow-xl border border-gray-100">
                <div className="font-black text-2xl text-green-600">150+</div>
                <div className="text-sm font-medium text-gray-500">Happy Clients</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Story */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              Built in Uganda,{' '}
              <span className="text-blue-600">Serving Uganda</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                GK ICT Solutions was founded in 2019 with a simple but powerful vision: to make world-class technology accessible and affordable for every Ugandan business, school and organization.
              </p>
              <p>
                What started as a small web development team in Kampala has grown into a full-service IT company offering everything from custom software and ERP systems to CCTV installation, digital marketing and hardware sales.
              </p>
              <p>
                Today, we are proud to serve 150+ clients across Uganda — from primary schools and NGOs to thriving businesses — delivering solutions that genuinely transform how they operate and grow.
              </p>
            </div>

            {/* Who we serve */}
            <div className="mt-8">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Who We Serve</h4>
              <div className="grid grid-cols-3 gap-4">
                {clients.map((client, i) => (
                  <div key={i} className={`bg-gradient-to-br ${client.color} rounded-2xl p-5 text-white text-center`}>
                    <div className="text-3xl mb-2">{client.icon}</div>
                    <div className="font-black text-xl">{client.count}</div>
                    <div className="text-xs font-medium opacity-80 mt-1">{client.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// ─── VALUES SECTION ───────────────────────────────────────────────────────────
function OurValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            What Drives Us
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Our Core <span className="text-blue-600">Values</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            These principles guide everything we do — from how we build software to how we treat our clients.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <AnimatedSection key={i}>
              <div className={`${value.color} border rounded-2xl p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full`}>
                <div className={`w-14 h-14 ${value.iconBg} rounded-2xl flex items-center justify-center text-3xl mb-5`}>
                  {value.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── TIMELINE ────────────────────────────────────────────────────────────────
function Timeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
            Our Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Our <span className="text-blue-600">Milestones</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A look at how we've grown and evolved over the years.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-indigo-200 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <AnimatedSection key={i}>
                <div className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`${m.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>{m.year}</span>
                      <span className="text-2xl">{m.icon}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{m.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>

                  {/* Center dot */}
                  <div className={`hidden md:flex w-10 h-10 ${m.color} rounded-full items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-lg z-10`}>
                    {m.year.slice(2)}
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── TEAM SECTION ────────────────────────────────────────────────────────────
function OurTeam() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            The People Behind GK ICT
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A passionate group of IT professionals dedicated to delivering excellence for every client.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <AnimatedSection key={i}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                {/* Avatar */}
                <div className={`bg-gradient-to-br ${member.color} p-8 flex items-center justify-center`}>
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-white font-black text-2xl">
                    {member.avatar}
                  </div>
                </div>
                {/* Info */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{member.bio}</p>
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map(skill => (
                      <span key={skill} className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function AboutCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="text-5xl mb-5">🤝</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
            Let's Work Together
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
            Ready to take your business to the next level? Get in touch with our team today for a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/services"
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300">
              View Our Services
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// ─── MAIN ABOUT PAGE ──────────────────────────────────────────────────────────
export default function About() {
  return (
    <>
      <AboutHero />
      <StatsBar />
      <OurStory />
      <OurValues />
      <Timeline />
      <OurTeam />
      <AboutCTA />
    </>
  )
}