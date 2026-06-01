"use client";


import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import {
  Menu,
  X,
  Scissors,
  Palette,
  Sparkles,
  Brush,
  Star,
  Phone,
  MapPin,
  Clock,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Heart,
  Award,
  Users,
  Calendar
} from "lucide-react";

const SERVICES = [
  {
    icon: Scissors,
    title: "Signature Hair Styling",
    description: "Expert cuts and styling for every occasion"
  },
  {
    icon: Palette,
    title: "Hair Color Artistry",
    description: "Professional coloring and highlighting services"
  },
  {
    icon: Sparkles,
    title: "Rejuvenating Facials",
    description: "Relaxing treatments for glowing skin"
  },
  {
    icon: Brush,
    title: "Makeup Artistry",
    description: "Professional makeup for special events"
  },
  {
    icon: Heart,
    title: "Bridal Packages",
    description: "Complete bridal beauty solutions"
  },
  {
    icon: Award,
    title: "Premium Treatments",
    description: "Luxury spa and beauty experiences"
  }
];

const GALLERY_IMAGES = [
  "/api/placeholder/300/400",
  "/api/placeholder/300/300",
  "/api/placeholder/300/350",
  "/api/placeholder/300/380",
  "/api/placeholder/300/320",
  "/api/placeholder/300/360"
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    text: "Amazing service! The staff is so professional and talented. My hair has never looked better!",
    rating: 5
  },
  {
    name: "Anjali Patel",
    text: "Best beauty parlour in Ahmedabad. The facial treatment was incredible and very relaxing.",
    rating: 5
  },
  {
    name: "Riya Gandhi",
    text: "Perfect bridal makeup! They made my special day even more beautiful. Highly recommended!",
    rating: 5
  }
];

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true });
  const galleryInView = useInView(galleryRef, { once: true });
  const testimonialsInView = useInView(testimonialsRef, { once: true });

  return (
    <div style={{"--color-primary": "#be185d", "--color-bg": "#fdf2f8"}} className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Rhythm Hair & Beauty</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-900 hover:text-[var(--color-primary)] transition-colors font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">Services</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">Gallery</Link>
              <Link href="/contact" className="text-gray-700 hover:text-[var(--color-primary)] transition-colors">Contact</Link>
              <a href="tel:06353699709" className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors">
                Call Now
              </a>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-2 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-900 font-medium">Home</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700">About</Link>
              <Link href="/services" className="block px-3 py-2 text-gray-700">Services</Link>
              <Link href="/gallery" className="block px-3 py-2 text-gray-700">Gallery</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700">Contact</Link>
              <a href="tel:06353699709" className="block mx-3 mt-4 mb-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-full text-center">
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm mb-6"
              >
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">Trusted by 500+ clients</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Your Beauty{" "}
                <span className="text-[var(--color-primary)]">Rhythm</span>{" "}
                Starts Here
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg text-gray-600 mb-8 max-w-2xl"
              >
                Experience premium beauty services at Ahmedabad's finest beauty parlour. 
                From signature styling to rejuvenating treatments, we create your perfect look.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a 
                  href="tel:06353699709"
                  className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-colors font-semibold flex items-center justify-center group"
                >
                  Book Appointment
                  <Calendar className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link 
                  href="/services"
                  className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-colors font-semibold flex items-center justify-center group"
                >
                  View Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500"
              >
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-[var(--color-primary)]" />
                  <span>500+ Happy Clients</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-[var(--color-primary)]" />
                  <span>5+ Years Experience</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/api/placeholder/600/800" 
                  alt="Beauty Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Call Now</p>
                    <p className="text-[var(--color-primary)] font-bold">063536 99709</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of beauty services designed to enhance your natural beauty
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section ref={galleryRef} className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Work Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the stunning transformations and beautiful results from our expert team
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {GALLERY_IMAGES.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link 
              href="/gallery"
              className="inline-flex items-center bg-[var(--color-primary)] text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-colors font-semibold group"
            >
              View Full Gallery
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Read testimonials from our satisfied clients who love our services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">Verified Client</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Look?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Book your appointment today and experience the best beauty services in Ahmedabad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:06353699709"
                className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center group"
              >
                Book Appointment
                <Phone className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[var(--color-primary)] transition-colors font-semibold flex items-center justify-center group"
              >
                Get Directions
                <MapPin className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Rhythm Hair & Beauty</span>
              </div>
              <p className="text-gray-400 mb-6">
                Your premier destination for beauty and wellness in Ahmedabad. 
                Experience luxury treatments with professional expertise.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-400">
                    Shop no.41, ICB FLORA, opp. Auda garden, nr. S.G.highway, Gota, Ahmedabad, Gujarat 382481
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-pink-600" />
                  <a href="tel:06353699709" className="text-gray-400 hover:text-white transition-colors">
                    063536 99709
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-pink-600" />
                  <p className="text-gray-400">Mon - Sun: 9:00 AM - 8:00 PM</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pink-600" />
                  <a href="mailto:info@rhythmbeauty.com" className="text-gray-400 hover:text-white transition-colors">
                    info@rhythmbeauty.com
                  </a>
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