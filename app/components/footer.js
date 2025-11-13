import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Our Works', href: '/our-works' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <footer id="footer" className="bg-black border-t border-[color:var(--border-color)]">
      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="animate-fade-in-up">
              <Link href="/" className="flex items-center mb-6">
                <Image
                  src="/logo2.png"
                  alt="Front Ridge Logo"
                  width={160}
                  height={160}
                  className="rounded-md"
                />
              </Link>
              <p className="text-gray-400 text-sm -mt-16 leading-relaxed">
                Building excellence through quality construction and professional expertise.
              </p>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in-up animation-delay-1">
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-[color:var(--accent)] transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="animate-fade-in-up animation-delay-2">
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                {['Commercial', 'Residential', 'Industrial', 'Renovation'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-400 hover:text-[color:var(--accent)] transition-colors text-sm">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="animate-fade-in-up animation-delay-3">
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <p>Toronto, ON</p>
                <p>(416) 555-0123</p>
                <p>info@frontridge.com</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[color:var(--border-color)] py-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>© {currentYear} Front Ridge Construction. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-[color:var(--accent)] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-[color:var(--accent)] transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}