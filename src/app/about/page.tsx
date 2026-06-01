"use client";


import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Phone, MapPin, Clock, Star, Scissors, Palette, Sparkles, User } from 'lucide-react';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const narrativeRef = useRef(null);
  const gridRef = useRef(null);
  const isNarrativeInView = useInView(narrativeRef, { once: true });
  const isGridInView = useInView(gridRef, { once: true });

  const primaryColor = '#be185d';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Signature Hair Styling', icon: Scissors, description: 'Transform your look with our expert styling techniques' },
    { name: 'Hair Color Artistry', icon: Palette, description: 'Vibrant colors and professional coloring services' },
    { name: 'Rejuvenating Facials', icon: Sparkles, description: 'Refresh and revitalize your skin with our premium facials' },
    { name: 'Makeup Artistry', icon: User, description: 'Professional makeup for all occasions and events' }
  ];

  const teamMembers = [
    {
      name: 'Priya Sharma',
      role: 'Senior Hair Stylist',
      experience: '8+ years',
      specialty: 'Bridal Hair & Color'
    },
    {
      name: 'Ravi Patel',
      role: 'Makeup Artist',
      experience: '6+ years',
      specialty: 'HD Makeup & Contouring'
    },
    {
      name: 'Anjali Singh',
      role: 'Facial Specialist',
      experience: '5+ years',
      specialty: 'Anti-aging Treatments'
    },
    {
      name: 'Neha Gupta',
      role: 'Hair Color Expert',
      experience: '7+ years',
      specialty: 'Balayage & Highlights'
    }
  ];

  return (
    <div className="min-h-screen" style={{ '--color-primary': primaryColor, '--color-bg': '#fdf2f8' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                <Scissors className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Rhythm Hair & Beauty</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-gray-700 hover:text-[var(--color-primary)] transition-colors ${
                    link.href === '/about' ? 'text-[var(--color-primary)] font-medium' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block py-2 text-gray-700 hover:text-[var(--color-primary)] transition-colors ${
                    link.href === '/about' ? 'text-[var(--color-primary)] font-medium' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[var(--color-bg)] to-pink-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Where Beauty Finds Its <span className="text-[var(--color-primary)]">Beat</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Your Beauty Rhythm Starts Here - Discover the story behind Ahmedabad's premier beauty destination
          </motion.p>
        </div>
      </section>

      {/* Narrative Section */}
      <section ref={narrativeRef} className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isNarrativeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story: Where Passion Meets Perfection
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in the heart of Ahmedabad's vibrant Gota district, Rhythm Hair & Beauty Care emerged from a simple yet powerful vision: to create a sanctuary where every individual's unique beauty rhythm could be discovered and celebrated.
                </p>
                <p>
                  Located in the bustling ICB Flora complex, our salon has become a beacon of excellence in the beauty industry. What started as a dream to provide world-class beauty services in a warm, welcoming environment has evolved into Ahmedabad's most trusted destination for comprehensive hair and beauty care.
                </p>
                <p>
                  Our journey began with the belief that beauty is not just about looking good—it's about feeling confident, empowered, and authentically yourself. Every service we offer, every technique we master, and every client relationship we build is rooted in this fundamental philosophy.
                </p>
                <p>
                  Today, we stand proud as a team of passionate artists and beauty professionals who have transformed thousands of lives, one appointment at a time. Our commitment to excellence, innovation, and personalized care continues to set new standards in the beauty industry.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isNarrativeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-[var(--color-primary)] to-pink-600 rounded-2xl p-6 text-white">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm opacity-90">Happy Clients</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
                    <div className="text-3xl font-bold">3+</div>
                    <div className="text-sm opacity-90">Years Excellence</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm opacity-90">Expert Staff</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl p-6 text-white">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm opacity-90">Services Offered</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Section - Team & Services */}
      <section ref={gridRef} className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of artistry and technique with our comprehensive range of beauty services
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isGridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Team Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our skilled professionals bring years of experience and passion to every service
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isGridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary)] to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[var(--color-primary)] font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-1">{member.experience}</p>
                <p className="text-xs text-gray-500">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[var(--color-primary)] to-pink-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Discover Your Beauty Rhythm?
            </h2>
            <p className="text-xl text-pink-100 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who have found their perfect beauty rhythm with us. Book your appointment today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                  <Scissors className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">Rhythm Hair & Beauty</span>
              </div>
              <p className="text-gray-400 mb-4">
                Where Beauty Finds Its Beat - Your premier destination for hair and beauty care in Ahmedabad.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>063536 99709</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Shop no.41, ICB FLORA, opp. Auda garden, nr. S.G.highway, Gota, Ahmedabad, Gujarat 382481</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Sun: 10:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Rhythm Hair & Beauty Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}