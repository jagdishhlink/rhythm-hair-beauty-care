"use client";


import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin, Clock, Star, Scissors, Palette, Sparkles, User } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' }
];

const services = [
  {
    icon: Scissors,
    title: 'Signature Hair Styling',
    description: 'Transform your look with our expert hair styling techniques. From classic cuts to modern trends, we create styles that enhance your natural beauty.',
    features: ['Expert Consultation', 'Precision Cutting', 'Style Finishing', 'Hair Care Tips'],
    duration: '60-90 min',
    price: 'Starting from ₹800'
  },
  {
    icon: Palette,
    title: 'Hair Color Artistry',
    description: 'Express your personality with our professional hair coloring services. From subtle highlights to bold transformations.',
    features: ['Color Consultation', 'Premium Products', 'Color Protection', 'Maintenance Guide'],
    duration: '120-180 min',
    price: 'Starting from ₹1500'
  },
  {
    icon: Sparkles,
    title: 'Rejuvenating Facials',
    description: 'Revitalize your skin with our customized facial treatments designed to cleanse, nourish, and rejuvenate.',
    features: ['Skin Analysis', 'Deep Cleansing', 'Hydrating Mask', 'Relaxation Therapy'],
    duration: '45-75 min',
    price: 'Starting from ₹1200'
  },
  {
    icon: User,
    title: 'Makeup Artistry',
    description: 'Perfect your look for any occasion with our professional makeup services. From natural everyday looks to glamorous event makeup.',
    features: ['Makeup Consultation', 'Premium Cosmetics', 'Long-lasting Formula', 'Touch-up Tips'],
    duration: '45-90 min',
    price: 'Starting from ₹2000'
  }
];

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <div style={{ '--color-primary': '#be185d', '--color-bg': '#fdf2f8' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">Rhythm Hair & Beauty</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[var(--color-primary)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:06353699709"
                className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Book Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-gray-700 hover:text-[var(--color-primary)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:06353699709"
                className="block mt-4 bg-[var(--color-primary)] text-white px-6 py-2 rounded-full text-center"
              >
                Book Appointment
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Page Header */}
      <section ref={headerRef} className="bg-gradient-to-br from-pink-50 to-purple-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Crafting Your
              <span className="text-[var(--color-primary)] block">Perfect Look</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your Beauty Rhythm Starts Here - Discover our comprehensive range of beauty services designed to enhance your natural radiance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:06353699709"
                className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Book Appointment</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>063536 99709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Signature Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of artistry and expertise with our comprehensive beauty services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-600">
                          <Star className="w-4 h-4 text-[var(--color-primary)] fill-current" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-4 border-t border-gray-100">
                    <div className="space-y-1 mb-4 sm:mb-0">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                      <div className="text-lg font-semibold text-[var(--color-primary)]">
                        {service.price}
                      </div>
                    </div>
                    <a
                      href="tel:06353699709"
                      className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors text-center"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-bg)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Beauty Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your appointment today and let our expert team help you discover your perfect look
            </p>
            <a
              href="tel:06353699709"
              className="inline-flex items-center space-x-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-colors text-lg font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>Book Appointment Now</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">Rhythm Hair & Beauty</span>
              </div>
              <p className="text-gray-300 mb-4">
                Your trusted beauty destination in Gota, Ahmedabad. Creating beautiful transformations with expert care and premium services.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    Shop no.41, ICB FLORA, opp. Auda garden, nr. S.G.highway, Gota, Ahmedabad, Gujarat 382481
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                  <a href="tel:06353699709" className="text-gray-300 hover:text-white transition-colors">
                    063536 99709
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                  <span className="text-gray-300">Mon-Sun: 10:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Rhythm Hair & Beauty Care. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}