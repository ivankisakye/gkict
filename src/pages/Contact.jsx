import { useState, useRef, useEffect } from 'react'
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

const contactInfo = [
  {
    icon: '📍',
    title: 'Visit Us',
    details: ['GK ICT Solutions', 'Kampala, Uganda', 'Opposite KCCA Offices'],
    action: null,
    color: 'from-blue-500 to-blue-700',
    bgLight: 'bg-blue-50',
  },
  {
    icon: '📞',
    title: 'Call Us',
    details: ['+256 700 000 000', '+256 701 000 000'],
    action: { type: 'call', value: '+256700000000' },
    color: 'from-green-500 to-green-700',
    bgLight: 'bg-green-50',
  },
  {
    icon: '✉️',
    title: 'Email Us',
    details: ['info@gkictsolutions.com', 'support@gkictsolutions.com'],
    action: { type: 'email', value: 'mailto:info@gkictsolutions.com' },
    color: 'from-orange-500 to-orange-600',
    bgLight: 'bg-orange-50',
  },
  {
    icon: '💬',
    title: 'WhatsApp',
    details: ['+256 700 000 000', '24/7 Quick Support'],
    action: { type: 'whatsapp', value: 'https://wa.me/256700000000' },
    color: 'from-green-600 to-green-700',
    bgLight: 'bg-green-50',
  },
]

const businessHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed (Emergency support available via WhatsApp)' },
]

