import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Baby,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Heart,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-2.5 rounded-2xl">
                <Baby className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Maternidad La Floresta</h3>
                <p className="text-sm text-pink-200">Cuidado con amor</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Brindamos atención integral a la madre y el bebé con tecnología de
              punta y el mejor equipo médico especializado.
            </p>
            <div className="flex space-x-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="bg-white/10 backdrop-blur-sm p-2.5 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="bg-white/10 backdrop-blur-sm p-2.5 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="bg-white/10 backdrop-blur-sm p-2.5 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-4 text-pink-200">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", path: "/" },
                { name: "Servicios", path: "/servicios" },
                { name: "Presupuesto", path: "/presupuesto" },
                { name: "Contacto", path: "/contacto" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-pink-300 transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full group-hover:scale-150 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-4 text-pink-200">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {[
                "Control Prenatal",
                "Parto Humanizado",
                "Cesárea",
                "Pediatría",
                "Ginecología",
                "Neonatología",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span>{service}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-4 text-pink-200">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Av. Principal La Floresta, Caracas, Venezuela
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <div>+58 212-123-4567</div>
                  <div>+58 414-987-6543</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  info@maternidadlafloresta.com
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <div>Lun - Vie: 8:00 AM - 8:00 PM</div>
                  <div>Emergencias 24/7</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Maternidad La Floresta. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Hecho con <Heart className="w-4 h-4 mx-1 text-pink-400 fill-pink-400" /> para
              nuestras familias
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
