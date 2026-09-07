import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BUSINESS_INFO, generatePhoneLink, generateWhatsAppLink } from '@/data';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const defaultWaMessage = "Hi Laxmi Plywood, I would like to inquire about your products.";

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className={cn("font-heading text-2xl font-bold tracking-tight text-primary transition-colors", !isScrolled && pathname === '/' ? 'text-white' : 'text-primary')}>
              LAXMI PLYWOOD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-medium tracking-wide transition-colors hover:text-accent',
                  pathname === link.path
                    ? 'text-accent'
                    : (!isScrolled && pathname === '/' ? 'text-white/90' : 'text-primary/70')
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={generatePhoneLink()}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent",
                !isScrolled && pathname === '/' ? 'text-white' : 'text-primary'
              )}
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
            <a
              href={generateWhatsAppLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full text-sm font-medium transition-transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <a
              href={generateWhatsAppLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("p-2 rounded-full", !isScrolled && pathname === '/' ? 'text-white bg-white/10' : 'text-primary bg-primary/5')}
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn("p-2 -mr-2", !isScrolled && pathname === '/' ? 'text-white' : 'text-primary')}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-primary/10 shadow-lg p-4 md:hidden animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 p-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-lg font-medium py-2 transition-colors',
                  pathname === link.path ? 'text-accent' : 'text-primary'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-primary/10 my-2" />
            <a
              href={generatePhoneLink()}
              className="flex items-center gap-3 text-lg font-medium text-primary py-2"
            >
              <Phone className="h-5 w-5 text-accent" />
              {BUSINESS_INFO.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
