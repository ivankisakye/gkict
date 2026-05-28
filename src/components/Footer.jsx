import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">GK</span>
              </div>
              <div>
                <div className="font-black text-white text-base leading-none">GK ICT Solutions</div>
                <div className="text-orange-400 text-xs font-medium">Your Vision Our Innovation</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Empowering businesses, schools and NGOs with cutting-edge technology solutions across Uganda.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { label: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { label: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                { label: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-orange-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-2.5">
              {[
                'Website Development',
                'Web Applications',
                'ERP Systems',
                'Digital Marketing',
                'Branding & Printing',
                'CCTV Installation',
                'IT Support & Repair',
                'Computer Sales',
              ].map(s => (
                <li key={s}>
                  <Link to="/services"
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:bg-orange-400 transition-colors"></span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              {[
                {
                  icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                  text: 'Kyato Complex Opp Watoto Chr',
                },
                {
                  icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                  text: '+256 705 495 970',
                  href: 'tel:+256705495970',
                },
                {
                  icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                  text: 'info@gkictsolutions.com',
                  href: 'mailto:info@gkictsolutions.com',
                },
                {
                  icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                  text: 'Mon - Sat: 8:00am - 6:00pm',
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-gray-400 hover:text-orange-400 transition-colors">{item.text}</a>
                  ) : (
                    <span className="text-sm text-gray-400">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © {year} <span className="text-gray-400 font-medium">GK ICT Solutions</span>. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Designed & Built by GK ICT Solutions 🚀
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer