"use client";


import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Phone, MapPin, Clock, Star, Instagram, Facebook, Twitter, Scissors, Palette, Sparkles, Camera } from 'lucide-react';

const COMPANY_INFO = {
  name: "Rhythm Hair & Beauty Care",
  tagline: "Your Beauty Rhythm Starts Here",
  phone: "063536 99709",
  address: "Shop no.41, ICB FLORA, opp. Auda garden, nr. S.G.highway, Gota, Ahmedabad, Gujarat 382481",
  services: [
    "Signature Hair Styling",
    "Hair Color Artistry", 
    "Rejuvenating Facials",
    "Makeup Artistry"
  ]
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

const GALLERY_IMAGES = [
  {
    id: 1,
    category: "Hair Styling",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=400&fit=crop",
    title: "Elegant Updo"
  },
  {
    id: 2,
    category: "Hair Color",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
    title: "Vibrant Highlights"
  },
  {
    id: 3,
    category: "Facials",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop",
    title: "Rejuvenating Treatment"
  },
  {
    id: 4,
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=400&fit=crop",
    title: "Bridal Makeup"
  },
  {
    id: 5,
    category: "Hair Styling",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=400&fit=crop",
    title: "Modern Cut"
  },
  {
    id: 6,
    category: "Hair Color",
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&h=400&fit=crop",
    title: "Ombre Style"
  },
  {
    id: 7,
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
    title: "Evening Glam"
  },
  {
    id: 8,
    category: "Facials",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
    title: "Hydrating Facial"
  },
  {
    id: 9,
    category: "Hair Styling",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=400&fit=crop",
    title: "Beach Waves"
  }
];

export default function Gallery() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ["All", ...new Set(GALLERY_IMAGES.map(img => img.category))];
  
  const filteredImages = selectedCategory === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const Navbar = () => (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm" style={{'--color-primary': '#be185d'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-[var(--color-primary)]" />
            <span className="text-xl font-bold text-gray-900">{COMPANY_INFO.name}</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-gray-700 hover:text-[var(--color-primary)] transition-colors ${
                  link.href === '/gallery' ? 'text-[var(--color-primary)] font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Book Appointment
            </Link>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 py-2 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`block px-3 py-2 text-gray-700 hover:text-[var(--color-primary)] transition-colors ${
                  link.href === '/gallery' ? 'text-[var(--color-primary)] font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="block bg-[var(--color-primary)] text-white px-3 py-2 rounded-lg hover:bg-pink-700 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );

  const PageHeader = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section ref={ref} className="pt-24 pb-16 bg-gradient-to-br from-pink-50 to-purple-50" style={{'--color-primary': '#be185d'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Camera className="h-16 w-16 text-[var(--color-primary)] mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the artistry and transformation at Rhythm Hair & Beauty Care through our stunning gallery
            </p>
          </motion.div>
        </div>
      </section>
    );
  };

  const GallerySection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section ref={ref} className="py-16" style={{'--color-primary': '#be185d'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Our Work Showcase
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    selectedCategory === category
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3]">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="text-sm font-medium">{image.category}</p>
                        <h3 className="text-lg font-bold">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                <p className="text-sm font-medium text-pink-300">{selectedImage.category}</p>
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12" style={{'--color-primary': '#be185d'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-[var(--color-primary)]" />
              <span className="text-xl font-bold">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-gray-400 mb-4">{COMPANY_INFO.tagline}</p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-[var(--color-primary)] cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-[var(--color-primary)] cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-[var(--color-primary)] cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="block text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[var(--color-primary)] mt-0.5" />
                <span className="text-gray-400 text-sm">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[var(--color-primary)]" />
                <span className="text-gray-400">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[var(--color-primary)]" />
                <span className="text-gray-400">Mon-Sat: 9AM-8PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader />
      <GallerySection />
      <Footer />
    </div>
  );
}