const faqs = [
  {
    q: 'How quickly do you respond to inquiries?',
    a: 'We typically respond within 24 hours on weekdays. For urgent matters, please call us directly or WhatsApp for immediate assistance.',
  },
  {
    q: 'Do you offer free consultations?',
    a: 'Yes! We offer free initial consultations to understand your needs and provide a no-obligation quote for our services.',
  },
  {
    q: 'Do you serve clients outside Kampala?',
    a: 'Absolutely. We serve clients across all of Uganda. Remote support is available, and we can travel for larger projects.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept mobile money (MTN, Airtel), bank transfer, and cash payments. Payment plans are available for larger projects.',
  },
]

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
function ContactHero() {
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
          Get In Touch
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Let's{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            Talk
          </span>
        </h1>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Have a project in mind? Need a quote? Or just want to learn more about our services? We'd love to hear from you.
        </p>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-blue-300 text-sm">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-white font-medium">Contact Us</span>
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call - Replace with actual form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const services = [
    { value: '', label: 'Select a service (optional)' },
    { value: 'web-development', label: 'Website Development' },
    { value: 'web-applications', label: 'Web Applications' },
    { value: 'erp-systems', label: 'ERP Systems' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'branding-printing', label: 'Branding & Printing' },
    { value: 'cctv', label: 'CCTV Installation' },
    { value: 'it-support', label: 'IT Support & Repair' },
    { value: 'computer-sales', label: 'Computer Sales' },
    { value: 'other', label: 'Other / General Inquiry' },
  ]

  return (
    <AnimatedSection>
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Send a Message
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">Request a Free Quote</h2>
          <p className="text-gray-500 mt-2">Fill out the form below and we'll get back to you within 24 hours.</p>
        </div>

        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
            ✅ Thank you for your message! We'll get back to you shortly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.name ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all`}
                placeholder="John Mugisha"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.email ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                placeholder="+256 700 000 000"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Service Interested In
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all bg-white"
              >
                {services.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm">
              Your Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full px-4 py-3 border ${errors.message ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none`}
              placeholder="Tell us about your project, requirements, or any questions you have..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </div>
            ) : (
              'Send Message →'
            )}
          </button>

          <p className="text-center text-gray-400 text-xs mt-4">
            We'll never share your information. By submitting, you agree to our privacy policy.
          </p>
        </form>
      </div>
    </AnimatedSection>
  )
}

// ─── CONTACT INFO CARDS ───────────────────────────────────────────────────────
function ContactInfoCards() {
  const handleAction = (action) => {
    if (action.type === 'call') {
      window.location.href = `tel:${action.value}`
    } else if (action.type === 'email') {
      window.location.href = action.value
    } else if (action.type === 'whatsapp') {
      window.open(action.value, '_blank')
    }
  }

  return (
    <div className="space-y-6">
      {contactInfo.map((info, i) => (
        <AnimatedSection key={i}>
          <div className={`${info.bgLight} rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0 text-white`}>
                {info.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
                {info.action && (
                  <button
                    onClick={() => handleAction(info.action)}
                    className="mt-3 inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    {info.action.type === 'call' && '📞 Tap to Call'}
                    {info.action.type === 'email' && '✉️ Send Email'}
                    {info.action.type === 'whatsapp' && '💬 Chat on WhatsApp'}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}

      {/* Business Hours Card */}
      <AnimatedSection>
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-xl">
              🕒
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Business Hours</h3>
          </div>
          <div className="space-y-3">
            {businessHours.map((item, i) => (
              <div key={i} className="flex flex-wrap justify-between gap-2 text-sm">
                <span className="font-medium text-gray-700">{item.day}</span>
                <span className="text-gray-500">{item.hours}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Emergency support available 24/7 via WhatsApp
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Social Links Card */}
      <AnimatedSection>
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center text-xl">
              🌐
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Follow Us</h3>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <a href="#" className="flex flex-col items-center gap-2 p-3 bg-gray-50 hover:bg-blue-50 rounded-xl transition-all duration-300 group">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">f</div>
              <span className="text-xs text-gray-600 group-hover:text-blue-600">Facebook</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2 p-3 bg-gray-50 hover:bg-sky-50 rounded-xl transition-all duration-300 group">
              <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white text-sm">🐦</div>
              <span className="text-xs text-gray-600 group-hover:text-sky-500">X (Twitter)</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2 p-3 bg-gray-50 hover:bg-pink-50 rounded-xl transition-all duration-300 group">
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white text-sm">📸</div>
              <span className="text-xs text-gray-600 group-hover:text-pink-600">Instagram</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2 p-3 bg-gray-50 hover:bg-blue-50 rounded-xl transition-all duration-300 group">
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white text-sm">in</div>
              <span className="text-xs text-gray-600 group-hover:text-blue-700">LinkedIn</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2 p-3 bg-gray-50 hover:bg-green-50 rounded-xl transition-all duration-300 group">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm">📹</div>
              <span className="text-xs text-gray-600 group-hover:text-green-600">YouTube</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2 p-3 bg-gray-50 hover:bg-green-50 rounded-xl transition-all duration-300 group">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">📱</div>
              <span className="text-xs text-gray-600 group-hover:text-green-500">TikTok</span>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

// ─── MAP SECTION ──────────────────────────────────────────────────────────────
function MapSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            Find Us
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Our <span className="text-blue-600">Location</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Visit our office in Kampala. We're conveniently located and easy to find.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            {/* Static map representation - Replace with actual Google Maps embed */}
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 h-96 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-3">📍</div>
                  <p className="text-gray-600 font-medium">GK ICT Solutions</p>
                  <p className="text-gray-500 text-sm">Kampala, Uganda</p>
                  <p className="text-xs text-gray-400 mt-4">Interactive map would load here</p>
                </div>
              </div>
              {/* You can replace the div above with Google Maps embed code:
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123456789!2d32.123456!3d0.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDcnMjYuMyJOIDMywrAxMSc0My4wIkU!5e0!3m2!1sen!2sug!4v1234567890!5m2!1sen!2sug"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                className="absolute inset-0 w-full h-full"
                title="GK ICT Solutions Location"
              ></iframe>
              */}
            </div>
          </div>
        </AnimatedSection>

        {/* Directions Button */}
        <AnimatedSection className="text-center mt-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Get Directions
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}


// ─── MAIN CONTACT PAGE ────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <>
      <ContactHero />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            
            {/* Contact Info - 2 columns */}
            <div className="lg:col-span-2">
              <ContactInfoCards />
            </div>
          </div>
        </div>
      </section>
      
      <MapSection />
      
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-5xl mb-5">🚀</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
              Don't wait. Contact us today and let's start working on your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+256700000000"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call Now
              </a>
              <a href="https://wa.me/256700000000" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}