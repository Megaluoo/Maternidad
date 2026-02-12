import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Baby, Phone, Calendar } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Presupuesto", path: "/presupuesto" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-pink-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-pink-400 to-purple-500 p-2.5 rounded-2xl shadow-lg"
            >
              <Baby className="w-7 h-7 text-white" />
            </motion.div>
            <div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Maternidad La Floresta
              </h1>
              <p className="text-xs text-gray-600">Cuidado con amor</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2"
                >
                  <span
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-pink-600"
                        : isScrolled
                        ? "text-gray-700 hover:text-pink-600"
                        : "text-gray-800 hover:text-pink-600"
                    }`}
                  >
                    {link.name}
                  </span>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-pink-600"
              asChild
            >
              <a href="tel:+123456789">
                <Phone className="w-4 h-4 mr-2" />
                Llamar
              </a>
            </Button>
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg shadow-pink-500/30"
              asChild
            >
              <Link to="/presupuesto">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Cita
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-pink-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-pink-100"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-3 rounded-xl transition-colors ${
                      location.pathname === link.path
                        ? "bg-gradient-to-r from-pink-50 to-purple-50 text-pink-600"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:+123456789">
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar
                  </a>
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                  asChild
                >
                  <Link to="/presupuesto" onClick={() => setIsMobileMenuOpen(false)}>
                    <Calendar className="w-4 h-4 mr-2" />
                    Agendar Cita
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
